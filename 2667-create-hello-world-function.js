// Function that creates a function which always returns "Hello World"
var createHelloWorld = function () {
    // Returns an inner function that accepts any number of arguments
    return function (...args) {
        // The inner function ignores any arguments and always returns the same string
        return "Hello World";
    };
};

// Example usage:
// const helloFunc = createHelloWorld();
// console.log(helloFunc());       // "Hello World"
// console.log(helloFunc(1, 2, 3)); // "Hello World" (arguments are ignored)
