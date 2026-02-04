var letterCombinations = function(digits) {

    // 1️⃣ Map each digit to its corresponding letters
    // Digits 2-9 correspond to letters on a phone keypad
    const mapping = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    // 2️⃣ Handle edge case: empty input
    if (!digits || digits.length === 0) return [];

    const n = digits.length; // Total number of digits in input
    const res = [];          // Array to store all valid letter combinations

    function backtrack(pos, path) {
        // 3a️⃣ Base case: if path length equals number of digits
        if (path.length === n) {
            res.push(path); // Add the complete combination to the results
            return;         // Stop recursion for this branch
        }

        // 3b️⃣ Get the letters mapped to the current digit
        const letters = mapping[digits[pos]];

        // 3c️⃣ Explore all letters for the current digit
        for (const ch of letters) {
            // Choose the current letter and recurse for the next digit
            backtrack(pos + 1, path + ch);
            // No explicit "not take" needed because every digit must contribute one letter
        }
    }

    // 4️⃣ Start the backtracking recursion from the first digit with empty path
    backtrack(0, '');

    // 5️⃣ Return all generated letter combinations
    return res;
};



/**
 * Generates all possible letter combinations for a given digit string
 * based on the classic phone keypad mapping.
 * 
 * @param {string} digits - Input string of digits (2-9)
 * @returns {string[]} - All possible letter combinations
 */
var letterCombinations222 = function(digits) {
    // Mapping of digits to letters (phone keypad)
    let mapping = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };

    // Edge case: if input is empty, return empty array
    if (!digits || digits.length === 0) return [];

    let n = digits.length;  // Total number of digits in input
    let res = [];           // Array to store all valid combinations

    /**
     * Backtracking helper function
     * 
     * @param {number} pos - Current position in digits string
     * @param {string} path - Current combination being built
     */
    function search(pos, path) {

        // Base case: if path length equals number of digits
        if (path.length === n) {
            res.push(path); // Add the current combination to result
            return;         // Stop recursion for this branch
        }

        // Get letters mapped to the current digit
        let letters = mapping[digits[pos]];

        // Explore all letters for this digit
        for (let ch of letters) {
            // Choose current letter and recurse for next digit
            search(pos + 1, path + ch);
        }
    }

    // Start recursion from first digit with empty path
    search(0, '');

    // Return all valid letter combinations
    return res;
};
