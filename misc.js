/* Misc Interview Programming Questions in Javascript */

var misc = {

	// numbers 0 through 9 are represented by ascii value 48 through 57
	parseInt: function(num) {
		var sum = 0;
		for (var i = 0; i < num.length; i++) {
			var c = num.charCodeAt(i);

			if (c >= 48 && c <=57) {
				sum = sum * 10 + (c-48);
			}
		}

		return sum;
	},

	numberOfTrailingZeroes: function(n) {
		var count = 0;
		for (var i = 5; Math.floor(n/i) > 0; i=i*5) {
			count = count + (n/i);
		}

		return count;
	},

	smallestdifference: function(arr1, arr2) {
		var smallestDiff = Number.MAX_VALUE,
		  sortFunc = function(a, b) {
			return a - b;
		};
		arr1.sort(sortFunc);
		arr2.sort(sortFunc);

		// Todo: Complete the logic
		var i = 0,
		  j = 0;
		
		while((i < arr1.length) && (j < arr2.length)) {
			
			var temp = Math.abs(arr1[i] - arr2[j]);
			if (temp < smallestDiff) {
				smallestDiff = (Math.abs(arr1[i] - arr2[j]));
			}

			if (arr1[i] < arr2[j]) {
				i++;
			}
			else {
				j++;
			}
		}
		
		return smallestDiff;

	}
}




arr1 = [2, 4, 5, 8, 29];
arr2 = [9, 11, 14, 16];

console.log(misc.smallestdifference(arr1, arr2));
