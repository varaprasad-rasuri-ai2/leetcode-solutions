var minMovesToSeat = function (seats, students) {
    // Get the number of students (and seats)
    let n = students.length;

    // Sort both arrays in ascending order
    // This ensures that the smallest seat number matches with the smallest student position, etc.
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);

    // Initialize a variable to store the total number of moves
    let s = 0;

    // Iterate through all students
    for (let i = 0; i < n; i++) {
        // Calculate the absolute difference between each student's position and the corresponding seat
        // This represents how many moves that student must make
        s += Math.abs(students[i] - seats[i]);
    }

    
    // Return the total minimum number of moves needed for all students
    return s;
};
