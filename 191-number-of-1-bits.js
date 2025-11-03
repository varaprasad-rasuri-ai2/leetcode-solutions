let cl = console.log;

/**
 * Helper function: getSetBitCount
 * --------------------------------
 * Counts how many bits are set to 1 in the binary representation of n.
 * Example: n = 13 → binary = 1101 → returns 3.
 */
var getSetBitCount = function (n) {
    let count = 0;

    // Loop over all 32 bits of the integer
    for (let i = 0; i < 32; i++) {
        // (1 << i) creates a mask with the i-th bit set.
        // n & (1 << i) checks if that bit is 1 in n.
        if (n & (1 << i)) {
            count++; // Increment when bit is set.
        }
    }

    return count; // Total number of 1 bits
};


/**
 * Main function: hammingWeight
 * -----------------------------
 * Given an integer n, return the number of 1 bits in its binary form.
 * Uses helper function getSetBitCount() for clarity.
 */
var hammingWeight = function (n) {
    // Count the number of 1 bits using helper
    let setBitCount = getSetBitCount(n);

    // Return total count
    return setBitCount;
};
