/**
 * @param {number} n
 * @return {number}
 */
cl = console.log
var pivotInteger = function (n) {
    cl({ n })
    let left = 1
    let right = n
    let leftSum = 1
    let rightSum = n
    cl({ n, left, right, leftSum, rightSum })
    while (left < right) {
        if (leftSum < rightSum) {
            left++
            leftSum += left
        } else {
            right--
            rightSum += right
        }
    }
    cl({ n, left, right, leftSum, rightSum })

    cl(leftSum === rightSum ? left : -1)
    return leftSum === rightSum ? left : -1

};
