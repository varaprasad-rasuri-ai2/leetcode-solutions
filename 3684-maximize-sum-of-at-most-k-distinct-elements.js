var maxKDistinct = function (a, k) {
    // Create a Set to remove duplicate values from the array
    let set = new Set(a);

    // Convert the Set back into an array of unique values
    let uniqueArr = [...set];

    // Sort the unique values in descending order
    uniqueArr.sort((a, b) => b - a);

    // Return the top k largest distinct elements
    return uniqueArr.slice(0, k);
};
