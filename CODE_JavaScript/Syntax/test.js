function* count_apple_sales () {
  var sale_list = [3, 7, 5];
  for (var i = 0; i < sale_list.length; i++) {
    yield sale_list[i];
  }
}

var apple_store = count_apple_sales();
console.log(apple_store.next().value);
console.log(apple_store.next());
console.log(apple_store.next());
console.log(apple_store.next());

function* gen() {
  yield* ['a', 'b', 'c'];   //表达式的值为迭代器关闭时返回的值
}
var iterator = gen();
for (let i = 0; i < 3; i++) {
  console.log(iterator.next().value);
} 

function* g4() {
  yield* [1, 2, 3];
  return 'end';
}
var result;
function* g5() {
  result = yield* g4();
  return 'end__end';
}
var iterator_ = g5();

console.log(iterator_.next());
console.log(iterator_.next());
console.log(iterator_.next());
console.log(iterator_.next());
console.log(result);
