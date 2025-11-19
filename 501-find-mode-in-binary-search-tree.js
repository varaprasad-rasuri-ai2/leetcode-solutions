var findMode = function (root) {
    // Array to collect node values in sorted order
    let vals = [];

    // Inorder traversal of a BST gives values in ascending order
    function dfs(n) {
        if (!n) return;

        dfs(n.left);
        vals.push(n.val);   // visit current node
        dfs(n.right);
    }

    dfs(root);

    // Now `vals` is sorted because of inorder traversal.
    // To find the mode(s), we just count consecutive duplicates.

    let freq = 0;           // frequency of current number
    let maxFreq = 0;        // highest frequency seen so far
    let maxFreqEles = [];   // list of numbers with highest frequency

    for (let i = 0; i < vals.length; i++) {
        let prev = vals[i - 1];
        let curr = vals[i];

        // Reset or increment frequency depending on whether
        // the current number is the same as the previous one.
        if (curr !== prev) {
            freq = 1;       // starting a new number
        } else {
            freq++;         // continuing a streak of same numbers
        }

        // Update mode information
        if (freq > maxFreq) {
            maxFreq = freq;
            maxFreqEles = [curr];   // new highest frequency
        } else if (freq === maxFreq) {
            maxFreqEles.push(curr); // tie for highest frequency
        }
    }

    return maxFreqEles;
};
