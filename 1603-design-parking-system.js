class ParkingSystem {
    constructor(big, medium, small) {
        // Store available parking slots for each type
        // Use an object to easily access slots by carType
        this.slots = {
            1: big,     // Number of big car slots
            2: medium,  // Number of medium car slots
            3: small    // Number of small car slots
        };
    }

    addCar(carType) {
        // Check if there's at least one available slot for this car type
        if (this.slots[carType] > 0) {
            // If yes, occupy one slot (decrement by 1)
            this.slots[carType]--;
            return true; // Successfully parked
        }

        
        // No slots left for this car type
        return false;
    }
}
