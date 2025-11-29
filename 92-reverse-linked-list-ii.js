/**
 * Reverses a linked list from position left to right.
 *
 * @param {ListNode} head - Head of the linked list
 * @param {number} left - Starting position (1-indexed)
 * @param {number} right - Ending position (1-indexed)
 * @return {ListNode} - Head of the modified linked list
 */
var reverseBetween = function(head, left, right) {
    let vals = [];  // Array to store all node values temporarily

    // 1️⃣ Store all node values into an array
    let t = head;
    while (t) {
        vals.push(t.val);
        t = t.next;
    }

    // 2️⃣ Reverse the subarray from left-1 to right-1 (0-indexed)
    for (; left < right; left++, right--) {
        [vals[right - 1], vals[left - 1]] = [vals[left - 1], vals[right - 1]];
    }

    // 3️⃣ Write back the values into the linked list
    t = head;
    while (t) {
        t.val = vals.shift();  // Remove first value from array and assign
        t = t.next;
    }

    return head; // Return modified linked list
};


/**
 * Reverses a linked list from position left to right in-place.
 *
 * @param {ListNode} head - Head of the linked list
 * @param {number} left - Starting position (1-indexed)
 * @param {number} right - Ending position (1-indexed)
 * @return {ListNode} - Head of the modified linked list
 */
var reverseBetween222 = function(head, left, right) {
    if (!head || left === right) return head;

    // Step 1: Create a dummy node to handle edge cases
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    // Step 2: Move prev to the node before "left"
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    // Step 3: Reverse the sublist from left to right
    let curr = prev.next;      // Start of sublist
    let next = null;           // Temporary pointer
    let sublistPrev = prev;    // Node before the sublist

    for (let i = 0; i < right - left; i++) {
        next = curr.next;
        curr.next = next.next;
        next.next = sublistPrev.next;
        sublistPrev.next = next;
    }

    // Step 4: Return the modified list
    return dummy.next;
};

