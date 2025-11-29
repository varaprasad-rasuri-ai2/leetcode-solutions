/**
 * Generates all possible strings by changing the case of letters
 * in the input string. Digits remain unchanged.
 * 
 * @param {string} s - Input string consisting of letters and digits
 * @returns {string[]} - All permutations of letter cases
 */
var letterCasePermutation = function(s) {

    const n = s.length; // Length of the input string
    const res = [];     // Array to store all possible permutations
    const visited = new Set(); // Set to avoid duplicate paths (can be removed if not needed)

    /**
     * Backtracking function to explore permutations
     * 
     * @param {number} pos - Current position in the string
     * @param {Array} path - Current path being built (array of characters)
     */
    function search(pos, path) {

        // Generate a key for visited check
        // Joining array elements with "-" to form a unique key
        const key = path.join("-");
        if (visited.has(key)) return; // Skip if already visited
        visited.add(key);

        // Base case: if path length equals input string length
        if (path.length === n) {
            res.push([...path].join("")); // Add the permutation to result
            return;
        }

        // Explore remaining positions
        for (let i = pos; i < n; i++) {
            const x = s[i];

            // 1️⃣ Choose lowercase version
            path.push(x.toLowerCase());
            search(i + 1, path);
            path.pop(); // Backtrack

            // 2️⃣ Choose uppercase version
            path.push(x.toUpperCase());
            search(i + 1, path);
            path.pop(); // Backtrack
        }
    }

    // Start recursion from position 0 with empty path
    search(0, []);

    return res; // Return all permutations
};


/**
 * Generates all possible strings by changing the case of letters
 * in the input string. Digits remain unchanged.
 * 
 * @param {string} s - Input string consisting of letters and digits
 * @returns {string[]} - All permutations of letter cases
 */
var letterCasePermutation222 = function(s) {
    const n = s.length; // Length of input string
    const res = [];     // Array to store all permutations

    /**
     * Recursive backtracking function
     * 
     * @param {number} pos - Current position in string
     * @param {string} path - Current permutation being built
     */
    function backtrack(pos, path) {
        // Base case: if we have processed all characters
        if (pos === n) {
            res.push(path); // Add the complete permutation
            return;
        }

        const char = s[pos];

        // 1️⃣ If character is a digit, only one choice
        if (/[0-9]/.test(char)) {
            backtrack(pos + 1, path + char);
        } else {
            // 2️⃣ If character is a letter, branch into lowercase and uppercase

            // Lowercase branch
            backtrack(pos + 1, path + char.toLowerCase());

            // Uppercase branch
            backtrack(pos + 1, path + char.toUpperCase());
        }
    }

    // Start recursion from position 0 with empty string
    backtrack(0, '');

    return res; // Return all letter case permutations
};
