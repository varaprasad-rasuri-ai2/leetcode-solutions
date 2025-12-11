var maxResult = function (a, k) {
    let n = a.length;

    // dp[i] = maximum score you can achieve when landing exactly on index i.
    let dp = new Array(n);

    // Max-heap storing objects { val: dp value, i: index }.
    // The comparator ensures the entry with the largest dp value stays on top.
    let pq = new PriorityQueue((a, b) => b.val - a.val);

    // Base case: starting at index 0
    dp[0] = a[0];
    pq.enqueue({ val: dp[0], i: 0 });

    for (let i = 1; i < n; i++) {

        // Remove heap elements that fall outside the valid jump window.
        // A valid previous index j must satisfy: i - k <= j < i
        while (pq.front().i < i - k) {
            pq.dequeue();
        }

        // The top of the heap always contains the maximum dp value
        // from all valid previous indices within distance k.
        dp[i] = pq.front().val + a[i];

        // Push this dp value into the max-heap for future positions.
        pq.enqueue({ val: dp[i], i });
    }

    // The final answer is the maximum score achievable when reaching index n-1.
    return dp[n - 1];
};


var maxResult22222222222 = function (a, k) {
    let n = a.length;

    // maxValSum[i] = best score when landing exactly on index i
    let maxValSum = new Array(n);

    // Max-heap storing { valSum: dp value, index: position }
    let pq = new PriorityQueue((a, b) => b.valSum - a.valSum);

    maxValSum[0] = a[0];
    pq.enqueue({ valSum: maxValSum[0], index: 0 });

    for (let i = 1; i < n; i++) {

        // Remove indices that are too far behind (more than k away)
      // Any index j < i - k is too far away — you cannot jump from j to i anymore.
        // So we remove them from the heap to keep only valid candidates.
        // If j < i - k, that index is too far away and must be removed.
        while (pq.front().index < i - k) {
            pq.dequeue();
        }

        // Best previous dp value + current value
        maxValSum[i] = pq.front().valSum + a[i];

        pq.enqueue({ valSum: maxValSum[i], index: i });
    }

    return maxValSum[n - 1];
};



