// Function to count the number of 1's in the binary representation
// of every number from 0 to n (inclusive)
var countBits = function (n) {
    // Initialize an empty array to store the result
    let result = []
    
    // Loop through all numbers from 0 to n
    for (let i = 0; i <= n; i++) {
        // Convert the current number 'i' to its binary string representation
        const binaryN = i.toString(2)
        
        // Remove all '0's from the binary string and measure the remaining length,
        // which gives the number of '1's in the binary representation
        result.push(binaryN.replaceAll('0', '').length)
    }

    // Return the array containing the count of 1's for each number
    return result
};
