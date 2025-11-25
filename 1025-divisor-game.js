var divisorGame = function (N) {
    return N % 2 === 0;
};


var divisorGame3333 = function (N) {
    // dp object to memoize results for subproblems
    let dp = {};

    // Helper function to determine if the current player can win with number n
    function search(n) {
        // If we already solved this subproblem, return the cached result
        if (dp[n] !== undefined) return dp[n];

        // Base case: if n < 1, the player cannot move, so they lose
        if (n < 1) return (dp[n] = false);

        // Try all possible divisors x (0 < x < n)
        for (let x = 1; x < n; x++) {
            if (n % x === 0) { // x must divide n evenly
                // If the opponent loses after we take x, then we win
                if (search(n - x) === false) {
                    return (dp[n] = true);
                }
            }
        }

        // If none of the moves lead to a win, current player loses
        return (dp[n] = false);
    }

    // Start the search from the initial number N
    return search(N);
};


var divisorGame22222= function (N) {
    function canWin(n) {
        if (n === 1) return false;
        for (let x = 1; x < n; x++) {
            if (n % x === 0 && !canWin(n - x)) {
                return true;
            }
        }
        return false;
    }
    return canWin(N);
};


