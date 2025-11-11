var maxProduct = function (a) {
    // Sort the array in descending order
    a.sort((a, b) => b - a);

    // The two largest elements will produce the maximum product
    return (a[0] - 1) * (a[1] - 1);
};

/*
var maxProduct = function (nums) {
    nums.sort((a, b) => a - b);  // sort ascending
    let left = 0, right = nums.length - 1;
    // the two largest are at the end
    return (nums[right] - 1) * (nums[right - 1] - 1);
};

var maxProduct = function (nums) {
    nums.sort((a, b) => b - a); // sort descending
    let left = 0, right = 1; // top two elements
    return (nums[left] - 1) * (nums[right] - 1);
};
*/
