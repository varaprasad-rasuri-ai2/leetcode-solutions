cl = console.log

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalPrime = function (mat) {
    let m = mat.length;          // Number of rows
    let n = mat[0].length;       // Number of columns (square matrix, so m === n)
    let diagonalValues = [];     // Array to store all diagonal elements

    // Iterate over each row to collect diagonal elements
    for (let i = 0; i < m; i++) {
        diagonalValues.push(mat[i][i]);           // Primary diagonal element
        diagonalValues.push(mat[i][n - 1 - i]);   // Secondary diagonal element
    }

    // Helper function to check if a number is prime
    let isPrime = (num) => {
        if (num < 2) return false;               // Numbers less than 2 are not prime
        for (let k = 2; k <= Math.sqrt(num); k++) {  // Check divisors up to sqrt(num)
            if (num % k === 0) return false;     // If divisible, not prime
        }
        return true;                              // Otherwise, it's prime
    }

    // Filter diagonal values to keep only primes
    let primes = diagonalValues.filter(isPrime);

    // Return the largest prime if any exist, otherwise return 0
    return primes.length ? Math.max(...primes) : 0;
};
