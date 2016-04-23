/* Recursive MergeSort 

1. Find the midpoint to divide the array into two halves   m = (l + r) / 2;
2. Sort the left sub array in place         mergesort(arr, l, m)
3. Sort the right sub array in place        mergesort(arr, m, r)
4. Merge the sorted arrays                  merge(arr, l, m, r)

*/

var sortingAlgos = (function() {
    return {
        mergeSort: function(arr, left, right) {
            var mid,
              leftSubArray,
              rightSubArray;

            // since this is a recursive algorithm some check is required.  
            if (right > left) {
                mid = (left + right)/2;
                leftSubArray = arr.slice(left, mid);                // same as arrays.copy of range in Java
                rightSubArray = arr.slice(mid, right + 1);
                mergeSort(leftSubArray, left, mid);
                mergeSort(rightSubArray, mid+1, right + 1);
                this.merge(arr, leftSubArray, rightSubArray);
            }
        },

        // merge the leftSubarrays and rightSubarrays into the 
        merge: function(arr, arr1, arr2) {
            var leftptr = 0,
              rightptr = 0,
              totalElem = arr.length;

              for (var i = 0; i < totalElem; i++) {
                if (leftptr < leftarr.length && rightptr < rightarr.length) {
                    if (arr1[leftptr] <  arr2[rightptr]) {
                        arr[i] = arr1[leftptr];
                        leftptr++;
                    }
                    else if (arr1[leftptr] > arr2[rightptr]) {
                        arr[i] = arr2[rightptr];
                        rightptr++
                    }
                }
              } 
        },

        // Time complexity of selection sort is O(n2)

        selectionSort: function(arr) {
            for (var outer = 0; outer < arr.length - 1; outer++) {
                var min = outer;
                for (var inner = outer + 1; inner < arr.length; inner++) {
                    if (arr[inner] < arr[min]) {
                        min = inner;
                    }
                }

                var temp = arr[outer];
                arr[outer] = arr[min];
                arr[min] = temp;
            }
            return arr;
        },

        insertionSort: function(arr) {
            for (var outer = 1; outer < arr.length; outer++) {
                var temp = arr[outer];
                for (var inner = outer; (inner > 0 && arr[inner-1] >= temp); inner--) {
                    arr[inner] = arr[inner-1]; 
                }

                arr[inner] = temp;
            }

            return arr;
        }
    }
})();

console.log(sortingAlgos.insertionSort([34, 12, 67, 10, 11, 9, 78]));