'use strict';

function Stack(s) {
  this._maxSize = s;
  this._stackArr = [ ];
  this._top = -1;
}

Stack.prototype = {
  
  //restore the constructor 	
  constructor: Stack,

  push: function(data) {
  	if (this._top === this._maxSize -1) {
  		console.log('Stack Overflow')
  	}
  	this._stackArr[++this._top] = data;
  },

  pop: function() {
  	if (this._top === -1) {
  		console.log('Stack Underflow'); 
  	}
  	return this._stackArr[top--];
  }
}


var stackObj = new Stack(5);
if (stackObj.push(5) === -1) {
	console.log("Error");
}
stackObj.push(10);
stackObj.push(11);
stackObj.push(7);
stackObj.push(9);
stackObj.push(5);