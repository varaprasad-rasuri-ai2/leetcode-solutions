// Function to find the pivot index of an array
// Pivot index: index where sum of elements on the left equals sum on the right
var pivotIndex = function (a) {
    // Compute arrays of prefix sums (left sums) and suffix sums (right sums)
    let [prefixSumArr, suffixSumArr] = getPrefixSuffixSumArr(a)

    // Loop through each index to check for pivot
    for (let i = 0; i < a.length; i++) {
        // If left sum (prefix) equals right sum (suffix), return the index
        // Use `?? 0` to handle edges: left of first element or right of last element
        if ((prefixSumArr[i - 1] ?? 0) === (suffixSumArr[i + 1] ?? 0)) {
            return i
        }
    }

    // No pivot found, return -1
    return -1
}

// Helper function to calculate prefix and suffix sum arrays
function getPrefixSuffixSumArr(a) {
    let n = a.length;

    // Initialize running sums for prefix and suffix
    let prefixSum = 0;
    let suffixSum = 0;

    // Arrays to store prefix sums and suffix sums
    let prefixSumArr = new Array(n);
    let suffixSumArr = new Array(n);

    // Loop to fill both prefixSumArr and suffixSumArr simultaneously
    for (let i = 0, j = n - 1 - i; i < n; i++, j--) {
        prefixSum += a[i];      // running sum from start
        suffixSum += a[j];      // running sum from end
        prefixSumArr[i] = prefixSum;
        suffixSumArr[j] = suffixSum;
    }

    // Return both arrays
    return [prefixSumArr, suffixSumArr];
}


// Function to find the pivot index of an array
// Pivot index: index where sum of elements on the left equals sum on the right
var pivotIndex222 = function(a) {
    // Array to store prefix sums (cumulative sum from start)
    let prefix = [];
    let sum = 0; // running sum

    // Build prefix sum array
    for (let num of a) {
        sum += num;       // add current number to running sum
        prefix.push(sum); // store cumulative sum
    }

    // Total sum of array = last element in prefix array
    let total = prefix[a.length - 1];

    // Iterate through array to check for pivot index
    for (let i = 0; i < a.length; i++) {
        // Left sum: sum of elements before index i
        let left = i === 0 ? 0 : prefix[i - 1];

        // Right sum: total sum minus sum including current index
        let right = total - prefix[i];

        // If left and right sums are equal, we found the pivot
        if (left === right) return i;
    }

    // No pivot index found
    return -1;
}

