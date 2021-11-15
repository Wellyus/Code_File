function* make_range_iterator(start = 0, end = Infinity, step = 1) {
  for (let i = start; i < end; i+=step) {
    console.log(i*i*i);
    yield i;
  }
}
let a = make_range_iterator(1, 10, 2);
for (let i = 0; i < 5; i++) {
  console.log(a.next().value);
}
var my_iterable = {
  *[Symbol.iterator]() {
    console.log(yield 1);
    yield 3;
    yield 5;
  }
}
console.log([...my_iterable]);

function* fibonacci() {
  var fn1 = 0;
  var fn2 = 1;
  while (true) {
    var current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    var reset = yield current;  //传递给next(x)的参数会被yield接收, 传递给第一个next()的值被忽略
    if (reset) {                //该值将成为生成器当前yield操作返回的值
      fn1 = 0;
      fn2 = 1;
    }
  }
}

var sequence = fibonacci();
console.log(sequence.next(undefined).value);
console.log(sequence.next(undefined).value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next(true).value);
console.log(sequence.next().value);
console.log(sequence.next().value);
