// Reverses the prefix of `word` up to and including the first occurrence of `targetCh`
var reversePrefix = function (word, targetCh) {
    // Create a stack to store characters before we find targetCh
    let stack = new Stack_()
    
    // Flag to track whether targetCh has been found
    let found = false

    // Will store the part of the string after targetCh
    let lastPartStr = ''

    // Iterate through each character in the word
    for (let ch of word) {
        if (found === false) {
            // Push characters to stack until targetCh is found
            stack.push(ch)
        } else {
            // After targetCh is found, append remaining characters normally
            lastPartStr += ch
        }

        // If current character matches targetCh, mark as found
        if (ch === targetCh) {
            found = true
        }
    }

    // If targetCh was never found, return original word
    if (found === false) return word

    let result = ''

    // Pop all characters from stack to reverse the prefix
    if (!stack.isEmpty()) {
        while (!stack.isEmpty()) {
            result += stack.pop()
        }
    }

    // Append the remaining part of the string
    result += lastPartStr

    return result
};


// Simple Stack implementation
class Stack_ {
    // Internal array to store stack elements
    a = [];

    constructor(arr = []) {
        // Initialize stack with optional array
        for (let x of arr) {
            this.push(x);
        }
    }

    // Push element onto stack
    push(x) {
        this.a.push(x);
        return this; // Allows chaining
    }

    // Remove and return top element
    pop() {
        return this.a.pop();
    }

    // Peek at top element without removing it
    top() {
        return this.a.at(-1);
    }

    // Return a shallow copy of stack as array
    toArray() {
        return [...this.a];
    }

    // Return number of elements in stack
    size() {
        return this.a.length
    }

    // Check if stack is empty
    isEmpty() {
        return this.size() === 0
    }
}
