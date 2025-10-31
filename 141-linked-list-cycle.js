/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 141. Linked List Cycle
 * Determine if a linked list contains a cycle.
 *
 * @param {ListNode} head - The head of the linked list
 * @return {boolean} - True if a cycle exists, otherwise false
 */
var hasCycle = function (head) {
    // Delegate cycle detection logic to the LinkedList_ class
    return LinkedList_.hasCycle(head);
};

class LinkedList_ {
    /**
     * Detects if the given linked list contains a cycle.
     * 
     * @param {ListNode} head
     * @return {boolean}
     */
    static hasCycle(head) {
        // Use a Set to store visited nodes
        // If we visit the same node twice, there’s a cycle
        let set = new Set();
        let t = head;

        while (t) {
            if (set.has(t)) {
                // Node seen before → cycle detected
                return true;
            }
            set.add(t);  // Mark current node as visited
            t = t.next;  // Move to next node
        }

        // Reached the end → no cycle
        return false;
    }

    /**
     * Assigns values from an array to the nodes of the linked list.
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
     * Converts a linked list to an array of values.
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
     * Calculates the length of the linked list.
     * @param {ListNode} head
     * @return {number}
     */
    static getLength(head) {
        let t = head;
        let len = 0;
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
     * @return {ListNode} - New head
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
        // Traverse to the last node
        while (t && t.next !== null) {
            t = t.next;
        }
        // Create a new node and attach it at the end
        if (t && t.next === null) {
            let newNode = new ListNode(insertVal, null);
            t.next = newNode;
        }
    }

    /**
     * Inserts a new node after a node with a specific value.
     * @param {ListNode} head
     * @param {number} afterVal - Insert after this value
     * @param {number} insertVal - Value to insert
     */
    static insertAfter(head, afterVal, insertVal) {
        if (!head) {
            throw new Error(`Insert failed: ${afterVal} is not found`);
        }

        let t = head;
        // Find the node after which to insert
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

    /**
     * Deletes the first node found with the given value.
     * @param {ListNode} head
     * @param {number} deleteVal
     */
    static deleteNode(head, deleteVal) {
        if (!head) {
            throw new Error(`deleteNode failed: head is not found`);
        }

        // If the head node itself needs to be deleted
        if (head.val === deleteVal) {
            head = head.next;
            return head;
        }

        let t = head;
        // Find node before the one to delete
        while (t && t.next && t.next.val !== deleteVal) {
            t = t.next;
        }

        if (t && t.next && t.next.val === deleteVal) {
            t.next = t.next.next;  // Bypass the deleted node
            return head;
        }

        throw new Error(`deleteNode failed: ${deleteVal} is not found`);
    }

    /**
     * Deletes the first node (head) of the list.
     * @param {ListNode} head
     * @return {ListNode}
     */
    static deleteBegin(head) {
        if (!head) return null;
        head = head.next;
        return head;
    }

    /**
     * Removes all nod*
