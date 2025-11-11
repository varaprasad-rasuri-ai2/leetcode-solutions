var minimumAverage = function (a) {
    let n = a.length;

    // Sort the array in ascending order
    a.sort((a, b) => a - b);

    let minAvg = Infinity;

    // Use two pointers: i (from start), j (from end)
    for (let i = 0, j = n - 1; i < n / 2; i++, j--) {
        // Calculate average of smallest and largest remaining elements
        let avg = (a[i] + a[j]) / 2;
        // Track the minimum average found so far
        minAvg = Math.min(minAvg, avg);
    }

    // Return the smallest average
    return minAvg;
};

var minimumAverage444 = function (nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let minAvg = Infinity;

    // Use two-pointer logic inside a for loop
    for (let i = 0; i < n / 2; i++) {
        let avg = (nums[i] + nums[n - 1 - i]) / 2;  // nums[n - 1 - i] => maximum element
        minAvg = Math.min(minAvg, avg);
    }

    return minAvg;
};


var minimumAverage333 = function (nums) {
    nums.sort((a, b) => a - b);
    let left = 0, right = nums.length - 1;
    let averages = [];

    while (left < right) {
        averages.push((nums[left] + nums[right]) / 2);
        left++;
        right--;
    }

    // Return the minimum average found
    return Math.min(...averages);
};


var minimumAverage222 = function (nums) {
    nums.sort((a, b) => a - b);

    let left = 0, right = nums.length - 1;
    let minAvg = Infinity;

    while (left < right) {
        let avg = (nums[left] + nums[right]) / 2;
        minAvg = Math.min(minAvg, avg);
        left++;
        right--;
    }

    return minAvg;
};
