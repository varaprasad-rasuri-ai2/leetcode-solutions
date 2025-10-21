/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    // Step 1: Initialize an empty array to hold the shuffled result
    let result = [];

    // Step 2: Loop through the first half of the array (x1, x2, ..., xn)
    for (let i = 0; i < n; i++) {
        // Step 3: Push one element from the first half (xi)
        result.push(nums[i]);
        // Step 4: Push the corresponding element from the second half (yi)
        result.push(nums[i + n]);
    }

    // Step 5: Return the final interleaved array
    return result;
};

var shuffle22222 = function (nums, n) {
    // Step 1: Split the array into two halves
    let arr1 = nums.slice(0, n);  // [x1, x2, ..., xn]
    let arr2 = nums.slice(n);     // [y1, y2, ..., yn]
    console.log(arr1, arr2);      // Optional: view both halves for debugging

    // Step 2: Initialize an empty array for the shuffled output
    let arr3 = [];

    // Step 3: Interleave elements from both halves
    for (let i = 0; i < n; i++) {
        arr3.push(arr1[i]); // take xi
        arr3.push(arr2[i]); // take yi
    }

    // Step 4: Return the shuffled array
    return arr3;
};
