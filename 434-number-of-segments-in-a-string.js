var countSegments = function (s) {
    return s
        .split(" ")            // Split the string by spaces
        .filter(w => w !== '')  // Remove empty strings caused by multiple spaces
        .length;               // Count the remaining words (segments)
};
