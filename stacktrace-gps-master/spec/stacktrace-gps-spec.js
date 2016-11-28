//describe = require('describe')
// jscs:disable maximumLineLength
    beforeEach(function() {
        if (typeof Promise === 'undefined') {
            ES6Promise.polyfill();
        }
        jasmine.Ajax.install();
    });

    afterEach(function() {
        jasmine.Ajax.uninstall();
    });



    describe('with inline sourcemaps', function() {
        beforeEach(function() {
            var sourceMin = 'var foo=function(){};function bar(){}var baz=eval("XXX");//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiZm9vIiwiYmFyIiwiYmF6IiwiZXZhbCJdLCJtYXBwaW5ncyI6IkFBQUEsR0FBSUEsS0FBTSxZQUdWLFNBQVNDLFFBRVQsR0FBSUMsS0FBTUMsS0FBTSJ9';
            jasmine.Ajax.stubRequest('test.min.js').andReturn({responseText: sourceMin});
            this.stackframe = new StackFrame(undefined, [], 'test.min.js', 1, 47);
        });

        it('supports inline source maps', function(done) {
            new StackTraceGPS().getMappedLocation(this.stackframe).then(callback, done.fail);

            function callback(stackframe) {
                expect(stackframe).toEqual(new StackFrame('eval', [], 'test.js', 6, 10));
                done();
            }
        });

        it('uses opts.atob if it was supplied in options', function(done) {
            var atobSpy = jasmine.createSpy('atobSpy').and.callFake(function(str) {
                return window.atob(str);
            });
            new StackTraceGPS({atob: atobSpy}).getMappedLocation(this.stackframe).then(callback);

            function callback() {
                expect(atobSpy).toHaveBeenCalled();
                done();
            }
        });

        it('rejects if atob() does not exist', function(done) {
            var oldAtob = window.atob;
            window.atob = null;
            new StackTraceGPS().getMappedLocation(this.stackframe).then(done.fail, errback)['catch'](errback);

            function errback(error) {
                expect(error.message).toEqual('You must supply a polyfill for window.atob in this environment');
                window.atob = oldAtob;
                done();
            }
        });
    });



    describe('#getMappedLocation', function() {
        it('rejects given invalid StackFrame', function(done) {
            new StackTraceGPS().getMappedLocation('BOGUS').then(done.fail, done);
        });

        it('rejects if sourceMapURL not found', function(done) {
            var source = 'var foo=function(){};function bar(){}var baz=eval("XXX");';
            jasmine.Ajax.stubRequest('http://localhost:9999/file.js').andReturn({responseText: source});
            var stackframe = new StackFrame(undefined, [], 'http://localhost:9999/file.js', 23, 0);
            new StackTraceGPS().getMappedLocation(stackframe).then(done.fail, done);
        });

        it('rejects if source map file 404s', function(done) {
            var source = 'var foo=function(){};function bar(){}var baz=eval("XXX");\n//@ sourceMappingURL=test.js.map';
            jasmine.Ajax.stubRequest('http://localhost:9999/test.js').andReturn({responseText: source});
            jasmine.Ajax.stubRequest('http://localhost:9999/test.js.map').andReturn({status: 404});
            var stackframe = new StackFrame(undefined, [], 'http://localhost:9999/test.js', 23, 0);
            new StackTraceGPS().getMappedLocation(stackframe).then(done.fail, done);
        });

        it('tolerates inline source maps with parameters set', function(done) {
            var sourceMin = 'var foo=function(){};function bar(){}var baz=eval("XXX");//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiZm9vIiwiYmFyIiwiYmF6IiwiZXZhbCJdLCJtYXBwaW5ncyI6IkFBQUEsR0FBSUEsS0FBTSxZQUdWLFNBQVNDLFFBRVQsR0FBSUMsS0FBTUMsS0FBTSJ9';
            jasmine.Ajax.stubRequest('test.min.js').andReturn({responseText: sourceMin});
            this.stackframe = new StackFrame(undefined, [], 'test.min.js', 1, 47);
            new StackTraceGPS().getMappedLocation(this.stackframe).then(callback, done.fail);

            function callback(stackframe) {
                expect(stackframe).toEqual(new StackFrame('eval', [], 'test.js', 6, 10));
                done();
            }
        });
    });


    describe('given source and source map that resolves', function() {
        beforeEach(function() {
            var source = 'var foo=function(){};function bar(){}var baz=eval("XXX");\n//@ sourceMappingURL=test.js.map';
            jasmine.Ajax.stubRequest('http://localhost:9999/test.min.js').andReturn({responseText: source});
            var sourceMap = '{"version":3,"sources":["./test.js"],"names":["foo","bar","baz","eval"],"mappings":"AAAA,GAAIA,KAAM,YACV,SAASC,QACT,GAAIC,KAAMC,KAAK","file":"test.min.js"}';
            jasmine.Ajax.stubRequest('http://localhost:9999/test.js.map').andReturn({responseText: sourceMap});
        });

        it('retrieves source mapped location for function expressions', function(done) {
            var stackframe = new StackFrame(undefined, [], 'http://localhost:9999/test.min.js', 1, 5);
            new StackTraceGPS().getMappedLocation(stackframe).then(callback, done.fail);

            function callback(stackframe) {
                expect(stackframe).toEqual(new StackFrame('foo', [], 'http://localhost:9999/test.js', 1, 4));
                done();
            }
        });

        it('retrieves source mapped location for function declarations', function(done) {
            var stackframe = new StackFrame(undefined, [], 'http://localhost:9999/test.min.js', 1, 32);
            new StackTraceGPS().getMappedLocation(stackframe).then(callback, done.fail);

            function callback(stackframe) {
                expect(stackframe).toEqual(new StackFrame('bar', [], 'http://localhost:9999/test.js', 2, 9));
                done();
            }
        });

        it('retrieves source mapped location for eval', function(done) {
            var stackframe = new StackFrame(undefined, [], 'http://localhost:9999/test.min.js', 1, 47);
            new StackTraceGPS().getMappedLocation(stackframe).then(callback, done.fail);

            function callback(stackframe) {
                expect(stackframe).toEqual(new StackFrame('eval', [], 'http://localhost:9999/test.js', 3, 10));
                done();
            }
        });

        it('does not replace non-empty functionName with empty value', function(done) {
            var stackframe = new StackFrame('foo', [], 'http://localhost:9999/test.min.js', 2000, 4200);
            new StackTraceGPS().getMappedLocation(stackframe).then(callback, done.fail);

            function callback(stackframe) {
                expect(stackframe).toEqual(stackframe);
                done();
            }
        });
    });

    describe('#pinpoint', function() {
        beforeEach(function() {
            var sourceMin = 'var foo=function(){};function bar(){}var baz=eval("XXX");\n//@ sourceMappingURL=test.js.map';
            jasmine.Ajax.stubRequest('test.min.js').andReturn({responseText: sourceMin});
            var sourceMap = '{"version":3,"sources":["./test.js"],"names":["foo","bar","baz","eval"],"mappings":"AAAA,GAAIA,KAAM,YACV,SAASC,QACT,GAAIC,KAAMC,KAAK","file":"test.min.js"}';
            jasmine.Ajax.stubRequest('test.js.map').andReturn({responseText: sourceMap});
        });

        it('combines findFunctionName and getMappedLocation', function(done) {
            var source = 'var foo = function() {};\nfunction bar() {}\nvar baz = eval("XXX")';
            jasmine.Ajax.stubRequest('test.js').andReturn({responseText: source});

            var stackframe = new StackFrame(undefined, [], 'test.min.js', 1, 47);
            new StackTraceGPS().pinpoint(stackframe).then(callback, done.fail);

            function callback(stackframe) {
                expect(stackframe).toEqual(new StackFrame('baz', [], 'test.js', 3, 10));
                done();
            }
        });

        it('resolves with mapped location even if find function name fails', function(done) {
            jasmine.Ajax.stubRequest('test.js').andError();

            var stackframe = new StackFrame(undefined, [], 'test.min.js', 1, 47);
            new StackTraceGPS().pinpoint(stackframe).then(callback, done.fail);

            function callback(stackframe) {
                expect(stackframe).toEqual(new StackFrame('eval', [], 'test.js', 3, 10));
                done();
            }
        });
    });
