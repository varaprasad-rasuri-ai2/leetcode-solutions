// Function to "defang" an IP address
// Defanging means replacing every '.' with '[.]'
var defangIPaddr = function (address) {
    
    // Use the built-in replaceAll() method
    // It replaces every occurrence of '.' in the string
    // with the string '[.]'
    return address.replaceAll('.', '[.]');
};
