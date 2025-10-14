/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function (nums) {
    let sumEven = 0
    let sumOdd = 0
    nums.forEach((x, i) => {
        if (i % 2 === 0) {
            sumEven += x
        } else {
            sumOdd += x
        }
    })
    let alternatingSum = sumEven - sumOdd
    return alternatingSum

};
