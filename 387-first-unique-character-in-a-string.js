var firstUniqChar = function (s) {
    let prevSeen = new Set()
    for (let ch of s) {
        if (prevSeen.has(ch)) continue

        if (s.indexOf(ch) === s.lastIndexOf(ch)) {
            return s.indexOf(ch)
        }
        prevSeen.add(ch)
    }
    return -1
}

var firstUniqChar55555 = function (s) {
    for (let ch of s) {
        if (s.indexOf(ch) === s.lastIndexOf(ch)) {
            return s.indexOf(ch)
        }
    }
    return -1
}

var firstUniqChar444444 = function (s) {

    let freq = {};
    let chFirstFoundAtIndex = {};

    for (let i = 0; i < s.length; i++) {
        let ch = s[i]
        if (freq[ch] === undefined) {
            freq[ch] = freq[ch] ?? 0;
        }
        freq[ch]++;

        if (chFirstFoundAtIndex[ch] === undefined) {
            chFirstFoundAtIndex[ch] = i
        }
    }

    for (let ch in freq) {
        const count = freq[ch]
        if (count === 1) {
            return chFirstFoundAtIndex[ch]
        }
    }
    return -1;
};

var firstUniqChar333333 = function (s) {
    let freq = {};
    for (let ch of s) {
        if (freq[ch] === undefined) {
            freq[ch] = freq[ch] ?? 0;
        }
        freq[ch]++;
    }

    for (let ch in freq) {
        const count = freq[ch]
        if (count === 1) {
            return s.indexOf(ch);
        }
    }
    return -1;
};

var firstUniqChar2222222 = function (s) {
    let freq = {};
    for (let ch of s) {
        if (freq[ch] === undefined) {
            freq[ch] = freq[ch] ?? 0;
        }
        freq[ch]++;
    }

    for (let [ch, count] of Object.entries(freq)) {
        if (count === 1) {
            return s.indexOf(ch);
        }
    }
    return -1;
};
