var uniquePathsIII = function (g) {
    // Grid dimensions
    let m = g.length;
    let n = g[0].length;

    // Cell type constants
    const OBSTACLE_SQUARE = -1;
    const EMPTY_SQUARE = 0;
    const STARTING_SQUARE = 1;
    const ENDING_SQUARE = 2;

    // Starting position
    let startingRow, startingCol;

    // Total number of squares that must be visited (non-obstacle cells)
    let totalNonObstacleCount = 0;

    // Tracks visited cells using "row,col" as the key
    let visited = new Set();

    // Number of valid paths from start to end
    let res = 0;

    // Helper to check grid boundaries
    const outOfBounds = (R, C) => R < 0 || R >= m || C < 0 || C >= n;

    /**
     * Backtracking DFS
     * @param {number} R - current row
     * @param {number} C - current column
     */
    function bt(R, C) {
        // Stop if outside the grid or on an obstacle
        if (outOfBounds(R, C) || g[R][C] == OBSTACLE_SQUARE) return;

        // If we reached the ending square
        if (g[R][C] == ENDING_SQUARE) {
            // Valid path only if all non-obstacle squares were visited
            if (visited.size == totalNonObstacleCount) {
                res++;
            }
            return;
        }

        // Explore all four possible directions
        // left, right, up, down
        let adj = [
            [R, C - 1],
            [R, C + 1],
            [R - 1, C],
            [R + 1, C]
        ];

        for (let [nR, nC] of adj) {
            let key = nR + ',' + nC;

            // Visit the next cell if it has not been visited yet
            if (!visited.has(key)) {
                visited.add(key);
                bt(nR, nC);
                visited.delete(key); // backtrack
            }
        }
    }

    // Scan the grid to:
    // 1. Count all non-obstacle cells
    // 2. Locate the starting position
    for (let R = 0; R < m; R++) {
        for (let C = 0; C < n; C++) {
            switch (g[R][C]) {
                case OBSTACLE_SQUARE:
                    break;
                case EMPTY_SQUARE:
                    totalNonObstacleCount++;
                    break;
                case STARTING_SQUARE:
                    totalNonObstacleCount++;
                    startingRow = R;
                    startingCol = C;
                    break;
                case ENDING_SQUARE:
                    totalNonObstacleCount++;
                    break;
            }
        }
    }

    // Mark the starting square as visited
    visited.add(startingRow + ',' + startingCol);

    // Start backtracking from the source
    bt(startingRow, startingCol);

    // Return total number of valid paths
    return res;
};


var uniquePathsIII222 = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    let startX = 0, startY = 0;
    let emptyCount = 0;

    // Count non-obstacle cells & find start
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== -1) emptyCount++;
            if (grid[i][j] === 1) {
                startX = i;
                startY = j;
            }
        }
    }

    let result = 0;
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

    function dfs(x, y, remain) {
        // Boundary / obstacle check
        if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === -1) return;

        // Reached end
        if (grid[x][y] === 2) {
            if (remain === 1) result++;
            return;
        }

        // Mark visited
        const temp = grid[x][y];
        grid[x][y] = -1;

        for (const [dx, dy] of dirs) {
            dfs(x + dx, y + dy, remain - 1);
        }

        // Backtrack
        grid[x][y] = temp;
    }

    dfs(startX, startY, emptyCount);
    return result;
};
