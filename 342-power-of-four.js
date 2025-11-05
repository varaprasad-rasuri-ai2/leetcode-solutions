var isPowerOfFour = function (n) {
    // Powers of 4 are positive only (e.g., 1, 4, 16, 64, ...)
    if (n <= 0) return false;

    let ones = 0;   // Count of '1' bits in binary
    let zeros = 0;  // Count of '0' bits to the right of the 1 bit

    // Count bits until n becomes 0
    while (n) {
        if (n & 1) ones++;   // If least significant bit is 1
        else zeros++;        // Otherwise, count trailing zeros
        n >>= 1;             // Shift bits to the right by 1
    }

    //  A power of 4 must have exactly one '1' bit (like a power of 2)
    //     and that single '1' must appear at an *even bit position*.
    //     Example:
    //       1  -> binary 0001 -> 1 at position 0 (even) 
    //       4  -> binary 0100 -> 1 at position 2 (even) 
    //       16 -> binary 10000 -> 1 at position 4 (even) 
    //       8  -> binary 1000 -> 1 at position 3 (odd) 

    return (ones === 1) && (zeros % 2 === 0);
};
