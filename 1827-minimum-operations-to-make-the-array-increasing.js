// Function to calculate the minimum number of operations required
// to make the array strictly increasing. 
// An operation consists of incrementing an element by 1.
var minOperations = function (nums) {
    // Counter to keep track of the total number of operations
    let minOps = 0
    
    // Loop through the array starting from index 0
    for (let i = 0; i < nums.length; i++) {
        // Check if the current element is less than or equal to the previous element
        // If so, we need to increment it to make the array strictly increasing
        if (nums[i] <= nums[i - 1]) {
            // Calculate the number of operations needed to make nums[i] > nums[i-1]
            let opsNeeded = (nums[i - 1] - nums[i]) + 1

            // Increment the current element by the required operations
            nums[i] += opsNeeded

            // Add the operations to the total count
            minOps += opsNeeded
        }
    }

    // Return the total number of operations required
    return minOps
};
