/*
The Complete Set of Binary Addition Rules:
    0 + 0 = 0 (no carry)
    0 + 1 = 1 (no carry)
    1 + 0 = 1 (no carry)
    1 + 1 = 10 (write down 0 and carry 1 to the next column)
    1 + 1 + 1 (carry from previous column) = 11 (write down 1 and carry 1 to the next column)
*/

let cl = console.log;

var addBinary = function (a, b) {
    // Get lengths of both binary strings
    let m = a.length;
    let n = b.length;
    
    // Pad shorter string with zeros at the start for equal length
    let maxLen = Math.max(m, n);
    a = a.padStart(maxLen, '0');
    b = b.padStart(maxLen, '0');

    cl({ a, b }); // Debugging output (optional)

    let ans = '';     // Final binary result string
    let carry = '';   // Will hold '1' or '' (empty means no carry)

    // Traverse both strings from rightmost bit to leftmost
    for (let i = maxLen - 1; i >= 0; i--) {
        if (a[i] === '1' && b[i] === '1') {
            // 1 + 1 = 10 (so write 0, carry 1)
            if (carry === '1') {
                // 1 + 1 + 1 = 11 (write 1, carry 1)
                carry = '1';
                ans = '1' + ans;
            } else {
                carry = '1';
                ans = '0' + ans;
            }
        } else if (a[i] === '0' && b[i] === '0') {
            // 0 + 0 = 0 (no carry)
            if (carry === '1') {
                // Add carry from previous step
                carry = '';
                ans = '1' + ans;
            } else {
                ans = '0' + ans;
            }
        } else {
            // 0 + 1 or 1 + 0 = 1
            if (carry === '1') {
                // 1 (carry) + 1 = 10 → write 0, carry 1
                carry = '1';
                ans = '0' + ans;
            } else {
                ans = '1' + ans;
            }
        }
    }

    // If we still have a carry left, prepend '1'
    if (carry === '1') {
        ans = '1' + ans;
    }

    return ans;
};
