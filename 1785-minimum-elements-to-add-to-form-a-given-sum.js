let cl = console.log; // Shorthand for console.log

// Optimized solution using math
var minElements = function (nums, limit, goal) {
    // Calculate the current sum of the array
    let sum = nums.reduce((a, b) => a + b, 0);

    // Calculate the absolute difference needed to reach the goal
    let need = Math.abs(goal - sum);

    // Each added element can contribute at most `limit`,
    // so we need ceil(need / limit) elements
    return Math.ceil(need / limit);
};

// Brute-force / simulation approach
var minElements222 = function (nums, limit, goal) {
    cl({ nums, limit, goal }); // Log input values

    // Calculate the current sum of the array
    let sum = nums.reduce((a, b) => a + b, 0);
    cl({ sum });

    // Difference needed to reach the goal
    let need = goal - sum;
    let count = 0; // Number of elements added
    cl({ need });

    // Keep adding or subtracting `limit` until the goal is reached
    while (need !== 0) {
        if (need > 0) {
            need -= limit; // Add a positive element
        } else {
            need += limit; // Add a negative element
        }
        count++;
    }

    cl({ count }); // Log the total count
    return count;
};
