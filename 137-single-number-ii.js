var singleNumber = function (a) {
    let ans = 0; // Will hold the unique number

    // Loop over each bit position (0 to 31 for 32-bit integers)
    for (let i = 0; i < 32; i++) {
        let counts = 0; // Count of set bits at this position across all numbers

        // Count how many numbers have this bit set
        for (let x of a) {
            let isBitSet = x & (1 << i); // Check if i-th bit is set
            if (isBitSet) counts++;
        }

        // If the count of this bit modulo 3 is 1,
        // it means the unique number has this bit set
        let isBitSetInUniqueNum = counts % 3;
        if (isBitSetInUniqueNum) {
            ans |= 1 << i; // Set this bit in the answer
        }
    }

    return ans; // Return the unique number
};


var singleNumber2222 = function (a) {
    let counts = new Array(32).fill(0); // Array to count set bits at each position
    let negCounts = 0; // Track negative numbers modulo 3

    for (let x of a) {
        if (x < 0) {
            x = -x;           // Make number positive for bit processing
            negCounts++;      // Count negative numbers
            negCounts %= 3;
        }

        // Count bits for current number
        for (let i = 0; i < 32; i++) {
            if (x & (1 << i)) {
                counts[i]++;
                counts[i] %= 3; // Keep modulo 3
            }
        }
    }

    // Reconstruct the number from bits
    let ans = counts.reverse().join(""); // Convert bit array to string
    ans = parseInt(ans, 2);              // Convert binary string to integer

    return negCounts ? -ans : ans;       // If the unique number is negative, flip sign
};
