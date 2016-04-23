var arrayAlgos = (function() {
	'use strict';

	return {
		getProductsOfAllIntsExceptAtIndex: function(arr) {
			var result = [ ];
			for (var i = 0; i < arr.length; i++) {
				var j = 0,
				  prod=1;
				while (j < arr.length) {
					if (j !== i) {
						prod = prod * arr[j]
				   	}
				   	j++;
				}
				result.push(prod); 
			}
			return result;
		},

		arrayPush: function() {
			var arr1 = "john".split('');
			var arr2 = arr1.reverse();
			var arr3 = "jones".split('');
			arr2.push(arr3);
			console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
			console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
		},

		sum: function(x) {
			if (arguments.length === 2) {
				return arguments[0] + arguments[1]; 
			} else {
				return function(y) { return x + y; }
			}
		},

		closureTest: function() {
			for (var i = 0; i < 5; i++) {
				(function(x) {
			    	setTimeout(function() { console.log('x', x); }, x * 1000 );
			    })(i);
			}
		},

		isInteger: function(x) {
			return ((Math.round(x) === x));
			}
		}
	}
})();

//console.log(arrayAlgos.getProductsOfAllIntsExceptAtIndex([2,3,4,5]));
//console.log(arrayAlgos.sum(2)(3));
arrayAlgos.closureTest();