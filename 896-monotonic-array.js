// Checks if an array is monotonic (entirely non-increasing or non-decreasing)
var isMonotonic = function (nums) {
    // Assume the array is both increasing and decreasing at first
    let inc = true; // non-decreasing
    let dec = true; // non-increasing

    // Start from the second element and compare with the previous one
    for (let i = 1; i < nums.length; i++) {

        // If current element is greater than previous,
        // then it cannot be non-increasing
        if (nums[i] > nums[i - 1]) {
            inc = false;
        }
        // If current element is smaller than previous,
        // then it cannot be non-decreasing
        else if (nums[i] < nums[i - 1]) {
            dec = false;
        }
    }

    // If either condition still holds, the array is monotonic
    return inc || dec;
};


// Alternative approach using all pair comparisons
var isMonotonic222 = function (nums) {
    // Assume the array is both increasing and decreasing
    let inc = true;
    let dec = true;

    // Compare every element with every element after it
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {

            // If an earlier element is greater than a later one,
            // array cannot be non-decreasing
            if (nums[i] > nums[j]) {
                inc = false;
            }
            // If an earlier element is smaller than a later one,
            // array cannot be non-increasing
            else if (nums[i] < nums[j]) {
                dec = false;
            }
        }
    }

    // Return true if either monotonic condition is satisfied
    return inc || dec;
};
