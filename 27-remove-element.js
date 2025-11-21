var removeElement = function (arr, targetVal) {
    const n = arr.length;

    let L = 0; // write pointer

    // R = read pointer
    for (let R = 0; R < n;) {

        // If arr[R] is the target value, skip it
        if (arr[R] == targetVal) {
            R++;  // move to next element
        } else {
            // Keep this element by writing it at index L
            arr[L] = arr[R];
            L++;  // move write pointer
            R++;  // move read pointer
        }
    }


  var removeElement222222 = function (arr, targetVal) {

    // Create a new array without the target value
    let res = arr.filter(x => x !== targetVal);

    // Copy filtered values back into the original array
    for (let i = 0; i < res.length; i++) {
        arr[i] = res[i];
    }

    // Return number of elements kept
    return res.length;
};


    // L is the new length of the array after removal
    return L;
};


