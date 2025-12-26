var nextGreatestLetter = function (a, target) {
    let i = upperBoundFirstG(a, target); // Find the first index where a[i] > target
    if (i === a.length) return a[0];     // Wrap around if target is >= all letters
    return a[i];                         // Return the smallest letter greater than target
}

function upperBoundFirstG(a, tar, lo = 0, hi = a.length) {
    while (lo < hi) {
        let mid = Math.trunc(lo / 2 + hi / 2);  // Midpoint index
        if (a[mid] > tar) {
            hi = mid; // Candidate found, try left to find earlier occurrence
        } else {
            lo = mid + 1; // a[mid] <= target, move right
        }
    }
    return lo; // lo is the first index where a[lo] > target
}

var nextGreatestLetter222222 = function (letters, target) {
    let res = "";
    let smallest = "";

    for (let ch of letters) {
        // Find letters greater than target and keep the smallest one
        if (ch > target) {
            if (!res) res = ch;           // first candidate
            else if (ch < res) res = ch;  // smaller than current candidate
        }

        // Track the smallest letter in the array for wrap-around
        if (!smallest) smallest = ch;
        else if (ch < smallest) smallest = ch;
    }

    if (!res) res = smallest; // If no letter > target, return the smallest letter

    return res;
}
