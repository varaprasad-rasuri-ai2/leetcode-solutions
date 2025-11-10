let cl = console.log

var isPalindrome = function (s) {
    cl(s) // original string

    s = s.toLowerCase() // convert all letters to lowercase
    cl(s)

    let t = '' // store only alphanumeric characters

    // filter only alphanumeric characters
    for (let ch of s) {
        if (/[0-9a-z]/.test(ch)) {
            t += ch
        }
    }
    cl(t)

    // reverse the cleaned string
    let revt = [...t].reverse().join("")
    cl(revt)

    // check if original cleaned string equals reversed string
    return t === revt
};

var isPalindrome222 = function(s) {
    let arr = [];
    for (let ch of s.toLowerCase()) {
        if (/[0-9a-z]/.test(ch)) arr.push(ch);
    }

    while (arr.length > 1) {
        if (arr.shift() !== arr.pop()) return false;
    }

    return true;
}

