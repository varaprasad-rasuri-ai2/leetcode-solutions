// Function to compute the Greatest Common Divisor (GCD)
// Uses the Euclidean algorithm
const gcd = (a, b) => {
    // Base case: when b becomes 0, a is the GCD
    if (b === 0) return a

    // Recursive call: gcd(b, a % b)
    return gcd(b, a % b)
}

var findGCD = function (a) {
    // Find the smallest number in the array
    let min = Math.min(...a)

    // Find the largest number in the array
    let max = Math.max(...a)

    // The GCD of the whole array is the same as the GCD of min and max
    return gcd(min, max)
};
