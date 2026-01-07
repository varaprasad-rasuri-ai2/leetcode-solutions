// Function to generate a key based on three numbers
var generateKey = function (num1, num2, num3) {

    // Convert each number to a 4-digit string, padding with leading zeros if needed
    let [a, b, c] = [num1, num2, num3].map(n =>
        n.toString().padStart(4, '0')
    );

    // Initialize an empty string to store the result
    let result = '';

    // Loop through each of the 4 digits
    for (let i = 0; i < 4; i++) {
        // Take the smallest digit at the current position
        // from all three numbers and append it to the result
        result += Math.min(a[i], b[i], c[i]);
    }

    // Convert the final string to a number and return it
    return +result;
};
