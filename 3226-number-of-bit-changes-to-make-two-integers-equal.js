var minChanges = function (n, k) {
    // Initialize counter for the number of changes needed
    let count = 0;
    
    // Loop through all 32 bits (0-indexed from right)
    for (let i = 0; i < 32; i++) {
        let bitmask = 1 << i; // Mask to isolate the i-th bit
        let a = n & bitmask;  // Get the i-th bit of n
        let b = k & bitmask;  // Get the i-th bit of k
        
        if (a !== b) { // If the bits are different
            if (a === 0) return -1; // Cannot flip a 0 in n to match 1 in k → impossible
            count++; // Flip 1 to 0 to match k
        }
    }
    
    return count; // Return total number of changes needed
};


var minChanges = function(n, k) {
    if ((n | k) !== n) return -1; // If k has a 1 where n has 0 → impossible
    let xor = n ^ k; // XOR gives 1 for bits that need flipping
    let count = 0;
    while (xor) {
        count += xor & 1; // Count bits that are 1
        xor >>= 1;
    }
    return count;
};
