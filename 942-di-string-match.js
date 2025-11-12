// Function to construct a permutation that matches a pattern of 'I' (increasing) and 'D' (decreasing)
var diStringMatch = function (s) {
    // Get the length of the input string
    let n = s.length

    // Initialize two pointers:
    // `smallest` starts from 0 and increases when we encounter 'I'
    // `biggest` starts from n and decreases when we encounter 'D'
    let smallest = 0
    let biggest = n

    // Initialize an empty array to hold the resulting permutation
    let res = []

    // Loop through each character in the pattern string `s`
    for (let ch of s) {
        if (ch === 'I') {
            // For 'I' (increasing), assign the smallest available number
            res.push(smallest)
            smallest++ // move to the next smallest
        } else {
            // For 'D' (decreasing), assign the largest available number
            res.push(biggest)
            biggest-- // move to the next largest
        }
    }

    // After the loop, one number remains (smallest === biggest)
    // Push that final number to complete the permutation
    res.push(smallest)

    // Return the constructed permutation array
    return res
};
