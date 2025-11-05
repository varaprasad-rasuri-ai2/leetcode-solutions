var isPowerOfTwo = function (n) {
    // A power of two must be positive (2⁰ = 1, 2¹ = 2, etc.)
    // So we immediately rule out 0 and negative numbers
    return (n > 0) && ((n & (n - 1)) === 0);
};
