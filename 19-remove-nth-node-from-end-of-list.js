/**
 * Removes the n-th node from the end of a linked list.
 *
 * @param {ListNode} head - Head of the linked list
 * @param {number} n - Position from the end (1-indexed)
 * @return {ListNode} - Head of the modified linked list
 */
var removeNthFromEnd = function(head, n) {
    let count = 0;      // Count total number of nodes
    let t = head;

    // 1️⃣ Count total nodes in the list
    while (t) {
        count++;
        t = t.next;
    }

    // 2️⃣ Find the index of node to delete (0-indexed)
    let tndexToDelete = count - n;

    // 3️⃣ If the head itself needs to be removed
    if (tndexToDelete === 0) {
        head = head.next;
        return head;
    }

    tndexToDelete--; // Move to the node just before the one to delete

    t = head;
    // 4️⃣ Move to the node just before the one to remove
    while (tndexToDelete--) {
        t = t.next;
    }

    // 5️⃣ Skip the node to remove
    t.next = t.next.next;

    return head;
};


/**
 * Removes the n-th node from the end of a linked list using two pointers.
 *
 * @param {ListNode} head - Head of the linked list
 * @param {number} n - Position from the end (1-indexed)
 * @return {ListNode} - Head of the modified linked list
 */
var removeNthFromEnd2222 = function(head, n) {
    // Step 1: Create a dummy node to simplify edge cases (e.g., removing head)
    const dummy = new ListNode(0);
    dummy.next = head;

    let first = dummy; // Pointer that will be advanced by n+1 steps
    let second = dummy; // Pointer that will lag behind

    // Step 2: Advance first pointer by n+1 steps
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    // Step 3: Move both pointers until first reaches the end
    while (first) {
        first = first.next;
        second = second.next;
    }

    // Step 4: Delete the n-th node from the end
    second.next = second.next.next;

    // Step 5: Return the modified list
    return dummy.next;
};


