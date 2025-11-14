var rowAndMaximumOnes = function (g) {
    // Number of rows
    let m = g.length

    // Number of columns (assuming rectangular grid)
    let n = g[0].length

    // Track the maximum number of 1s found so far
    let maxOneCount = -Infinity

    // Track the row index where the maximum number of 1s occurs
    let maxOneCountI = -1

    // Iterate through each row of the grid
    for (let i = 0; i < m; i++) {
        let row = g[i]

        // Convert the row to a string -> "10101"
        // Remove all zeros -> "111"
        // Count the remaining characters -> number of 1s
        let oneCount = row.join("").replaceAll("0", "").length

        // Update if this row has more 1s than previous rows
        if (oneCount > maxOneCount) {
            maxOneCount = oneCount
            maxOneCountI = i
        }
    }

    // Return:
    // - the index of the row with the maximum number of 1s
    // - the maximum number of 1s itself
    return [maxOneCountI, maxOneCount]
};
