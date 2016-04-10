'use strict';

function Node(data) {
	this.data = data;
	this.next = null;
}

function LinkedList() {
	this._length = 0;
	this._head = null;
}

LinkedList.prototype = {
	//restore constructor
	constructor: LinkedList,

	//insert a node at the end of Link List
	insertAtLast: function(data) {
		Node node = new Node(data);

		/* 
			Another way to initialize node:

			var node = {
				data: data,
				next: null
			}
		*/

		//special case: when list is empty

		var current = this._head;

		if (current === null) {
			this._head = node;
		}
		else {
			while (current.next !== null) {
				current = current.next;
			}
			current.next = node;
			node.next = null;
		}

		this._length++;
	},

	/* search an item at a given position
		 index: zero based index of the item whose value should be returned.
	*/
	searchAtPosition: function(index) {

		// check out of bound values 
		if (index > -1 && index < this._length) {
			var current = this._head;

			while(i++ < index) {
				current = current.next;
			}

			return current.data;
		}
		else {
			return null;
		}
	},

	/*
		index: zero based index of the item which is to be removed.
	*/

	remove: function(index) {
		if (index > -1 && index < this._length) {
			var current = this._head,
				previous = null,
				i = 0;

			if (index === 0){
				_head = _head.next;
			}
			else {
				while (i++ < index && current.next !== null) {
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
			}

			this._length--;
			return current.data;
		}
		else {
			return null;
		}
	}
}
