var minimumChairs = function (s) {
    // Stores the maximum number of chairs needed at any time
    let max = 0;

    // Stack to track how many people are currently sitting
    let stack = [];

    // Traverse each character in the string
    for (let ch of s) {

        // 'E' means a person enters and needs a chair
        if (ch === 'E') {
            stack.push(ch);              // occupy a chair
            max = Math.max(max, stack.length); // update max chairs needed
        } 
        // 'L' (or any non-'E') means a person leaves
        else {
            stack.pop();                 // free a chair
        }
    }

    // Maximum number of chairs required
    return max;
};


var minimumChairs222 = function (s) {
    let current = 0; // people currently sitting
    let maxChairs = 0; // maximum chairs needed at any time

    for (let ch of s) {
        if (ch === 'E') {
            current++;                  // person enters
            maxChairs = Math.max(maxChairs, current);
        } else {
            current--;                  // person leaves
        }
    }

    return maxChairs;
};
