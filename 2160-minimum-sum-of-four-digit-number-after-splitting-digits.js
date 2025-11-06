var minimumSum = function (num) {
    let digits = num.toString().split('').sort(); // Split digits and sort
    let new1 = 0;
    let new2 = 0;

    for (let i = 0; i < digits.length; i++) {
        if (i % 2 === 0) new1 += digits[i]; // add even-index digits to new1
        else new2 += digits[i];             // add odd-index digits to new2
    }

    return Number(new1) + Number(new2); // convert strings to numbers and sum
};

var minimumSum = function(num) {
    let digits = num.toString().split('').sort(); // ['1','2','3','4']
    let new1 = 0, new2 = 0;

    for (let i = 0; i < digits.length; i++) {
        let digit = Number(digits[i]);
        if (i % 2 === 0) new1 = new1 * 10 + digit; // shift left and add digit
        else new2 = new2 * 10 + digit;
    }

    return new1 + new2;
};



