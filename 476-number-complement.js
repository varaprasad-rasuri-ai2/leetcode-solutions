var findComplement = function (x) {
    let y = x;  // Copy of x to track how many bits we processed

    // Loop through each bit position until y becomes 0
    for (let i = 0; y > 0; i++) {
        let bitMask = x & (1 << i); // Check if the i-th bit is set

        if (bitMask) {
            x ^= 1 << i; // If bit is 1, flip it to 0
        } else {
            x |= 1 << i; // If bit is 0, flip it to 1
        }

        y >>= 1; // Move to the next bit
    }

    return x; // x now contains the complement
};


var findComplement3333 = function (x) {
    let y = x;
    for (let i = 0; y > 0; i++) {
        let bitMask = x & (1 << i);

        if (bitMask) {
            x ^= bitMask; // Flip 1 → 0 using the same mask
        } else {
            x |= (1 << i); // Flip 0 → 1
        }

        y >>= 1; // Reduce y to track remaining bits
    }
    return x;
};


var findComplement = function(num) {
    let mask = 1;

    // Build mask with 1s in all bit positions of num
    while (mask < num) {
        mask = (mask << 1) | 1;
    }

    // XOR num with mask to flip all bits
    return num ^ mask;
};

