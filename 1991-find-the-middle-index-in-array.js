// Short alias for console.log for easier debugging
let cl = console.log;

// Finds the index where the sum of elements to the left
// equals the sum of elements to the right
var findMiddleIndex = function (a) {

    // Get prefix and suffix sum arrays
    let [prefixSumArr, suffixSumArr] = getPrefixSuffixSumArr(a);

    // Debug: log both arrays
    cl({ prefixSumArr, suffixSumArr });

    // Iterate through each index
    for (let i = 0; i < a.length; i++) {

        // prefixSumArr[i - 1] → sum of elements before index i
        // suffixSumArr[i + 1] → sum of elements after index i
        // ?? 0 handles boundary cases (start or end of array)
        if ((prefixSumArr[i - 1] ?? 0) === (suffixSumArr[i + 1] ?? 0)) {
            return i; // Found the middle index
        }
    }

    // If no such index exists
    return -1;
};

function getPrefixSuffixSumArr(a) {
    let n = a.length;

    // Debug: log array length and array
    cl({ n, a });

    let prefixSum = 0; // Running sum from the start
    let suffixSum = 0; // Running sum from the end

    // Arrays to store prefix and suffix sums
    let prefixSumArr = new Array(n);
    let suffixSumArr = new Array(n);

    // Build both arrays in a single loop
    // i moves forward, j moves backward
    for (let i = 0, j = n - 1 - i; i < n; i++, j--) {

        // Debug: current indices and sums
        cl({ i, j, prefixSum, suffixSum });

        // Update running sums
        prefixSum += a[i];
        suffixSum += a[j];

        // Debug: values before assignment
        cl({ pfsur: prefixSumArr[i], sfsa: suffixSumArr[j] });

        // Store sums in their respective arrays
        prefixSumArr[i] = prefixSum;
        suffixSumArr[j] = suffixSum;
    }

    // Debug: final prefix and suffix arrays
    cl({ prefixSumArr, suffixSumArr });

    // Return both arrays as a tuple
    return [prefixSumArr, suffixSumArr];
}
