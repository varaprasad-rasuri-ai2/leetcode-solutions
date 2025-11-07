/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    let m = mat.length;       // Number of rows
    let n = mat[0].length;    // Number of columns (square matrix, so m === n)
    let sum = 0;              // Initialize sum of diagonal elements

    // Iterate through each element of the matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // Check if element is on primary diagonal (i === j)
            // or secondary diagonal (j === n - 1 - i)
            if ((j === i) || (j === n - 1 - i)) {
                sum += mat[i][j];  // Add element to sum
            }
        }
    }

    return sum;  // Return total sum of diagonals
};
