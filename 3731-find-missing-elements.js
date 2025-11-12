// Function to find all missing elements between the smallest and largest numbers in an array
var findMissingElements = function (a) {
    // Find the smallest and largest numbers in the array
    let min = Math.min(...a)
    let max = Math.max(...a)

    // Initialize an empty array to store missing elements
    let res = []

    // Convert the input array to a Set for faster lookup (O(1) time complexity)
    let set = new Set(a)

    // Loop through all numbers between min and max (exclusive)
    for (let x = min + 1; x <= max - 1; x++) {
        // If the number is not in the original array, add it to the result list
        if (!set.has(x)) {
            res.push(x)
        }
    }

    // Return an array of missing numbers
    return res
};
