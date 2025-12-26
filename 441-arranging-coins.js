var arrangeCoins = function (n) {
    let s = 0  // This variable keeps track of the total number of coins used so far.

    for (let rowCount = 1; ; rowCount++) {  // Start building rows from row 1 upwards.
        s += rowCount  // Add coins for the current row to the total.
        if (s > n) {  // If the total exceeds the available coins...
            return rowCount - 1  // ...the last row cannot be completed, so return the previous row number.
        }
    }
};

var arrangeCoins333 = function(n) {
    let total = 0;
    let rows = 0;
    
    while (total + (rows + 1) <= n) {  // Check if we can build the next row
        rows++;
        total += rows;  // Add coins for this row
    }
    
    return rows;
};



var arrangeCoins222 = function(n) {
    let left = 0, right = n;  // Initialize the search range: rows could be from 0 to n

    // Binary search to find the maximum k such that k*(k+1)/2 <= n
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);  // Middle of current range
        let coins = mid * (mid + 1) / 2;           // Total coins needed for 'mid' complete rows

        if (coins === n) return mid;   // Exact match: 'mid' complete rows
        if (coins < n) left = mid + 1; // Too few coins used, need more rows → search right
        else right = mid - 1;          // Too many coins used → search left
    }

    // When loop ends, 'right' will be the largest row count such that total coins <= n
    return right;
};
