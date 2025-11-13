// Helper function: counts the number of vowels in a string
function countVowels(s) {
    let c = 0; // Counter for vowels
    // Loop through each character in the string
    for (let ch of s) {
        // Use regex to check if the character is a vowel (a, e, i, o, u)
        if (/[aeiou]/.test(ch)) {
            c++;
        }
    }
    return c; // Return total number of vowels
}

var halvesAreAlike = function (s) {
    // Convert the string to lowercase to handle both uppercase and lowercase vowels
    s = s.toLowerCase();

    let n = s.length;
    let half = n / 2; // Determine the midpoint of the string

    // Slice the first half of the string
    let leftss = s.slice(0, half);
    // Slice the second half of the string
    let rightss = s.slice(half);

    // Compare the number of vowels in both halves
    // Return true if counts are equal, false otherwise
    return countVowels(leftss) === countVowels(rightss);
};
