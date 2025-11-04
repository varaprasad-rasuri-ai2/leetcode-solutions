// Helper function to count the number of 1's (set bits) in the binary representation of n
const countSetBits = (n) => {
    let setBitCount = 0; // Initialize counter for 1 bits
    
    while (n) { // Continue until n becomes 0
        const isLastBitSet = n & 1; // Check if the least significant bit (LSB) is 1
        if (isLastBitSet) {
            setBitCount++; // Increment counter if LSB is 1
        }
        n >>= 1; // Right shift n by 1 bit (drop the last bit)
    }
    
    return setBitCount; // Return total number of 1 bits
}

// Main function to sort the array
var sortByBits = function (a) {
    return a.sort(
        (a, b) => 
            countSetBits(a) - countSetBits(b) || a - b
            // First, compare by number of 1 bits
            // If equal, use natural number order (a - b)
    );
};
