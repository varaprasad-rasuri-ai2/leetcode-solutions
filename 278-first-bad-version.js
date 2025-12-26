var solution = function (isBadVersion) { 

    // Helper function to find the first version that is bad using binary search
    function lowerBoundFirstEG(lo, hi) {
        while (lo < hi) {  // Continue until lo meets hi
            // Find middle point, avoiding overflow
            let mid = Math.trunc(lo / 2 + hi / 2);

            if (isBadVersion(mid)) { // If mid is bad
                hi = mid;  // The first bad version is mid or to the left
            } else {
                lo = mid + 1;  // Otherwise, search on the right
            }
        }
        return lo; // lo will be the first bad version
    }

    // Return a function that takes n (total versions)
    return function (n) {
        return lowerBoundFirstEG(1, n);
    }
}


var solution2222 = function (isBadVersion) {

    function binarysearch(lo, hi) {
        if (lo > hi) return lo; // Base case: when lo passes hi, lo is first bad

        var mid = lo + Math.trunc((hi - lo) / 2); // Middle point

        if (isBadVersion(mid)) { // mid is bad
            hi = mid - 1; // Search left
        } else {
            lo = mid + 1; // Search right
        }

        return binarysearch(lo, hi); // Recursive call
    }

    // Return a function that takes n (total versions)
    return function (n) {
        return binarysearch(1, n);
    };
};


