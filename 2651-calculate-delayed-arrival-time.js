var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    // Step 1: Add the delay to the original arrival time
    // Example: if arrivalTime = 20 and delayedTime = 5, totalTime = 25
    var totalTime = arrivalTime + delayedTime;
    
    // Step 2: Use modulus operator to wrap around 24-hour format
    // The % operator gives the remainder after division by 24
    // Example: 25 % 24 = 1 → wraps past midnight to 1 AM
    var newArrivalTime = totalTime % 24;
    
    // Step 3: Return the new arrival time
    return newArrivalTime;
};

// --------------------
// Example usage:

console.log(findDelayedArrivalTime(10, 5)); // Output: 15
console.log(findDelayedArrivalTime(22, 3)); // Output: 1
console.log(findDelayedArrivalTime(0, 24)); // Output: 0
console.log(findDelayedArrivalTime(23, 2)); // Output: 1
