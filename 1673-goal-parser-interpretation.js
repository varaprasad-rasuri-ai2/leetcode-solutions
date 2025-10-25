// Define a function named 'interpret' that takes a string 'command'
var interpret = function(command) {
  
  // Step 1: Replace every "()" in the string with "o"
  // The regular expression /\(\)/g matches all occurrences of "()"
  // 'g' means "global" → replace all, not just the first one
  // Example: "G()()" becomes "Goo"
  command = command.replace(/\(\)/g, 'o');
  
  // Step 2: Replace every "(al)" in the string with "al"
  // The regular expression /\(al\)/g matches all occurrences of "(al)"
  // Example: "G(al)" becomes "Gal"
  command = command.replace(/\(al\)/g, 'al');
  
  // Step 3: Return the fully interpreted string
  return command;
};
