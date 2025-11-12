// Shortcut for console.log for debugging
cl = console.log

var finalPrices = function (prices) {
    // Debug: log the original prices array
    cl({ prices })

    // Step 1: Store the length of the prices array
    let n = prices.length

    // Step 2: Initialize the results array as a copy of prices
    // We'll modify this array to store the final discounted prices
    let results = [...prices]

    // Debug: log initial state
    cl({ n, prices, results })

    // Step 3: Loop through each item in the prices array
    for (let i = 0; i < n; i++) {

        // Step 4: Look for the first price after prices[i] that is <= prices[i]
        for (let j = i + 1; j < n; j++) {
            if (prices[j] <= prices[i]) {
                // Apply the discount: subtract the first smaller/equal future price
                results[i] = prices[i] - prices[j]
                break // stop searching after the first eligible discount
            }
        }

    }

    // Debug: log final results after all discounts applied
    cl({ n, prices, results })

    // Step 5: Return the array of final prices after discounts
    return results
};
