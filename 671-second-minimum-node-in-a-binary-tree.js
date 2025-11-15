let cl = console.log
var findSecondMinimumValue = function (root) {
    let vals = []  // Array to collect all node values from the tree

    // DFS function to traverse the tree
    function dfs(n) {
        if (!n) return  // Base case: null node, just return

        vals.push(n.val) // Add current node's value to vals array

        dfs(n.left)  // Recurse on left child
        dfs(n.right) // Recurse on right child
    }

    dfs(root) // Start DFS from root

    let n = vals.length
    cl({ vals, n }) // Debug: show all values collected and total count

    let uniqueVals = new Set(vals) // Create a Set to keep only unique values
    cl({ uniqueVals }) // Debug: see the unique values in the tree

    let uniqueArrVals = Array.from(uniqueVals) // Convert Set to Array
    uniqueArrVals.sort((a, b) => a - b)        // Sort values in ascending order

    let m = uniqueArrVals.length
    cl({ uniqueArrVals, m }) // Debug: see sorted unique values and their count

    if (m >= 2) { 
        // If there are at least 2 unique values,
        // the second minimum is at index 1 after sorting
        return uniqueArrVals[1]
    } else {
        // If there is only 1 unique value, there is no second minimum
        return -1
    }
};
