/**
 * @param {number[]} cost - An array of costs
 * @return {number[]} - An array where each element is the minimal cost up to that index
 */

// Main function to compute minimal costs
var minCosts = function (cost) {
    // Get the length of the cost array
    let n = cost.length

    // Array to store the minimal cost up to each index
    let answer = []

    // Initialize the minimal cost to an infinite value
    let minimalCost = Infinity

    // Iterate through the `cost` array
    for (let i = 0; i < n; i++) {
        // Update the minimal cost by comparing the current value and the previous minimal cost
        minimalCost = Math.min(minimalCost, cost[i])

        // Add the current minimal cost to the answer array
        answer.push(minimalCost)
    }

    // Return the answer array which contains the minimal cost up to each index
    return answer
};
