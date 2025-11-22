var minCostClimbingStairs = function (cost) {
    let n = cost.length
    const dp = []

    // Base cases:
    // Minimum cost to reach step 0 is cost[0]
    dp.push(cost[0])
    // Minimum cost to reach step 1 is cost[1]
    dp.push(cost[1])

    // Build DP array from step 2 up to step n
    // Note: you can "step" beyond the last stair, so loop goes to n (<= n)
    for (let i = 2; i <= n; i++) {

        // Minimum cost to reach step i:
        // Either come from i-1 or i-2, pick the cheaper path
        // cost[i] is 0 at step n (top), so use (cost[i] ?? 0)
        let curr = Math.min(dp[i - 1], dp[i - 2]) + (cost[i] ?? 0)

        dp.push(curr)
    }

    // The last element contains the cost to reach the "top"
    return dp.at(-1)
};


var minCostClimbingStairs222 = function (cost) {
    let n = cost.length

    // dp[i] = minimum cost to reach step i
    let dp = new Array(n + 1)

    // Base cost for the first two steps
    dp[0] = cost[0]
    dp[1] = cost[1]

    // Fill dp array from step 2 to step n
    for (let i = 2; i <= n; i++) {

        // Step i cost = minimum of paths to i-1 or i-2 + current cost
        // cost[n] does not exist → treat it as 0 (the top step is free)
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + (cost[i] ?? 0)
    }

    // dp[n] is cost to reach the top
    return dp[n]
};

