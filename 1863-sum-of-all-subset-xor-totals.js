let cl = console.log; // Shortcut for logging to the console (used for debugging)

var subsetXORSum = function (a) {
	let n = a.length; // Get the number of elements in the array
	let sum = 0;      // This will hold the final sum of all XOR totals

	// There are 2^n possible subsets (including the empty set)
	// We'll use a bitmask from 0 to (2^n - 1) to represent each subset.
	for (let bitMask = 0; bitMask < 2 ** n; bitMask++) {

		cl(bitMask); // Log the current bitmask in decimal
		
		let bitMaskStr = bitMask.toString(2); // Convert the bitmask to a binary string (e.g., "101")
		cl(bitMaskStr);

		// Pad with leading zeros so that the length of the bitmask string matches the array length
		bitMaskStr = bitMaskStr.padStart(n, '0');
		cl(bitMaskStr); // Example: for n = 3, "101" → "101", "1" → "001"

		let xor = 0; // Holds the XOR result of the current subset
		cl('  ', xor);

		// Loop over each bit in the bitmask string
		for (let i = 0; i < n; i++) {
			// If the bit is '1', include a[i] in this subset’s XOR
			if (bitMaskStr[i] === '1') {
				xor ^= a[i];  // XOR the current element with the running total
				cl('    ', a[i]); // Debug: show which element is included
			}
		}

		cl('  ', xor); // Debug: show the XOR result of this subset
		sum += xor;     // Add the subset’s XOR result to the running total
	}

	return sum; // Return the final sum of all subset XOR totals
};
