var findValidPair = function (s) {
    let n = s.length;

    // Frequency map: count how many times each character appears
    let f = {};
    for (let ch of s) {
        f[ch] = (f[ch] ?? 0) + 1;   // increment frequency
    }

    // Check every adjacent pair in the string
    for (let i = 1; i < n; i++) {

        let pch = s[i - 1];  // previous character
        let cch = s[i];      // current character

        // Adjacent characters must be different
        if (pch !== cch) {

            // Character's frequency must equal the digit it represents:
            // e.g. character '3' must appear exactly 3 times in the whole string
            if (
                f[pch] === +pch &&   // +pch converts '3' → 3
                f[cch] === +cch
            ) {
                // Return the 2-character pair as a string
                return pch + cch;
            }
        }
    }

    // No valid adjacent pair found
    return '';
};

function findValidPair2222(s) {
    const n = s.length;

    // Frequency map
    const freq = {};
    for (const ch of s) {
        freq[ch] = (freq[ch] ?? 0) + 1;
    }

    // Check adjacent pairs
    for (let i = 1; i < n; i++) {
        let a = s[i - 1], b = s[i];
        if (a !== b && freq[a] === +a && freq[b] === +b) {
            return a + b;
        }
    }

    return "";
}

function findValidPair333(s) {
    const freq = Array(10).fill(0);

    for (const ch of s) freq[ch]++;

    for (let i = 1; i < s.length; i++) {
        const a = s[i - 1], b = s[i];
        if (a !== b && freq[a] === +a && freq[b] === +b) {
            return a + b;
        }
    }

    return "";
}


