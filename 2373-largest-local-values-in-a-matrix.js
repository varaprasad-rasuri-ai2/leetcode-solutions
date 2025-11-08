let cl = console.log
let ct = console.table

var largestLocal = function (g) {
    let m = g.length        // number of rows in the input matrix
    let n = g[0].length     // number of columns in the input matrix

    // ct(g) // optional: print the input matrix in table format for debugging

    let g2 = [] // this will store the resulting (n-2) x (n-2) matrix

    // iterate over each possible top-left corner of a 3x3 submatrix
    for (let i = 0; i + 2 < m; i++) {
        let rowmaxes = [] // holds the max values for this row of 3x3 submatrices

        for (let j = 0; j + 2 < n; j++) {
            let max = -Infinity // initialize with the smallest possible value

            // explore the 3x3 submatrix starting at (i, j)
            for (let k = 0; k < 3; k++) {     // row offset within the 3x3 block
                for (let l = 0; l < 3; l++) { // column offset within the 3x3 block
                    // ensure we stay within bounds (not really needed since loop limits ensure that)
                    if (j + l < n) {
                        max = Math.max(max, g[i + k][j + l]) // update max value
                    }
                }
            }

            rowmaxes.push(max) // store the maximum for this 3x3 block
        }

        g2.push(rowmaxes) // add the completed row to the result matrix
    }

    return g2 // return the resulting (n-2) x (n-2) matrix
}
