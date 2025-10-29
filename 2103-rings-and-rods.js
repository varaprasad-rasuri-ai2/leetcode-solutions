var countPoints = function (rings) {
    // Map to store sets of colors for each rod
    const rods = {};

    // Process each ring (color + rod pair)
    for (let i = 0; i < rings.length; i += 2) {
        const color = rings[i];
        const rod = rings[i + 1];

        if (!rods[rod]) rods[rod] = new Set(); // Initialize a Set for this rod
        rods[rod].add(color); // Add the color to the rod's set
    }

    // Count rods that have all three colors
    let count = 0;
    for (let rod in rods) {
        if (rods[rod].size === 3) count++;
    }

    return count;
};
