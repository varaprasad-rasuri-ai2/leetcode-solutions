var transpose = function (g) {
    let m = g.length        // number of rows in the original matrix
    let n = g[0].length     // number of columns in the original matrix
    let transposedMatrix = [] 

    console.table(g)        // log the original matrix for debugging

    // Loop through columns of the original matrix to form rows of the transposed
    for (let i = 0; i < n; i++) {
        transposedMatrix[i] = new Array(m)  // initialize the new row
        
        for (let j = 0; j < m; j++) {
            transposedMatrix[i][j] = g[j][i] // swap row/column indices
        }
    }

    console.log(transposedMatrix) // log the transposed matrix
    return transposedMatrix
};
