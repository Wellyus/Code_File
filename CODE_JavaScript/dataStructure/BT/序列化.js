var string = "";
function str(p) {
  if (!p) {
    return;
  }
  string += 'A';
  str(p.left);
  string += 'B';
  str(p.right);
}