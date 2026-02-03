var rotateRight = function(head, k) {
    let vals = [];  // Array to store all node values

    // 1️⃣ Store all node values into array
    let t = head;
    while (t) {
        vals.push(t.val);
        t = t.next;
    }

    let n = vals.length;

    // 2️⃣ Handle cases where k >= n
    if (n === 0) return head; // Empty list, nothing to rotate
    k = k % n;                // Only need to rotate k % n times
    if (k === 0) return head; // No rotation needed

    // 3️⃣ Rotate array by slicing and concatenating
    let deletedArr = vals.splice(n - k); // Last k elements
    vals = [...deletedArr, ...vals];     // Move them to the front

    // 4️⃣ Write back rotated values into linked list
    t = head;
    while (t) {
        t.val = vals.shift();
        t = t.next;
    }

    return head; // Return rotated list
};


var rotateRight222 = function(head, k) {
    if (!head || !head.next || k === 0) return head; // Edge cases

    // Step 1: Compute the length and get the tail node
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // Step 2: Make the list circular
    tail.next = head;

    // Step 3: Find new head and new tail positions
    k = k % length;
    let stepsToNewHead = length - k;
    let newTail = tail;

    // Step 4: Move newTail to the correct position
    while (stepsToNewHead > 0) {
        newTail = newTail.next;
        stepsToNewHead--;
    }

    // Step 5: Break the circle to form new list
    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
};


