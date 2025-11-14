// Function to compute the Sum of Digits (SOD) of a number n
const sod = (n) => {
    let sum = 0

    // Extract digits one by one
    while (n) {
        sum += n % 10            // Add the last digit
        n = Math.trunc(n / 10)   // Remove the last digit
    }

    return sum
}

var countLargestGroup = function (n) {
    // Object to group numbers by their digit sum
    // Example groups:
    // {
    //   1: [1, 10],
    //   2: [2, 11, 20],
    //   5: [5, 14, 23, ...]
    // }
    let o = {}

    // Build the groups of numbers with same digit sum
    for (let i = 1; i <= n; i++) {
        let sum = sod(i)          // Compute sum of digits of i

        // If bucket doesn't exist, create an empty array
        o[sum] = o[sum] ?? []

        // Add the number to the correct group
        o[sum].push(i)
    }

    // Variables to track:
    // maxLen → the size of the largest group
    // maxLenCount → how many groups have this size
    let maxLen = 0
    let maxLenCount = 0

    // Iterate over all groups
    for (let arr of Object.values(o)) {
        if (arr.length > maxLen) {
            // A new largest group found
            maxLen = arr.length
            maxLenCount = 1
        } else if (arr.length === maxLen) {
            // Another group with same largest size
            maxLenCount++
        }
    }

    // Return the count of groups that share the maximum size
    return maxLenCount
};
