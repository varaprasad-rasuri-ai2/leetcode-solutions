var reverseList = function (head) {
    let vals = LinkedList_.toArray(head)
    vals.reverse()
    LinkedList_.assign(head, vals)
    return head
};

class LinkedList_ {
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
	static toArray(head) {
		let vals = [];
		let t = head;
		while (t) {
			vals.push(t.val);
			t = t.next;
		}
		return vals;
	}
	static getLength(head) {
		let t = head;
		let len = 0;
		while (t) {
			len++;
			t = t.next;
		}
		return len;
	}

	static insert(head, insertVal) {
		LinkedList_.insertAtBegin(insertVal);
	}
	static insertAtBegin(head, insertVal) {
		let newNode = new ListNode(insertVal, head);
		head = newNode;
	}
	static insertAtEnd(head, insertVal) {
		let t = head;
		while (t && t.next !== null) {
			t = t.next;
		}
		if (t && t.next === null) {
			let newNode = new ListNode(insertVal, t.next);
			t.next = newNode;
			return;
		}
	}
	static insertAfter(head, afterVal, insertVal) {
		// t.val === insertVal
		// nn.next = t.next
		// t.next === nn
		if (!head) {
			throw new Error(`Insert failed: ${afterVal} is not found`);
			return;
		}

		let t = head;
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

	static deleteNode(head, deleteVal) {
		// t.next.val === deleteVal
		// t.next = t.next.next
		if (!head) {
			throw new Error(`deleteNode failed: head is not found`);
		}

		if (head.val === deleteVal) {
			head = head.next;
			return;
		}

		let t = head;
		while (t && t.next && t.next.val !== deleteVal) {
			t = t.next;
		}
		if (t && t.next && t.next.val === deleteVal) {
			t.next = t.next.next;
			return;
		}
		throw new Error(`deleteNode failed: ${deleteVal} is not found`);
	}
	static deleteBegin(head) {
		if (!head) {
			return;
		}
		head = head.next;
	}
}
