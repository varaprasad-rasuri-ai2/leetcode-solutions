cl = console.log

var maxProfit = function (prices) {
    // Total number of days (prices)
    let n = prices.length

    // Stores the maximum profit found so far
    let max = 0

    // Pointer to the minimum price so far (buy day)
    let i = 0 // left pointer

    // j is the sell day (right pointer)
    for (let j = 0; j < n; j++) {

        // Profit if we buy at prices[i] and sell at prices[j]
        let diff = prices[j] - prices[i]

        // If selling price is higher or equal, update max profit
        if (diff >= 0) {
            max = Math.max(max, diff)
        } 
        // If selling price is lower, move buy pointer to j
        // because we found a cheaper price to buy
        else {
            i = j
        }
    }

    // Return the maximum profit possible
    return max
};


var maxProfit222 = function(prices) {
    let max = 0

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            max = Math.max(max, prices[j] - prices[i])
        }
    }

    return max
}


var maxProfit333 = function(prices) {
    let buy = 0
    let profit = 0

    for (let sell = 1; sell < prices.length; sell++) {
        if (prices[sell] < prices[buy]) {
            buy = sell
        } else {
            profit = Math.max(profit, prices[sell] - prices[buy])
        }
    }

    return profit
}

