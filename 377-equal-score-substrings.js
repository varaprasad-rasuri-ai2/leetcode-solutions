/*
We are given a word made up of lowercase English letters.

Each letter has a numeric value based on its position in the alphabet:
a = 1, b = 2, c = 3, ..., z = 26

We need to check if there exists a position in the word where we can cut (split) it into two non-empty parts such that:

The sum of letter values on the left part = the sum on the right part.

If such a split exists → return true,
otherwise → return false.
*/
  
/**
 * @param {string} s
 * @return {boolean}
 */

const charCode = (ch) => ch.charCodeAt(0)
const position = (ch) => charCode(ch) - charCode('a') + 1

var scoreBalance = function (s) {
    let cumulativeScores = []
    let totalScores = 0

    for (ch of s) {
        let pos = position(ch)
        totalScores += pos
        cumulativeScores.push(totalScores)
    }

    // return cumulativeScores.slice(0, -1).includes(totalScores / 2)
    return cumulativeScores.includes(totalScores / 2)
};
