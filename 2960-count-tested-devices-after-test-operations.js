// Function to count how many devices can be tested
// Each time a device is tested, all following devices
// lose 1% battery (but not below 0)
var countTestedDevices = function (batteryPercentages) {
    // Total number of devices
    const n = batteryPercentages.length;

    // Counter for tested devices
    let testedDeviceCount = 0;

    // Loop through each device
    for (let i = 0; i < n; i++) {
        // Check if the current device has battery left
        if (batteryPercentages[i] > 0) {
            // Test the device
            testedDeviceCount++;

            // Reduce battery percentage of all remaining devices by 1
            for (let j = i + 1; j < n; j++) {
                // Ensure battery does not go below 0
                batteryPercentages[j] = Math.max(0, batteryPercentages[j] - 1);
            }
        }
    }

    // Return the total number of tested devices
    return testedDeviceCount;
};
