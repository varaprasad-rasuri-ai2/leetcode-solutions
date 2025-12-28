// ----------------------
// Earlier versions (canMakeEqual222 / canMakeEqual33 / canMakeEqual444) 
// ----------------------
// These were attempts to solve the problem: 
// "Can we make all array elements equal by at most k operations, 
// where each operation flips nums[i] and nums[i+1] (multiplies by -1)?"
// ----------------------

// This version only counts adjacent differences (canMakeEqual222) - WRONG
// It fails because simply counting differences does not account for how flips propagate.
var canMakeEqual222 = function (nums, k) {
    let diff = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            diff++;
        }
    }

    // This check is too naive and may give wrong answers
    return diff % 2 === 0 && diff / 2 <= k;
};

// This version tries flipping when nums[i] !== nums[0] (canMakeEqual33)
// Still may fail because order matters and the last element may not match
var canMakeEqual33 = function (nums, k) {
    let diff = 0;
    let arr = nums.slice(); // copy array

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[0]) {
            arr[i] *= -1;       // flip current
            arr[i + 1] *= -1;   // flip next
            diff++;

            if (diff > k) return false; // stop if exceed k
        }
    }

    // check if all elements are equal
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[0]) return false;
    }

    return true;
};

// This version (canMakeEqual444) generalizes to check for target 1 or -1
var canMakeEqual444 = function (nums, k) {
    const n = nums.length;

    function check(target) {
        let arr = nums.slice();
        let ops = 0;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] !== target) {
                arr[i] *= -1;       // flip current
                arr[i + 1] *= -1;   // flip next
                ops++;
                if (ops > k) return false; // early exit
            }
        }
        // check last element matches target
        return arr.every(x => x === target);
    }

    // check for both possible targets: 1 or -1
    return check(1) || check(-1);
};

// ----------------------
// Final, clean version with separate check() function
// ----------------------
var canMakeEqual = function (nums, k) {
    // try to make all elements 1 or all -1
    return check(nums, k, 1) || check(nums, k, -1);
};

// helper function that simulates the flips
function check(nums, k, target) {
    const n = nums.length;
    let arr = nums.slice(); // copy array to simulate flips
    let ops = 0;

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] !== target) {
            arr[i] *= -1;       // flip current
            arr[i + 1] *= -1;   // flip next
            ops++;
            if (ops > k) return false; // early exit if exceed k
        }
    }

    // check if all elements equal target
    return arr.every(x => x === target);
}
