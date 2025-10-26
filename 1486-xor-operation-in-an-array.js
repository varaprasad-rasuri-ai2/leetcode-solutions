// Function to compute the XOR of all elements in an array
// where nums[i] = start + 2 * i
var xorOperation = function (n, start) {
    // Step 1: Create an empty array to store the generated numbers
    let a = [];

    // Step 2: Build the nums array using the given formula
    // For each index i (from 0 to n-1):
    // nums[i] = start + 2 * i
    for (let i = 0; i < n; i++) {
        a.push(start + 2 * i);
    }

    // Step 3: Compute the XOR of all numbers in the array
    // reduce() takes a function that applies XOR (^) to accumulate the result
    // Initial value is 0
    return a.reduce((xor, x) => xor ^ x, 0);
};
