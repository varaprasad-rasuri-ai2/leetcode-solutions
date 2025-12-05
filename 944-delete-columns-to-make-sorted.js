var minDeletionSize = function (strs) {
    // This will store how many columns need to be deleted
    let deleteCount = 0;

    // Total number of rows in the array
    let rows = strs.length;

    // Total number of columns in each string
    let cols = strs[0].length;

    // Loop through each column
    for (let c = 0; c < cols; c++) {

        // Check each pair of adjacent rows for lexicographic order
        for (let r = 0; r < rows - 1; r++) {

            // If column is NOT sorted (i.e., violates alphabetical order)
            if (strs[r][c] > strs[r + 1][c]) {

                // Count this column as needing deletion
                deleteCount++;

                // No need to check remaining rows in this column
                break;
            }
        }
    }

    // Return the total number of "bad" columns
    return deleteCount;
};
