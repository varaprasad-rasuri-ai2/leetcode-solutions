// Function to check if two string arrays form the same full string
var arrayStringsAreEqual = function (words1, words2) {

    // Step 1: Combine (concatenate) all strings in the first array into one long string
    // The reduce() function takes each word 'w' and adds it to 'fullStr'
    // Example: ["ab", "c"] → "abc"
    let s1 = words1.reduce((fullStr, w) => fullStr + w, '');

    // Step 2: Do the same for the second array
    let s2 = words2.reduce((fullStr, w) => fullStr + w, '');

    
    // Step 3: Compare the two combined strings
    // If they are exactly the same, return true; otherwise, return false
    return s1 === s2;
};
