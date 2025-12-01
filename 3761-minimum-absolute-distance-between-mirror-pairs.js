var minMirrorPairDistance = function (nums) {
    // prevIndexObj will map a number to the most recent index where it appeared.
    // Specifically, for each number x at index i:
    //   - We check if x has appeared before as a reversed value (i.e., nums[j] = reverse(nums[i])).
    //   - To do this efficiently, when we process index i, we store:
    //         prevIndexObj[reverse(nums[i])] = i
    //
    // Thus later, when we encounter nums[k], we just check if prevIndexObj[nums[k]] exists.
    // If it does, it means nums[k] == reverse(nums[i]), forming a mirror pair (i, k).
    
    let prevIndexObj = {};
    let min = Infinity; // Track minimum distance among all mirror pairs

    nums.forEach((x, i) => {

        // If x exists in the map, then some earlier index j stored reverse(nums[j]) = x.
        // Therefore nums[j] is the reverse of x → mirror pair found.
        if (prevIndexObj[x] !== undefined) {
            let dist = i - prevIndexObj[x];
            min = Math.min(min, dist);
        }

        // Store index of this number's reverse for future matches.
        // Any future nums[k] == reverse(x) will match this entry.
        prevIndexObj[reverse(x)] = i;
    });

    // If min was never updated, no mirror pairs existed.
    if (min === Infinity) return -1;
    return min;
};

var reverse = (n) => {
    // Reverse digits by converting to string and back to number.
    // Leading zeros automatically drop when converting to number.
    return +('' + n).split("").reverse().join("");
};


var minMirrorPairDistance222 = function(nums) {
    let prev = {};
    let ans = Infinity;

    nums.forEach((x, i) => {
        if (prev[x] !== undefined) ans = Math.min(ans, i - prev[x]);
        prev[reverse(x)] = i;
    });

    return ans === Infinity ? -1 : ans;
};

