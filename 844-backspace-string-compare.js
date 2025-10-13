/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var stringWithBackspace = function (str, st) {
    for (ch of str) {
        if (!st.isEmpty() && ch === '#') {
            st.pop()
        } else if (ch === '#') {
            st.pop()
        } else {
            st.push(ch)
        }
    }
    return st
}
var backspaceCompare = function (s, t) {
    let st = new Stack_()
    let st2 = new Stack_()
    let str1 = stringWithBackspace(s, st)
    let str2 = stringWithBackspace(t, st2)
    return str1.toArray().join('') === str2.toArray().join('')
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
        return this.a.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
}
