var separateSquares = function (squares) {
    // Total area of all squares combined
    let totalArea = 0;

    // Binary search bounds for the horizontal cut (y-coordinate)
    let low = Infinity,
        high = -Infinity;

    // Calculate total area and determine the min and max y-range
    for (let [x, y, l] of squares) {
        // Each square contributes l * l area
        totalArea += l * l;

        // Lowest possible cut is the minimum y
        low = Math.min(low, y);

        // Highest possible cut is the maximum top edge (y + l)
        high = Math.max(high, y + l);
    }

    // We want to find a horizontal line that splits the area in half
    let half = totalArea / 2;

    // Binary search to find the y-coordinate where area below equals half
    // Precision target: 1e-5
    while (low + 0.00001 < high) {
        // Midpoint of the current search range
        let mid = (low + high) / 2;

        // Area of all square parts that lie below y = mid
        let areaBelowMid = 0;

        // Compute area below mid for each square
        for (let [x, y, l] of squares) {
            // Only squares that start below mid contribute area
            if (y < mid) {
                // Height of the portion below mid
                // It cannot exceed the square's side length
                let height = Math.min(l, mid - y);

                // Area contributed by this square portion
                areaBelowMid += l * height;
            }
        }

        // If we've reached or exceeded half the area,
        // the cut is too high (or just right), so move down
        if (areaBelowMid >= half) {
            high = mid;
        } else {
            // Otherwise, move the cut upward
            low = mid;
        }
    }

    // low is the y-coordinate that approximately splits the area in half
    return low;
};


var separateSquares222 = function (squares) {
    // Total area of all squares combined
    let totalArea = 0;

    // Binary search bounds for the horizontal cut (y-coordinate)
    let low = Infinity, high = -Infinity;

    // Compute total area and determine min/max possible y-range
    for (let [x, y, l] of squares) {
        // Each square has area l * l
        totalArea += l * l;

        // Lowest possible cut starts at the smallest y
        low = Math.min(low, y);

        // Highest possible cut ends at the top of the tallest square
        high = Math.max(high, y + l);
    }

    // Target area below the cut (half of total area)
    const half = totalArea / 2;

    // Binary search until required precision is reached
    while (high - low > 1e-5) {
        // Candidate y-coordinate for the horizontal cut
        const mid = (low + high) / 2;

        // Area of square portions lying below y = mid
        let area = 0;

        // Calculate how much area is below the current cut
        for (let [x, y, l] of squares) {
            // Only squares that start below the cut contribute
            if (mid > y) {
                // Height of the square portion below mid
                // It cannot exceed the side length l
                area += l * Math.min(l, mid - y);
            }
        }

        // If area below is at least half, the cut is too high or correct
        if (area >= half) high = mid;
        // Otherwise, the cut is too low
        else low = mid;
    }

    // low is the smallest y-coordinate that balances the areas
    return low;
};
