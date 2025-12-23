// Function to check if array `arr` can be made equal to `target`
// by rearranging (sorting) its elements
var canBeEqual = function (target, arr) {
    // Sort both arrays in ascending order
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);

    // Compare elements at each index
    for (let i = 0; i < arr.length; i++) {
        // If any element differs, arrays are not equal
        if (target[i] !== arr[i]) {
            return false;
        }
    }

    // All elements match after sorting
    return true;
};
