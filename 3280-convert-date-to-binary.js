// Function to convert a date string (yyyy-mm-dd) to its binary representation
var convertDateToBinary = function (date) {
    return date
        // Split the date string into an array: [year, month, day]
        .split("-")

        // Convert each part from string to number, then to binary (no leading zeros)
        .map(x => (+x).toString(2))

        // Join the binary strings back together with dashes
        .join("-")
};
