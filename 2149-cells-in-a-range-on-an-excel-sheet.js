var cellsInRange = function (s) {
    // Example input: s = "K1:L2"
    // Goal: Return all cell labels between K1 and L2 (inclusive)
    // Expected output: ["K1","K2","L1","L2"]

    // Destructure the string into individual characters
    // For example: "K1:L2" → ['K', '1', ':', 'L', '2']
    let [c1, r1, colon, c2, r2] = [...s];

    // Initialize an array to store all the cell labels
    let res = [];

    // Loop over column letters from c1 to c2
    // Use charCodeAt() to get the ASCII code for the letter,
    // and increment it to move from one letter to the next
    for (let col = c1.charCodeAt(0); col <= c2.charCodeAt(0); col++) {
        // Loop over row numbers from r1 to r2
        for (let row = +r1; row <= +r2; row++) {
            // Convert column code back to a letter and append the row number
            res.push(String.fromCharCode(col) + row);
        }
    }

    // Return the list of all cell identifiers in the given range
    return res;
};
