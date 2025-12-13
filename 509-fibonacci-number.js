// -----------------------------
// 1️⃣ Recursive Fibonacci
// -----------------------------
var fib = function (n) {
    // Helper function F(n) computes Fibonacci recursively
    const F = (n) => {
        // Base case: F(0) = 0
        if (n === 0) return 0

        // Base case: F(1) = 1
        if (n === 1) return 1

        // Recursive case: F(n) = F(n-1) + F(n-2)
        if (n > 1) {
            return F(n - 1) + F(n - 2)
        }
    }

    // Call the helper function
    return F(n)
}

// -----------------------------
// 2️⃣ Iterative Fibonacci (Efficient)
// -----------------------------
var fib222 = function (n) {
    // Base cases
    if (n === 0) return 0
    if (n === 1) return 1

    // Reduce n by 1 because we start counting from the second number
    n -= 1

    // Initialize first two Fibonacci numbers
    let f = 0   // F(n-2)
    let s = 1   // F(n-1)
    let t       // F(n)

    // Compute Fibonacci iteratively
    while (n--) {
        t = f + s   // Current Fibonacci number

        f = s       // Shift previous numbers forward
        s = t
    }

    // Return the nth Fibonacci number
    return t
}


var fib333 = function(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    return fib(n - 1) + fib(n - 2)
}

var fib444 = function(n) {
    if (n === 0) return 0
    if (n === 1) return 1

    let a = 0, b = 1, c
    for (let i = 2; i <= n; i++) {
        c = a + b
        a = b
        b = c
    }
    return b
}
