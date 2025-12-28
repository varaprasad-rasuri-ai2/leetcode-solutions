// Function to check if a number n is prime
var isPrime = function (n) {
    if (n < 2) return false;      // Numbers less than 2 are not prime
    if (n === 2) return true;     // 2 is prime
    if (n % 2 === 0) return false; // Even numbers greater than 2 are not prime

    // Check odd divisors from 3 up to sqrt(n)
    // Only odd numbers because even numbers are already handled
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false; // n is divisible by i, so not prime
    }
    return true; // n is prime
};

// Function to count primes less than n
var countPrimes = function (n) {
    if (n <= 2) return 0; // No primes less than 2

    let count = 0;
    // Loop through all numbers from 0 to n-1
    for (let i = 0; i < n; i++) {
        if (isPrime(i)) count++; // Increment count if i is prime
    }

    return count; // Return total count of primes
};
