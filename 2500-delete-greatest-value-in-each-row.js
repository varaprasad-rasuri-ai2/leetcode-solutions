var deleteGreatestValue = function (g) {
    let mat = g // alias (optional)
    let cl = console.log
    let ct = console.table

    let m = g.length      // number of rows
    let n = g[0].length   // number of columns
    // ct(g) // optional: print the initial grid for debugging

    // Step 1️⃣: Sort each row in descending order
    // Why? Because we’ll delete the largest value in each row first, then the next largest, etc.
    for (let i = 0; i < m; i++) {
        let row = g[i]
        row.sort((a, b) => b - a) // sort each row descending (largest → smallest)
    }
    // After sorting, g[i][0] is the largest in row i, g[i][1] is next largest, etc.
    // ct(g) // optional: see the matrix after sorting

    // Step 2️⃣: For each column index (i.e., for each "round" of deletion)
    // We take one element from each row — the current largest remaining — 
    // and add the maximum among those to the final answer.
    let ans = 0
    for (let j = 0; j < n; j++) {
        let max = -Infinity // store max of this round
        for (let i = 0; i < m; i++) {
            let x = g[i][j] // the element "deleted" from row i in this round
            max = Math.max(max, x) // track the maximum among deleted values
        }
        ans += max // add that round’s max to the total
    }

    // Step 3️⃣: Return the accumulated total
    return ans
}
