var runTests = [];
var bugNumber = 0;
var childTestTotals = [1,2,1,2,2,3,3,2,1,1,2,2,2,1,1,2];

function createRandomArray (start, end, amount) {
	if (amount > (end - start + 1)) {
		amount = end - start + 1;
		console.log("THE AMOUNT OF RANDOM VALUES WAS BIGGER THAN RANGE");
		console.log("SELECTED ONLY ", amount, " VALUES");
	}
	arr = [];
	for (var i = 0; i < amount; ++i) {
		var val = -1;
		while (val == -1 || arr.indexOf(val) !== -1) {
			val = Math.round((end - start) * Math.random() + start);
		}
		arr[arr.length] = val;
	}
	return arr;
}

for (var index = 0; index < process.argv.length; ++index) {
	val = process.argv[index]
	if (val.indexOf('B') != -1) {
		if (val.length == 2) bugNumber = val.charAt(1);
		if (val.length == 3) bugNumber = val.charAt(1) + val.charAt(2);
	}

	if (val === "low") {
		console.log("Testing with low amount of tests")
		var childTestTotals = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

	}

	if (val.indexOf('random') !== -1) {
		randomAmount = parseInt(process.argv[index+1]);
		if (Number.isInteger(randomAmount)) {
			runTests = createRandomArray(1,16,randomAmount);
			console.log("Run randomly selected tests", runTests)
			break;
		}
	} else if (val.indexOf('-') !== -1) {
		nums = val.split('-');
		for (var i = parseInt(nums[0]); i <= parseInt(nums[1]); ++i) {
			runTests[runTests.length] = i;
		}
	} else if (Number.isInteger(parseInt(val))) {
		runTests[runTests.length] = parseInt(val);
	}
}

console.log("Running tests: ", JSON.stringify(runTests));

var testCount = 0;
var childTestCounts = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

	var should = require('should');

	libstr = '../bugs/bug' + bugNumber + '.js';
	console.log("FINDING SOURCE FILE FROM ", libstr);
	var PVector =  require(libstr)

	console.log("Starting")

	testCount++;
	if (runTests.indexOf(testCount) !== -1) {
		console.log("Running test ",testCount);

// 2
(function(){ 
	describe('fromAngle()', function () {
		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should ok', function () {
			var v = PVector.fromAngle(0);
			v.x.should.equal(1);
			v.y.should.equal(0);
		});
	});
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);




// 2
(function(){ 
	describe('random2D()', function () {
		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should get a random vector', function () {
			var v = PVector.random2D();
			v.should.have.keys(['x', 'y']);
		});

		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should set a vector to random', function () {
			var v = PVector(0, 0);
			PVector.random2D(v);
			v.x.should.not.equal(0);
			v.y.should.not.equal(0);
		});
	});
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);




// 2
(function(){ 
	describe('set()', function () {
		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should set ok', function () {
			var v = PVector(1, 1);
			v.set();
			v.x.should.equal(0);
			v.y.should.equal(0);
			v.set(2, 1);
			v.x.should.equal(2);
			v.y.should.equal(1);
		});
	});
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);




// 2
(function(){ 
	describe('add()', function () {
		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should v1.add(v2) ok', function () {
			var v1 = PVector(1, 1);
			var v2 = PVector(1, 1);
			var v3 = v1.add(v2);
			v3.x.should.equal(2);
			v3.y.should.equal(2);
		});

		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should PVector.add(v1, v2) ok', function () {
			var v1 = PVector(1, 1);
			var v2 = PVector(1, 1);
			PVector.add(v1, v2).x.should.equal(2);
			PVector.add(v1, v2).y.should.equal(2);
		});
	});
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);




// 2
(function(){ 
	describe('sub()', function () {
		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should v1.sub(v2) ok', function () {
			var v1 = PVector(1, 1);
			var v2 = PVector(1, 1);
			var v3 = v1.sub(v2);
			v3.x.should.equal(0);
			v3.y.should.equal(0);
		});

		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should PVector.sub(v1, v2) ok', function () {
			var v1 = PVector(1, 1);
			var v2 = PVector(1, 1);
			PVector.sub(v1, v2).x.should.equal(0);
			PVector.sub(v1, v2).y.should.equal(0);
		});
	});
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);




// 2
(function(){ 
	describe('div()', function () {
		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should v1.div(n) ok', function () {
			var v1 = PVector(1, 1);
			var v2 = v1.div(2);
			v2.x.should.equal(0.5);
			v2.y.should.equal(0.5);
		});

		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should PVector.div(v1, v2) ok', function () {
			var v1 = PVector(1, 1);
			PVector.div(v1, 2).x.should.equal(0.5);
			PVector.div(v1, 2).y.should.equal(0.5);
		});

		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should PVector.div(v1, v2) assign to target', function () {
			var v1 = PVector(1, 1);
			var v2 = PVector(0, 0);
			PVector.div(v1, 2, v2).x.should.equal(0.5);
			PVector.div(v1, 2, v2).y.should.equal(0.5);
			v2.x.should.equal(0.5);
			v2.y.should.equal(0.5);
		});
	});
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);




