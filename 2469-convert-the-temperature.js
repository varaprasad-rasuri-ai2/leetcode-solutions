// Helper function to convert Celsius to Kelvin
const Kelvin = (Celsius) => Celsius + 273.15

// Helper function to convert Celsius to Fahrenheit
const Fahrenheit = (Celsius) => Celsius * 1.80 + 32.0

// Main function that takes a Celsius temperature and returns [Kelvin, Fahrenheit]
var convertTemperature = function (celsius) {
    // Use the helper functions to compute both conversions and return as an array
    return [Kelvin(celsius), Fahrenheit(celsius)]
};
