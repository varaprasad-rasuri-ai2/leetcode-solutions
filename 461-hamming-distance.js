var hammingDistance = function (x, y) {
    let count = 0; // Initialize a counter for differing bits
    
    for (let i = 0; i < 32; i++) { // Loop through all 32 bits
        let bitmask = 1 << i; // Create a bitmask with only the i-th bit set (e.g., 000...0100)
        
        let isBitExistsInX = x & bitmask; // Check if the i-th bit in x is 1
        let isBitExistsInY = y & bitmask; // Check if the i-th bit in y is 1
        
        if (isBitExistsInX !== isBitExistsInY) { // If bits are different
            count++; // Increment the Hamming distance
        }
    }
    
    return count; // Return the total Hamming distance
};
