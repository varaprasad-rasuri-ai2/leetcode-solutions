var hasAlternatingBits = function (n) {
    let prev = undefined; // To store the previous bit (initialized as undefined)
    
    while (n) { // Loop until n becomes 0
        let isLastBitSet = n & 1 ? 1 : 0; // Get the least significant bit (0 or 1)
        
        if (isLastBitSet === prev) { // Check if current bit is the same as previous
            return false; // Two consecutive bits are the same → not alternating
        }
        
        n >>= 1; // Right shift n to check the next bit
        prev = isLastBitSet; // Update previous bit
    }
    
    return true; // All adjacent bits were alternating
};
