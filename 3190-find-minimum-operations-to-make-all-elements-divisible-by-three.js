var minimumOperations = function (nums) {
    return nums
        // Step 1: Take each element and get its remainder when divided by 3
        // Possible remainders are:
        // 0 → already divisible by 3
        // 1 → needs 1 subtraction to reach the nearest multiple of 3
        // 2 → needs 1 addition to reach the nearest multiple of 3
        .map(x => x % 3) // Example: [1, 2, 3, 4] → [1, 2, 0, 1]
        
        // Step 2: Filter out elements that are already divisible by 3 (remainder 0)
        // We only care about numbers that need a single operation (remainder 1 or 2)
        .filter(x => x !== 0) // Example: [1, 2, 0, 1] → [1, 2, 1]
        
        // Step 3: The number of remaining elements equals the number of operations needed
        // Because each non-divisible element requires exactly 1 add/subtract operation
        .length; // Example: [1, 2, 1] → length = 3
};
