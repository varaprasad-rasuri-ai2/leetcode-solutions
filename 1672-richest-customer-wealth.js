// Function to find the richest customer's wealth
var maximumWealth = function (accounts) {
    
    // Initialize a variable to keep track of the maximum wealth found so far
    let maxcw = 0;

    // Loop through each customer's list of bank balances
    for (let customerWealths of accounts) {
        // Calculate this customer's total wealth by summing up their balances
        // The 'reduce' function adds up all elements in the array
        let cw = customerWealths.reduce((sum, x) => sum + x, 0);

        // If this customer's wealth is greater than the current maximum, update it
        if (cw > maxcw) maxcw = cw;

        // Alternatively, you could use:
        // maxcw = Math.max(maxcw, cw);
    }

    // After checking all customers, return the highest wealth found
    return maxcw;
};
