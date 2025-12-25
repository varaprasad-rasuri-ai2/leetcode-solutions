var numberOfPoints = function (a) {
    const set = new Set(); // Stores unique points covered by any interval

    // Iterate through each interval [start, end]
    for (const [s, e] of a) {
        // Add every point from s to e (inclusive) into the set
        for (let x = s; x <= e; x++) {
            set.add(x); // Set ensures no duplicates
        }
    }

    // Return the total number of unique points where a car exists
    return set.size;
};
