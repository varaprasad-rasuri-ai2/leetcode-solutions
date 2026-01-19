
var constructMaximumBinaryTree222 = function(nums) {
    // Stack will store TreeNode objects
    // It will be maintained as a monotonic decreasing stack
    const stack = [];

    for (let num of nums) {
        // Create a new node for the current number
        const current = new TreeNode(num);

        // Pop all nodes smaller than current value
        // The last popped node becomes the left child
        while (stack.length && stack[stack.length - 1].val < num) {
            current.left = stack.pop();
        }

        // If stack is not empty, the current node
        // becomes the right child of the stack top
        if (stack.length) {
            stack[stack.length - 1].right = current;
        }

        // Push current node onto the stack
        stack.push(current);
    }

    // The bottom of the stack contains the root (maximum value)
    return stack[0];
};

var constructMaximumBinaryTree = function (a) {

    // Recursive helper function to build the maximum binary tree
    // n: current tree node (initially null)
    // a: current subarray to process
    function dfs(n, a) {

        // Base case: if the array is empty, no node to create
        if (a.length === 0) return null;

        // Find the maximum value in the current subarray
        let max = Math.max(...a);

        // If current node does not exist, create a new node
        if (!n) n = new TreeNode(max);

        // Find index of the maximum value
        let i = a.indexOf(max);

        // Recursively build the left subtree using elements
        // to the left of the maximum value
        n.left = dfs(n.left, a.slice(0, i));

        // Recursively build the right subtree using elements
        // to the right of the maximum value
        n.right = dfs(n.right, a.slice(i + 1));

        // Return the constructed node
        return n;
    }

    // Start recursion with the full array and no initial node
    return dfs(null, a);
};


var constructMaximumBinaryTree333 = function(nums) {

    // Recursive helper function
    function dfs(arr) {

        // Base case: empty array produces no node
        if (arr.length === 0) return null;

        // Step 1: find the maximum value in the array
        let maxVal = Math.max(...arr);

        // Step 2: find the index of the maximum value
        let maxIndex = arr.indexOf(maxVal);

        // Step 3: create the root node with the maximum value
        let root = new TreeNode(maxVal);

        // Step 4: recursively build the left subtree
        // using elements to the left of the maximum value
        root.left = dfs(arr.slice(0, maxIndex));

        // Step 5: recursively build the right subtree
        // using elements to the right of the maximum value
        root.right = dfs(arr.slice(maxIndex + 1));

        // Step 6: return the constructed subtree
        return root;
    }

    // Start building the tree using the entire array
    return dfs(nums);
};

