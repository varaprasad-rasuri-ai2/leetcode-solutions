var subarraySum = function (nums) {
    let totalSum = 0 // this will store the final accumulated sum of all subarrays

    // Step 1️⃣: Iterate through each index 'i' of the array
    for (let i = 0; i < nums.length; i++) {

        // Step 2️⃣: Determine the start index for the subarray
        // According to the problem: start = max(0, i - nums[i])
        // This ensures we don't go out of bounds (start must be >= 0)
        let start = Math.max(0, i - nums[i])

        // Step 3️⃣: Extract the subarray from 'start' to 'i' (inclusive)
        // nums.slice(start, i + 1) gives us that subarray
        // Then we use reduce() to find the sum of its elements
        let subarraySum = nums
            .slice(start, i + 1)                      // get subarray nums[start ... i]
            .reduce((subSum, num) => subSum + num, 0) // sum its elements

        // Step 4️⃣: Add this subarray’s sum to the running total
        totalSum += subarraySum
    }

    // Step 5️⃣: Return the total of all subarray sums
    // cl(totalSum) // uncomment for debugging
    return totalSum
}


