var countNegatives = function (g) {
    let mat = g // alias for readability (optional)
    let cl = console.log
    let ct = console.table

    let m = g.length      // number of rows
    let n = g[0].length   // number of columns
    // ct(g) // optional: display matrix for debugging

    let negCount = 0 // total number of negative elements

    // Optimized approach using the fact that the matrix is sorted
    // Each row and each column are sorted in *non-increasing* order
    // (i.e., values go from large → small as you move right or down)
    //
    // So if we find a non-negative number, all numbers to its left
    // in the same row are also non-negative — no need to check them.

    // Start scanning from bottom-right corner (since negatives cluster there)
    for (let i = m - 1; i >= 0; i--) {      // iterate rows from bottom to top
        for (let j = n - 1; j >= 0; j--) {  // iterate columns from right to left
            let x = g[i][j]

            if (x < 0) {
                // Found a negative number → count it
                negCount++
            } else {
                // Once we hit a non-negative number,
                // everything to the left in this row is >= 0, so we can skip
                break
            }
        }
    }

    return negCount // total number of negative elements
}
