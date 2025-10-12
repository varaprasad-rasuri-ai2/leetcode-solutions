/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
     let st = new Stack_()
    for(ch of s){
        if(!st.isEmpty()){
            if((st.top() === "A" && ch === "B") || (st.top() === "C" && ch === "D")){
                st.pop()
            } else {
                 st.push(ch)
            }
        }else {
            st.push(ch)
        }
    }
    return st.size();    
};

class Stack_ {
    a = [];
    constructor(arr = []) {
        for (let x of arr) {
            // this.push(x);
            this.a.push(x);
        }
    }
    push(x) {
        return this.a.push(x);
        // return this;
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
