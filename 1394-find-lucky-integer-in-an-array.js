var findLucky = function (a) {
    let o = {}

    // Count the frequency of each number in the array
    for (let x of a) {
        o[x] = (o[x] || 0) + 1
    }

    let maxX = -Infinity

    // Check for lucky integers
    for (let [x, f] of Object.entries(o)) {
        x = +x                 // Convert string key to number
        if (x === f) {         // If the number equals its frequency
            maxX = Math.max(maxX, x) // Track the largest lucky number
        }
    }

    // If no lucky number found, return -1
    return maxX === -Infinity ? -1 : maxX
};
