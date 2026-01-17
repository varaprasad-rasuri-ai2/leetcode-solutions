// Computes x raised to the power n using fast exponentiation
var myPow = function (x, n) {
    // Check if the exponent is negative
    let isNeg = n < 0;

    // If negative, convert exponent to positive
    if (isNeg) {
        n = -n;
    }

    let prod = 1;   // Result accumulator
    let base = x;   // Current base value
    let power = n;  // Remaining exponent

    // Fast exponentiation loop
    while (power > 0) {

        // If power is odd, multiply result by base
        if (power % 2 === 1) {
            prod *= base;
            power--;
        }

        // Square the base and halve the exponent
        base *= base;
        power = power / 2;
    }

    // If original exponent was negative, return reciprocal
    if (isNeg) {
        return 1 / prod;
    }

    return prod;
};

// Built-in JavaScript power operator
var myPow222 = function (x, n) {
    return x ** n;
};


// LeetCode 50: Pow(x, n)
var myPow333 = function (x, n) {
    // Handle negative exponent
    let isNeg = n < 0;

    // IMPORTANT: use Math.abs to avoid overflow issues
    n = Math.abs(n);

    let result = 1;

    // Fast exponentiation
    while (n > 0) {
        // If n is odd, multiply result by current base
        if (n % 2 === 1) {
            result *= x;
        }

        // Square the base
        x *= x;

        // Divide exponent by 2
        n = Math.floor(n / 2);
    }

    // If original exponent was negative, return reciprocal
    return isNeg ? 1 / result : result;
};