// 2
(function(){ 
	describe('mult()', function () {
		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should v1.mult(n) ok', function () {
			var v1 = PVector(1, 1);
			var v2 = v1.mult(2);
			v2.x.should.equal(2);
			v2.y.should.equal(2);
		});

		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should PVector.mult(v1, v2) ok', function () {
			var v1 = PVector(1, 1);
			PVector.mult(v1, 2).x.should.equal(2);
			PVector.mult(v1, 2).y.should.equal(2);
		});

		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should PVector.mult(v1, v2) assign to target', function () {
			var v1 = PVector(1, 1);
			var v2 = PVector(0, 0);
			PVector.mult(v1, 2, v2).x.should.equal(2);
			PVector.mult(v1, 2, v2).y.should.equal(2);
			v2.x.should.equal(2);
			v2.y.should.equal(2);
		});
	});
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);




// 2
(function(){ 
	describe('dot()', function () {
		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should v1.dot(v2) ok', function () {
			var v1 = PVector(1, 1);
			var v2 = PVector(1, 1);
			v1.dot(v2).should.equal(2);
		});

		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should PVector.dot(v1, v2) ok', function () {
			var v1 = PVector(1, 1);
			var v2 = PVector(1, 1);
			PVector.dot(v1, v2).should.equal(2);
		});
	});
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);




// 2
(function(){ 
	describe('mag()', function () {
		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should v1.mag() ok', function () {
			var v1 = PVector(3, 4);
			v1.mag().should.equal(5);
		});
	});
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);




// 2
(function(){ 
	describe('dist', function () {
		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should PVector.dist(v1, v2) ok', function () {
			var v1 = PVector(3, 4);
			var v2 = PVector(0, 0);
			PVector.dist(v1, v2).should.equal(5);
		});
	});
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);




// 2
(function(){ 
	describe('normalize()', function () {
		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should v1.normalize() ok', function () {
			var v1 = PVector(3, 4);
			v1.normalize();
			v1.x.should.equal(0.6);
			v1.y.should.equal(0.8);
		});

		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should PVector(0, 0).normalize() ok', function () {
			var v1 = PVector(0, 0);
			v1.normalize();
			v1.x.should.equal(0);
			v1.y.should.equal(0);
		});
	});
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);




// 2
(function(){ 
	describe('limit()', function () {
		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should v1.limit(2) ok', function () {
			var v1 = PVector(3, 4);
			v1.limit(2);
			v1.x.should.equal(1.2);
			v1.y.should.equal(1.6);
		});

		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should v1.limit(10) ok', function () {
			var v1 = PVector(3, 4);
			v1.limit(10);
			v1.x.should.equal(3);
			v1.y.should.equal(4);
		});
	});
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);




// 2
(function(){ 
	describe('setMag()', function () {
		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should v1.setMag(2) ok', function () {
			var v1 = PVector(3, 4);
			v1.setMag(2);
			v1.x.should.equal(1.2);
			v1.y.should.equal(1.6);
		});

		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should v1.setMag(10) ok', function () {
			var v1 = PVector(3, 4);
			v1.setMag(10);
			v1.x.should.equal(6);
			v1.y.should.equal(8);
		});
	});
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);




// 2
(function(){ 
	describe('clone()', function () {
		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should v1.clone() ok', function () {
			var v1 = PVector(3, 4);
			v1.clone().setMag(10).x.should.equal(6);
			v1.x.should.equal(3);
		});
	});
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);




// 2
(function(){ 
	describe('heading()', function () {
		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should v.heading() ok', function () {
			PVector(0, 1).heading().should.equal(Math.PI / 2);
			PVector(0, -1).heading().should.equal(-Math.PI / 2);
			PVector(1, 0).heading().should.equal(0);
			PVector(-1, 0).heading().should.equal(Math.PI);
			PVector(1, 1).heading().should.equal(Math.PI / 4);
		});
	});
})();
}
testCount++;
if (runTests.indexOf(testCount) !== -1) {
	console.log("Running test ",testCount);




// 2
(function(){ 
	describe('angleBetween()', function () {
		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should v1.angleBetween(v2) ok', function () {
			var v1 = PVector(1, 0);
			var v2 = PVector(0, 1);
			v1.angleBetween(v2).should.equal(Math.PI / 2);
		});

		
	childTestCounts[testCount-1]++
	if (childTestCounts[testCount-1] > childTestTotals[testCount-1]) return;
	it('should PVector.angleBetween(v1, v2) ok', function () {
			var v1 = PVector(1, 0);
			var v2 = PVector(0, 1);
			PVector.angleBetween(v1, v2).should.equal(Math.PI / 2);
		});
	});
})();
}
testCount++;
