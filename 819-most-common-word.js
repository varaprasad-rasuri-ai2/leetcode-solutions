var mostCommonWord = function (s, bArr) {
    // Convert banned words array into a Set for O(1) lookups
    let badSet = new Set(bArr)

    // Convert string to lowercase for case-insensitive comparison
    s = s.toLowerCase()

    // Split string by punctuation and spaces, filter out empty strings
    // and words that are in the banned set
    let a = s.split(/[!?',;. ]/).filter(x => x !== '' && !badSet.has(x))

    // Optional debug log
    // cl = console.log
    // cl({ a })

    // Count frequency of each word in the filtered array
    let o = {}
    for (let w of a) {
        o[w] = (o[w] ?? 0) + 1
    }
    // cl({ o })

    // Find the maximum frequency among the counted words
    let maxFreq = Math.max(...Object.values(o))
    // cl({ maxFreq })

    // Return the first word that has the maximum frequency
    for (let [w, freq] of Object.entries(o)) {
        if (freq === maxFreq) {
            return w
        }
    }

    // Fallback, should not happen if input has at least one valid word
    return ''
}


