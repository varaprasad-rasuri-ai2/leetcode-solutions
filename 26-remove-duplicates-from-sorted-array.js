var removeDuplicates = function (a) {
    // Loop through the array from start to end
    for (let i = 0; i < a.length; i++) {
        // Check if the current element and the next one are equal (duplicate)
        if (a[i] === a[i + 1]) {
            // Remove the next duplicate element in-place
            a.splice(i + 1, 1);

            // Decrement 'i' so that after the next increment,
            // we stay at the same position to recheck for further duplicates.
            // Example: [1,1,1,2] — after removing the second '1', we check again
            // because there might be another '1' next.
            i--;
        }
    }

    // Return the length of the modified array (number of unique elements)
    return a.length;
};
