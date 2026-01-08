var accountBalanceAfterPurchase = function (purchaseAmount) {
    // get the last digit of the purchase amount
    let lastDigit = purchaseAmount % 10;

    // round last digit to nearest 10 (5–9 → 10, 0–4 → 0)
    lastDigit = lastDigit >= 5 ? 10 : 0;

    // get all digits except the last one
    let prefixDigits = Math.trunc(purchaseAmount / 10);

    // calculate the rounded purchase amount
    let purchaseAmountRounded = prefixDigits * 10 + lastDigit;

    // subtract rounded amount from initial balance (100)
    return 100 - purchaseAmountRounded;
};
