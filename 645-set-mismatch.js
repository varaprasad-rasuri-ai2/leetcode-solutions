var findErrorNums = function (a) {
    let bitmap = 0n;    // Use BigInt as a bitmask to track seen numbers
    let dup = -1;       // To store the number that appears twice

    // Step 1: Find the duplicate number
    for (let x of a) {
        x = BigInt(x);  // Convert to BigInt for safe bit manipulation

        // Check if this number has already been seen
        if (bitmap & (1n << x)) {
            dup = x;    // Found the duplicate
        }

        // Mark this number as seen
        bitmap |= 1n << x;
    }

    // Step 2: Ensure the duplicate's bit is set (safe-guard, not strictly needed)
    bitmap |= 1n << dup;

    let missing = -1;  // To store the missing number

    // Step 3: Find the missing number
    for (let i = 1; i <= a.length; i++) {
        i = BigInt(i);  // Convert to BigInt for bit operations

        // If the bit is not set, this number is missing
        if (!(bitmap & (1n << i))) {
            missing = i;
            break;
        }
    }

    // Step 4: Return results as regular numbers
    return [Number(dup), Number(missing)];
};
