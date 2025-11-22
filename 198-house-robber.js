var rob = function (amount) {
    let n = amount.length
    let dp = []

    // Base case:
    // If there is only 1 house, rob it
    dp.push(amount[0])
    if (n === 1) return dp[0]

    // If there are 2 houses, choose the one with the larger amount
    dp.push(amount[1])
    if (n === 2) return Math.max(dp[0], dp[1])

    // For 3 houses:
    // Best options are either:
    //   - rob house 3 + house 1
    //   - or rob house 2 alone
    dp.push(amount[2] + amount[0])
    if (n === 3) return Math.max(dp[2], dp[1])

    // DP transition:
    // For each house i (i >= 3):
    // To avoid alert, cannot rob adjacent houses.
    // You can come from:
    //   - dp[i-2] (rob i-2, skip i-1)
    //   - dp[i-3] (rob i-3, skip i-2 & i-1)
    //
    // So max money ending at house i:
    //      dp[i] = max(dp[i-2], dp[i-3]) + amount[i]
    for (let i = 3; i < n; i++) {
        let total = Math.max(dp[i - 2], dp[i - 3]) + amount[i]
        dp.push(total)
    }

    // Final answer:
    // The robber can end at either last or second-last house
    return Math.max(dp[n - 1], dp[n - 2])
};
