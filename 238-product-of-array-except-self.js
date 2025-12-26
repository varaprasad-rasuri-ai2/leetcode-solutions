var productExceptSelf = function (a) {
    // Length of the input array
    const n = a.length;

    // Arrays to store prefix and suffix products
    const prefixProd = new Array(n);
    const suffixProd = new Array(n);

    // Running product from the left
    let p = 1;
    // Running product from the right
    let pR = 1;

    // Build prefix and suffix product arrays in one loop
    for (let i = 0; i < n; i++) {
        // Prefix product up to index i
        p = p * a[i];
        prefixProd[i] = p;

        // Suffix product from the end to index (n - 1 - i)
        pR = pR * a[n - 1 - i];
        suffixProd[n - 1 - i] = pR;
    }

    // Result array
    const res = new Array(n);

    // Calculate product of all elements except a[i]
    for (let i = 0; i < n; i++) {
        // Product of elements before i * product of elements after i
        // Use 1 when there is no prefix or suffix
        res[i] = (prefixProd[i - 1] ?? 1) * (suffixProd[i + 1] ?? 1);
    }

    // Return the final result
    return res;
};
