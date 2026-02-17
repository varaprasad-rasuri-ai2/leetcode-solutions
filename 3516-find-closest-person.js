// Function to determine which person reaches Person 3 first
var findClosest = function (x, y, z) {
    // Calculate the distance between Person 1 (x) and Person 3 (z)
    let x2zDist = Math.abs(z - x);

    // Calculate the distance between Person 2 (y) and Person 3 (z)
    let y2zDist = Math.abs(z - y);

    // If both distances are equal, they will arrive at the same time
    if (x2zDist === y2zDist) return 0;

    // If Person 1 is closer to Person 3, they will arrive first
    if (x2zDist < y2zDist) return 1;

    
    // Otherwise, Person 2 is closer and will arrive first
    return 2;
};
