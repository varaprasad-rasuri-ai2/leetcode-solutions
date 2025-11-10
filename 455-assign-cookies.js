var findContentChildren = function (childReq, cookieSizes) {
    // Sort both arrays in ascending order
    // so we can match smallest child greed with smallest cookie
    childReq.sort((a, b) => a - b)
    cookieSizes.sort((a, b) => a - b)

    let childIndex = 0 // pointer for children

    // Loop through all cookies
    for (let size of cookieSizes) {
        // If the current cookie satisfies the current child's greed
        if (size >= childReq[childIndex]) {
            // assign cookie to that child
            childIndex++
        }
    }

    // The number of satisfied children = childIndex
    return childIndex
};

var findContentChildren222 = function (g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)

    let i = 0 // pointer for children
    let j = 0 // pointer for cookies

    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            i++ // child is satisfied, move to next child
        }
        j++ // move to next cookie either way
    }

    return i
}

