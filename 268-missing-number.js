var missingNumber = function(a) {
    let n = a.length;  // The array has n numbers, numbers are in range [0, n]
    let xor = 0;       // Initialize XOR accumulator

    // XOR all numbers from 0 to n
    // This gives us XOR of all expected numbers
    for (let i = 0; i <= n; i++) {
        xor ^= i;
    }

    // XOR all numbers present in the array
    // Numbers appearing in both the array and 0..n will cancel out
    for (let x of a) {
        xor ^= x;
    }

    // The remaining value is the missing number
    return xor;
};
