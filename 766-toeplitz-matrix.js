// Checks whether a matrix is a Toeplitz matrix
// A Toeplitz matrix has the same values along every top-left to bottom-right diagonal
var isToeplitzMatrix = function (g) {

    // Number of rows in the matrix
    let m = g.length;

    // Number of columns in the matrix
    let n = g[0].length;

    // Start from row 1 and column 1 because
    // the first row and first column have no top-left neighbor
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {

            // Compare current cell with its top-left diagonal neighbor
            if (g[i][j] !== g[i - 1][j - 1]) {
                // If any diagonal value differs, it's not Toeplitz
                return false;
            }
        }
    }

    // If all diagonals match, the matrix is Toeplitz
    return true;
};
