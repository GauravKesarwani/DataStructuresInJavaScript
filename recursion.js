var recursionAlgos = {
	
		/* Recursive fibonacci */

		fib1: function(n) {
			if (n === 0) {
				return 0;
			}
			else if (n === 1) {
				return 1;
			}
			else if (n > 1){
				return fib(n-1) + fib(n-2);
			}
			else {
				return -1;				//error condition
			}
		},
		
		/* Iterative fibonacci. More efficient as intermediate result is stored */

		fib2: function(n) {
			var fib = [ ];
			  fib[0] = 0, 
			  fib[1] = 1;

			for (var i = 2; i <= n; i++) {
				fib[i] = fib[i-1] + fib[i-2];
			}  

			return fib[n];
		},

		/* 
			Recursive algorihm to find all subsets of a given set.
				1. Let first = S[0]. Let other set be S[1...n].
				2. Compute all subsets of a smaller set and put them in allsubsets arraylist.
				3. for each subset in allsubsets,clone it and add first to the subset.
				4. Recursion will end when smaller set has just one item left.

				Array behaves like a arraylist in java.
		*/
		getSubsets: function(arr, index) {
			var allsubsets;				//Array of all subsets
			
			// base condition check ( always in recursive algorithms )
			if (arr.length === index) {
				var emptyArr = [ ];
				allsubsets = [ ];
				allsubsets.push(emptyArr);	//empty set
			}
			else {
				allsubsets = this.getSubsets(arr, index + 1);
				var item = arr[index];

				allsubsets.forEach(function(subset, index, allsubsets) {
					var newSubset = [];
					newSubset = newSubset.concat(subset);
					newSubset.push(item);
					allsubsets.push(newSubset);
				});
			}
			return allsubsets;	
		},

		/* Method to compute all permutations of a string */
		getAllPermutations: function(str) {
			var allPerms = [ ];

			if (str === null) {					// error condition 
				return null;
			} 
			else if (str.length === 0) {		// base condition check ( always in recursive algorithms )
				allPerms.push('');
			}
			else {
				var c = str.charAt(0),		//get the char at position 0

				//recursively get all the permutations of a substring.
				/* notice how this algorithm is different from method getSubsets() above. Here we are using a different arraylist allWords
				   whereas in getSubsets() we are using the same arraylist in each iteration. */
				allWords = this.getAllPermutations(str.substr(1));
				//insert the first char at every position for each allPerms
				allWords.forEach(function(value, index, allWords) {
					for (var i = 0; i <= value.length; i++) {
						var newValue = value.substring(0, i) + c + value.substr(i);
						allPerms.push(newValue);
					}
				});
			}

			return allPerms;
		},
	}

var arr = [ 2, 3, 5]
//console.log('getAllPermutations', recursionAlgos.getAllPermutations("gaurav"));
console.log('fib2', recursionAlgos.fib2(5));
