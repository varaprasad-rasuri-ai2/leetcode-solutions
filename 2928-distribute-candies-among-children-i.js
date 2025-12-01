var distributeCandies = function (n, limit) {
    let count = 0; // Initialize counter for valid distributions

    // Loop over possible values for 'a'
    for (let a = 0; a <= limit; a++) {
        // Loop over possible values for 'b'
        for (let b = 0; b <= limit; b++) {
            // Determine 'c' so that total sum = n
            let c = n - a - b;

            // Check if 'c' is within valid range
            if (c >= 0 && c <= limit) count++;
        }
    }

    return count; // Return total number of valid distributions
};
