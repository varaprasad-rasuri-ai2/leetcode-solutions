let cl = console.log  // Shortcut for console.log, just to make logging easier

// Function to count the number of subarrays with exactly k odd numbers
var numberOfSubarrays = function (nums, k) {
    let sum = 0               // This will track the cumulative count of odd numbers
    let count = new Map()     // Map to store how many times a cumulative sum has occurred
    count.set(0, 1)           // Initialize with 0 sum occurring once (empty prefix)

    let result = 0            // This will store the final count of valid subarrays

    // Iterate over each number in the array
    for (let i of nums) {
        sum += i % 2          // Increment sum by 1 if the number is odd, 0 if even

        // Check if there was a previous cumulative sum that, when subtracted from current sum, equals k
        // If so, add the count of such sums to the result
        result += count.get(sum - k) || 0

        // Update the map: increment the count for the current cumulative sum
        count.set(sum, (count.get(sum) || 0) + 1)
    }

    
    return result  // Return the total number of subarrays with exactly k odd numbers
};
