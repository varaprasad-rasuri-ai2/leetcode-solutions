// Function to find the single number in an array
var singleNumber = function(a) {
    // Initialize xor to 0. We'll use this to accumulate XOR of all numbers.
    let xor = 0;

    // Loop through each number in the array
    for (let x of a) {
        // XOR each number with the current xor value
        // Properties of XOR:
        // 1. n ^ n = 0
        // 2. n ^ 0 = n
        // 3. XOR is commutative and associative
        // So, numbers appearing twice will cancel out, leaving only the single number
        xor = xor ^ x;
    }

    // Return the result, which is the number that appears only once
    return xor;
};
