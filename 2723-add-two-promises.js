var addTwoPromises = async function (promise1, promise2) {
    // Wait for both promises to resolve simultaneously using Promise.all
    // Destructure the results into val1 and val2
    let [val1, val2] = await Promise.all([promise1, promise2])
    
    // Return the sum of the resolved values
    return val1 + val2
};

/**
 * Example usage:
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // Output: 4
 */
