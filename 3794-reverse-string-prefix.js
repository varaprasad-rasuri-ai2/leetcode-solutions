var reversePrefix = function (s, k) {
    // Extract the first k characters of the string
    let firstPartArr = s.slice(0, k);

    // Extract the remaining part of the string starting from index k
    let remainingPartStr = s.slice(k);

    // Reverse the first part:
    // 1. Convert string to array of characters
    // 2. Reverse the array
    // 3. Join back into a string
    let firstPartStr = firstPartArr.split("").reverse().join("");

    // Concatenate the reversed prefix with the remaining string
    return firstPartStr + remainingPartStr;
};


var reversePrefix222 = function (s, k) {
    // Reverse first k characters and append the rest
    return s.slice(0, k).split("").reverse().join("") + s.slice(k);
};
