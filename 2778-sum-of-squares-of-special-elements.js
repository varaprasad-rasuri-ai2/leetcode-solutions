var sumOfSquares = function (a) {
    // Length of the array
    let n = a.length

    // Variable to store the final sum of squares
    let sumsq = 0

    // Loop through each index of the array
    for (let i = 0; i < n; i++) {
        // Current element
        let x = a[i]

        // Check if (i + 1) is a divisor of n
        // Because array indices are 0-based, but the problem uses 1-based positions
        if (n % (i + 1) == 0) {
            // Add the square of this element to the result
            sumsq += x * x
        }
    }

    // Return the total sum of squares for valid positions
    return sumsq
};
