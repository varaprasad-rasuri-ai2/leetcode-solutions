// Helper function to sort characters of a string alphabetically
const sortStr = (s) => {
    // Spread string into array of characters,
    // sort them, then join back into a string
    return [...s].sort().join("")
}

var isAnagram = function (s, t) {
    // Sort both strings
    let ss = sortStr(s)
    let st = sortStr(t)

    // If sorted versions are equal, they are anagrams
    return ss === st
};

var isAnagram222 = function(s, t) {
    if (s.length !== t.length) return false

    const sortStr = s => [...s].sort().join('')
    return sortStr(s) === sortStr(t)
}
