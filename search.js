var searchAlgos = (function() {

    /* 
        Recursive Binary Search Algorithm
        search for data and return the index where element is found 

        Time complexity of binary search in sorted array is O(logn)
    */
    return {
        recursiveBinarySearch: function(arr, l, r, data) {
            if (l > r) {
                return -1;
            }
            var mid = Math.floor((l + r)/2),
              index;

            if (data === arr[mid]) {
              return mid;
            }
            else if (data < arr[mid]) {
              index = this.binarySearch(arr, l , mid, data);
            }
            else {
              index = this.binarySearch(arr, mid + 1, r, data);
            }
            return index;
        },

    /* Iterative Binary Search Algorithm. The recursive calls are replaced by loop */

        iterativeBinarySearch: function(arr, data) {
            var l = 0, 
              r = arr.length - 1,
              mid;
             
            while (l <= r) {
                mid = Math.floor((l+r)/2);
                if (arr[mid] === data) {
                    return mid;
                }
                else if (data < arr[mid]) {
                    r = mid - 1;
                }
                else {
                    l = mid + 1;
                }
            }
            return -1;
        },


        /*      Given an array of n numbers, give an algorithm for checking if 
                there are any duplicate elements in the array or not 
                Question to ask: Are the numbers sequential or random ?

                In Javascript: by default the sort method sorts the strings in alphabetical and ascending order.
        */
        findDuplicateNumbersInArray: function(arr) {
            arr.sort(function(a,b) { return a - b; });
            
            for (var i = 0; i < arr.length - 1; i++) {
                if (arr[i] === arr[i+1]) {
                    return true;
                }
            }

            return false;
        },

        findMaxNumberOfRepetitions: function(arr) {
            
        },

        sparseSearch: function(arr, str, left, right) {
            var mid = (left + right)/2;

            if (str === arr[mid]) {
               return mid; 
            }
            else if (arr[mid] === "") {
                var left = mid - 1,
                  right = mid + 1;
                while((arr[left] === "") && (arr[right] === "") ){
                    left--;
                    right++;
                }
               
               if (arr[left]!== "") {
                    mid = left;
               } else {
                mid = right;
               }
            }
        }
    };  




})();

// console.log(searchAlgos.iterativeBinarySearch([2, 8, 9, 16, 19, 20, 24, 29, 31], 24));
console.log(searchAlgos.findDuplicateNumbersInArray([2, 99, 12, 8, 0, 8, 17]))




