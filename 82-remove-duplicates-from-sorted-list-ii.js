/**
 * Removes all nodes that have duplicate numbers from a linked list.
 * Only nodes with unique values remain.
 *
 * @param {ListNode} head - Head of the linked list
 * @return {ListNode} - Head of modified list with duplicates removed
 */
var deleteDuplicates = function(head) {
    let freq = {}; // Object to store frequency of each value

    // 1️⃣ First pass: count frequency of each value
    let t = head;
    while (t) {
        freq[t.val] = (freq[t.val] ?? 0) + 1;
        t = t.next;
    }

    // 2️⃣ Remove duplicates at the head of the list
    while (head && freq[head.val] > 1) {
        head = head.next;
    }

    // 3️⃣ Traverse the list and remove nodes with duplicate values
    t = head;
    while (t && t.next) {
        if (freq[t.next.val] > 1) {
            // Skip over duplicate node
            t.next = t.next.next;
        } else {
            // Move forward if next node is unique
            t = t.next;
        }
    }

    return head; // Return modified head
};



/**
 * Removes all nodes with duplicate values from a linked list.
 * Only keeps nodes with unique values.
 *
 * @param {ListNode} head - Head of the linked list
 * @return {ListNode} - Head of list with duplicates removed
 */
var deleteDuplicates222 = function(head) {
    if (!head) return null;

    // Step 1: Count frequencies of each value
    const freq = {};
    let current = head;
    while (current) {
        freq[current.val] = (freq[current.val] || 0) + 1;
        current = current.next;
    }

    // Step 2: Remove duplicates at the head
    while (head && freq[head.val] > 1) {
        head = head.next;
    }

    // Step 3: Remove duplicates in the rest of the list
    current = head;
    while (current && current.next) {
        if (freq[current.next.val] > 1) {
            // Skip the duplicate node
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};
