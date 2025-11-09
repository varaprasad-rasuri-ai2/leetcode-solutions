var destCity = function (paths) {
    // Object to map each source city to its destination city
    let s2dObj = {};

    // Set to store all destination cities
    let destinations = new Set();

    // Step 1: Build the mapping and collect all destination cities
    for (let [source, destination] of paths) {
        s2dObj[source] = destination; // mark 'source' → 'destination'
        destinations.add(destination); // record that 'destination' is reachable
    }

    // Step 2: Find the city that is only a destination (never a source)
    for (let d of destinations) {
        // If a destination city doesn't appear as a source, it's the final city
        if (s2dObj[d] === undefined) {
            return d;
        }
    }
};
