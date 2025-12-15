// Directions: Left, Right, Up, Down
const DIRS_LRUD = [[0, -1], [0, 1], [-1, 0], [1, 0]];

var highestRankedKItems = function (g, [lowPrice, highPrice], [startRow, startCol], k) {
    const m = g.length;        // number of rows
    const n = g[0].length;     // number of columns

    const ans = [];            // result list of item positions
    const vis = Array.from({ length: m }, () => new Array(n).fill(false)); // visited grid

    /*
        Min-heap (priority queue) ordered by:
        1) distance from start (smaller first)
        2) item price (smaller first)
        3) row index (smaller first)
        4) column index (smaller first)
    */
    const pq = new PriorityQueue(
        ([i1, j1, d1], [i2, j2, d2]) =>
            d1 - d2 ||               // distance
            g[i1][j1] - g[i2][j2] || // price
            i1 - i2 ||               // row
            j1 - j2                  // column
    );

    // Start BFS from the starting cell
    pq.enqueue([startRow, startCol, 0]);
    vis[startRow][startCol] = true;

    while (!pq.isEmpty()) {
        const [i, j, d] = pq.dequeue();

        // If current cell has an item within price range, collect it
        if (lowPrice <= g[i][j] && g[i][j] <= highPrice) {
            ans.push([i, j]);

            // Stop early once k items are found
            if (ans.length === k) return ans;
        }

        // Explore neighboring cells
        for (const [dx, dy] of DIRS_LRUD) {
            let ni = i + dx;
            let nj = j + dy;

            /*
                Conditions:
                - cell exists
                - not a wall (value > 0)
                - not visited yet
            */
            if (g[ni]?.[nj] > 0 && !vis[ni][nj]) {
                pq.enqueue([ni, nj, d + 1]);
                vis[ni][nj] = true; // mark visited when enqueued
            }
        }
    }

    // Return all found items if fewer than k
    return ans;
};
