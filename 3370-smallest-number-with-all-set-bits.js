/**
 * Helper function: checks if all bits in n are set to 1.
 * ------------------------------------------------------
 * Example:
 *  n = 7  → binary 111 → returns true
 *  n = 6  → binary 110 → returns false
 */
var areAllBitsSet = function (n) {
    // 0 is not considered "all bits set"
    if (n === 0) return false;

    // Loop while n has bits remaining
    while (n) {
        // Check the least significant bit (rightmost bit)
        if (n & 1) {
            // If current bit is 1 → right-shift (remove that bit)
            n = n >> 1;
        } else {
            // If any bit is 0 → not all bits are set
            return false;
        }
    }

    // If we never found a 0 bit → all bits were 1
    return true;
};


/**
 * Main function: finds the smallest number >= n whose binary representation
 * contains only set bits (i.e., 1s only).
 */
var smallestNumber = function (n) {
    // Keep incrementing x until all bits are set
    for (let x = n; ; x++) {
        if (areAllBitsSet(x)) {
            return x; // First valid number found
        }
    }
};
