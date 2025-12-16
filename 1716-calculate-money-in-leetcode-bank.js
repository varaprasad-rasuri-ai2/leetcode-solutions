var totalMoney = function (n) {
    // Total amount of money saved
    let s = 0;

    // If there are no days, nothing is saved
    if (n === 0) return s;

    // mondayCount represents how much is deposited on Monday of each week
    // It increases by 1 every new week
    for (let mondayCount = 1; ; mondayCount++) {
        // Loop through 7 days of the week (Monday to Sunday)
        for (let day = 0; day < 7; day++) {
            // Deposit increases by 1 each day of the week
            s += mondayCount + day;

            // One day has passed
            n--;

            // If all days are accounted for, return the total
            if (n === 0) return s;
        }
    }
};
