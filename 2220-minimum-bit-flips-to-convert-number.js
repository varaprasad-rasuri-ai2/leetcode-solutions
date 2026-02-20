// Approach 1: Use XOR to directly find differing bits
var minBitFlips = function (start, goal) {
    // XOR highlights where bits differ: 1 means different, 0 means same
    let xor = start ^ goal;

    // Count number of 1's in xor (each '1' means one flip needed)
    let flipCount = 0;
    while (xor > 0) {
        // If the least significant bit is 1, increment flipCount
        flipCount += xor & 1;
        // Shift right to check the next bit
        xor >>= 1;
    }

    return flipCount;
};


// Approach 2: Manually check each bit using bit masking
var minBitFlips_v2 = function (start, goal) {
    let flipCount = 0;

    // Loop through all 32 bits of an integer
    for (let i = 0; i < 32; i++) {
        // Create a mask with only the i-th bit set (1 << i)
        let mask = 1 << i;

        // Compare the i-th bit of both numbers
        if ((start & mask) !== (goal & mask)) {
            flipCount++; // Increment when bits differ
        }
    }

    return flipCount;
};

// Approach 3: Same logic as v2, but clearer variable naming for readability
var minBitFlips_v3 = function (start, goal) {
    let flipCount = 0;

    for (let bitIndex = 0; bitIndex < 32; bitIndex++) {
        let bitMask = 1 << bitIndex;  // Mask for current bit (1, 2, 4, 8...)

        // Extract bit value from start and goal
        let startBit = start & bitMask;
        let goalBit  = goal & bitMask;

        // Compare bits
        if (startBit !== goalBit) {
            flipCount++;
        }
    }

    return flipCount;
};
