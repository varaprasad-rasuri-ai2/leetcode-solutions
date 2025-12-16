// Helper function to calculate the sum of digits in a string
const sumOfDigits = (s) => {
    // Split the string into characters, convert each to a number,
    // and accumulate their sum using reduce
    return s.split("").reduce((sum, digit) => sum + +digit, 0);
};

var countSymmetricIntegers = function (low, high) {
    // Counter for symmetric integers
    let ct = 0;

    // Iterate through all integers from low to high (inclusive)
    for (let x = low; x <= high; x++) {
        // Convert the number to a string to work with digits easily
        const s = "" + x;
        const n = s.length;

        // Only numbers with an even number of digits can be symmetric
        if (n % 2 === 0) {
            // Split the number into left and right halves
            const leftHalf = s.slice(0, n / 2);
            const rightHalf = s.slice(n / 2);

            // Check if the sum of digits in both halves is equal
            if (sumOfDigits(leftHalf) === sumOfDigits(rightHalf)) {
                ct++;
            }
        }
    }

    // Return the total count of symmetric integers
    return ct;
};
