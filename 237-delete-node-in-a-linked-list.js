var deleteNode222 = function (node) {
let cl = console.log
    // cl({ node, nodeVal: node.val })
    // cl({ 1: node.val, 2: node.next.val })
    //     // node.next = node.next.next;
    // if (node.val && node.val !== 0) {
    //  if (node && node.next !== null) {
    if (node && node.next) {
        node.val = node.next.val;
        node.next = node.next.next;
    }

};

var deleteNode = function (node) {
    // We cannot access the head of the list.
    // We cannot find the previous node of "node".
    // So we cannot remove "node" directly.

    // Trick:
    // Copy the value from the next node into the current node.
    node.val = node.next.val;

    // Then skip the next node entirely.
    // This effectively deletes the next node,
    // and makes this node take its place.
    node.next = node.next.next;
};
