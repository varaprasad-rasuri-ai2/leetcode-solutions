var removeDuplicates = function(s) {
    let st = new Stack_()
    for(ch of s){
        if(!st.isEmpty() && ch === st.top()){
            st.pop()
        }else {
            st.push(ch)
        }
    }
    // retrun st
    return st.toArray().join('');
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
