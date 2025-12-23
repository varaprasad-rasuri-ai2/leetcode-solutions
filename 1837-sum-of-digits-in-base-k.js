// Function to calculate the sum of digits of number n
// when n is represented in base k
var sumBase = function (n, k) {
    // Variable to store the sum of digits in base k
    let sumOfDigits = 0;

    // Continue until all digits of n are processed
    while (n) {
        // Get the last digit in base k using modulo
        sumOfDigits += n % k;

        // Remove the last digit by integer division in base k
        n = Math.trunc(n / k);
    }

    // Return the sum of the digits
    return sumOfDigits;
};
