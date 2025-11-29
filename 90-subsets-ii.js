/**
 * Generates all possible subsets of an array that may contain duplicates,
 * ensuring that each subset is unique.
 * 
 * @param {number[]} nums - Input array of numbers
 * @returns {number[][]} - Array of unique subsets
 */
var subsetsWithDup = function(nums) {

    // 1️⃣ Sort the array so duplicates are adjacent
    nums.sort((a, b) => a - b);

    const n = nums.length;     // Length of array
    const res = [];            // Array to store unique subsets
    const visited = new Set(); // Set to avoid duplicate subsets

    /**
     * Recursive backtracking function
     * 
     * @param {number} pos - Current position in the array
     * @param {number[]} path - Current subset being built
     * @param {Set} set - Set of indices already used in this subset
     */
    function backtrack(pos, path, set) {

        // Create a unique key for current subset
        const key = [...path].sort((a, b) => a - b).join("-");
        if (visited.has(key)) return; // Skip if subset already recorded
        visited.add(key);

        // Record current subset
        res.push([...path]);

        // Optional: path length check (not necessary)
        if (path.length > n) return;

        // Iterate through all elements
        for (let i = 0; i < n; i++) {
            if (set.has(i)) continue; // Skip already chosen index

            // Choose nums[i]
            set.add(i);
            path.push(nums[i]);

            // Recurse to next element
            backtrack(i + 1, path, set);

            // Backtrack: remove last chosen element
            path.pop();
            set.delete(i);
        }
    }

    // Start recursion from position 0 with empty path
    backtrack(0, [], new Set());

    return res;
};


/**
 * Generates all unique subsets of an array that may contain duplicates.
 * 
 * @param {number[]} nums - Input array of numbers (may contain duplicates)
 * @returns {number[][]} - Array of unique subsets
 */
var subsetsWithDup222 = function(nums) {
    const res = [];          // Array to store all unique subsets
    const n = nums.length;   // Length of input array

    // Sort the array so duplicates are adjacent
    nums.sort((a, b) => a - b);

    /**
     * Backtracking function
     * 
     * @param {number} pos - Current position in the array
     * @param {number[]} path - Current subset being built
     */
    function backtrack(pos, path) {
        // Record the current subset
        res.push([...path]);

        // Explore further elements
        for (let i = pos; i < n; i++) {
            // Skip duplicates: only use first element of duplicate group
            if (i > pos && nums[i] === nums[i - 1]) continue;

            // Choose nums[i]
            path.push(nums[i]);

            // Recurse to next position
            backtrack(i + 1, path);

            // Backtrack: remove last element
            path.pop();
        }
    }

    // Start recursion from position 0 with empty subset
    backtrack(0, []);

    return res;
};
