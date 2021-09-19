function postO(root) {
    if(root===null) {
        return ;
    }
    postO(root.left);
    console.log(root.val);
    postO(root.right);
}
//后序非递归写法
function postOrder(root) {
    const result = [];
    if(root===null) {
        return result;
    }
    const stack = [];
    let pre = null;
    while(stack.length!==0||root!==null) {
        while(root!==null) {
            stack.push(root);
            root = root.left;
        }
        root = stack[stack.length-1];
        if(root.right===null||pre===root.right) {
            result.push(root.val);
            pre = stack.pop();
            root = null;        //上移操作
        } else {
            pre = root;
            root = root.right;
        }
    }
    return result;
}