// Helper function to compute the number of bits needed to represent n
function bitLength(n) {
    if (n === 0) return 1;           // Special case: 0 needs one bit
    return Math.floor(Math.log2(n)) + 1;  // floor(log2(n)) + 1 gives the bit length
}

var bitwiseComplement = function (n) {
    let blen = bitLength(n);           // Get number of bits in n

    // Create a mask with all bits set to 1 (same length as n)
    // Example: n = 5 ("101"), blen = 3, mask = (1 << 3) - 1 = 7 ("111")
    // XOR mask with n to flip all bits
    return ((1 << blen) - 1) ^ n;
};

var bitwiseComplement2222222 = function (n) {
    if (!n) return 1;   // Special case: complement of 0 is 1

    let temp = n;
    for (let i = 0; temp; i++) {
        n ^= (1 << i);  // Flip the i-th bit of n
        temp >>= 1;     // Move to next bit
    }

    return n;
};
