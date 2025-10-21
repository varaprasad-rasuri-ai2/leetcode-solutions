var transformArray = function (nums) {
    return nums
        // Step 1: Use map() to replace each element based on parity
        // If the number is even (x % 2 === 0), replace with 0
        // If the number is odd, replace with 1
        .map(x => x % 2 === 0 ? 0 : 1)
        
        // Step 2: Sort the modified array in non-decreasing (ascending) order
        // Since we only have 0s and 1s, this effectively puts all 0s first, then 1s
        .sort((a, b) => a - b);
};
