cl = console.log

// Goal:
// Return true if it's possible to remove EXACTLY ONE character
// so that all remaining characters have equal frequency.
var equalFrequency = function (w) {

    // Count frequency of each character
    const freq = {};
    for (const ch of w) {
        freq[ch] = (freq[ch] ?? 0) + 1;
    }
    cl({ freq })

    // Convert frequency object to array
    let a = Object.values(freq);

    // Sort frequencies in ascending order
    a.sort((a, b) => a - b);
    cl({ a })

    const n = a.length;

    // Case 1: only one unique character
    // Removing one occurrence always works
    if (n === 1) {
        return true;
    }

    // Case 2: two unique characters
    if (n === 2) {

        // Try decreasing the larger frequency
        a[n - 1]--;
        cl("yes", { a })
        if ((new Set(a)).size === 1) return true;
        a[n - 1]++; // restore

        // Try removing the smaller frequency completely
        a[0]--;
        if (a[0] === 0) a.shift();
        if ((new Set(a)).size === 1) return true;

        return false;
    }

    // Store useful frequency values
    let first = a[0];
    let second = a[1];
    let lastSec = a[n - 2];
    let last = a[n - 1];

    // If the highest frequency is more than 1 greater
    // than the second highest, we cannot fix it by removing one char
    if (last - lastSec > 1) return false;

    // Case: all frequencies are already equal
    if ((new Set(a)).size === 1) {

        // Example: [3,3,3] → cannot fix
        if (a[0] !== 1) return false;

        // Example: [1,1,1] → remove one char
        a[0]--;
        if (a[0] === 0) a.shift();
        if ((new Set(a)).size === 1) return true;

        return false;
    }

    // Try reducing the highest frequency by 1
    // Example: [1,1,2] → [1,1,1]
    a[n - 1]--;
    if ((new Set(a)).size === 1) return true;
    a[n - 1]++; // restore
    cl("yes", { a })

    // Try removing one occurrence of the smallest frequency
    // Example: [1,2,2] → [2,2]
    a[0]--;
    if (a[0] === 0) a.shift();
    if ((new Set(a)).size === 1) return true;
    cl("yes2", { a })

    // Remaining cases like:
    // [1,3,3] → true
    // [1,1,2,2] → false
    cl("yes3")

    return false;
};
