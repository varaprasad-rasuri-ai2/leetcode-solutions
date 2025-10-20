var countStudents = function (students, sandwiches) {
    let studentPreferenceQueue = new Queue_(students);
    let sandwichStack = new Stack_(sandwiches.reverse());

    let newStudentLen = studentPreferenceQueue.length;
    let studentsWentBack = 0;

    while (!studentPreferenceQueue.isEmpty()) {
        if (studentPreferenceQueue.front() === sandwichStack.top()) {
            studentPreferenceQueue.pop();
            sandwichStack.pop();

            newStudentLen = studentPreferenceQueue.length;
            studentsWentBack = 0;
        } else {
            let x = studentPreferenceQueue.pop();
            studentPreferenceQueue.push(x);
            studentsWentBack++;
            if (studentsWentBack === newStudentLen) {
                break;
            }
        }
    }

    return studentPreferenceQueue.length;
};

class Stack_ {
    a = [];
    constructor(initialArray = []) {
        for (let x of initialArray) {
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
    get length() {
        return this.a.length;
    }
    size() {
        return this.a.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
}

class Queue_ {
    a = [];
    constructor(initialArray = []) {
        for (let x of initialArray) {
            this.push(x);
        }
    }
    push(x) {
        this.a.push(x);
        return this;
    }
    pop() {
        return this.a.shift();
    }
    front() {
        return this.a[0];
    }
    toArray() {
        return [...this.a];
    }
    size() {
        return this.a.length;
    }
    get length() {
        return this.a.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
}
