var findMissingAndRepeatedValues = function (g) {
    // Alias for convenience (optional)
    let mat = g

    let cl = console.log
    let ct = console.table // (you had console.log here — changed to console.table for consistency)

    let m = g.length      // number of rows
    let n = g[0].length   // number of columns (same as rows, since it's an n x n matrix)

    let twiceEle          // variable to store the repeated (duplicate) number
    let set = new Set()   // Set to keep track of numbers we have already seen

    // Step 1️⃣: Find the repeated element
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let x = mat[i][j]   // current element in the matrix

            if (set.has(x)) {
                // If number already exists in the set, it's the repeated one
                twiceEle = x
            } else {
                // Otherwise, add it to the set
                set.add(x)
            }
        }
    }

    // Step 2️⃣: Find the missing element
    // The valid range of numbers is [1, n^2]
    let missingEle
    for (let x = 1; x <= n * n; x++) {
        if (!set.has(x)) {
            // The number not present in the set is the missing one
            missingEle = x
            break // optional optimization: stop once found
        }
    }

    // Step 3️⃣: Return [repeated, missing]
    return [twiceEle, missingEle]
}
