// Function to check if an array is "special"
// An array is "special" if every consecutive pair of numbers has different parity
// (i.e., one is even, the other is odd)
var isArraySpecial = function (nums) {
    // Loop through each element except the last
    for (let i = 0; i < nums.length - 1; i++) {
        // Check if the current number and the next number have the same parity
        // nums[i] % 2 === nums[i+1] % 2 → both even or both odd
        if ((nums[i] % 2) === (nums[i + 1] % 2)) {
            return false  // Found two numbers with the same parity → array is not special
        }
    }

    // No consecutive numbers with same parity → array is special
    return true
};


/**
 * Alternative implementation using bitwise XOR
 * The idea: XOR of two numbers' parity will be 1 if they are different, 0 if same
 */
var isArraySpecial222 = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        // nums[i] % 2 ^ nums[i+1] % 2
        // - XOR of parity: 0 if same parity, 1 if different
        // If result === 0 → same parity → return false
        if ((nums[i] % 2) ^ (nums[i + 1] % 2) === 0) {
            return false
        }
    }

    return true
};
