var minimumBoxes = function (apples, capacities) {
    // Total number of apples to store
    let applesCount = apples.reduce((sum, e) => sum + e, 0);

    // Sort box capacities in descending order so we use largest boxes first
    capacities.sort((a, b) => b - a);

    let boxCount = 0;

    // Keep taking boxes until all apples are placed
    while (applesCount > 0) {
        let cap = capacities.shift(); // take the largest remaining box
        boxCount++;                   // count this box
        if (applesCount > cap) {
            applesCount -= cap;       // fill the box and reduce apples
        } else {
            applesCount = 0;          // all apples are stored
        }
    }

    return boxCount; // minimum boxes used
};


var minimumBoxes222 = function(apple, capacity) {
    // Step 1: Calculate the total number of apples to redistribute
    let totalApples = apple.reduce((sum, a) => sum + a, 0);

    // Step 2: Sort the boxes in descending order of capacity
    // This ensures we use the largest boxes first, minimizing the number of boxes
    capacity.sort((a, b) => b - a);

    // Step 3: Initialize the counter for boxes used
    let boxCount = 0;

    // Step 4: Pick boxes one by one until all apples fit
    for (let cap of capacity) {
        totalApples -= cap;   // Use this box to hold some apples
        boxCount++;           // Increment the number of boxes used
        if (totalApples <= 0) break; // Stop if all apples are already covered
    }

    // Step 5: Return the minimum number of boxes required
    return boxCount;
};
