function isPrime(n) {
    // Numbers less than 2 are not prime
    if (n < 2) return false;

    // A prime number has exactly two factors: 1 and itself
    // We only need to check divisors up to √n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // If n is divisible by i, it has a factor other than 1 and itself
        if (n % i === 0) {
            return false; // Not a prime number
        }
    }

    // No divisors found, so n is prime
    return true;
}

var checkPrimeFrequency = function (a) {
    let freq = {}; // Object to store frequency of each element

    // Count how many times each element appears in the array
    for (let e of a) {
        freq[e] = (freq[e] ?? 0) + 1;
    }

    // Check if any frequency value is a prime number
    for (let f of Object.values(freq)) {
        if (isPrime(f)) return true;
    }

    // No prime frequencies found
    return false;
};
