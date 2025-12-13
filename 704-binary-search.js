// -----------------------------
// Binary Search Helper Function
// -----------------------------
function binarySearch(arr, target) {
    // Initialize low and high pointers
    let lo = 0;
    let hi = arr.length - 1;

    // Loop until search space is exhausted
    while (lo <= hi) {
        // Find the middle index
        const mid = Math.trunc((lo + hi) / 2);

        // Check if middle element is the target
        if (arr[mid] === target) {
            return mid; // Found, return index
        } 
        // If middle element is less than target,
        // search in the right half
        else if (arr[mid] < target) {
            lo = mid + 1;
        } 
        // If middle element is greater than target,
        // search in the left half
        else {
            hi = mid - 1;
        }
    }

    // Target not found
    return -1;
}

// -----------------------------
// Main Search Function
// -----------------------------
var search = function (nums, target) {
    // Call binary search on sorted array nums
    return binarySearch(nums, target);
};


