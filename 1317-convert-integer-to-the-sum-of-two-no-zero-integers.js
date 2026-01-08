var getNoZeroIntegers = function (n) {
    // This array is declared but will not be used
    // because the function returns early inside the loop
    let results = [];

    // Helper function to check if a number contains digit '0'
    let hasZero = (num) => num.toString().includes('0');

    // Loop through possible values of 'a'
    for (let a = 1; a < n; a++) {

        // Calculate b so that a + b = n
        let b = n - a;

        // Check that neither 'a' nor 'b' contains the digit '0'
        if (hasZero(a) === false && !hasZero(b)) {

            // Return the first valid pair found
            // This stops the loop and exits the function immediately
            return [a, b];

            // If you wanted ALL valid pairs instead,
            // you would use the line below and remove the return above
            // results.push([a, b]);
        }
    }

    // This line will only run if no valid pair is found
    // (Problem guarantees at least one valid solution)
    return results;
};
