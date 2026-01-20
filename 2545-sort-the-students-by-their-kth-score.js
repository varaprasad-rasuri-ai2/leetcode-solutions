var sortTheStudents = function (score, k) {
    // Sort the 2D array of students in descending order
    // based on the score in column k
    return score.sort((rowA, rowB) =>
        // Compare the k-th score of each student
        rowB[k] - rowA[k]
    );
};
