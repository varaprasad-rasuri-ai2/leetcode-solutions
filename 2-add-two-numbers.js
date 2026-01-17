// Adds two numbers represented by linked lists (digits stored in reverse order)
var addTwoNumbers = function (head1, head2) {
	// Convert both linked lists to arrays
	let a = LinkedList_.toArray(head1);
	let b = LinkedList_.toArray(head2);

	// Sum the arrays digit by digit
	let c = sumOfArrays(a, b);

	// Convert the resulting array back to a linked list
	return LinkedList_.fromArray(c);
};

// Helper function to add two arrays of digits
function sumOfArrays(a, b) {
	let c = [];       // Result array
	let carry = 0;    // Carry from previous digit

	// Loop until both arrays are fully processed
	for (let i = 0, j = 0; i < a.length || j < b.length; i++, j++) {
		// Add digits and carry (use 0 if index is out of bounds)
		let sum = (a[i] ?? 0) + (b[j] ?? 0) + carry;

		// Store the unit digit
		c.push(sum % 10);

		// Update carry
		carry = Math.trunc(sum / 10);
	}

	// If there is a remaining carry, add it
	if (carry) c.push(carry);

	return c;
}

// Node class for singly linked list
class ListNode22222 {
	val;   // Value of the node
	next;  // Pointer to the next node

	constructor(val1, next1 = null) {
		this.val = val1;
		this.next = next1;
	}
}

// Utility class containing linked list helper methods
class LinkedList_ {

	// Finds the intersection node of two linked lists (by reference)
	static getIntersectionNode(head1, head2) {
		let set1 = new Set();

		// Store all nodes of first list
		let t = head1;
		while (t) {
			set1.add(t);
			t = t.next;
		}

		// Check if any node of second list exists in the set
		t = head2;
		while (t) {
			if (set1.has(t)) {
				return t;
			}
			t = t.next;
		}
		return null;
	}

	// Detects if a linked list has a cycle
	static hasCycle(head) {
		let set = new Set();
		let t = head;

		while (t) {
			// If node already seen, cycle exists
			if (set.has(t)) {
				return true;
			}
			set.add(t);
			t = t.next;
		}
		return false;
	}

	// Assigns values from array to existing linked list nodes
	static assign(head, vals) {
		let i = 0;
		let t = head;

		while (t && i < vals.length) {
			t.val = vals[i];
			t = t.next;
			i++;
		}
		return head;
	}

	// Converts a linked list to an array of values
	static toArray(head) {
		let vals = [];
		let t = head;

		while (t) {
			vals.push(t.val);
			t = t.next;
		}
		return vals;
	}

	// Creates a linked list from an array
	static fromArray(arr) {
		// Reverse to maintain original order when inserting at head
		arr = [...arr].reverse();
		let newHead = null;

		for (let e of arr) {
			newHead = LinkedList_.insertAtBegin(newHead, e);
		}
		return newHead;
	}

	// Returns the length of the linked list
	static getLength(head) {
		let t = head;
		let len = 0;

		while (t) {
			len++;
			t = t.next;
		}
		return len;
	}

	// Inserts a node at the beginning (alias)
	static insert(head, insertVal) {
		return LinkedList_.insertAtBegin(insertVal);
	}

	// Inserts a new node at the beginning of the list
	static insertAtBegin(head, insertVal) {
		let newNode = new ListNode(insertVal, head);
		head = newNode;
		return head;
	}

	// Inserts a new node at the end of the list
	static insertAtEnd(head, insertVal) {
		let t = head;

		// Traverse to the last node
		while (t && t.next !== null) {
			t = t.next;
		}

		if (t && t.next === null) {
			let newNode = new ListNode(insertVal, t.next);
			t.next = newNode;
			return;
		}
	}

	// Inserts a node after a given value
	static insertAfter(head, afterVal, insertVal) {
		if (!head) {
			throw new Error(`Insert failed: ${afterVal} is not found`);
		}

		let t = head;

		// Search for the target value
		while (t && t.val !== afterVal) {
			t = t.next;
		}

		if (t && t.val === afterVal) {
			let newNode = new ListNode(insertVal, t.next);
			t.next = newNode;
			return;
		}

		throw new Error(`Insert failed: ${afterVal} is not found`);
	}

	// Deletes the first node with the given value
	static deleteNode(head, deleteVal) {
		if (!head) {
			throw new Error(`deleteNode failed: head is not found`);
		}

		// If head needs to be deleted
		if (head.val === deleteVal) {
			head = head.next;
			return;
		}

		let t = head;

		// Find node before the one to delete
		while (t && t.next && t.next.val !== deleteVal) {
			t = t.next;
		}

		if (t && t.next && t.next.val === deleteVal) {
			t.next = t.next.next;
			return;
		}

		throw new Error(`deleteNode failed: ${deleteVal} is not found`);
	}

	// Deletes the first node of the list
	static deleteBegin(head) {
		if (!head) {
			return;
		}
		head = head.next;
	}

	// Removes all nodes with a specific value
	static removeElementsOfValue(head, deleteVal) {
		// Remove leading nodes with deleteVal
		let t = head;
		while (t && t.val === deleteVal) {
			t = t.next;
		}
		head = t;

		// Remove matching nodes in the rest of the list
		t = head;
		while (t && t.next) {
			if (t.next.val === deleteVal) {
				t.next = t.next.next;
			} else {
				t = t.next;
			}
		}

		return head;
	}

	// Removes duplicate values from a sorted linked list
	static deleteDuplicatesInSortedLinkedList(head) {
		let t = head;

		while (t && t.next) {
			if (t.next.val === t.val) {
				t.next = t.next.next;
			} else {
				t = t.next;
			}
		}
		return head;
	}

	// Merges two sorted linked lists into one sorted list
	static mergeTwoSortedLists = function (head1, head2) {
		let t1 = head1;
		let t2 = head2;

		let head3 = null; // Head of merged list
		let t3 = null;    // Tail of merged list

		while (t1 || t2) {
			if ((t1 && !t2) || t1?.val <= t2?.val) {
				if (!head3) {
					head3 = t1;
				} else {
					t3.next = t1;
				}
				t3 = t1;
				t1 = t1.next;
			} else {
				if (!head3) {
					head3 = t2;
				} else {
					t3.next = t2;
				}
				t3 = t2;
				t2 = t2.next;
			}
		}

		return head3;
	};
}
