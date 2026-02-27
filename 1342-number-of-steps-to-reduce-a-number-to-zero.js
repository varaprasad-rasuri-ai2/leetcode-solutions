// Function to count how many steps it takes to reduce a number to zero
var numberOfSteps = function (x) {
    let steps = 0 // Initialize a counter to track the number of steps

    // Keep looping until x becomes 0
    while (x > 0) {
        // If the number is even, divide it by 2
        if (x % 2 === 0) {
            x = x / 2
        } 
        // Otherwise, subtract 1 (for odd numbers)
        else {
            x = x - 1
        }

        // Increase the step counter after each operation
        steps++
    }

    
    // When x reaches 0, return the total number of steps taken
    return steps
};
