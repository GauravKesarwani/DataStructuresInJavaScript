/* Programming questions in Strings */


'use strict';
var string = (function() {
  return {
    /* Determine if string has all unique characters  O(n)
      O(c) where c is the number of unqiue chars in the charset.  128 in ASCII
    */
    isAllUnique: function(s) {
      var charSet = [ ];

      if(s.length > 128) {
        return false;
      }

      for (var i = 0; i < s.length; i++) {
        if (charSet[s.charCodeAt(i)]) {
          return false;
        }
        else {
          charSet[s.charCodeAt(i)] = true;
        }
        //console.log(charSet);
      }
      return true;
    },

    // Todo: Implement by sorting the string. Time complexity is O(nlogn)
    isStringPermutation: function(s1,s2) {
      
      if (s1.length !== s2.length) {
        return false;
      }

      s1 = s1.split("").sort().join("");
      s2 = s2.split("").sort().join("");

      if(s1.localeCompare(s2)  === 0){
        return true;
      }
      else {
        return false;
      }
    },

    /* Check if string is permutation of a pallindrome */
    isPallindromePermutation: function(s) {
      var charArr = [ ],
        found = false;

      for (var i = 0; i < s.length; i++) {
        console.log(s.charCodeAt(i));
        if(charArr[s.charCodeAt(i)] === undefined) {
          charArr[s.charCodeAt(i)] = 0
        }

        charArr[s.charCodeAt(i)]++;
      }

      for (var j = 0 ; j < s.length; j++) {
        if (found) {
          return false;
        }
        else if (charArr[s.charCodeAt(j)] % 2 === 1) {
          found = true;
        }
      }

      return true;

    },

    // Approach 1: Replace duplicate words in a string
    removeDuplicateWords1: function(s) {
      return s.split(' ')
        .filter(function(item, index, allItems) {
          return index === allItems.indexOf(item);
        })
        .join(' ');
    },

    //Todo: Approach 2: Do it using regex.
    removeDuplicateWords2: function(s) {
      return s.replace(/(\w+)\1/, '')
    },

    numberOfWordsInString: function(s) {
      return s.split(' ').length;
    },

    checkValidUserName: function(userName) {
      var usernamePattern = /\D[a-zA-Z | 0-9-]{29}/;
      return usernamePattern.test(userName);
    },

    replaceAllSpacesInString: function(str) {
      var spaceCount = 0,
        newStrLength,
        newStr= '';
      
      for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === ' ') {
          spaceCount++;
        }
      }
      newStrLength = str.length + spaceCount * 2;
      newStr = Array(newStrLength).join('');
      for (var i = str.length - 1 ; i > 0 ; i--) {
        if (str.charAt(i) === ' ') {
          newStr[newStrLength] = '0';
          newStr[newStrLength - 1] = '2';
          newStr[newStrLength - 2] = '%';
          newStrLength = newStrLength - 3;
        }
        else {
          newStr[newStrLength ] = str.charAt(i);
          newStrLength = newStrLength - 1;
        }
      }

      return newStr;
    },

    anagrams: function() {
      
    },

    // find if string s2 is formed by rotating string s1
    stringRotation: function(str1, str2) {
      var len = str1.length;
      // Check if sring1 and string2 are equal length and not empty
      if ( len === str2.length && len > 0) {
        var str3 = str1 + str1;
        if (str3.indexOf(str2) > -1) {
          return true;
        }
        else {
          return false;
        }
      }
    },


    // 3 ways to reverse a string in javascript.

    reverseAString1: function(s) {
      var charArr = s.split(''),
        l = charArr.length;

      for (var i = 0; i < Math.floor(l/2); i++) {
        var c = charArr[i];
        charArr[i] = charArr[l - i -1];
        charArr[l - i -1] = c;
      }

      var reverseString = charArr.join('');
      return reverseString
    },

    reverseAString2: function(s) {
      return s.split('').reverse().join('');
    },

    // Through recursion

    reverseAString3: function(s) {
      return (s === '') ? '' : reverseAString1(s.substr(1)) + s.charAt(0);
    }
  }

})();

console.log(string.reverseAString2('ramjki'));
//console.log(string.checkValidUserName("1GauravKesarwani"));
//console.log(string.checkValidUserName("GauravKesarwanifksjfhskjdhskhfaksjhakshfsdakfsahdfkdsahfdskajfd"));