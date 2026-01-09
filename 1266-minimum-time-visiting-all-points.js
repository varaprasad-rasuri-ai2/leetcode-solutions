// Calculates the minimum time required to visit all points in order
// You can move 1 unit per second vertically, horizontally, or diagonally
var minTimeToVisitAllPoints = function (points) {
    // Number of points
    let n = points.length;

    // Accumulates total time required
    let total = 0;

    // Iterate through each consecutive pair of points
    for (let i = 0; i + 1 < n; i++) {
        // Current point coordinates
        let [x1, y1] = points[i];

        // Next point coordinates
        let [x2, y2] = points[i + 1];

        // Difference in x and y directions
        let dx = x2 - x1;
        let dy = y2 - y1;

        // Minimum time between two points is the maximum
        // of absolute differences in x and y
        // (diagonal movement covers both directions at once)
        let maxd = Math.max(Math.abs(dx), Math.abs(dy));

        // Add time needed to move to the next point
        total += maxd;
    }

    // Return total minimum time
    return total;
};
