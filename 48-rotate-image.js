// Rotates a matrix 90 degrees clockwise
var rotate = function (g) {
    // Number of rows
    let m = g.length;

    // Number of columns (assumes matrix is non-empty)
    let n = g[0].length;

    // Create a new matrix with swapped dimensions (n x m)
    let g2 = Array.from({ length: n }, () => new Array(m));

    // Fill the new matrix with rotated values
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // Move element g[i][j] to its rotated position
            g2[j][m - 1 - i] = g[i][j];
        }
    }

    // Copy rotated matrix back into original matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            g[i][j] = g2[i][j];
        }
    }
};


// Rotate matrix in-place using transpose + reverse
var rotate222 = function (matrix) {
    let n = matrix.length;

    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};
