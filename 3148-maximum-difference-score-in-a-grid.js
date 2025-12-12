var maxScore = function(grid) {
    const m = grid.length, n = grid[0].length;
    const best = Array.from({ length: m }, () => Array(n).fill(0));
    let ans = -Infinity;

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {

            best[i][j] = grid[i][j];
            if (i + 1 < m) best[i][j] = Math.max(best[i][j], best[i + 1][j]);
            if (j + 1 < n) best[i][j] = Math.max(best[i][j], best[i][j + 1]);

            ans = Math.max(ans, best[i][j] - grid[i][j]);
        }
    }

    return ans;
};


var maxScore222 = function(grid) {
    const m = grid.length, n = grid[0].length;
    let bestRow = Array(n).fill(0);
    let ans = -Infinity;

    for (let i = m - 1; i >= 0; i--) {
        const newRow = Array(n).fill(0);

        for (let j = n - 1; j >= 0; j--) {
            newRow[j] = grid[i][j];
            if (j + 1 < n) newRow[j] = Math.max(newRow[j], newRow[j + 1]);
            newRow[j] = Math.max(newRow[j], bestRow[j]);
            ans = Math.max(ans, newRow[j] - grid[i][j]);
        }

        bestRow = newRow;
    }

    return ans;
};

var maxScore333 = function(grid) {
    const m = grid.length, n = grid[0].length;
    const best = Array.from({ length: m }, () => Array(n).fill(0));
    let ans = -Infinity;

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {

            best[i][j] = grid[i][j];
            if (i + 1 < m) best[i][j] = Math.max(best[i][j], best[i + 1][j]);
            if (j + 1 < n) best[i][j] = Math.max(best[i][j], best[i][j + 1]);

            ans = Math.max(ans, best[i][j] - grid[i][j]);
        }
    }

    return ans;
};


var maxScore4444 = function (g) {
    const m = g.length, n = g[0].length;
    const score = Array.from({ length: m }, () => Array(n).fill(-Infinity));
    let ans = -Infinity;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            const base = g[i][j];
            const prev = score[i][j] < 0 ? 0 : score[i][j];

            // Combined right + down
            for (let r = i; r < m; r++) {
                for (let c = j; c < n; c++) {

                    if (r === i && c === j) continue;   // skip itself

                    if (r === i || c === j) {           // legal move
                        const gain = g[r][c] - base;
                        score[r][c] = Math.max(score[r][c], prev + gain);
                        ans = Math.max(ans, score[r][c]);
                    }

                }
            }
        }
    }

    return ans;
};


var maxScore555 = function(grid) {
    const m = grid.length, n = grid[0].length;
    const best = Array.from({ length: m }, () => Array(n).fill(0));
    let ans = -Infinity;

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            best[i][j] = grid[i][j];
            if (i + 1 < m) best[i][j] = Math.max(best[i][j], best[i + 1][j]);
            if (j + 1 < n) best[i][j] = Math.max(best[i][j], best[i][j + 1]);
            ans = Math.max(ans, best[i][j] - grid[i][j]);
        }
    }

    return ans;
};

var maxScore6666 = function(grid) {
    const m = grid.length, n = grid[0].length;
    const best = Array.from({ length: m }, () => Array(n).fill(0));
    let ans = -Infinity;

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {

            best[i][j] = grid[i][j];
            if (i + 1 < m) best[i][j] = Math.max(best[i][j], best[i + 1][j]);
            if (j + 1 < n) best[i][j] = Math.max(best[i][j], best[i][j + 1]);

            ans = Math.max(ans, best[i][j] - grid[i][j]);
        }
    }

    return ans;
};
