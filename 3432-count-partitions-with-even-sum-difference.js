var countPartitions = function (a) {
    // Length of the array
    let n = a.length;

    // Calculate the total sum of the array elements
    let sum = a.reduce((s, x) => s + x, 0);

    // Counter to store the number of valid partitions
    let ct = 0;

    // Sum of elements on the left side of the partition
    let sumOfLeftSubArr = 0;

    // Sum of elements on the right side of the partition (initially total sum)
    let sumOfRightSubArr = sum;

    // Iterate until the second-to-last element
    // (both subarrays must be non-empty)
    for (let i = 0; i < n - 1; i++) {
        // Add current element to the left subarray sum
        sumOfLeftSubArr += a[i];

        // Remove current element from the right subarray sum
        sumOfRightSubArr -= a[i];

        // Check if the difference between the two subarray sums is even
        if ((sumOfLeftSubArr - sumOfRightSubArr) % 2 === 0) {
            ct++;
        }
    }

    // Return the total count of valid partitions
    return ct;
};
