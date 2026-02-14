var finalValueAfterOperations = function (operations) {
    // Step 1: Initialize variable X to 0 as given in the problem
    let X = 0;

    // Step 2: Loop through each operation string in the operations array
    for (let s of operations) {

        // Step 3: Check what kind of operation it is:
        // If the operation string contains "--" (either "--X" or "X--"), decrement X by 1
        if (s.includes("--")) {
            X = X - 1;
        }
        // Otherwise, if the operation string contains "++" (either "++X" or "X++"), increment X by 1
        else if (s.includes("++")) {
            X = X + 1;
        }
    }

    
    // Step 4: After processing all operations, return the final value of X
    return X;
};
