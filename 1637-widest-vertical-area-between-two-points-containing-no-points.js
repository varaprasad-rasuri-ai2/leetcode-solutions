// Function to find the widest vertical area between two points
var maxWidthOfVerticalArea = function (points) {
    
    // Step 1: Extract all x-coordinates from the given points
    // Each 'point' is in the form [x, y]
    let xArray = [];
    for (let i = 0; i < points.length; i++) {
        let [x, y] = points[i]; // Destructure x and y from the current point
        xArray.push(x);         // Store only x-coordinates
    }

    // 💡 Alternatively, we could do this in one line:
    // let xArray = points.map(([x, y]) => x);

    // Step 2: Sort all x-coordinates in ascending order
    // This helps us easily find gaps between consecutive x-values
    xArray.sort((a, b) => a - b);

    // Step 3: Initialize a variable to keep track of the maximum width found
    let maxw = 0;
    let n = xArray.length;

    // Step 4: Loop through consecutive pairs of x-values
    // and calculate the gap (difference) between each pair
    for (let i = 0; i + 1 < n; i++) {
        let curr = xArray[i];        // Current x
        let next = xArray[i + 1];    // Next x
        let w = next - curr;         // Width between the two x-coordinates

        // Update maxw if this gap is larger than previous ones
        maxw = Math.max(maxw, w);
    }

    // Step 5: Return the largest gap — the widest vertical area
    return maxw;
};
