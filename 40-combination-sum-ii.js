var combinationSum2 = function (a, target) {
    // Step 1: Sort the array
    // Sorting brings duplicates together and allows us to skip them easily.
    a.sort((x, y) => x - y)

    let n = a.length
    let res = []

    // Backtracking function:
    // pos  = current starting index
    // path = current combination being built
    // sum  = current sum of elements in path
    function search(pos, path, sum) {

        // If we hit the target, record this combination
        if (sum === target) {
            res.push([...path])   // Push a copy because path is mutable
            return
        }

        // If we exceed the target, no point in continuing
        if (sum > target) return

        // Explore candidates starting from index "pos"
        for (let i = pos; i < n; i++) {

            // ------------------------------
            // Duplicate Skipping Rule
            // ------------------------------
            // If current value is same as previous AND
            // we're still in the same "level" of the recursion tree,
            // then skip it to avoid duplicate combinations.
            //
            // Example: a = [1, 1, 2]
            // When i = pos + 1, if a[i] == a[i - 1], skip it.
            if (i > pos && a[i] === a[i - 1]) continue


            // ------------------------------
            // Choose the current value
            // ------------------------------
            path.push(a[i])  // take a[i]

            // Recurse with i + 1 since we cannot reuse the same position
            search(i + 1, path, sum + a[i])

            // ------------------------------
            // Undo the choice (backtracking)
            // ------------------------------
            path.pop()
        }
    }

    // Start DFS from index 0 with empty path and sum 0
    search(0, [], 0)

    // Return all valid, unique combinations
    return res
};
