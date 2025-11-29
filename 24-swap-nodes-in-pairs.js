/**
 * Swaps every two adjacent nodes in a linked list.
 * Note: This implementation swaps node values, not actual nodes.
 *
 * @param {ListNode} head - Head of the linked list
 * @return {ListNode} - Head of the modified linked list
 */
var swapPairs = function(head) {
    let t = head;

    // 1️⃣ Traverse the list while there are at least two nodes ahead
    while (t && t.next) {
        // Swap values of current node and next node
        [t.val, t.next.val] = [t.next.val, t.val];

        // Move two steps forward
        t = t.next.next;
    }

    return head; // Return the modified list
};



/**
 * Swaps every two adjacent nodes in a linked list (actual nodes, not values).
 *
 * @param {ListNode} head - Head of the linked list
 * @return {ListNode} - Head of the modified linked list
 */
var swapPairs222 = function(head) {
    // Step 1: Create a dummy node to simplify edge cases
    const dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy; // Pointer to the node before the pair to swap

    // Step 2: Traverse the list in pairs
    while (prev.next && prev.next.next) {
        const first = prev.next;      // First node in the pair
        const second = prev.next.next; // Second node in the pair

        // Step 3: Swap nodes
        first.next = second.next; // Point first to node after second
        second.next = first;      // Point second to first
        prev.next = second;       // Link previous node to second

        // Step 4: Move prev to the end of the swapped pair
        prev = first;
    }

    // Step 5: Return the new head
    return dummy.next;
};
