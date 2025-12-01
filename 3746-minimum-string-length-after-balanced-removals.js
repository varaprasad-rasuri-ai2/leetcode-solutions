var minLengthAfterRemovals = function (s) {
    // We use a stack to simulate removing balanced substrings.
    // A balanced substring requires equal number of 'a' and 'b'.
    // Observations:
    // - Any adjacent "ab" or "ba" pair can be removed because it contributes
    //   1 'a' and 1 'b'.
    // - Larger removable substrings eventually break down into these canceling pairs.
    //
    // Therefore, whenever the current character is different from the top of the stack,
    // they form a removable pair and we pop the stack.
    // Otherwise, we push the current character.
    // At the end, the stack contains only characters that could not be paired/canceled.

    let stack = [];

    for (let ch of s) {
        // If the top of the stack exists and is different from current char,
        // we found a pair "ab" or "ba" → remove it.
        if (stack.length && stack.at(-1) !== ch) {
            stack.pop();
        } else {
            // Otherwise, push current char (no pair to remove).
            stack.push(ch);
        }
    }

    // Remaining characters cannot be removed anymore.
    return stack.length;
};
