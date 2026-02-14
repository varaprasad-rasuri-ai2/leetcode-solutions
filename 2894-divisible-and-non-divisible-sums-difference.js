// Function to calculate the difference between the sum of numbers not divisible by m 
// and the sum of numbers divisible by m in the range [1, n]
var differenceOfSums = function (n, m) {
    
    // Initialize sum of numbers not divisible by m (num1)
    let s1 = 0;

    // Initialize sum of numbers divisible by m (num2)
    let s2 = 0;

    // Iterate through all numbers from 1 to n (inclusive)
    for (let i = 1; i <= n; i++) {
        // If the number is divisible by m, add to s2
        if (i % m === 0) {
            s2 += i;
        } 
        // If the number is NOT divisible by m, add to s1
        else {
            s1 += i;
        }
    }

    
    // Return the difference: (sum of non-divisible) - (sum of divisible)
    return s1 - s2;
};
