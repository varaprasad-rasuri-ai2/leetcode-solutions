// Generate a boolean array `primes` using the Sieve of Eratosthenes.
// primes[i] = true means "i is prime".
var getPrimesTill_sieveOfEratosthenes = (n) => {
    // Start by assuming all numbers are prime
    const primes = new Array(n + 1).fill(true);
    primes[0] = false; // 0 is not prime
    primes[1] = false; // 1 is not prime

    // Classic sieve: eliminate multiples of each prime
    for (let i = 0; i <= Math.sqrt(n); i++) {
        if (primes[i]) {
            // Mark multiples of i as not prime
            // Start from 2 * i (not from i*i, which would be faster)
            for (let mi = 2 * i; mi <= n; mi += i) {
                primes[mi] = false;
            }
        }
    }

    // Boolean array of primality
    return primes; 
};

// Precompute primes up to 500,001
const primes = getPrimesTill_sieveOfEratosthenes(5 * 10 ** 5 + 1);

// Fast primality check using precomputed sieve
const isPrime = (n) => primes[n];

// Find the largest prime <= n that can be written as sum of consecutive primes starting from 2
var largestPrime = function (n) {
    let s = 0; // running sum of consecutive primes from 2 upward
    let prefixPrimeSums = new Set(); // store all prefix sums that are themselves prime

    // Build prefix sums: (2), (2+3), (2+3+5), ...
    for (let i = 0; i <= n; i++) {
        if (primes[i]) {
            s += i;                  // update running sum of prime numbers
            prefixPrimeSums.add(s);   // record the prefix sum
        }
    }

    // Search downward from n to find the largest prime
    // that is also one of the prefix sums computed above.
    for (; n >= 0; n--) {
        if (primes[n]) {                // check prime
            if (prefixPrimeSums.has(n)) // check if prime is a prefix sum
                return n;               // found the largest such prime
        }
    }

    return 0; // if no such prime exists
};
