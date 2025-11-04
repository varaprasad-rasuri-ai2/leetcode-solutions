var evenOddBit = function (n) {
    let odds = 0;  // Counter for 1s at odd indices
    let evens = 0; // Counter for 1s at even indices
    
    // Loop through 32 bits (0-indexed from right, least significant bit)
    for (let i = 0; i < 32; i++) {
        let isBitSet = n & (1 << i); // Check if the i-th bit is 1
        
        if (isBitSet) { // If the bit is 1
            if (i & 1) { // Check if index i is odd using bitwise AND
                odds++;   // Increment odd counter
            } else {     
                evens++;  // Increment even counter
            }
        }
    }
    
    return [evens, odds]; // Return array [even count, odd count]
};
