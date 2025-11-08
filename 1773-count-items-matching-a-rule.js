/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

var countMatches = function (items, ruleKey, ruleValue) {
    // Determine which property (index) corresponds to ruleKey:
    // "type"  → index 0
    // "color" → index 1
    // "name"  → index 2
    let keyIndex = ruleKey === "type"
        ? 0
        : ruleKey === "color"
            ? 1
            : 2

    // Use Array.filter() to keep only the items where the property
    // at 'keyIndex' matches the ruleValue
    // Then take .length to count how many matched
    return items.filter((item) => item[keyIndex] === ruleValue).length
};
