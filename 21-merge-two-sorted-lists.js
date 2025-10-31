/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 160. Intersection of Two Linked Lists
 *
 * Given the heads of two singly linked lists, return the node at which
 * the two lists intersect. If the two linked lists have no intersection, return null.
 *
 * Example:
 * A:       a1 → a2
 *                   ↘
 *                     c1 → c2 → c3
 *                   ↗
 * B: b1 → b2 → b3
 *
 * Output: Reference to node c1
 *
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode | null}
 */
var getIntersectionNode = function (headA, headB) {
    // Delegate to helper class
    return LinkedList_.getIntersectionNode(headA, headB);
};

class LinkedList_ {

    /**
     * Detects the intersection node between two linked lists.
     * Uses a Set to store references of nodes from list A,
     * then checks each node in list B against that set.
     *
     * Time complexity: O(m + n)
     * Space complexity: O(m)
     *
     * @param {ListNode} head1 - Head of first list
     * @param {ListNode} head2 - Head of second list
     * @return {ListNode | null} - The intersection node, or null if none exists
     */
    static getIntersectionNode(head1, head2) {
        let set1 = new Set(); // To store visited nodes from list A

        // Step 1: Traverse list A and store all node references
        let t = head1;
        while (t) {
            set1.add(t);
            t = t.next;
        }

        // Step 2: Traverse list B and check if any node exists in set1
        t = head2;
        while (t) {
            if (set1.has(t)) {
                // Found the intersection node (same reference)
                return t;
            }
            t = t.next;
        }

        // Step 3: No intersection found
        return null;
    }

    /**
     * Detects whether a cycle exists in a linked list.
     * Uses a Set to track visited nodes.
     */
    static hasCycle(head) {
        let set = new Set();
        let t = head;
        while (t) {
            if (set.has(t)) {
                return true;
            }
            set.add(t);
            t = t.next;
        }
        return false;
    }

    /**
     * Assigns an array of values to the nodes in the list sequentially.
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
     * Converts the linked list to an array for easier visualization.
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
     * Returns the number of nodes in the linked list.
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
     */
    static insertAtBegin(head, insertVal) {
        let newNode = new ListNode(insertVal, head);
        head = newNode;
        return head;
    }

    /**
     * Inserts a new node at the end of the list.
     */
    static insertAtEnd(head, insertVal) {
        let t = head;
        while (t && t.next !== null) {
            t = t.next;
        }
        if (t && t.next === null) {
            let newNode = new ListNode(insertVal, null);
            t.next = newNode;
        }
    }

    /**
     * Inserts a new node after the node that has a specific value.
     */
    static insertAfter(head, afterVal, insertVal) {
        if (!head) {
            throw new Error(`Insert failed: ${afterVal} not found`);
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

        throw new Error(`Insert failed: ${afterVal} not found`);
    }

    /**
     * Deletes the first occurrence of a node with the given value.
     */
    static deleteNode(head, deleteVal) {
        if (!head) {
            throw new Error(`deleteNode failed: head not found`);
        }

        if (head.val === deleteVal) {
            head = head.next;
            return head;
        }

        let t = head;
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
     * Deletes the first node in the list.
     */
    static deleteBegin(head) {
        if (!head) return null;
        return head.next;
    }

    /**
     * Removes all nodes with a specific value from the list.
     */
    static removeElementsOfValue(head, deleteVal) {
        // Skip initial nodes that match deleteVal
        while (head && head.val === deleteVal) {
            head = head.next;
        }

        let t = head;
        while (t && t.next) {
            if (t.next.val === deleteVal) {
                t.next = t.next.next;
            } else {
                t = t.next;
            }
        }

        return head;
    }

    /**
     * Removes consecutive duplicate nodes from a sorted list.
     */
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
}
