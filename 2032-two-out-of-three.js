var twoOutOfThree = function (a, b, c) {
    // Convert all arrays to Sets to remove duplicates within each
    let set1 = new Set(a);
    let set2 = new Set(b);
    let set3 = new Set(c);

    // Result set to store numbers that appear in at least two arrays
    let res = new Set();

    // Check each set against the others
    for (let x of set1) if (set2.has(x) || set3.has(x)) res.add(x);
    for (let x of set2) if (set1.has(x) || set3.has(x)) res.add(x);
    for (let x of set3) if (set1.has(x) || set2.has(x)) res.add(x);

    // Convert the result set back to an array and return
    return [...res];
};
