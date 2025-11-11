function gcd(a, b) {
    // Recursive Euclidean algorithm to find GCD
    return b === 0 ? a : gcd(b, a % b)
}

var gcdOfOddEvenSums = function (n) {
    // e = current even number, se = sum of evens
    // o = current odd number, so = sum of odds
    let e = 0
    let se = 0
    let o = 1
    let so = 0

    // Loop through first n numbers of both sequences
    for (let c = 1; c <= n; c++) {
        se += e   // add current even number to sum
        so += o   // add current odd number to sum
        e += 2    // next even number
        o += 2    // next odd number
    }

    // Compute GCD of both sums
    return gcd(so, se)
};


var gcdOfOddEvenSums222 = function(n) {
    // Two pointers: one for odd sum, one for even sum
    let sumOdd = n * n;       // 1 + 3 + ... + (2n - 1) = n²
    let sumEven = n * (n + 1); // 2 + 4 + ... + 2n = n(n + 1)
    return gcd(sumOdd, sumEven);
};
