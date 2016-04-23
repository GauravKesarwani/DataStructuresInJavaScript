function Queue(s) {
	this._maxSize = s;
	this._queueArray = [];
	this._front = this._rear = -1;
	this._nItem = 0;
}

Queue.prototype = {
	//restore the constructor
	constructor: Queue,

	isEmptyQueue: function() {
		return front === -1;
	},

	isFullQueue: function() {
		return (((rear + 1) % maxSize) === front);
	},

	enQueue: function(data) {
		if (this.isFullQueue()) {
			console.log('Queue Overflow');
		}
		else {
			rear = (rear + 1) % maxSize;
			this._queueArray[rear] = data;

			if (front === -1) {
				front = rear;
			}
		}
	},

	deQueue: function() {
		if (this.isEmptyQueue()) {
			console.log("Queue is empty");
		}
		else {
			var data  = this._queueArray[front];
			if (front === rear) {
				front = rear - 1;
			}
			else {
				front = (front + 1) % maxSize;
			}
		}

		return data;
	},

	reverseAQueue: function() {
		var stack = new Stack();
		while (!this._isEmptyQueue()) {
			stack.push(this._deQueue())
		}

		while(!stack.isEmptyStack()) {
			this._enQueue(s.pop());
		}
	}
}