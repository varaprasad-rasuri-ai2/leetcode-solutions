var numberOfWays = function (corridor) {
    // Store the indices of all seats ('S') in the corridor
    const seatIndices = [];

    // Collect positions of seats
    for (let i = 0; i < corridor.length; i++) {
        if (corridor[i] === 'S') {
            seatIndices.push(i);
        }
    }

    const n = seatIndices.length;

    // If there are no seats or an odd number of seats,
    // it is impossible to divide them into pairs
    if (n === 0 || n % 2 === 1) {
        return 0;
    }

    // Modulo for large number calculations
    const MOD = 1_000_000_007n;

    // Initialize the total number of ways
    let totalWays = 1n;

    // Start from the third seat (index 2) and process seat pairs
    // Each pair consists of two seats
    for (let pairStart = 2; pairStart < n; pairStart += 2) {
        // End index of the previous seat pair
        let endOfPrevPair = seatIndices[pairStart - 1];

        // Start index of the current seat pair
        let startOfCurrPair = seatIndices[pairStart];

        // Number of elements (plants or empty spaces) between the two pairs
        // Example: S _ _ S  → gap = 2
        let numOfElementsBetween = startOfCurrPair - endOfPrevPair - 1;

        // Number of valid divider positions is gap + 1
        // Each divider position creates a distinct valid partition
        let numOfDividersPossible = numOfElementsBetween + 1;

        // Multiply current choices with previous combinations
        // (choices are independent)
        totalWays *= BigInt(numOfDividersPossible);
        totalWays %= MOD;
    }

    // Convert BigInt result back to Number as required
    return Number(totalWays);
};


var numberOfWays2222 = function (corridor) {
    // Store positions of all seats
    const seats = [];
    for (let i = 0; i < corridor.length; i++) {
        if (corridor[i] === 'S') seats.push(i);
    }

    // Must have an even, non-zero number of seats
    if (seats.length === 0 || seats.length % 2 === 1) return 0;

    const MOD = 1_000_000_007n;
    let ways = 1n;

    // For every gap between seat pairs
    for (let i = 2; i < seats.length; i += 2) {
        // Number of divider positions = gap size + 1
        ways *= BigInt(seats[i] - seats[i - 1] );
        ways %= MOD;
    }

    return Number(ways);
};

var numberOfWays333 = function (corridor) {
    // Modulo value as BigInt (since multiplication can overflow Number)
    const MOD = 1_000_000_007n;

    // Counts number of seats encountered in the current segment
    let seatCount = 0;

    // Counts number of plants between two seat-pairs
    let plantCount = 0;

    // dp represents the total number of ways so far
    // Starts with 1 because we multiply choices
    let dp = 1n;

    // Traverse the corridor string
    for (const c of corridor) {

        if (c === 'S') {
            seatCount++;

            // When we encounter the 3rd seat,
            // it means a new section is starting
            // The previous section had exactly 2 seats
            if (seatCount === 3) {
                // There are (plantCount + 1) places to put a divider
                dp = (dp * BigInt(plantCount + 1)) % MOD;

                // Reset for the next section
                // Current 'S' becomes the first seat of the new section
                seatCount = 1;
                plantCount = 0;
            }

        } else if (seatCount === 2) {
            // Count plants only after completing a valid seat pair
            // These plants create multiple divider placement options
            plantCount++;
        }
    }

    // At the end, corridor must end with exactly one valid section (2 seats)
    // Otherwise, division is not possible
    return seatCount === 2 ? Number(dp) : 0;
};
