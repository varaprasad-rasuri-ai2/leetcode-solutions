// Function to calculate the minimum number of moves
// to make all elements in the array equal
var minMoves = function (a) {
    // Number of elements in the array
    let n = a.length;

    // Find the maximum value in the array
    let max = Math.max(...a);

    // Calculate the sum of all elements in the array
    let sum = a.reduce((sum, x) => sum + x, 0);

    // Each move increases n - 1 elements by 1.
    // Equivalent to reducing the max element.
    // Total moves needed = n * max - sum
    return n * max - sum;
};


// Alternative implementation using a loop
var minMoves222 = function (a) {
    // Number of elements in the array
    let n = a.length;

    // Find the maximum value in the array
    let max = Math.max(...a);

    // Variable to store total moves
    let s = 0;

    // For each element, count how many increments
    // are needed to reach the maximum value
    for (let e of a) {
        s += max - e;
    }

    // Return total moves
    return s;
};
