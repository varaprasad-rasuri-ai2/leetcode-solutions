var commonFactors = function (a, b) {
    // Determine the bigger number between a and b
    // (looping could be optimized to the smaller number)
    let bigNumber = a > b ? a : b;

    // Array to store all common factors (optional, not needed for count)
    let commonFactorNumbers = [];

    // Counter for the number of common factors
    let count = 0;

    // Loop from 1 up to bigNumber (inclusive)
    for (let i = 1; i <= bigNumber; i++) {
        // Check if i divides both a and b
        if ((a % i === 0) && (b % i === 0)) {
            // Add i to the list of common factors
            commonFactorNumbers.push(i);

            // Increment the count
            count++;
        }
    }

    // Return the total number of common factors
    return count;
};
