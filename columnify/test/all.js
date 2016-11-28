var runTests = [];

var childTestTotals = [1,1,2,1,1,2,5,1,1,3,2,6,8,1,7,3,1,3,2,3,4,1,2,1,1];

process.argv.forEach(function (val) {
	if (val === "low") {
		console.log("Testing with low amount of tests")
		var childTestTotals = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	}

	if (val.indexOf('-') !== -1) {
		nums = val.split('-');
		for (var i = parseInt(nums[0]); i <= parseInt(nums[1]); ++i) {
			runTests[runTests.length] = i;
		}
	} else if (Number.isInteger(parseInt(val))) {
		runTests[runTests.length] = parseInt(val);
	}
});

var test = require('tape');
var fs = require('fs')
var columnify =  require('../')

var testCount = 0;
var childTestCounts = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);

// 1
(function(){ 
	var data = [{
		name: 'module1'
	}, {
		name: 'module2'
	}]


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('1 column', function(t) {
		t.plan(1)
		var expected = fs.readFileSync(__dirname + '/1-column-simple-expected.txt', 'utf8')
		t.equal(columnify(data).trim(), expected.trim())
	})
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);










// 2
(function(){ 
	var data = [{
		name: 'module1',
		version: '0.0.1'
	}, {
		name: 'module2',
		version: '0.2.0'
	}]


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('2 column', function(t) {
		t.plan(1)
		var expected = fs.readFileSync(__dirname + '/2-column-simple-expected.txt', 'utf8')
		t.equal(columnify(data).trim(), expected.trim())
	})
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);










// 3 
(function(){ 
	var data = {
		"mocha@1.18.2": 1,
		"commander@2.0.0": 1,
		"debug@0.8.1": 1
	}


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('columns can be aligned to the center', function(t) {
		t.plan(1)
		var expected = fs.readFileSync(__dirname + '/align-center-expected.txt', 'utf8')
		var actual = columnify(data, { paddingChr: '.', config: {value: {align: 'center'}}})
		t.equal(actual.trim(), expected.trim())
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('columns can be aligned to the centre using the correct spelling of centre', function(t) {
		t.plan(1)
		var expected = fs.readFileSync(__dirname + '/align-center-expected.txt', 'utf8')
		var actual = columnify(data, { paddingChr: '.', config: {value: {align: 'centre'}}})
		t.equal(actual.trim(), expected.trim())
	})
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);










// 4
(function(){ 
	var data = [{
		name: 'mod1',
		description: 'some description which happens to be far larger than the max',
		version: '0.0.1',
	}, {
		name: 'module-two',
		description: 'another description larger than the max',
		version: '0.2.0',
	}, {
		name: 'mod3',
		description: 'thisisaverylongwordandshouldbewrapped',
		version: '0.3.0',
	}, {
		name: 'module-four-four-four-four',
		description: '',
		version: '0.0.4',
	}]


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('wrapping wide columns', function(t) {
		t.plan(1)
		var expected = fs.readFileSync(__dirname + '/wrap-expected.txt', 'utf8')
		t.equal(columnify(data, {
			config: {
				description: {
					maxWidth: 30,
					minWidth: 10
				}
			}
		}).trim(), expected.trim())
	})
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);










// 5
(function(){ 
	var data = [{
		name: 'mod1',
		description: 'some description which happens to be far larger than the max',
		version: '0.0.1',
	}, {
		name: 'module-two',
		description: 'another description larger than the max',
		version: '0.2.0',
	}, {
		name: 'mod3',
		description: 'thisisaverylongwordandshouldbewrapped',
		version: '0.3.0',
	}, {
		name: 'module-four-four-four-four',
		description: '',
		version: '0.0.4',
	}]


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('wrapping wide columns', function(t) {
		t.plan(1)
		var expected = fs.readFileSync(__dirname + '/wrap-with-padding-expected.txt', 'utf8')
		t.equal(columnify(data, {
			paddingChr: '.',
			config: {
				description: {
					maxWidth: 30,
					minWidth: 10
				}
			}
		}).trim(), expected.trim())
	})
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);










// 6
(function(){ 
	var data = [{
		name: 'mod1',
		description: 'some description',
		version: '0.0.1',
	}, {
		name: 'module-two',
		description: 'another description larger than the max',
		version: '0.2.0',
	}, {
		name: 'module-three',
		description: 'thisisaverylongwordandshouldbetruncated',
		version: '0.2.0',
	}]


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('truncation character is configurable', function(t) {
		t.plan(1)
		var expected = fs.readFileSync(__dirname + '/truncate-expected.txt', 'utf8').replace(/…/g, '>')
		t.equal(columnify(data, {
			truncateMarker: '>',
			truncate: true,
			config: {
				description: {
					maxWidth: 20
				}
			}
		}).trim(), expected.trim())
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('truncation character can be multichar', function(t) {
		t.plan(1)
		var expected = fs.readFileSync(__dirname + '/truncate-multichar-expected.txt', 'utf8')

		t.equal(columnify(data, {
			truncateMarker: '...',
			truncate: true,
			config: {
				description: {
					maxWidth: 20
				}
			}
		}).trim(), expected.trim())
	})
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);










// 7
(function(){ 

	var truncateString =  require('../utils').truncateString



	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('truncate string which is longer than max', function(t) {
		t.plan(1)
		t.equal(truncateString('This is a very long sentencies', 20), 'This is a very long ')
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('truncate string which is shorter than max', function(t) {
		t.plan(1)
		t.equal(truncateString('short', 10), 'short')
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('truncate string with multibytes characters', function(t) {
		t.plan(1)
		t.equal(truncateString('这是一句话 That is a word', 15), '这是一句话 That')
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('return string when maxLineWidth is Infinity', function(t) {
		t.plan(1)
		t.equal(truncateString('这是一句话 That is a word', Infinity), '这是一句话 That is a word');
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('truncate funky data', function(t) {
		t.plan(5)
		t.equal(truncateString(null, 2), '')
		t.equal(truncateString(false, 4), 'fals')
		t.equal(truncateString(100005, 5), '10000')
		t.equal(truncateString(10, 10), '10')
		t.equal(truncateString([], 5), '')
	})
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);










// 8
(function(){ 
	var data = [{
		name: 'mod1',
		description: 'some description',
		version: '0.0.1',
	}, {
		name: 'module-two',
		description: 'another description larger than the max',
		version: '0.2.0',
	}, {
		name: 'module-three',
		description: 'thisisaverylongwordandshouldbetruncated',
		version: '0.2.0',
	}]


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('columns are limited when truncation enabled', function(t) {
		t.plan(1)
		var expected = fs.readFileSync(__dirname + '/truncate-expected.txt', 'utf8')
		t.equal(columnify(data, {
			truncate: true,
			config: {
				description: {
					maxWidth: 20
				}
			}
		}).trim(), expected.trim())
	})

})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);










// 9
(function(){ 
	var data = [{
		name: 'mod1',
		description: 'some description',
		version: '0.0.1',
	}, {
		name: 'module-two',
		description: 'another description larger than the max',
		version: '0.2.0',
	}, {
		name: 'module-three',
		description: 'thisisaverylongwordandshouldbetruncated',
		version: '0.2.0',
	}]


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('columns are limited when truncation enabled', function(t) {
		t.plan(1)
		var expected = fs.readFileSync(__dirname + '/truncate-with-padding-expected.txt', 'utf8')
		t.equal(columnify(data, {
			truncate: true,
			paddingChr: '.',
			config: {
				description: {
					maxWidth: 20
				}
			}
		}).trim(), expected.trim())
	})
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);










// 10
(function(){ 
	var data = [{
		name: 'alongnameshouldbesplitovermultiplelines',
		description: 'some description',
		version: '0.0.1'
	}, {
		name: 'module-two',
		description: 'another description larger than the max',
		version: '0.2.0',
	}, {
		name: 'module-three',
		description: 'thisisaverylongwordandshouldbetruncated',
		version: '0.2.0',
	}, {
		name: '这是一个很长的名字的模块',
		description: '这真的是一个描述的内容这个描述很长',
		version: "0.3.3"
	}]


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('specific columns can be truncated, while others not', function(t) {
		var expected = fs.readFileSync(__dirname + '/truncate-string-maxlinewidth-expected.txt', 'utf8')

		t.equal(columnify(data, {
			maxLineWidth: 34,
			config: {
				name: {
					truncate: false,
					maxWidth: 9,
					truncateMarker: ''
				},
				description: {
					truncate: true,
					maxWidth: 20
				}
			}
		}).trim(), expected.trim())
		t.end()
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('when no maxLineWidth, nothing is changed', function(t) {
		t.equal(columnify(data, {
			config: {
				name: {
					truncate: false,
					maxWidth: 9,
					truncateMarker: ''
				},
				description: {
					truncate: true,
					maxWidth: 20
				}
			}
		}).trim(), fs.readFileSync(__dirname + '/truncate-column-expected.txt', 'utf8').trim())

		t.end()
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('maxLineWidth: "auto" with column max widths', function(t) {
		t.equal(columnify(data, {
			maxLineWidth: 'auto',
			config: {
				name: {
					truncate: false,
					maxWidth: 9,
					truncateMarker: ''
				},
				description: {
					truncate: true,
					maxWidth: 20
				}
			}
		}).trim(), fs.readFileSync(__dirname + '/truncate-column-expected.txt', 'utf8').trim())
		t.end()
	})
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);










// 11
(function(){ 
	var data = [{
		name: 'alongnameshouldbesplitovermultiplelines',
		description: 'some description',
		version: '0.0.1',
	}, {
		name: 'module-two',
		description: 'another description larger than the max',
		version: '0.2.0',
	}, {
		name: 'module-three',
		description: 'thisisaverylongwordandshouldbetruncated',
		version: '0.2.0',
	}, {
		name: '这是一个很长的名字的模块',
		description: '这真的是一个描述的内容这个描述很长',
		version: "0.3.3"
	}]


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('specific columns can be truncated, while others not', function(t) {
		t.plan(1)
		var expected = fs.readFileSync(__dirname + '/truncate-column-expected.txt', 'utf8')

		t.equal(columnify(data, {
			config: {
				name: {
					truncate: false,
					maxWidth: 9,
					truncateMarker: ''
				},
				description: {
					truncate: true,
					maxWidth: 20
				}
			}
		}).trim(), expected.trim())
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('string proto does not get polluted by wcwidth', function(t) {
		t.equal(String.prototype.wcwidth, undefined)
		t.end()
	})
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);










// 12
(function(){ 

	var splitLongWords =  require('../utils').splitLongWords


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('split long word with …', function(t) {
		t.plan(1)
// note is 5 letters to take … into account
t.equal(splitLongWords('dinosaur', 5, '…'), 'dino… saur')
})



	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('split long words with …', function(t) {
		t.plan(1)
		t.equal(splitLongWords('dinosaur cabbages', 5, '…'), 'dino… saur cabb… ages')
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('ignores short words', function(t) {
		t.plan(1)
		t.equal(splitLongWords('cow car mouse', 5, '…'), 'cow car mouse')
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('can split long words multiple times', function(t) {
		t.plan(1)
		t.equal(splitLongWords('dodecahedrons', 3, '…'), 'do… de… ca… he… dr… ons')
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('ignores/strips leading whitespace', function(t) {
		t.plan(1)
		t.equal(splitLongWords(' dodecahedrons', 3, '…'), 'do… de… ca… he… dr… ons')
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('multibytes characters', function(t) {
		t.plan(1)
		t.equal(splitLongWords('cow 开汽车 mouse 안녕하세요', 3, '…'), 'cow 开… 汽… 车 mo… use 안… 녕… 하… 세… 요')
	})
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);










// 13
(function(){ 

	var splitIntoLines =  require('../utils').splitIntoLines


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('lines under max are ok', function(t) {
		t.plan(1)
		t.deepEqual(splitIntoLines('dinosaur cabbages', 32), ['dinosaur cabbages'])
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('lines at max are ok', function(t) {
		t.plan(1)
		t.deepEqual(splitIntoLines('dinosaur cabbages', 17), ['dinosaur cabbages'])
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('lines at max with multiple spaces are ok', function(t) {
		t.plan(1)
		t.deepEqual(splitIntoLines('dinosaur cabbages mechanic', 26), ['dinosaur cabbages mechanic'])
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('lines over max will be split', function(t) {
		t.plan(1)
		t.deepEqual(splitIntoLines('dinosaur cabbages', 16), ['dinosaur', 'cabbages'])
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('splits lines under max onto multiple lines', function(t) {
		t.plan(1)
		t.deepEqual(splitIntoLines('dinosaur cabbages', 7), ['dinosaur', 'cabbages'])
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('can put multiple words per line', function(t) {
		t.plan(1)
		t.deepEqual(splitIntoLines('dog cat cow bat mat', 7), [
		            'dog cat',
		            'cow bat',
		            'mat'
		            ])
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('single existing newline is preserved', function(t) {
		t.plan(1)
		t.deepEqual(splitIntoLines('dog\n cat cow bat mat', 7), [
		            'dog',
		            'cat cow',
		            'bat mat'
		            ])
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('multiple existing newlines are preserved', function(t) {
		t.plan(1)
		t.deepEqual(splitIntoLines('dog\n\n cat\n cow \nbat mat', 7), [
		            'dog',
		            '',
		            'cat',
		            'cow',
		            'bat mat'
		            ])
	})
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);










// 14
(function(){ 
	var data = [{
		name: 'module1',
		version: '0.0.1'
	}, {
		name: 'module2',
		version: '0.2.0'
	}]


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('show column', function(t) {
		t.plan(1)
		var expected = fs.readFileSync(__dirname + '/show-headers-expected.txt', 'utf8')
		t.equal(columnify(data, {showHeaders:false}).trim(), expected.trim())
	})
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);










// 15
(function(){ 

	var padRight =  require('../utils').padRight


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('pad string with spaces up to len', function(t) {
		t.plan(1)
		t.equal(padRight('word', 10), 'word      ')
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('pad empty string with spaces up to len', function(t) {
		t.plan(1)
		t.equal(padRight('', 10), '          ')
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('leaves long strings along', function(t) {
		t.plan(1)
		t.equal(padRight('012345678910', 10), '012345678910')
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('custom padding', function(t) {
		t.plan(1)
		t.equal(padRight('', 10, '.'), '..........')
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('handling funky data with spaces up to len', function(t) {
		t.plan(5)
		t.equal(padRight(null, 10), '          ')
		t.equal(padRight(false, 10), 'false     ')
		t.equal(padRight(0, 10), '0         ')
		t.equal(padRight(10, 10), '10        ')
		t.equal(padRight([], 10), '          ')
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('pad string with paddingChr up to len', function(t) {
		t.plan(1)
		t.equal(padRight('word', 10, '.'), 'word......')
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('pad string with paddingChr of length >1, up to len', function(t) {
		t.plan(1)
		t.equal(padRight('words', 10, ' .'), 'words . . ')
	})
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);










// 16
(function(){
	var padCenter =  require('../utils').padCenter


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('pad string with spaces up to len (sides equal)', function(t) {
		t.plan(1)
		t.equal(padCenter('word', 10), '   word   ')
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('pad string with spaces up to len (sides not equal)', function(t) {
		t.plan(1)
		t.equal(padCenter('words', 10), '  words   ')
	})


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('pad string with paddingChr of length >1, up to len', function(t) {
		t.plan(1)
		t.equal(padCenter('word', 10, ' .'), ' . word . ')
	})
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);


// 17
(function(){ 
	var data = [{
		id: 0,
		name: 'module1',
		version: '0.0.1'
	}, {
		id: 1,
		name: 'module2',
		version: '0.2.0'
	}]


	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('hide id column', function(t) {
		t.plan(1)
		var expected = fs.readFileSync(__dirname + '/hide-individual-header-expected.txt', 'utf8')
		t.equal(columnify(data, {config: {id: {showHeaders: false}} }), expected)
	})
})();
}
testCount++;


// 18
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);
	(function(){
		var data = [{
			name: 'module1',
			description: 'some description',
			version: '0.0.1',
		}, {
			name: 'module2',
			description: 'another description',
			version: '0.2.0',
		}]


		childTestCounts[testCount]++
		if (childTestCounts[testCount] > childTestTotals[testCount]) return;
		test('column headings are uppercased by default', function(t) {
			t.plan(3)
			var result = columnify(data)
	var headings = result.split('\n')[0]// first line
	t.ok(headings.indexOf('NAME') !== -1, 'NAME exists')
	t.ok(headings.indexOf('DESCRIPTION') !== -1, 'DESCRIPTION exists')
	t.ok(headings.indexOf('VERSION') !== -1, 'VERSION exists')
	})


		childTestCounts[testCount]++
		if (childTestCounts[testCount] > childTestTotals[testCount]) return;
		test('headings can be transformed by a function', function(t) {
			t.plan(3)
			var result = columnify(data, {
				headingTransform: function(name) {
					return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
				}
			})
	var headings = result.split('\n')[0] // first line
	t.ok(headings.indexOf('Name') !== -1, 'Name exists')
	t.ok(headings.indexOf('Description') !== -1, 'Description exists')
	t.ok(headings.indexOf('Version') !== -1, 'Version exists')
	})


		childTestCounts[testCount]++
		if (childTestCounts[testCount] > childTestTotals[testCount]) return;
		test('headings can be transformed on a per-column basis', function(t) {
			t.plan(3)
			var result = columnify(data, {
				config: {
	// leave default uppercase heading
	name: {
	headingTransform: function(name) { // only title case name
		return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
	}
	}
	}
	})
	var headings = result.split('\n')[0] // first line
	t.ok(headings.indexOf('Name') !== -1, 'Name exists')
	t.ok(headings.indexOf('DESCRIPTION') !== -1, 'Description exists')
	t.ok(headings.indexOf('VERSION') !== -1, 'Version exists')
	})
	})();
}
testCount++;


// 19
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);
	(function(){ 
		var data = [{
			name: "glob@3.2.9",
			paths: [
			"node_modules/tap/node_modules/glob",
			"node_modules/tape/node_modules/glob"
			].join('\n')
		}, {
			name: "nopt@2.2.1",
			paths: [
			"node_modules/tap/node_modules/nopt"
			]
		}, {
			name: "runforcover@0.0.2",
			paths: "node_modules/tap/node_modules/runforcover"
		}]


		childTestCounts[testCount]++
		if (childTestCounts[testCount] > childTestTotals[testCount]) return;
		test('leaving existing linebreaks', function(t) {
			t.plan(1)
			var expected = fs.readFileSync(__dirname + '/existing-linebreaks-expected.txt', 'utf8')
			t.equal(columnify(data, {preserveNewLines: true}).trim(), expected.trim())
			t.end()
		})


		childTestCounts[testCount]++
		if (childTestCounts[testCount] > childTestTotals[testCount]) return;
		test('removing existing linebreaks', function(t) {
			t.plan(1)
			var expected = fs.readFileSync(__dirname + '/remove-existing-linebreaks-expected.txt', 'utf8')
			t.equal(columnify(data).trim(), expected.trim())
			t.end()
		})
	})();
}
testCount++;


// 20
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);
	(function(){ 
		var data = [{
			name: 'module1',
			description: 'some description',
			version: '0.0.1',
		}, {
			name: 'module2',
			description: 'another description',
			version: '0.2.0',
		}]


		childTestCounts[testCount]++
		if (childTestCounts[testCount] > childTestTotals[testCount]) return;
		test('removes description column', function(t) {
			t.plan(2)
			var result = columnify(data, {
				columns: ['name', 'version'],
			})

			var columnHeaders = result.split('\n')[0]
			t.deepEqual(columnHeaders.split(/\s+/), [
			            "NAME",
			            "VERSION"
			            ])
			t.ok(!(/description/gi.test(result)))
		})


		childTestCounts[testCount]++
		if (childTestCounts[testCount] > childTestTotals[testCount]) return;
		test('include == columns', function(t) {
			t.plan(2)
			var result = columnify(data, {
				include: ['name', 'version'],
			})

			var columnHeaders = result.split('\n')[0]
			t.deepEqual(columnHeaders.split(/\s+/), [
			            "NAME",
			            "VERSION"
			            ])
			t.ok(!(/description/gi.test(result)))
		})


		childTestCounts[testCount]++
		if (childTestCounts[testCount] > childTestTotals[testCount]) return;
		test('columns preferred over include if both supplied', function(t) {
			t.plan(2)
			var result = columnify(data, {
				columns: ['name', 'version'],
				include: ['description'],
			})

			var columnHeaders = result.split('\n')[0]
			t.deepEqual(columnHeaders.split(/\s+/), [
			            "NAME",
			            "VERSION"
			            ])
			t.ok(!(/description/gi.test(result)))
		})
	})();
}
testCount++;


// 21
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);

	(function(){ 
		var data = [{
			name: 'module1',
			description: 'some description',
			version: '0.0.1',
		}, {
			name: 'module2',
			description: 'another description',
			version: '0.2.0',
		}, {
			name: 'module3',
			description: '这是一段描述',
			version: '0.3.2'
		}]


		childTestCounts[testCount]++
		if (childTestCounts[testCount] > childTestTotals[testCount]) return;
		test('column data can be transformed', function(t) {
			t.plan(1)
			var expected = fs.readFileSync(__dirname + '/data-transform-expected.txt', 'utf8')
			t.equal(columnify(data, {
				dataTransform: function(data, column) {
					return data.toUpperCase()
				}
			}).trim(), expected.trim())
		})


		childTestCounts[testCount]++
		if (childTestCounts[testCount] > childTestTotals[testCount]) return;
		test('dataTransform gets columns', function(t) {
			var COLUMNS = Object.keys(data[0]).length
			var ASSERTIONS = 6
			t.plan(data.length * COLUMNS * ASSERTIONS)
			columnify(data, {
				dataTransform: function(data, column) {
					t.ok(column, 'has column')
					t.ok(column.name, 'column has name')
					t.ok(column.align, 'column has align')
					t.ok(column.maxWidth, 'column has maxWidth')
					t.ok('minWidth' in column, 'column has minWidth')
					t.ok('truncate' in column, 'column has truncate')
					return data
				}
			})
		})


		childTestCounts[testCount]++
		if (childTestCounts[testCount] > childTestTotals[testCount]) return;
		test('column headings can be transformed', function(t) {
			t.plan(1)
			var expected = fs
			.readFileSync(__dirname + '/data-transform-expected.txt', 'utf8')
			.replace(/VERSION/gmi, 'Version')

			t.equal(columnify(data, {
				dataTransform: function(data, column) {
					if (column.name === 'version') column.name = 'Version'
						return data.toUpperCase()
				}
			}).trim(), expected.trim())
		})


		childTestCounts[testCount]++
		if (childTestCounts[testCount] > childTestTotals[testCount]) return;
		test('column data can be transformed on a per-column basis', function(t) {
			var result = columnify(data, {
				config: {
					name: {
	dataTransform: function(data, column) { // only uppercase name
		t.equal(column.name, "name")
		return data.toUpperCase()
	}
	}
	}
	})
			t.ok(result.indexOf('MODULE1') !== -1, 'Module1 name was transformed')
			t.ok(result.indexOf('MODULE2') !== -1, 'Module2 name was transformed')
			t.ok(result.indexOf('MODULE3') !== -1, 'Module3 name was transformed')
			t.ok(result.indexOf('another description') !== -1, 'Description was not transformed')
			t.end()
		})

	})();
}
testCount++;


//22
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);
	(function(){ 
		var data = [{
			name: 'mod1',
			description: 'some description which happens to be far larger than the max',
			version: '0.0.1',
		}, {
			name: 'module-two',
			description: 'another description larger than the max',
			version: '0.2.0',
		}]


		childTestCounts[testCount]++
		if (childTestCounts[testCount] > childTestTotals[testCount]) return;
		test('column splitter character', function(t) {
			t.plan(1)
			var expected = fs.readFileSync(__dirname + '/column-splitter-character-expected.txt', 'utf8')
			t.equal(columnify(data, {
				columnSplitter: ' | '
			}).trim(), expected.trim())
		})
	})();
}
testCount++;


// 23
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);

	(function(){ 
		var data = {
			"mocha@1.18.2": 1,
			"commander@2.0.0": 1,
			"debug@0.8.1": 1,
			"diff@1.0.7": 1,
			"glob@3.2.3": 1,
			"graceful-fs@2.0.3": 1,
			"growl@1.7.0": 1,
			"inherits@2.0.1": 4,
			"jade@0.26.3": 1,
			"commander@0.6.1": 1,
			"lru-cache@2.5.0": 3,
			"minimatch@0.2.14": 3,
			"mkdirp@0.3.5": 2,
			"sigmund@1.0.0": 3,
			"object-inspect@0.4.0": 1,
			"resumer@0.0.0": 1,
			"through@2.3.4": 1
		}

		childTestCounts[testCount]++
		if (childTestCounts[testCount] > childTestTotals[testCount]) return;
		test('objects are automatically converted into k/v array', function(t) {
			t.plan(1)
			var expected = fs.readFileSync(__dirname + '/auto-columns-expected.txt', 'utf8')
			t.equal(columnify(data).trim(), expected.trim())
		})


		childTestCounts[testCount]++
		if (childTestCounts[testCount] > childTestTotals[testCount]) return;
		test('column names can be provided', function(t) {
			t.plan(1)
			var expected = fs.readFileSync(__dirname + '/auto-columns-expected.txt', 'utf8')
			expected = expected.replace('VALUE', 'COUNT', 'gmi')
		// RE 'count': picked a word with same length (as 'value') so didn't need a
		// new fixture (damn whitespace)
		t.equal(columnify(data, {columns: ['key', 'count']}).trim(), expected.trim())
		})
	})();
}
testCount++;


// 24
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);

	(function(){ 
		var chalk = require('chalk')
	// required when running inside faucet etc
	// as chalk will detect output is not a tty
	// and disable color for you automatically
	chalk.enabled = true;
	var data = {
		"mocha@1.18.2": chalk.yellow('3'),
		"commander@2.0.0": chalk.green('1'),
		"debug@0.8.1": chalk.red('6')
	}

	childTestCounts[testCount]++
	if (childTestCounts[testCount] > childTestTotals[testCount]) return;
	test('width calculated correctly even if ansi colors used.', function(t) {
		t.plan(1)
		var expected = fs.readFileSync(__dirname + '/ansi-expected.txt', 'utf8')
		var actual = columnify(data)
		t.equal(actual.trim(), expected.trim())
	})
	})();
}
testCount++;


// 25
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);
	(function(){ 
		var data = {
			"mocha@1.18.2": 1,
			"commander@2.0.0": 1,
			"debug@0.8.1": 1,
			"diff@1.0.7": 1,
			"glob@3.2.3": 1,
			"graceful-fs@2.0.3": 1,
			"growl@1.7.0": 1,
			"inherits@2.0.1": 4,
			"jade@0.26.3": 1,
			"commander@0.6.1": 1,
			"lru-cache@2.5.0": 3,
			"minimatch@0.2.14": 3,
			"mkdirp@0.3.5": 2,
			"sigmund@1.0.0": 3,
			"object-inspect@0.4.0": 1,
			"resumer@0.0.0": 1,
			"through@2.3.4": 1
		}
		childTestCounts[testCount]++
		if (childTestCounts[testCount] > childTestTotals[testCount]) return;
		test('columns can be aligned right', function(t) {
			t.plan(1)
			var expected = fs.readFileSync(__dirname + '/align-right-expected.txt', 'utf8')
			var actual = columnify(data, {config: {value: {align: 'right'}}})
			t.equal(actual.trim(), expected.trim())
		})
	})();
}
