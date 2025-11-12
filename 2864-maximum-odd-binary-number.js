// Function to construct the *maximum odd binary number* 
// using the same digits (0s and 1s) as the given binary string `s`.
var maximumOddBinaryNumber = function (s) {
    // Count how many '1's and '0's there are in the string.
    // The final binary number must be odd → it must *end* with '1',
    // so we reserve one '1' for the last position.
    let oneCount = s.replaceAll("0", "").length - 1 // total '1's minus one reserved for the end
    let zeroCount = s.replaceAll("1", "").length     // total '0's

    // We'll build the resulting binary string using an array for efficiency
    let ans = []

    // Step 1: Place all remaining '1's at the *front* (to make the number as large as possible)
    while (oneCount) {
        ans.unshift('1')
        oneCount--
    }

    // Step 2: Place all '0's in the *middle* (between front 1s and the last 1)
    while (zeroCount) {
        ans.push('0')
        zeroCount--
    }

    // Step 3: Finally, append one '1' at the *end* to make it an odd binary number
    ans.push('1')

    // Step 4: Join the array into a final string and return it
    return ans.join("")
};
