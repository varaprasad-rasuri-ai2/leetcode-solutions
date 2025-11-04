const cl = console.log;

var reverseBits = function (n) {
    let bitmap = 0; // Initialize the result integer
    
    for (let i = 0; i < 32; i++) { // Loop through all 32 bits
        if (n & (1 << i)) { // Check if the i-th bit in n is set (1)
            bitmap |= 1 << (31 - i); // Set the corresponding bit in the reversed position
        }
    }
    
    return bitmap; // Return the reversed integer
};


var reverseBits2222222222222 = function (n) {
    let s =
        n // decimal number
            .toString(2) // Convert to binary string
            .padStart(32, '0') // Make sure it's 32 bits, add leading zeros
            .split("") // Convert string to array of characters
            .reverse() // Reverse the array
            .join(""); // Convert back to string
    
    return parseInt(s, 2); // Convert the reversed binary string back to decimal
};
