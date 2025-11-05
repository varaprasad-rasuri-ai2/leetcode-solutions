const charToIndex = (ch) => {
    return ch.charCodeAt(0) - 'a'.charCodeAt(0);
};

var findTheDifference = function (s, t) {
    let bitmap = 0;

    // Toggle each bit for letters in s
    for (let ch of s) {
        let i = charToIndex(ch);
        if (!(bitmap & (1 << i))) bitmap |= (1 << i);  // set bit if not set
        else bitmap &= ~(1 << i);                      // unset if already set (toggle)
    }

    // Do the same toggle for t
    for (let ch of t) {
        let i = charToIndex(ch);
        if (!(bitmap & (1 << i))) bitmap |= (1 << i);
        else bitmap &= ~(1 << i);
    }

    // The bit left ON corresponds to the extra character
    for (let ch of t) {
        let i = charToIndex(ch);
        if (bitmap & (1 << i)) {
            return ch;
        }
    }
};

var findTheDifference6666 = function (s, t) {
    let f = {};

    // Toggle counts for s
    for (let x of s)
        if (f[x]) f[x] = 0;  // if already marked, reset
        else f[x] = 1;       // else mark it

    // Toggle counts for t
    for (let x of t)
        if (f[x]) f[x] = 0;
        else f[x] = 1;

    // The one remaining as 1 is the added character
    for (let x of t) {
        if (f[x]) {
            return x;
        }
    }
};

var findTheDifference555555 = function (s, t) {
    let f = {};
    for (let x of s)
        if (f[x]) f[x] = 0;
        else f[x] = 1;

    let g = {};
    for (let x of t)
        if (g[x]) g[x] = 0;
        else g[x] = 1;

    for (let x of t) {
        if (f[x] !== g[x]) {
            return x;
        }
    }
};

var findTheDifference444444444 = function (s, t) {
    let f = {};
    for (let x of s) f[x] = (f[x] || 0) + 1;

    let g = {};
    for (let x of t) g[x] = (g[x] || 0) + 1;

    for (let x of t) {
        if (f[x] !== g[x]) {
            return x;
        }
    }
};

var findTheDifference33333 = function (s, t) {
    let f = {};
    for (let x of s) {
        f[x] = (f[x] || 0) + 1; // count each char in s
    }

    for (let x of t) {
        if ((x in f) && (f[x] !== 0)) {
            f[x]--; // consume one occurrence
        } else {
            return x; // found extra letter
        }
    }
};

var findTheDifference222222 = function (s, t) {
    let f = {};

    // Count occurrences in s
    for (let x of s) {
        f[x] = (f[x] || 0) + 1;
    }

    // Traverse t, reducing counts
    for (let x of t) {
        if (x in f) {
            f[x]--;
            if (f[x] === 0) {
                delete f[x]; // cleanup for efficiency
            }
        } else {
            return x; // the new character
        }
    }
};



