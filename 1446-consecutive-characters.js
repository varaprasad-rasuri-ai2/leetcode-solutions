var maxPower = function (s) {
    let maxCount = 1; // stores the maximum consecutive character count
    let count = 1;    // stores the current consecutive character count

    // iterate through the string starting from the second character
    for (let i = 1; i < s.length; i++) {
        // if current character is same as previous one
        if (s[i - 1] === s[i]) {
            count++; // increase current streak
            maxCount = Math.max(maxCount, count); // update maximum streak
        } else {
            count = 1; // reset streak when characters differ
        }
    }

    return maxCount; // return the longest consecutive character count
};
