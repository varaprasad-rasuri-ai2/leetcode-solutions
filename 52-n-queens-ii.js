var totalNQueens = function (n) {
    // Stores the number of valid N-Queens solutions
    let res = 0;

    // Chessboard representation (not strictly needed for counting,
    // but useful for clarity and backtracking visualization)
    const g = Array.from({ length: n }, () => Array(n).fill('.'));

    /**
     * Backtracking function
     * @param {number} R - current row we are trying to place a queen in
     * @param {Set} usedColsSet - columns that already contain a queen
     * @param {Set} usedDiagonalsSet - main diagonals (R - C) already used
     * @param {Set} usedAntiDiagonalsSet - anti-diagonals (R + C) already used
     */
    const bt = (R, usedColsSet, usedDiagonalsSet, usedAntiDiagonalsSet) => {
        // Base case: all rows have been filled successfully
        if (R === n) {
            res++; // Found a valid solution
            return;
        }

        // Try placing a queen in every column of the current row
        for (let C = 0; C < n; C++) {
            const currDiagonal = R - C;      // Main diagonal identifier
            const currAntiDiagonal = R + C;  // Anti-diagonal identifier

            // Skip if this column or diagonal is already occupied
            if (
                usedColsSet.has(C) ||
                usedDiagonalsSet.has(currDiagonal) ||
                usedAntiDiagonalsSet.has(currAntiDiagonal)
            ) {
                continue;
            }

            // Place the queen
            g[R][C] = 'Q';
            usedColsSet.add(C);
            usedDiagonalsSet.add(currDiagonal);
            usedAntiDiagonalsSet.add(currAntiDiagonal);

            // Recurse to the next row
            bt(R + 1, usedColsSet, usedDiagonalsSet, usedAntiDiagonalsSet);

            // Backtrack: remove the queen and free the constraints
            g[R][C] = '.';
            usedColsSet.delete(C);
            usedDiagonalsSet.delete(currDiagonal);
            usedAntiDiagonalsSet.delete(currAntiDiagonal);
        }
    };

    // Start backtracking from the first row with no constraints
    bt(0, new Set(), new Set(), new Set());

    // Return total number of valid solutions
    return res;
};
