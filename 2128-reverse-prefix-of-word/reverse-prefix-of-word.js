var reversePrefix = function (word, targetCh) {
    let stack = new Stack_()
    let found = false

    let lastPartStr = ''
    for (let ch of word) {
        if (found === false) {
            stack.push(ch)
        } else {
            lastPartStr += ch
        }
        if (ch === targetCh) {
            found = true
        }
    }

    if (found === false) return word

    let result = ''
    if (!stack.isEmpty()) {
        while (!stack.isEmpty()) {
            result += stack.pop()
        }
    }
    result += lastPartStr


    return result
};

class Stack_ {
    a = [];
    constructor(arr = []) {
        for (let x of arr) {
            this.push(x);
        }
    }
    push(x) {
        this.a.push(x);
        return this;
    }
    pop() {
        return this.a.pop();
    }
    top() {
        return this.a.at(-1);
    }
    toArray() {
        return [...this.a];
    }
    size() {
        return this.a.length
    }
    isEmpty() {
        return this.size() === 0
    }
}
