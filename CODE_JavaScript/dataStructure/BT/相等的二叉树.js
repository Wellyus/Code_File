var isSame(node p, node q) {
  if ( !p && !q) {
    return true;
  }
  if ((!p && q) || (p && !q)) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  return isSame(p.left, q.left) && isSame(p.right, q.right);
}