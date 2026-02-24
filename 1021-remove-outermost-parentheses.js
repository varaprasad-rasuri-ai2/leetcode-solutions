// Removes the outermost parentheses from every primitive valid parentheses substring
var removeOuterParentheses = function (s) {
    // Custom stack to help track nested structure
    let st = new Stack_()
    
    // Stores each primitive valid parentheses substring (VPS)
    let arr = []

    for (let ch of s) {
        if (ch === '(') {
            // Push opening bracket to stack
            st.push(ch)
        } else {
            // Pop the last element when we see a closing bracket
            let prev = st.pop()

            // If stack becomes empty after pop,
            // we just closed a primitive VPS
            if (st.isEmpty()) {
                let primitiveVps = prev + ch
                arr.push(primitiveVps)
            } else {
                // Otherwise we are still inside nested parentheses
                // Combine the previously popped string with current ')'
                let prev2 = st.pop()
                st.push(prev2 + prev + ch)
            }
        }
    }

    // Build final answer by removing first and last char
    // (outer parentheses) from each primitive substring
    let ans = ''
    for (let t of arr) {
        ans += t.slice(1, t.length - 1)
    }

    return ans
}


// Custom Stack implementation
class Stack_ {
    a = [];  // Internal array storage

    constructor(arr = []) {
        // Initialize stack with given array elements (if any)
        for (let x of arr) {
            this.push(x);
        }
    }

    push(x) {
        this.a.push(x);
        return this; // Enable chaining
    }

    pop() {
        return this.a.pop();
    }

    top() {
        return this.a.at(-1); // Get last element
    }

    toArray() {
        return [...this.a]; // Return shallow copy
    }

    size() {
        return this.a.length;
    }

    isEmpty() {
        return this.size() === 0;
    }
}



// Cleaner and more efficient solution
var removeOuterParentheses222222 = function (s) {
    let curr = ''          // Current primitive substring
    let openCount = 0      // Count of '('
    let closeCount = 0     // Count of ')'

    let pvpss = []         // Stores primitive valid parentheses substrings

    for (let ch of s) {
        curr += ch

        // Count opening and closing parentheses
        if (ch === '(') openCount++
        if (ch === ')') closeCount++

        // When counts match, we found one primitive VPS
        if (openCount === closeCount) {
            pvpss.push(curr)

            // Reset for next primitive
            curr = ''
            openCount = 0
            closeCount = 0
        }
    }

    // Remove outermost parentheses from each primitive
    let result = ''
    for (let pvps of pvpss) {
        result += pvps.slice(1, pvps.length - 1)
    }

    return result
};
