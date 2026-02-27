var twoSum = function (nums, target) {
    let ans = [];

    // Loop through each number in the array
    nums.forEach((num, i) => {
        // Check every number after the current one
        for (let j = i + 1; j < nums.length; j++) {
            // If the sum equals the target, store indices
            if ((num + nums[j]) === target) {
                ans = [i, j];
                return; // Exits the inner function, not the outer forEach
            }
        }
    });

    return ans;
};


var twoSum222 = function (nums, target) {
    let ans = [];

    nums.forEach((num, i) => {
        if ((nums[i] + nums[i + 1]) === target) {
            ans.push(i);
            ans.push(i + 1);
        }
    });

    return ans;
};

//


