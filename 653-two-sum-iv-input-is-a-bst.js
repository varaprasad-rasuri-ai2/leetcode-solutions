// Standard binary search function
// Returns the index of target in a sorted array, or -1 if not found
function bsearch(arr, target) {
    let lo = 0;
    let hi = arr.length - 1;

    while (lo <= hi) {
        // Middle index (integer division)
        const mid = Math.trunc((lo + hi) / 2);

        if (arr[mid] === target) {
            return mid; // found target
        } else if (arr[mid] < target) {
            lo = mid + 1; // target is on the right side
        } else {
            hi = mid - 1; // target is on the left side
        }
    }

    return -1; // target not found
}

// Function to check if there exists two elements in the BST whose sum equals target
var findTarget = function (root, target) {
    let vals = [];

    // In-order DFS to collect all node values in sorted order
    function dfs(n) {
        if (!n) return;

        dfs(n.left);     // traverse left subtree
        vals.push(n.val); // visit current node
        dfs(n.right);    // traverse right subtree
    }

    dfs(root); // fill the vals array

    // Iterate through each value in vals
    for (let i = 0; i < vals.length; i++) {
        let x = vals[i];

        // Look for the complement (target - x) using binary search
        let j = bsearch(vals, target - x);

        // Check if complement exists and is not the same element
        if (j !== -1 && j !== i) {
            return true; // found a pair
        }
    }

    return false; // no such pair exists
};
