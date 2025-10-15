/**
 * @param {number} n
 * @return {number[]}
 */
var decimalRepresentation = function (n) {
    let r = []
    let multipleFactor = 1
    while (n > 0) {
        let reminderLastDigit = n % 10
        n = Math.trunc(n / 10)
        if (reminderLastDigit > 0) {
            r.push(reminderLastDigit * multipleFactor)
        }
         multipleFactor *= 10
    }
    return r.reverse()
};
