// Function to determine if the first player can win Nim Game
var canWinNim = function(n) {
    // Key insight: if n is a multiple of 4, the first player loses
    // Otherwise, the first player can always force a win
  
    // results repeat every 4 steps:
    // n	Win?
    // 1	T
    // 2	T
    // 3	T
    // 4	F
    return n % 4 !== 0; // true else false
};

var canWinNimDPSpaceOptimized = function(n) {
    if (n <= 3) return true;

    // dp[i-3], dp[i-2], dp[i-1]
    let a = true;  // dp[i-3]
    let b = true;  // dp[i-2]
    let c = true;  // dp[i-1]

    let current;

    for (let i = 4; i <= n; i++) {
        current = (!a) || (!b) || (!c);

        // shift window
        a = b;
        b = c;
        c = current;
    }

    return current;
};

