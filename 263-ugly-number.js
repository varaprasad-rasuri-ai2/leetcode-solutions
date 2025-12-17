let cl = console.log; // Short alias for console.log (for debugging)

// Function to check if a number n is an "ugly number"
// Ugly numbers are positive numbers whose prime factors are only 2, 3, or 5
var isUgly = function (n) {
    // Array of prime factors to check
    let divisors = [2, 3, 5];

    // Negative numbers, zero, and 0 are not ugly numbers
    if (n <= 0) return false;

    // Loop through each allowed prime factor
    for (let f of divisors) {
        // Keep dividing n by f while it is divisible
        while (n % f === 0) {
            n /= f;
        }
    }

    // If n is reduced to 1, it only had 2, 3, 5 as prime factors
    // Otherwise, it had other prime factors and is not ugly
    return n === 1;
};

// Example usage:
// cl(isUgly(6));  // true (2*3)
// cl(isUgly(14)); // false (2*7)
