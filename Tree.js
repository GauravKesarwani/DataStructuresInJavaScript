'use strict';

/* Example Node:

var node = {
	data: null;
	left: null;
	right: null;
} 

*/

function Node() {
	this._data = data;
	this._left = null;
	this._right = null;
}

function BinarySearchTree() {
	this._root = null;
}

BinarySearchTree.prototype = {
	//restore  the constructor
	constructor: BinarySearchTree,

	preorder: function(root) {
		while(root != null) {
			console.log(root.data);
			this._preorder(root.left);
			this._preorder(root.right);
		}
	},

	inorder: function(root) {
		while(root != null) {
			this._inorder(root.left);
			console.log(root.data);
			this._inorder(root.right);
		}
	},

	postorder: function(root) {
		while(root != null) {
			this._postorder(root.left);
			this._postorder(root.right);
			console.log(root.data);
		}
	},

	levelOrderTraversal: function(root) {
		var queue = new Queue();

		if (!root) {
			return;
		}
		else {
			queue.enQueue(root);
			while(!queue.isEmpty()) {
				var n = queue.deQueue();
				if (n.left != null) {
					queue.enQueue (n.left);
				}
				if (n.right != null) {
					queue.enQueue(n.right);
				}
			}
		}
	},

	/* Algorithm to find the maximum element in Binary Search Tree 
		Approach 1 : Use Recursion
		Approach 2 : Use level order traversal 
	*/

	findMaxElement: function(root) {
		var maxLeft,
		  maxRight,
		  max = 0;

		if (!root) {
			return null;
		}  

		maxLeft = findMaxElement(root.left);
		maxRight = findMaxElement(root.right);

		if (maxLeft > maxRight) {
			max = maxLeft;
		}
		else if (maxRight >= maxLeft) {
			max = maxRight;
		}
		else if (root.data > max){
			max = root.data;
		}

		return max;
	},

	findSizeOfBinaryTree: function(root) {
		if (!root) {
			return 0;
		}
		else {
			return (1 + findSizeOfBinaryTree(root.left) + findSizeOfBinaryTree(root.right));
		}
	},

	/* 
 		Time Complexity = O(n)
 		Space Complexity = O(n)
	*/

	findHeightOrDepthOfBinaryTree: function(root) {
		var leftSubtreeHeight,
		  rightSubtreeHeight;

		if (!root) {
			return 0;
		}  

		leftSubtreeHeight = 1 + findHeightOrDepthOfBinaryTree(root.left);
		rightSubtreeHeight = 1 + findHeightOrDepthOfBinaryTree(root.right);

		/*
		if (leftSubtreeHeight >= rightSubtreeHeight) {
			return leftSubtreeHeight;
		}  else {
			return rightSubtreeHeight;
		}
		*/

		return (leftSubtreeHeight > rightSubtreeHeight) ? leftSubtreeHeight : rightSubtreeHeight;
	},

	/* Find number of leaves in binary tree without using recursion */
	findNumberOfLeaves: function(root) {
		if (!root) {
			return 0;
		}
		var q = new Queue(),
		  count = 0;

		q.enQueue(root);

		while(!q.isEmpty()) {
			Node n = q.deQueue();
			if (!n._left && !n._right) {
				count++;
			}

			if (!n._left) {
				q.enQueue(n._left);
			}
			if (!n._right) {
				q.enQueue(n.right);
			}
		}

		return count;
	}
}





