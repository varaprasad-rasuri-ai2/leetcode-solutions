class MyCalendarThree {
    // Object to store time points and their frequency changes
    // +1 at startTime, -1 at endTime
    freq;

    constructor() {
        // Initialize the frequency map
        this.freq = {};
    }

    book(startTime, endTime) {
        // Increment count at the start time
        this.freq[startTime] = (this.freq[startTime] ?? 0) + 1;

        // Decrement count at the end time
        this.freq[endTime] = (this.freq[endTime] ?? 0) - 1;

        let max = 0; // Tracks the maximum number of overlapping events
        let sum = 0; // Running sum of active events

        // Iterate through all time point deltas
        // (Sweep line technique)
        for (let val of Object.values(this.freq)) {
            sum += val;               // Update active event count
            max = Math.max(max, sum); // Update maximum overlap
        }

        // Return the maximum number of concurrent bookings
        return max;
    };
}
