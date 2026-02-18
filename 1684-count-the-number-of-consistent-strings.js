var countConsistentStrings = function(allowed, words) {
let count = 0;
// let allowed = "ab";
let allowedStringLength = allowed.length;
console.log('allowedStringLength', allowedStringLength);

// let words = ["ad", "aaab"];
// let words = ["ad","bd","aaab","baa","badab"]

words.forEach((word) => {
  let found = 0; 
  console.log('word', word);

  for (let i = 0; i < word.length; i++) {
    if (allowed.includes(word[i])) {
      found = found + 1;
    } 
    else {
      found = -1; 
      break;
    }
  }

  if (found > 0 && found !== -1) {
    console.log('word:', word, 'is consistent');
    count = count + 1;
  } else {
    console.log('word:', word, 'is not consistent');
  }
});

console.log('consistent strings in the array words', count);
return count;
};
