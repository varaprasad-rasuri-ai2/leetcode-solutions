/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    let q = new Queue_()
    let time = 0

    for (i = 0; i < tickets.length; i++) {
        q.push({ id: i, tickets: tickets[i] })
    }

    while (!q.isEmpty()) {
        let person = q.pop()
        person.tickets--
        time++

        if (person.tickets > 0) {
            q.push(person)
        }

        if (person.id === k && person.tickets === 0) {
            break
        }
    }
    return time
};


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
