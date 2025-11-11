
let cl = console.log;

var countPairs = function(nums, k) {
    cl({ nums, k });

    let count = 0;
    let n = nums.length;

    // Outer loop: pick first index i
    for (let i = 0; i < n; i++) {
        // Inner loop: pick second index j (must be greater than i)
        for (let j = i + 1; j < n; j++) {
            // Check both conditions:
              // nums[i] == nums[j]
              // (i * j) divisible by k
            if (nums[i] === nums[j] && (i * j) % k === 0) {
                count++;
            }
        }
    }

    cl({ count });
    return count;
};

var countPairs222 = function(nums, k) {
    let count = 0;
    let left = 0, right;

    while (left < nums.length) {
        right = left + 1;
        while (right < nums.length) {
            if (nums[left] === nums[right] && (left * right) % k === 0) {
                count++;
            }
            right++;
        }
        left++;
    }

    return count;
};

