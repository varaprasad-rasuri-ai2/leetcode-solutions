// alias for console.log
cl = console.log

var combinationSum = function (a, target) {
    // length of the input array
    let n = a.length

    // result array to store valid combinations
    let res = []

    // visited set to avoid repeated recursive states
    // (used here to prevent infinite recursion caused by flawed logic below)
    let visited = new Set()

    function search(path, sum) {
        // create a string key representing the current path, e.g. [2,3] -> "2-3"
        // used to detect if this exact path has been processed before
        let key = path.join("-")

        // if we've already seen this exact path before, stop recursion
        // NOTE: this incorrectly prunes valid states because path alone is not a full state
        if (visited.has(key)) return
        
        // mark this path as visited to avoid repeating it again
        visited.add(key)

        // ---------------------------------------------------------------
        // Base cases
        // ---------------------------------------------------------------

        // If the sum equals the target, push a copy of the path to results
        if (sum === target) {
            res.push([...path]) // copy required because path is mutable
            return
        }

        // If the sum exceeds the target, there is no point exploring deeper
        if (sum > target) {
            return
        }

        // ---------------------------------------------------------------
        // Recursive exploration
        // ---------------------------------------------------------------
        // Try each number in the array at this level
        for (let i = 0; i < n; i++) {

            // Enforce non-decreasing order:
            // Only allow a[i] if it's >= the last number in the path
            // Prevents combinations like [3,2] which would be duplicates
            // NOTE: when path is empty, path.at(-1) is undefined, and 
            // undefined > a[i] is always false, so all elements pass this check
            if (path.at(-1) > a[i]) continue


            // ------------------------------
            // TAKE the current number
            // ------------------------------
            path.push(a[i])              // choose a[i]
            search(path, sum + a[i])     // explore further with updated sum
            path.pop()                   // undo the choice (backtracking)


            // ------------------------------
            // NOT TAKE the current number
            // ------------------------------
            // Important: This does *not* move to the next index!
            // It simply calls `search` again with the same path & sum,
            // which causes the outer loop (i = 0..n-1) to run again.
            //
            // This results in repeated exploration of the same choices,
            // leading to exponential recursion and infinite loops 
            // unless 'visited' blocks them.
            search(path, sum)
        }
    }

    // Start DFS with empty path and sum 0
    search([], 0)

    // return all valid combinations found
    return res
};
