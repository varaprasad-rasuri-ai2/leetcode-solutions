var reverseStr = function (s, k) {
    let t = ''          // result string
    let even = true     // toggle flag to track which segment to reverse

    // process the string in chunks of size k
    for (let i = 0; i < s.length; i += k) {
        let ss = s.slice(i, i + k)  // take substring of length k

        if (even) {
            // if it's the first k of the 2k block, reverse it
            t += ss.split("").reverse().join("")
        } else {
            // otherwise (the second k), keep as-is
            t += ss
        }

        even = !even  // toggle between reverse and not reverse
    }

    return t
};

