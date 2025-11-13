var fizzBuzz = function (n) {
    // Initialize an array to store the results
    let res = [];

    // Loop from 1 to n (inclusive)
    for (let i = 1; i <= n; i++) {
        // If the number is divisible by both 3 and 5, push "FizzBuzz"
        if (i % 3 === 0 && i % 5 === 0) {
            res.push('FizzBuzz');
        }
        // If divisible by 3 only, push "Fizz"
        else if (i % 3 === 0) {
            res.push('Fizz');
        }
        // If divisible by 5 only, push "Buzz"
        else if (i % 5 === 0) {
            res.push('Buzz');
        }
        // If not divisible by 3 or 5, push the number itself as a string
        else {
            res.push('' + i);
        }
    }

    // Return the resulting array
    return res;
};
