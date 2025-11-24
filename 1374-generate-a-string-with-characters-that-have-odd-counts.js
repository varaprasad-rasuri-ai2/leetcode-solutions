var generateTheString = function (n) {

    // If n is odd:
    // We can simply return 'a' repeated n times.
    // Since n is odd, 'a' appears an odd number of times → valid.
    if (n % 2 === 1) {
        return 'a'.repeat(n);
    }

    // If n is even:
    // Make 'a' appear (n - 1) times → this is odd.
    // Add 'b' once → also odd.
    // Total length = (n - 1) + 1 = n.
    return 'a'.repeat(n - 1) + 'b';
};
