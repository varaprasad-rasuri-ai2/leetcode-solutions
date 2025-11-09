var findNonMinOrMax = function (a) {
    let n = a.length
    
    if (n < 3) return -1   // If less than 3 elements, no number can be strictly between min and max

    a.sort((a, b) => a - b) // Sort array in ascending order
    return a[1]              // Return the second element, which is neither min nor max
};
