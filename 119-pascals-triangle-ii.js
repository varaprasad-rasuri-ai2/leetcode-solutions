var getRow = function (rowIndex) {
    // Base case: the 0th row is always [1]
    let firstRow = [1]
    if (rowIndex === 0) return firstRow

    // Base case: the 1st row is always [1, 1]
    let secondRow = [1, 1]
    if (rowIndex === 1) return secondRow

    // Adjust rowIndex because we already handled the first two rows
    // rowIndex - 2 + 1 effectively becomes rowIndex - 1
    rowIndex = rowIndex - 2 + 1

    // Initialize lastRow as the second row
    let lastRow = secondRow

    // Generate rows iteratively until we reach the desired row
    while (rowIndex) {
        let newRow = [1] // Every row starts with 1

        // Compute the intermediate elements as the sum of adjacent elements from lastRow
        for (let i = 1; i < lastRow.length; i++) {
            newRow.push(lastRow[i - 1] + lastRow[i])
        }

        newRow.push(1) // Every row ends with 1

        lastRow = newRow // Update lastRow to the newly generated row
        rowIndex-- // Decrement the remaining rows to generate
    }

    // Return the final row after the loop
    return lastRow
};
