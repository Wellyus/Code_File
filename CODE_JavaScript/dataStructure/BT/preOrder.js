//递归
function inO(root) {
    if(root===null) {
        return ;
    }
    console.log(root.val);
    inO(root.left);
    inO(root.right);
}
//二叉树前序遍历非递归写法
function inOrder(root) {
    const result = [];
    if(root===null) {
        return result;
    }
    const stack = [];
    while(root!==null) {
        while(root!==null) {
            result.push(root.val);
            if(root.right!==null) {
                stack.push(root.right);
            }
        }
        if(stack.length===0) {
            break;
        }
        root = stack.pop();
    }
    return result;
}