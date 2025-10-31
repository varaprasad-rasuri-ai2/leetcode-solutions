/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let cl = console.log; // Shortcut for logging (useful for debugging)

    let t = head;  // Pointer to traverse the list
    let count = 0; // Variable to count total nodes

    cl('t==1=== ', t);

    // Step 1: Count how many nodes are in the list
    while (t) {
        count++;
        t = t.next;
    }

    cl('count ', count);

    // Step 2: Determine how many steps to move to reach the middle node
    // Math.trunc(count / 2) ensures that for even counts, we move to the second middle node.
    let halfJumps = Math.trunc(count / 2);
    cl('halfJumps ', halfJumps);

    // Step 3: Reset pointer to head to traverse again
    t = head;
    cl(' t===2=== ', t);

    // Step 4: Move the pointer forward halfJumps times
    for (let jumps = 0; (jumps < halfJumps) && t; jumps++) {
        cl('jumps ', jumps);
        cl(' t.next ', t.next);
        t = t.next;
        cl('inside t ', t);
    }

    cl(' t===3=== ', t);

    // Step 5: Return the node we stopped at — the middle node
    return t;
};
