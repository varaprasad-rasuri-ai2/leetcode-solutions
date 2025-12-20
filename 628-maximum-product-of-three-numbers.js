// Function to find the maximum product of any three numbers in the array
var maximumProduct = function (nums) {
    // Get the length of the array
    let n = nums.length;

    // Sort the array in ascending order
    // This helps easily access the largest and smallest values
    nums.sort((a, b) => a - b);

    // Case 1:
    // Product of the three largest numbers
    // This works when the largest values give the maximum product
    let p1 = nums[n - 1] * nums[n - 2] * nums[n - 3];

    // Case 2:
    // Product of the largest number and the two smallest numbers
    // This is important because two negative numbers can produce
    // a positive product when multiplied together
    let p2 = nums[n - 1] * nums[0] * nums[1];

    // Return the maximum of the two possible products
    return Math.max(p1, p2);
};
