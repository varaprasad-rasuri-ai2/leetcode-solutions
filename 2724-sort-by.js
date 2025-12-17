// Sorts the array based on the value returned by the function `fn`
// This version creates a shallow copy of the array to avoid mutating the original
var sortBy = function (arr, fn) {
    // Spread operator (...) creates a new array copy
    // sort() compares elements using the value returned by fn
    return [...arr].sort((a, b) => fn(a) - fn(b));
};

// Sorts the array based on the value returned by the function `fn`
// This version mutates (modifies) the original array
var sortBy222 = function (arr, fn) {
    // sort() rearranges the elements in the original array
    // The comparison is done using the numeric difference of fn(a) and fn(b)
    return arr.sort((a, b) => fn(a) - fn(b));
};
