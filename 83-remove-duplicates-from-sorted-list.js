/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 83. Remove Duplicates from Sorted List
 *
 * Given the head of a sorted linked list, delete all duplicates
 * such that each element appears only once.
 *
 * Example:
 * Input: head = [1,1,2]
 * Output: [1,2]
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    // Delegate to helper method inside LinkedList_ class
    return LinkedList_.deleteDuplicatesInSortedLinkedList(head);
};

class LinkedList_ {
    /**
     * Detects if a linked list contains a cycle using a Set.
     * @param {ListNode} head
     * @return {boolean}
     */
    static hasCycle(head) {
        let set = new Set();
        let t = head;
        while (t) {
            if (set.has(t)) {
                // Already seen this node → cycle detected
                return true;
            }
            set.add(t);
            t = t.next;
        }
        return false;
    }

    /**
     * Assigns an array of values to the linked list nodes (in order).
     * @param {ListNode} head
     * @param {number[]} vals
     * @return {ListNode}
     */
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

    /**
     * Converts the linked list into an array of values.
     * @param {ListNode} head
     * @return {number[]}
     */
    static toArray(head) {
        let vals = [];
        let t = head;
        while (t) {
            vals.push(t.val);
            t = t.next;
        }
        return vals;
    }

    /**
     * Returns the length of the linked list.
     * @param {ListNode} head
     * @return {number}
     */
    static getLength(head) {
        let len = 0;
        let t = head;
        while (t) {
            len++;
            t = t.next;
        }
        return len;
    }

    /**
     * Inserts a new node at the beginning of the list.
     * @param {ListNode} head
     * @param {number} insertVal
     * @return {ListNode}
     */
    static insertAtBegin(head, insertVal) {
        let newNode = new ListNode(insertVal, head);
        head = newNode;
        return head;
    }

    /**
     * Inserts a new node at the end of the list.
     * @param {ListNode} head
     * @param {number} insertVal
     */
    static insertAtEnd(head, insertVal) {
        let t = head;
        // Traverse to the end of the list
        while (t && t.next !== null) {
            t = t.next;
        }
        // Append the new node at the end
        if (t && t.next === null) {
            let newNode = new ListNode(insertVal, null);
            t.next = newNode;
        }
    }

    /**
     * Inserts a node after a node containing a specific value.
     * @param {ListNode} head
     * @param {number} afterVal
     * @param {number} insertVal
     */
    static insertAfter(head, afterVal, insertVal) {
        if (!head) {
            throw new Error(`Insert failed: ${afterVal} not found`);
        }

        let t = head;
        // Find the target node
        while (t && t.val !== afterVal) {
            t = t.next;
        }

        if (t && t.val === afterVal) {
            let newNode = new ListNode(insertVal, t.next);
            t.next = newNode;
            return;
        }

        throw new Error(`Insert failed: ${afterVal} not found`);
    }

    /**
     * Deletes the first occurrence of a node with a given value.
     * @param {ListNode} head
     * @param {number} deleteVal
     * @return {ListNode}
     */
    static deleteNode(head, deleteVal) {
        if (!head) {
            throw new Error(`deleteNode failed: head not found`);
        }

        // If head node itself needs to be deleted
        if (head.val === deleteVal) {
            head = head.next;
            return head;
        }

        let t = head;
        // Find the node before the one to delete
        while (t && t.next && t.next.val !== deleteVal) {
            t = t.next;
        }

        if (t && t.next && t.next.val === deleteVal) {
            t.next = t.next.next;
            return head;
        }

        throw new Error(`deleteNode failed: ${deleteVal} not found`);
    }

    /**
     * Deletes the first node (head) and returns the new head.
     * @param {ListNode} head
     * @return {ListNode}
     */
    static deleteBegin(head) {
        if (!head) return null;
        return head.next;
    }

    /**
     * Removes all nodes that have a specific value.
     * @param {ListNode} head
     * @param {number} deleteVal
     * @return {ListNode}
     */
    static removeElementsOfValue(head, deleteVal) {
        // Ski
