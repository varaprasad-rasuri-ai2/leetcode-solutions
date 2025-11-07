// Function to flip and invert a binary image
var flipAndInvertImage = function (mat) {
    // Get the number of rows (m) and columns (n) in the matrix
    let m = mat.length;
    let n = mat[0].length;

    // Loop through each row of the matrix
    for (let i = 0; i < m; i++) {
        // Step 1: Flip the row horizontally by reversing it
        mat[i].reverse();

        // Step 2: Invert each element in the row
        // XOR with 1 flips the bit: 1 ^ 0 = 1, 1 ^ 1 = 0
        for (let j = 0; j < n; j++) {
            mat[i][j] = 1 ^ mat[i][j];
        }
    }

    // Return the transformed matrix
    return mat;
};
