let cl = console.log;

/**
 * Helper function to count the number of set bits (1s) in binary representation of n
 * Example: n = 13 (binary 1101) → returns 3
 */
var getSetBitCount = function (n) {
    let count = 0;

    // Iterate over all 32 bits of the integer
    for (let i = 0; i < 32; i++) {
        // (1 << i) isolates the i-th bit
        // If that bit is set in n, increment count
        if (n & (1 << i)) {
            count++;
        }
    }

    return count;
};


/**
 * Main function: sumIndicesWithKSetBits
 * -------------------------------------
 * Given an array 'a' and integer 'k',
 * returns the sum of all a[i] where the index i has exactly k bits set to 1.
 */
var sumIndicesWithKSetBits = function (a, k) {
    let n = a.length;
    let sum = 0;

    // Loop through all indices in the array
    for (let i = 0; i < n; i++) {
        // Count how many bits are set in the current index i
        let setBitCount = getSetBitCount(i);

        // If this index has exactly k set bits, include its value in the sum
        if (setBitCount === k) {
            sum += a[i];
        }
    }

    // Return total sum
    return sum;
};
