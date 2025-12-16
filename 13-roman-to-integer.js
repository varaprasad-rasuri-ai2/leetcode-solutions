// Converts a Roman numeral string into its integer value
var romanToInt = function (s) {
    // Mapping of Roman numeral characters to their integer values
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    // Accumulates the final integer result
    let total = 0;

    // Iterate through each character in the Roman numeral string
    for (let i = 0; i < s.length; i++) {
        // Value of the current Roman numeral
        let curr = values[s[i]];

        // Value of the next Roman numeral (undefined for last character)
        let next = values[s[i + 1]];

        // If a smaller value comes before a larger value,
        // subtract the current value (e.g., IV, IX)
        if (next > curr) {
            total -= curr;
        } else {
            // Otherwise, add the current value
            total += curr;
        }
    }

    // Return the computed integer value
    return total;
};
