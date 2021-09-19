function inO(root) {
    if(root===null) {
        return ;
    }
    inO(root.left);
    console.log(root.val);
    inO(root.right);
}
//非递归中序遍历
function inOrder(root) {
    const result = [];
    if(root===null) {
        return result;
    }
    const stack = [];
    while(stack.length!==0||root!==null) {
        while(root!==null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        result.push(root.val);
        root = root.right;
    }
}