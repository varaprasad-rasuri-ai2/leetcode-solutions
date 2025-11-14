var maximumValue = function (strs) {
    // Initialize `max` to a very small value (negative infinity)
    // This will store the maximum value found during the loop
    let max = -Infinity

    // Loop through each string in the input array `strs`
    for (let s of strs) {

        // Check if the string contains any lowercase letters using a regular expression
        if (/[a-z]/.test(s)) {
            // If it does, the value of the string is its length (the number of characters)
            max = Math.max(max, s.length)
        } else {
            // If the string doesn't contain lowercase letters, convert it to a number
            // and update `max` with the larger value between `max` and the number
            max = Math.max(max, +s)
        }
    }

    // Return the maximum value found in the array
    return max
};
