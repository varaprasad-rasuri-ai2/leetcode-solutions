/**
 * @param {number} num
 * @return {number}
 */
cl = console.log
var minimumSum = function (num) {
    let digits = num.toString().split('').sort()
    let new1 = 0
    let new2 = 0
    for (i = 0; i < digits.length; i++) {
        if (i % 2 === 0) new1 += digits[i]
        else new2 += digits[i]
    }
    // cl(digits)
    return Number(new1) + Number(new2)

};