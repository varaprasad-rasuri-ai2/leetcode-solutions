// Reverses the digits of a 32-bit signed integer
var reverse = function (x) {
	// Check if the number is negative
	let isNeg = x < 0;

	// Convert to positive if negative (store sign separately)
	if (isNeg) x = -x;

	// Convert number to string
	let s = '' + x;

	// Reverse the string representation of the number
	s = s.split('').reverse().join('');

	// Convert reversed string back to number
	x = +s;

	// Restore the negative sign if needed
	if (isNeg) x = -x;

	// Check for 32-bit signed integer overflow
	if (-(2 ** 31) < x && x < 2 ** 31 - 1) {
		return x;
	}

	// Return 0 if the reversed number overflows
	return 0;
};


// Reverse integer using math operations only
var reverse2222 = function (x) {
	let res = 0;

	while (x !== 0) {
		let digit = x % 10;
		x = Math.trunc(x / 10);

		res = res * 10 + digit;
	}

	// Overflow check
	return (res >= -(2 ** 31) && res <= 2 ** 31 - 1)
		? res
		: 0;
};
