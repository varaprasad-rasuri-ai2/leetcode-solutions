var climbStairs = function (n) {
    // Create an array to store the number of ways to reach each step
    let res = new Array(n);

    // Base cases:
    // 1 way to climb 1 step
    res[0] = 1;
    // 2 ways to climb 2 steps: (1+1) or (2)
    res[1] = 2;

    // Fill the DP array:
    // Each step i can be reached either from step (i-1) or (i-2)
    // So the total number of ways is the sum of those two
    for (let i = 2; i < n; i++) {
        res[i] = res[i - 1] + res[i - 2];
    }

    // The answer is the number of ways to reach step n
    return res[n - 1];
};
