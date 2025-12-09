var numEquivDominoPairs = function (dominoes) {
    let dLen = dominoes.length;
    let res = 0;

    // We use an array of size 100 because each domino value is 1–9,
    // and the normalized key a*10 + b is always between 11 and 99.
    // Example: [2,5] => key = 25, [5,2] => key = 25 as well.
    let map = Array(100).fill(0);

    for (let i = 0; i < dLen; i++) {
        let [a, b] = dominoes[i];

        // Normalize the domino so its key is order-independent.
        // Example:
        //   [2,5] → 25
        //   [5,2] → 25
        let key = a <= b ? a * 10 + b : b * 10 + a;

        // If map[key] = k, that means k previous dominoes were identical
        // to the current one (after normalization).
        //
        // Each of those k earlier dominoes forms 1 pair with the current one,
        // so we add k to the result.
        res += map[key];

        // Increment count of this normalized domino.
        map[key]++;
    }

    return res;
};


function numEquivDominoPairs222(dominoes) {
    let map = Array(100).fill(0);
    let res = 0;

    for (const [a, b] of dominoes) {
        const key = a <= b ? a * 10 + b : b * 10 + a;
        res += map[key];
        map[key]++;
    }

    return res;
}
