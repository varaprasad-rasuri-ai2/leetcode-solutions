var findDisappearedNumbers = function (nums) {
    // Get the length of the array (numbers should be from 1 to n)
    let n = nums.length;

    // Convert the array into a Set for fast O(1) lookups
    nums = new Set(nums);

    // Array to store the missing numbers
    let missingEles = [];

    // Loop through numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        // If the current number is not in the Set, it is missing
        if (!nums.has(i)) {
            missingEles.push(i);
        }
    }

    // Return all missing numbers
    return missingEles;
};
