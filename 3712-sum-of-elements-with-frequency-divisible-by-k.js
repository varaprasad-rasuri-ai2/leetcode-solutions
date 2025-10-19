/*
We have a list of numbers (called nums)
and a number k.

We need to:

Find which numbers appear again and again
Check if the number of times they appear can be divided by k with no remainder
If yes, add those numbers (counting how many times they appear)

If no such number exists → return 0
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function (nums, k) {
    let o = {}

    for (x of nums) {
        o[x] = o[x] || 0
        o[x]++
    }

    let sumOfEles = 0
    let keyVals = [...Object.entries(o)]
    for (let [x, count] of keyVals) {
        if (count % k === 0) {
            sumOfEles += x * count
        }
    }

    return sumOfEles

};
