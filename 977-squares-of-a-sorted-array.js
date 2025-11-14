var sortedSquares = function (a) {
    return a
        // Step 1: Square every element in the array
        // Example: [-4, -1, 0, 3] → [16, 1, 0, 9]
        .map(x => x * x)

        // Step 2: Sort the squared values in ascending order
        // Numeric sort is required because default sort is lexicographical
        // Example: [16, 1, 0, 9] → [0, 1, 9, 16]
        .sort((a, b) => a - b)
};
