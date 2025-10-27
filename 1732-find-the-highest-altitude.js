// Function to find the highest altitude reached during the trip
var largestAltitude = function (a) {
    // Initialize maxSum to 0 (starting altitude)
    // and sum to track the current altitude as we move along the path
    let maxSum = 0
    let sum = 0

    // Iterate through each altitude gain value in the array
    for (let x of a) {
        // Update the current altitude by adding the gain/loss
        sum += x

        // Update maxSum if the current altitude is higher than the previous maximum
        maxSum = Math.max(maxSum, sum)
    }

    // After processing all segments, return the highest altitude reached
    return maxSum;
};
