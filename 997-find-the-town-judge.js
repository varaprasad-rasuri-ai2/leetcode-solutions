// var cl = console.log
var findJudge = function (n, trust) {
    // Object to track trust balance for each person
    // +1 → trusted by someone
    // -1 → trusts someone
    let d = {}

    // Initialize trust balance for all people (1 to n)
    for (let i = 1; i <= n; i++) {
        d[i] = 0
    }

    // Process each trust relationship
    for (let [a, b] of trust) {
        d[a]--     // a trusts someone, so cannot be the judge
        d[b]++     // b is trusted by someone
    }

    // The judge must be trusted by n - 1 people
    // and must not trust anyone
    for (let i = 1; i <= n; i++) {
        if (d[i] === n - 1) {
            return i
        }
    }

    // No judge exists
    return -1
};
