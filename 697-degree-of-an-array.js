var findShortestSubArray222 = function (a) {
    // Object to store frequency of each element
    let freq = {}

    // Track the maximum frequency (degree of the array)
    let maxFreq = 0

    // Object to store all indexes where each element appears
    let indexes = {}

    // Loop through the array with element value `e` and index `i`
    a.forEach((e, i) => {
        // Increase frequency count for element `e`
        freq[e] = (freq[e] ?? 0) + 1

        // Update the maximum frequency seen so far
        maxFreq = Math.max(maxFreq, freq[e])

        // Initialize index list for element `e` if it doesn't exist
        indexes[e] = indexes[e] || []

        // Store the current index for element `e`
        indexes[e].push(i)
    })

    // Initialize minimum length to a very large number
    let minLen = Infinity

    // Iterate over each element and its frequency
    for (let [e, f] of Object.entries(freq)) {
        // Only consider elements that have the maximum frequency
        if (f === maxFreq) {
            let ia = indexes[e]

            // Length of subarray covering all occurrences of `e`
            let len = ia.at(-1) - ia[0] + 1

            // Update the minimum length
            minLen = Math.min(minLen, len)
        }
    }

    // Return the length of the shortest subarray
    return minLen
}


var findShortestSubArray = function (a) {
    // Stores how many times each element appears
    let count = {}

    // Stores the first index where each element appears
    let first = {}

    // Degree of the array (maximum frequency of any element)
    let degree = 0

    // Length of the shortest subarray with the same degree
    let minLen = Infinity

    // Iterate through the array once
    a.forEach((e, i) => {
        // Record the first occurrence of element e
        if (first[e] === undefined) first[e] = i

        // Increase frequency count for element e
        count[e] = (count[e] || 0) + 1

        // If this element now has a higher frequency than before
        if (count[e] > degree) {
            // Update the degree
            degree = count[e]

            // Update minimum length using first occurrence to current index
            minLen = i - first[e] + 1
        }
        // If this element matches the current degree
        else if (count[e] === degree) {
            // Choose the smaller subarray length
            minLen = Math.min(minLen, i - first[e] + 1)
        }
    })

    // Return the shortest subarray length with the same degree
    return minLen
}
