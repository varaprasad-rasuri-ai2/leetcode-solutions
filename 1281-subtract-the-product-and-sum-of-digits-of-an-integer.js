// Helper function to find both the sum and product of the digits of n
function sumAndProductOfDigits(n) {
    // Initialize sum as 0 and product as 1 (neutral values)
    let sum = 0;
    let prod = 1;

    // Loop through each digit of n until n becomes 0
    while (n > 0) {           // Example: n = 423
        let remainder = n % 10;   // Get the last digit → 3

        // Add this digit to the running sum
        sum = sum + remainder;    // sum = 0 + 3 = 3

        // Multiply this digit to the running product
        prod = prod * remainder;  // prod = 1 * 3 = 3

        // Remove the last digit from n
        // Math.trunc(n / 10) removes the decimal part (integer division)
        n = Math.trunc(n / 10);   // n becomes 42
    }

    // Return both sum and product as an array
    return [sum, prod];
}

// Main function to calculate (product of digits) - (sum of digits)
var subtractProductAndSum = function (n) {
    // Call the helper function and use array destructuring to get both values
    let [sum, prod] = sumAndProductOfDigits(n);

    
    // Return the difference between product and sum
    return prod - sum;
};
