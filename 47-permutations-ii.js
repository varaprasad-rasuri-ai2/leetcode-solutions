/**
 * Generates all unique permutations of an array that may contain duplicates.
 * 
 * @param {number[]} nums - Input array of numbers
 * @returns {number[][]} - Array of unique permutations
 */
var permuteUnique = function(nums) {
    let a = nums;           // Copy of input array
    let n = a.length;       // Length of array
    let res = [];           // Array to store all unique permutations
    let visited = new Set();// Set to avoid generating duplicate paths

    /**
     * Recursive backtracking function
     * 
     * @param {number[]} path - Current permutation being built
     * @param {Set} set - Set of indices already used in this path
     */
    function search(path, set) {

        // Create a key from current path for visited check
        let key = path.join("-");
        if (visited.has(key)) return; // Skip if already visited
        visited.add(key);

        // Base case: if path length equals original array length
        if (path.length === n) {
            res.push([...path]); // Add the complete permutation
            return;
        }

        // Iterate through all indices
        for (let i = 0; i < n; i++) {
            if (!set.has(i)) {      // If index i is not used
                let x = a[i];
                set.add(i);          // Mark index as used
                path.push(x);        // Add element to path

                search(path, set);   // Recurse

                path.pop();          // Backtrack
                set.delete(i);       // Unmark index
            }
        }
    }

    // Start recursion with empty path and empty set
    search([], new Set());

    return res;
};


/**
 * Generates all unique permutations of an array that may contain duplicates.
 * 
 * @param {number[]} nums - Input array of numbers (may contain duplicates)
 * @returns {number[][]} - Array of unique permutations
 */
var permuteUnique2222 = function(nums) {
    const n = nums.length;       // Length of the input array
    const res = [];              // Array to store unique permutations

    // Sort the array to make it easier to skip duplicates
    nums.sort((a, b) => a - b);

    const used = new Array(n).fill(false); // Boolean array to mark used indices

    /**
     * Backtracking function
     * 
     * @param {number[]} path - Current permutation being built
     */
    function backtrack(path) {
        // Base case: complete permutation
        if (path.length === n) {
            res.push([...path]); // Add a copy of path to results
            return;
        }

        // Iterate over all numbers
        for (let i = 0; i < n; i++) {
            // Skip used numbers
            if (used[i]) continue;

            // Skip duplicates: only use first unused duplicate
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

            // Choose nums[i]
            path.push(nums[i]);
            used[i] = true;

            // Recurse
            backtrack(path);

            // Backtrack
            path.pop();
            used[i] = false;
        }
    }

    // Start recursion with empty path
    backtrack([]);

    return res;
};

