var findSubsequences = function(nums) {
    let a = nums;           // Copy of input array
    let n = a.length;       // Length of array
    let res = [];           // Array to store subsequences
    let visited = new Set(); // Set to avoid duplicate subsequences

    /**
     * Backtracking function to explore subsequences
     * 
     * @param {number} pos - Current position in array
     * @param {number[]} path - Current subsequence being built
     * @param {Set} set - Set of indices already used in this path
     */
    function backtrack(pos, path, set) {
        // Create a key for visited check
        const key = [...path].sort((a, b) => a - b).join("-");
        if (visited.has(key)) return; // Skip duplicate subsequences
        visited.add(key);

        // Record current subsequence if length >= 2
        if (path.length >= 2) {
            res.push([...path]);
        }

        // Optional: path length check
        if (path.length > n) return;

        // Explore remaining elements
        for (let i = pos; i < n; i++) {
            // Ensure increasing order
            if (path.length > 0 && path.at(-1) > a[i]) continue;

            // Skip already used indices
            if (set.has(i)) continue;
            set.add(i);

            // Choose current element
            path.push(a[i]);

            // Recurse for next elements
            backtrack(i + 1, path, set);

            // Backtrack: remove last element
            path.pop();
            set.delete(i);
        }
    }

    // Start recursion from position 0 with empty path
    backtrack(0, [], new Set());

    return res;
};


var findSubsequences222 = function(nums) {
    const res = [];        // Array to store subsequences
    const n = nums.length; // Length of input array

    /**
     * Backtracking function
     * 
     * @param {number} pos - Current index in nums
     * @param {number[]} path - Current subsequence being built
     */
    function backtrack(pos, path) {
        // If path length >= 2, record the subsequence
        if (path.length >= 2) {
            res.push([...path]);
        }

        // Use a local set to skip duplicates at the same recursion level
        const used = new Set();

        // Explore further elements
        for (let i = pos; i < n; i++) {
            // Skip duplicates at the same level
            if (used.has(nums[i])) continue;

            // Ensure subsequence is non-decreasing
            if (path.length > 0 && nums[i] < path[path.length - 1]) continue;

            // Mark number as used at this recursion depth
            used.add(nums[i]);

            // Choose nums[i]
            path.push(nums[i]);

            // Recurse for next elements
            backtrack(i + 1, path);

            // Backtrack
            path.pop();
        }
    }

    // Start recursion from index 0 with empty path
    backtrack(0, []);

    return res;
};
