// Helper function to check if a number is prime
var isPrimeNumber = function (n) {
    if (n <= 1) return false; // 0 and 1 are not prime
    
    for (let i = 2; i < n; i++) { // Check divisibility from 2 to n-1
        if (n % i === 0) return false; // If divisible → not prime
    }
    
    return true; // Otherwise, it is prime
}

// Helper function to count number of set bits (1s) in binary representation
var getSetBitCount = function (n) {
    let count = 0;
    
    for (let i = 0; i < 32; i++) { // Loop through all 32 bits
        if (n & (1 << i)) { // Check if the i-th bit is 1
            count++;
        }
    }
    
    return count; // Return total number of 1 bits
}

// Main function to count numbers with prime number of set bits
var countPrimeSetBits = function (left, right) {
    let count = 0; // Counter for numbers satisfying the condition
    
    for (let num = left; num <= right; num++) { // Iterate through the range
        let setBitCount = getSetBitCount(num); // Count set bits for current number
        if (isPrimeNumber(setBitCount)) count++; // Increment if set bit count is prime
    }
    
    return count; // Return total count
};
