// Helper function to get the top element of a stack without removing it
const top = (stack) => stack.at(-1);

var makeGood = function(s) {
    let stack = []; // Initialize an empty stack

    // Iterate through each character of the string
    for (let ch of s) {
        let a = ch;         // Current character
        let b = top(stack); // Character at the top of the stack

        // Check if a and b are the same letter but opposite case
        // a !== b ensures opposite case (e.g., 'a' !== 'A')
        // a.toLowerCase() === b.toLowerCase() ensures same letter ignoring case
        if (a && b && (a !== b) && (a.toLowerCase() === b.toLowerCase())) {
            stack.pop(); // Remove the top element as the pair cancels out
        } else {
            stack.push(ch); // Otherwise, push current character to stack
        }
    }

    // Join remaining characters in the stack to form the final "good" string
    return stack.join("");
};
