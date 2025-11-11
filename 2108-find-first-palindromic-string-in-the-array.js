function palin(s) {
    // Check if the string equals its reverse
    return s === s.split("").reverse().join("");
}

var firstPalindrome = function (words) {
    // Iterate through all words
    for (let w of words) {
        // If a word is palindrome, return it immediately
        if (palin(w)) {
            return w;
        }
    }
    // If no palindrome found, return empty string
    return "";
};

/*
function isPalindrome(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

var firstPalindrome = function (words) {
    for (let word of words) {
        if (isPalindrome(word)) return word;
    }
    return "";
};
*/

