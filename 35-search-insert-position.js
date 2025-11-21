// Binary search to find either the exact target index,
// or the position where the target should be inserted
// to maintain sorted order.
function binarySearchInsertAt(arr, target) {
    let lo = 0;                // left boundary of the search window
    let hi = arr.length - 1;   // right boundary of the search window

    // Continue searching while the window is valid
    while (lo <= hi) {

        // Middle index (using truncation instead of Math.floor)
        const mid = Math.trunc((lo + hi) / 2);

        // Case 1: Target found → return the index
        if (arr[mid] === target) {
            return mid;

        // Case 2: Target is larger → discard left half
        } else if (arr[mid] < target) {
            lo = mid + 1;

        // Case 3: Target is smaller → discard right half
        } else {
            hi = mid - 1;
        }
    }

    // If not found:
    // 'lo' now points to the correct insertion position.
    return lo;
}

// Wrapper function for LeetCode "Search Insert Position"
var searchInsert = function (nums, target) {
    // Simply reuse the helper function for clarity
    return binarySearchInsertAt(nums, target);
};
