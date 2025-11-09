var hasSameDigits = function (s) {
    let a = s.split("").map(x => +x)  // Convert string s into an array of digits

    while (a.length > 2) {             // Repeat until only two digits remain
        let b = []                     // Temporary array to store new digits
        for (let i = 0; i + 1 < a.length; i++) {  // Loop through consecutive pairs
            let sum = a[i] + a[i + 1] // Sum the pair
            let lastDigit = sum % 10  // Take only the last digit of the sum
            b.push(lastDigit)         // Append to new array
        }
        a = b                         // Replace the old array with the new one
    }

    return a[0] === a[1]              // Check if the final two digits are equal
};
