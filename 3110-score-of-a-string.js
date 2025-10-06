const ascii = (ch) => ch.charCodeAt(0)

var scoreOfString = function (s) {
    let sum = 0
    for (let i = 0; i + 1 < s.length; i++) {
        let curr = s[i]
        let next = s[i + 1]
        sum += Math.abs(ascii(curr) - ascii(next))
    }
    return sum
};
