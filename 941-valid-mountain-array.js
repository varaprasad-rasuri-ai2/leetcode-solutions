// Checks whether the given array is a valid mountain array
// A mountain array must:
// 1. Strictly increase to a peak
// 2. Then strictly decrease
// 3. Have no plateaus and at least one up and one down
var validMountainArray = function (arr) {
    let n = arr.length

    // Flag to confirm we found a valid increasing or decreasing sequence
    let found = false
    let i

    // First phase: strictly increasing sequence
    // Start from index 1 and compare with previous element
    for (i = 1; i < n; i++) {
        if (arr[i - 1] < arr[i]) {
            // Still going uphill
            found = true
        } else {
            // Stop when increase breaks (peak reached or invalid)
            break
        }
    }

    // If there was no increasing part, it's not a mountain
    if (!found) return false

    // Reset flag for decreasing phase
    found = false

    // Second phase: strictly decreasing sequence
    // Continue from where the increasing loop stopped
    for (; i < n; i++) {
        if (arr[i - 1] > arr[i]) {
            // Still going downhill
            found = true
        } else {
            // Stop if the decrease condition breaks
            break
        }
    }

    // Debug output (can be removed in production)
    cl = console.log
    cl({ found, i, n })

    // Valid mountain if:
    // 1. We had a decreasing part
    // 2. We reached the end of the array
    return found && i === n
};
