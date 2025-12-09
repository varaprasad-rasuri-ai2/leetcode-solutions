var containsNearbyDuplicate = function (a, k) {
    let n = a.length;

    // Map each value to an array of all its indices
    let f = {};
    a.forEach((x, i) => {
        // If x has no entry yet, create an empty array
        f[x] = f[x] ?? [];
        // Store position i for value x
        f[x].push(i);
    });

    // For every value and its list of positions
    for (let [x, indexArr] of Object.entries(f)) {
        // Check consecutive occurrences
        for (let i = 1; i < indexArr.length; i++) {
            let d = indexArr[i] - indexArr[i - 1]; // distance between repeated indices
            if (d <= k) return true;              // Found nearby duplicate
        }
    }

    return false; // No pair found within distance k
};



var containsNearbyDuplicate222 = function (a, k) {
    let n = a.length;

    let ct = 0; // unused variable (can delete)

    // Check every pair (i, j)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {

            // If values match
            if (a[i] == a[j]) {

                // Check if indices are within distance k
                if (Math.abs(i - j) <= k) {
                    return true;
                } else {
                    // Because j increases, any further j will only increase the distance.
                    // So we can break early.
                    break;
                }
            }
        }
    }

    return false; // No valid pair found
};
