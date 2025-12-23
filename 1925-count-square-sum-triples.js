// Function to count the number of Pythagorean triples (a, b, c)
// such that 1 ≤ a, b, c ≤ n and a² + b² = c²
var countTriples = function (n) {
    // Variable to store the total number of valid triples
    let count = 0;

    // Loop through all possible values of a
    for (let a = 1; a <= n; a++) {
        // Loop through all possible values of b
        for (let b = 1; b <= n; b++) {
            // Loop through all possible values of c
            for (let c = 1; c <= n; c++) {
                // Check if the current values form a Pythagorean triple
                if (a * a + b * b === c * c) {
                    count++;
                }
            }
        }
    }

    // Return the total count of valid triples
    return count;
};
