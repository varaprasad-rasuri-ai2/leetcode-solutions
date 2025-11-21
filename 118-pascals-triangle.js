var generate = function (numRows) {
    let res = [] // Initialize the result array that will hold all rows of Pascal's Triangle

    // First row is always [1]
    let firstRow = [1]
    res.push(firstRow) // Add the first row to the result
    if (numRows === 1) return res // If only 1 row is needed, return immediately

    // Second row is always [1, 1]
    let secondRow = [1, 1]
    res.push(secondRow) // Add the second row to the result
    if (numRows === 2) return res // If only 2 rows are needed, return immediately

    numRows -= 2 // Subtract the first two rows as they are already added

    // Loop to generate the remaining rows
    while (numRows) {
        let lastRow = res.at(-1) // Get the last row in the result array

        let newRow = [1] // Every row starts with 1

        // Fill the middle elements by summing adjacent elements from the previous row
        for (let i = 1; i < lastRow.length; i++) {
            newRow.push(lastRow[i - 1] + lastRow[i])
        }

        newRow.push(1) // Every row ends with 1

        res.push(newRow) // Add the newly generated row to the result

        numRows-- // Decrement the remaining number of rows to generate
    }

    return res // Return the complete Pascal's Triangle
};
