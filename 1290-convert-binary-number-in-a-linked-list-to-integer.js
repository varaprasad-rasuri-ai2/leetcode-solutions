/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 1290. Convert Binary Number in a Linked List to Integer
 *
 * Given a linked list where each node contains either 0 or 1,
 * and the most significant bit (MSB) is at the head,
 * return the integer value of the binary number represented by the list.
 *
 * Example:
 * Input: head = [1,0,1]
 * Output: 5
 * Explanation: (1 × 2²) + (0 × 2¹) + (1 × 2⁰) = 4 + 0 + 1 = 5
 *
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let t = head;       // Pointer to traverse the linked list
    let vals = [];      // Array to store binary digits from the list

    // Step 1: Traverse
