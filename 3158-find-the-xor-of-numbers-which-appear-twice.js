var duplicateNumbersXOR = function (a) {
    let xor = 0n;        // Will hold the XOR of numbers that appear twice
    let bitmap = 0n;     // Bitmask to track which numbers have been seen

    for (let x of a) {
        x = BigInt(x);   // Convert number to BigInt for safe bit operations

        // Check if this number has been seen before
        if (bitmap & (1n << x)) {
            // If yes, XOR it into the result
            xor ^= x;
        }

        // Mark this number as seen by setting the corresponding bit
        bitmap |= 1n << x;
    }

    return Number(xor);  // Convert result back to regular Number
};

var duplicateNumbersXOR22222 = function (a) {
    let uniqueDups = new Set();  // Stores numbers that appear twice
    let set = new Set();         // Stores numbers that appear once

    for (let x of a) {
        if (set.has(x)) {
            // If number already seen, it's a duplicate
            uniqueDups.add(x);
        } else {
            // Otherwise, add to set of seen numbers
            set.add(x);
        }
    }

    // XOR all numbers that appeared twice
    let xor = 0;
    for (let x of uniqueDups) {
        xor ^= x;
    }

    return xor;
};


