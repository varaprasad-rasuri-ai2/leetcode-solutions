/*
Given an integer x, check whether it is a palindrome number.
Return true if x reads the same backward as forward, otherwise return false.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;

    let n = x;
    let r = 0;
    let d = 0; // d contains reversed number

    while (n > 0) {
        r = n % 10;
        d = d * 10 + r;
        n = Math.floor(n / 10);
    }

    return d === x;
};
