// Helper function to reverse a string
const reverse = (s) => s.split("").reverse().join("")

var removePalindromeSub = function (s) {
    // If the string is already a palindrome, we can remove it in 1 step
    if (s === reverse(s)) return 1

    // Otherwise, because the string contains only 'a' and 'b',
    // we can always remove all 'a's in one step and all 'b's in another step.
    return 2
};


var removePalindromeSub222 = s => s === s.split("").reverse().join("") ? 1 : 2;
