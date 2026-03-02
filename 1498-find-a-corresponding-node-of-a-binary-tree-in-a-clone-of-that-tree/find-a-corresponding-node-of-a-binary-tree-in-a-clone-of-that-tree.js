var getTargetCopy = function (originalRoot, clonedRoot, targetNodeInOriginal) {

    function dfs(o, c) {
        if (!o) return null;

        if (o === targetNodeInOriginal) {
            return c;
        }

        const lRes = dfs(o.left, c.left);
        const rRes = dfs(o.right, c.right);
        return lRes ?? rRes;
    }

    return dfs(originalRoot, clonedRoot);
};
