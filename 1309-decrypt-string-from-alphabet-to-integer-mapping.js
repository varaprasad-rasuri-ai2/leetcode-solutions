const charIndex = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0);

/**
 * Helper function: converts a 0-based index back to a lowercase character
 * e.g. 0 -> 'a', 1 -> 'b', ..., 25 -> 'z'
 */
const indexToChar = (index) => String.fromCharCode('a'.charCodeAt(0) + index);

/**
 * @param {string} s - The encoded string (digits and '#')
 * @return {string} - The decoded string (letters)
 */
var freqAlphabets = function (s) {
    let res = ''; // Result string to build the decoded characters

    // Label for the outer loop, so we can 'continue' to it from inside the inner loop
    OO:
    for (let i = 0; i < s.length; i++) {
        // Look ahead at the next 3 characters
        // to check for patterns like '10#', '11#', ..., '26#'
        let next3Chars = s.slice(i, i + 3);

        // Check all possible two-digit encodings with '#'
        for (let j = 10; j <= 26; j++) {
            // If the next 3 characters match a pattern like '23#'
            if ((j + '#') === next3Chars) {
                // Convert number j (1-based) to its corresponding letter
                res += indexToChar(j - 1);

                // Skip the next two characters since we already processed '10#'
                i = i + 2;

                // Continue to the next iteration of the outer loop
                continue OO;
            }
        }

        // If it's not a two-digit encoding, handle single digits '1'–'9'
        // Convert single digit to a character
        res += indexToChar(+s[i] - 1);
    }

    // Return the fully decoded string
    return res;
};
