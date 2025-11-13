var countGoodTriplets = function (arr, a, b, c) {
    // Get the total number of elements in the array
    let n = arr.length;

    // Initialize a counter for "good triplets"
    let ct = 0;

    // Loop through all possible triplets (i, j, k)
    // i < j < k ensures each triplet is unique and ordered
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            for (let k = j + 1; k < n; k++) {
                // Check if the current triplet (arr[i], arr[j], arr[k]) satisfies all 3 conditions:
                // 1️⃣ |arr[i] - arr[j]| <= a
                // 2️⃣ |arr[j] - arr[k]| <= b
                // 3️⃣ |arr[i] - arr[k]| <= c
                if (
                    (Math.abs(arr[i] - arr[j]) <= a) &&
                    (Math.abs(arr[j] - arr[k]) <= b) &&
                    (Math.abs(arr[i] - arr[k]) <= c)
                ) {
                    // If all conditions are true, count this as a "good" triplet
                    ct++;
                }
            }

    // Return the total number of valid (good) triplets found
    return ct;
};
