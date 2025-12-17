// Function to create a counter starting from `n`
var createCounter = function(n) {
    // Returns an inner function (closure) that increments `n` each time it's called
    return function() {
        // Post-increment: returns the current value of `n`, then increases it by 1
        return n++;
    };
};

// Example usage:
// const counter = createCounter(5);
// console.log(counter()); // 5
// console.log(counter()); // 6
// console.log(counter()); // 7
