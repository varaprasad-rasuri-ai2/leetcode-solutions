// Function to find the minimum positive start value
var minStartValue = function (nums) {

    // Keeps track of the running (prefix) sum while iterating
    let currPrefixSum = 0;

    // Stores the minimum prefix sum encountered so far
    // Initialized to 0 in case all prefix sums are positive
    let minPrefixSum = 0;

    // Loop through each number in the array
    for (let n of nums) {

        // Add current number to the running sum
        currPrefixSum += n;

        // Update the minimum prefix sum if current sum is smaller
        minPrefixSum = Math.min(currPrefixSum, minPrefixSum);
    }

    // To ensure (startValue + prefixSum) is never less than 1:
    // startValue must be at least (1 - minimum prefix sum)
    return 1 - minPrefixSum;
};
