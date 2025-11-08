var luckyNumbers = function (g) {
    let mat = g // alias for readability (optional)
    let cl = console.log
    let ct = console.table

    let m = g.length      // number of rows
    let n = g[0].length   // number of columns

    // ct(g) // uncomment to visually inspect the input matrix

    // Step 1️⃣: Find the minimum value in each row
    let minInRow = []
    for (let i = 0; i < m; i++) {
        let row = g[i]
        let min = Math.min(...row) // find the smallest element in the current row
        minInRow.push(min)         // store it in the list
    }
    // cl({ minInRow }) // debug: see all row minimums

    // Step 2️⃣: Find the maximum value in each column
    let maxInCol = []
    for (let j = 0; j < n; j++) {
        let max = -Infinity        // start with smallest possible number
        for (let i = 0; i < m; i++) {
            let x = g[i][j]        // element at row i, column j
            max = Math.max(max, x) // update maximum for this column
        }
        maxInCol.push(max)         // store column maximum
    }
    // cl({ maxInCol }) // debug: see all column maximums

    // Step 3️⃣: Identify all lucky numbers
    // A lucky number is BOTH:
    // - the minimum element in its row
    // - and the maximum element in its column
    let ans = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (
                g[i][j] === minInRow[i] && // is it the smallest in its row?
                g[i][j] === maxInCol[j]    // and largest in its column?
            ) {
                ans.push(g[i][j])          // then it's a lucky number!
            }
        }
    }

    return ans // return all lucky numbers found
}
