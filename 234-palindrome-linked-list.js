/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let t = head;       // Pointer to traverse the linked list
    let vals = [];      // Array to store all node values

    // Step 1: Traverse the linked list and collect all values
    while (t) {
        vals.push(t.val);   // Add the current node's value to the array
        t = t.next;         // Move to the next node
    }

    // Step 2: Create a reversed copy of the values array
    // Using the spread operator ensures we don't mutate the original array
    let reverseList = [...vals].reverse();

    // Step 3: Compare the original list and the reversed list element by element
    for (let i = 0; i < vals.length; i++) {
        if (vals[i] !== reverseList[i]) {
            // If any pair of elements doesn't match, it's not a palindrome
            return false;
        }
    }

    // Step 4: If all elements match, the linked list is a palindrome
    return true;
};
