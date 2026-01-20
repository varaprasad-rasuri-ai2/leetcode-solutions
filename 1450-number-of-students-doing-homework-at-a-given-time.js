var busyStudent = function (startTimes, endTimes, queryTime) {
    // Counter to track how many students are busy at queryTime
    let count = 0;

    // Iterate through each student's start and end time
    for (let i = 0; i < startTimes.length; i++) {
        let s = startTimes[i]; // Start time of the current student
        let e = endTimes[i];   // End time of the current student

        // Check if the queryTime falls within the student's time interval (inclusive)
        if ((s <= queryTime) && (queryTime <= e)) {
            count++;
        }
    }

    // Return the total number of busy students
    return count;
};
