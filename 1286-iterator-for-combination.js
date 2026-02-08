
class CombinationIterator {

    // Array to store all possible combinations
    res = [];

    // Index to track the next combination to return
    resIndex = 0;

    /**
     * Constructor
     * @param {string} s - Input string of characters
     * @param {number} k - Length of each combination
     */
    constructor(s, k) {

        let n = s.length; // Total number of characters in input string

        // Local array to store combinations before assigning to this.res
        let res = [];

        // Set to keep track of visited paths to avoid duplicates
        // NOTE: For strings with unique characters, this is unnecessary
        let visited = new Set();

        function search(pos, path) {

            // ------------------------------
            // Generate a key for visited check
            // ------------------------------
            // Currently, key is the string itself
            // For unique characters, visited check is redundant
            let key = path; // previously could be path.split('').join('-') for arrays

            if (visited.has(key)) return;  // Skip if path was already visited
            visited.add(key);              // Mark current path as visited

            // ------------------------------
            // Base case: combination of length k
            // ------------------------------
            if (path.length === k) {
                res.push(path);  // Add current combination to result array
                return;          // Stop further recursion for this branch
            }

            // ------------------------------
            // Recursive exploration
            // ------------------------------
            // Try all remaining characters starting from pos
            for (let i = pos; i < n; i++) {

                // ------------------------------
                // Take the current character s[i]
                // ------------------------------
                search(i + 1, path + s[i]); // Add s[i] and move to next position

                // ------------------------------
                // Not take the current character
                // ------------------------------
                // Explore the branch where we skip s[i]
                search(i + 1, path);       // Skip s[i] and move to next
            }
        }

        // Start recursion from first character with empty path
        search(0, '');

        // Assign generated combinations to the instance variable
        this.res = res;
    }

    /**
     * Returns the next combination in lexicographical order
     */
    next() {
        return this.res[this.resIndex++]; // Return current combination and increment index
    }

    /**
     * Returns true if there are more combinations left
     */
    hasNext() {
        return this.resIndex < this.res.length; // Check if resIndex is within bounds
    }
}


class CombinationIterator2222 {
    // Array to store all valid combinations
    res = [];

    // Index to track the next combination to return
    resIndex = 0;

    /**
     * Constructor
     * @param {string} s - Input string of characters (sorted or unsorted)
     * @param {number} k - Length of each combination
     */
    constructor(s, k) {
        // Sort the string to ensure lexicographical order of combinations
        s = s.split('').sort().join('');

        // Helper function: generate all combinations of length k using backtracking
        const search = (pos, path) => {

            // Base case: if path length reaches k, add to result
            if (path.length === k) {
                this.res.push(path); // Add current combination
                return;              // Stop recursion on this branch
            }

            // Recursive exploration:
            // Try every character starting from current position
            for (let i = pos; i < s.length; i++) {

                // Take s[i] and recurse
                search(i + 1, path + s[i]);
                // No need for "not take" explicitly; the loop increment naturally skips characters
            }
        };

        // Start recursion from position 0 with empty path
        search(0, '');
    }

    /**
     * Returns the next combination in lexicographical order
     * @returns {string} - Next combination
     */
    next() {
        return this.res[this.resIndex++]; // Return combination and increment index
    }

    /**
     * Checks if there are more combinations left
     * @returns {boolean} - True if more combinations exist
     */
    hasNext() {
        return this.resIndex < this.res.length; // Check if we are still within bounds
    }
}

