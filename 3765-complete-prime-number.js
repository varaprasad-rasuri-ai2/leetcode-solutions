// Helper function to check whether a number is prime
let isPrime = (n) => {
    // Any number less than 2 is not prime
    if (n < 2) return false;

    // Check divisibility from 2 up to the square root of n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // If n is divisible by i, it's not prime
        if (n % i === 0) {
            return false;
        }
    }

    // If no divisor was found, it's prime
    return true;
};

var completePrime = function (num) {
    // Convert number to string for prefix/suffix slicing
    let str = "" + num;

    // Variables to build prefixes and suffixes progressively
    let prefix = "";
    let suffix = "";

    // Iterate through all digits of the number
    for (let i = 0; i < str.length; i++) {

        // Build prefix from left to right
        prefix = prefix + str[i];

        // Build suffix from right to left
        suffix = str[str.length - 1 - i] + suffix;

        // Check if the current prefix is prime
        if (!isPrime(+prefix)) return false;

        // Check if the current suffix is prime
        if (!isPrime(+suffix)) return false;
    }

    
    // If all prefixes and suffixes were prime, it's a "complete prime"
    return true;
};


function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function completePrime222(num) {
    const str = String(num);
    const len = str.length;

    for (let i = 1; i <= len; i++) {
        let prefix = Number(str.slice(0, i));
        let suffix = Number(str.slice(len - i));

        if (!isPrime(prefix)) return false;
        if (!isPrime(suffix)) return false;
    }
    return true;
}
