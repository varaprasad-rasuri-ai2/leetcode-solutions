class MinStack {
    // 'a' stores all stack values
    // 'mins' stores the minimum value *up to that level* of the stack
    a = [];
    mins = [];

    push(val) {
        let { a, mins } = this;

        // Push value into main stack
        a.push(val);

        // Push the min at this level into mins[]
        // If mins is empty, this value is min.
        // Otherwise, compare it with previous min and store the new min.
        mins.push(
            mins.length ? Math.min(mins.at(-1), val) : val
        );
    };

    pop() {
        let { a, mins } = this;

        // Remove top element from both stacks
        // Ensures mins always aligns with stack depth
        a.pop();
        mins.pop();
    };

    top() {
        let { a } = this;
        // Return last element in main stack
        return a.at(-1);
    };

    getMin() {
        let { mins } = this;
        // Return last element in mins stack (current minimum)
        return mins.at(-1);
    };
};


class MinStack222 {
    constructor() {
        this.a = [];
        this.mins = [];
    }
    push(val) {
        this.a.push(val);
        this.mins.push(this.mins.length ? Math.min(this.mins.at(-1), val) : val);
    }
    pop() {
        this.a.pop();
        this.mins.pop();
    }
    top() {
        return this.a.at(-1);
    }
    getMin() {
        return this.mins.at(-1);
    }
}

