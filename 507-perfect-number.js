// Function to check if a number is a perfect number (optimized approach)
var checkPerfectNumber = function (num) {
    // 1 is not a perfect number
    if (num === 1) return false

    // Start sum with 1 because 1 is always a divisor (except for num = 1)
    let sum = 1

    // Loop only up to the square root of the number
    for (let i = 2; i * i <= num; i++) {
        // If i is a divisor of num
        if (num % i === 0) {
            // Add the divisor
            sum += i

            // Add the paired divisor (num / i) if it is different
            // This avoids double-counting when num is a perfect square
            if (i !== num / i) {
                sum += num / i
            }
        }
    }

    // A perfect number is equal to the sum of its proper divisors
    return sum === num
};


// Function to check if a number is a perfect number (brute-force approach)
var checkPerfectNumber222 = function (num) {
    // Variable to store the sum of all proper divisors
    let sum = 0

    // Check every number from 1 to num - 1
    for (let i = 1; i < num; i++) {
        // If i divides num evenly, it is a divisor
        if (num % i === 0) {
            sum += i
        }
    }

    // Return true if the sum of divisors equals the number
    return sum === num
};
