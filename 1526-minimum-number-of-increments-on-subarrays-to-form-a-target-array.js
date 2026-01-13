var minNumberOperations = function (target) {
    // total will store the minimum number of operations needed
    let total = 0
    
    // curr represents the previous height we have built up to
    // Initially, the array is all zeros
    let curr = 0

    // Traverse each value in the target array
    for (let t of target) {
        // If the current target value is greater than the previous one,
        // we need extra operations to "climb up" to this height
        if (curr < t) {
            // Number of additional increments needed
            let heightToClimb = t - curr
            total += heightToClimb
        }

        // Update curr to the current target value
        curr = t
    }

    // Return the total number of operations required
    return total
};


var minNumberOperations222 = function(target) {
    // Total number of operations required
    let total = 0;
    
    // Stores the previous element's height (initially 0 since the array starts with zeros)
    let prev = 0;

    // Iterate through each value in the target array
    for (let t of target) {
        // If the current value is higher than the previous one,
        // we need additional operations to increase the height
        if (t > prev) {
            // Add the extra increments required
            total += t - prev;
        }

        // Update prev to the current value for the next iteration
        prev = t;
    }

    // Return the minimum number of operations needed
    return total;
};
