var heightChecker = function (heights) {
    // Number of students
    let n = heights.length;

    // Create a sorted copy of the original array to represent
    // how the heights should be arranged in non-decreasing order
    let expected = [...heights].sort((a, b) => a - b);

    // Count how many students are not standing in the correct position
    let count = 0;
    for (let i = 0; i < n; i++) {
        // If the current height doesn't match the expected height,
        // then this student is out of order
        if (heights[i] !== expected[i]) {
            count++;
        }
    }

    // Return total number of mismatches
    return count;
};
