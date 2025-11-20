var findFinalValue = function (a, k) {
    // Create a Set from array `a` for O(1) lookup time
    let set = new Set(a);

    // While the current value `k` exists in the set,
    // keep doubling it
    while (set.has(k)) {
        k = k * 2;
    }

    // Return the first value of `k` that is not in the set
    return k;
};
