var countOdds = function (low, high) {

    // If low is even, move it up to the next odd number
    if (low % 2 === 0) low++;

    // If high is even, move it down to the previous odd number
    if (high % 2 === 0) high--;

    // After adjustment, if low passed high, there are no odd numbers
    if (low > high) return 0;

    // Both low and high are now odd.
    // The count of odd numbers in the interval is:
    //   (difference / 2) + 1
    // Example: low=3, high=9 → (9 - 3) / 2 + 1 = 3 + 1 = 4 → odds are 3,5,7,9
    return ((high - low) / 2) + 1;
};


function countOdds222(low, high) {
    let count = 0;

    // Start from the first odd ≥ low
    if (low % 2 === 0) low++;

    for (let n = low; n <= high; n += 2) {
        count++;
    }

    return count;
}

function countOdds333(low, high) {
    // Move low to the next odd
    if (!(low & 1)) low++;

    // Move high to the previous odd
    if (!(high & 1)) high--;

    if (low > high) return 0;

    return ((high - low) >> 1) + 1;
}


