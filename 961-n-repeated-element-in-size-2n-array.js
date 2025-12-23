// Function to find the element that is repeated N times in the array
// The array has size 2N, and exactly one element is repeated N times
var repeatedNTimes = function (a) {
    // Set to keep track of elements that have already been seen
    let set = new Set();

    // Iterate through each element in the array
    for (let e of a) {
        // If the element is already in the set,
        // it means this is the repeated element
        if (set.has(e)) {
            return e;
        }

        // Otherwise, add the element to the set
        set.add(e);
    }
};
