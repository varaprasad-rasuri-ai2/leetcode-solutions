// LeetCode 1425: Constrained Subsequence Sum
// Time: O(n), Space: O(n)
var constrainedSubsetSum = function (nums, k) {
	const n = nums.length;

	// dp[i] = max sum of a valid subsequence ending at index i
	const dp = new Array(n);

	// Monotonic deque storing indices
	// dp values at these indices are in decreasing order
	const indices = [];

	// Result must be non-empty subsequence
	let res = nums[0];

	for (let i = 0; i < n; i++) {

		// Remove indices that are out of the allowed window [i-k, i-1]
		while (indices.length && indices[0] < i - k) {
			indices.shift();
		}

		// Start subsequence with nums[i] alone
		dp[i] = nums[i];

		// If the maximum dp in the window is positive, extend it
		// Front of deque always holds index with maximum dp value
		if (indices.length && dp[indices[0]] > 0) {
			dp[i] += dp[indices[0]];
		}

		// Update global maximum
		res = Math.max(res, dp[i]);

		// Maintain decreasing order of dp values in deque
		// Remove all smaller dp values from the back
		while (indices.length && dp[indices.at(-1)] <= dp[i]) {
			indices.pop();
		}

		// Add current index
		indices.push(i);
	}

	return res;
};

var constrainedSubsetSum222 = function (nums, k) {
    let n = nums.length;
    let dp = new Array(n);
    let deque = []; // stores indices
    let ans = -Infinity;

    for (let i = 0; i < n; i++) {
        // Remove indices out of window
        while (deque.length && deque[0] < i - k) {
            deque.shift();
        }

        // Compute dp[i]
        dp[i] = nums[i] + (deque.length ? Math.max(0, dp[deque[0]]) : 0);

        // Maintain decreasing dp values
        while (deque.length && dp[deque[deque.length - 1]] <= dp[i]) {
            deque.pop();
        }

        deque.push(i);
        ans = Math.max(ans, dp[i]);
    }

    return ans;
};

var constrainedSubsetSum333 = function (nums, k) {
    let deque = [];
    let ans = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        // Remove out-of-range indices
        while (deque.length && deque[0][1] < i - k) {
            deque.shift();
        }

        let curr = nums[i] + (deque.length ? Math.max(0, deque[0][0]) : 0);
        ans = Math.max(ans, curr);

        // Maintain monotonic decreasing values
        while (deque.length && deque[deque.length - 1][0] <= curr) {
            deque.pop();
        }

        deque.push([curr, i]);
    }

    return ans;
};



