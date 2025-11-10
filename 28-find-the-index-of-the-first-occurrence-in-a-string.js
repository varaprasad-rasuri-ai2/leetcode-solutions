let cl = console.log

var strStr = function (s, p) {
    let m = s.length   // Length of the haystack string
    let n = p.length   // Length of the needle string

    // If the needle is longer than the haystack, it can’t be found
    if (n > m) return -1

    // Try to match `p` starting from every index in `s`
    for (let istart = 0; istart < m; istart++) {
        let i = istart // Pointer for haystack (s)
        let j = 0      // Pointer for needle (p)

        // Compare characters of s and p one by one
        // Continue while characters match and we stay within bounds
        for (; i < m && j < n && s[i] === p[j]; i++, j++) {
            cl({ i, j, n, istart })  // Debug log: shows current match progress
        }

        // If we've matched all characters of p, return the starting index
        if (j === n) {
            return istart
        }
    }

    // If we finish the loop with no full match, return -1
    return -1
};
