var buildTree = function(inorder, postorder) {
  //l c r
  //l r c
  function solve(inorder_left, inorder_right, postorder_left, postorder_right) {
    if (inorder_left > inorder_right) {
      return null;
    }
    let index = inorder.indexOf(postorder[postorder_right]);
    let len = index - inorder_left;
    let node = new TreeNode(postorder[postorder_right], null, null);
    node.left = solve(inorder_left, inorder_left+len-1, postorder_left, postorder_left+len-1);
    node.right = solve(inorder_left+len+1, inorder_right, postorder_left+len, postorder_right-1);
    return node;
  }
  return solve(0, inorder.length-1, 0, postorder.length-1);
};