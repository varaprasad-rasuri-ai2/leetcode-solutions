var containsDuplicate = function (a) {
    // Create a Set from the array.
    // A Set automatically removes duplicate values.
    let set = new Set(a);

    // If the Set's size is smaller than the array's length,
    // it means some elements were duplicates (removed by Set).
    return set.size !== a.length;
};
