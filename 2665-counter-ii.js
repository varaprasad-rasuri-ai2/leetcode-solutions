// The commented-out functions below are standalone and don't maintain state.  
// They just take a number as input and return a new value, but they don't remember previous calls:
// var increment = function (n) { return n++ };
// var decrement = function (n) { return n-- };
// var reset = function (n) { return n };  

// Function to create a counter object with increment, decrement, and reset methods
var createCounter = function (init) {
    // Store the current value of the counter; initialized with 'init'
    let currVal = init;

    // Return an object with three methods
    return {
        // Increments currVal by 1 and returns the new value
        increment: () => ++currVal,

        // Decrements currVal by 1 and returns the new value
        decrement: () => --currVal,

        // Resets currVal back to the initial value and returns it
        reset: () => currVal = init,
    };
};

// Example usage:
// const counter = createCounter(5);
// console.log(counter.increment()); // 6
// console.log(counter.increment()); // 7
// console.log(counter.decrement()); // 6
// console.log(counter.reset());     // 5
