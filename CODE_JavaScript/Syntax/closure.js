function outside() {
  var x = 5;
  function inside(x) {
    return x*2;
  }
  return inside;
}
console.log(outside()(10));