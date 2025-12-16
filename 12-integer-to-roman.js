// Converts an integer into its Roman numeral representation
var intToRoman = function (num) {
    // Mapping of Roman numerals (including subtractive cases)
    // to their corresponding integer values
    let values = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };

    // List of Roman numeral symbols
    let keys = [
        'I', 'IV', 'V', 'IX',
        'X', 'XL', 'L', 'XC',
        'C', 'CD', 'D', 'CM', 'M'
    ];

    // Sort symbols in descending order of their integer values
    // This ensures we always subtract the largest possible value first
    keys.sort((a, b) => values[b] - values[a]);

    // Resulting Roman numeral string
    let total = '';

    // Iterate through each Roman numeral symbol
    for (let i = 0; i < keys.length; i++) {
        let curr = values[keys[i]];

        // Append the current symbol while its value
        /
