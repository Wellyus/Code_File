function make_range_iterator(start = 0, end = Infinity, step = 1) {
  let next_index = start;
  let iteration_count = 0;

  const range_iterator = {
    next: function() {
      let result;
      if (next_index < end) {
        result = { value: next_index, done: false}
        next_index += step;
        iteration_count++;
        return result;
      }
      return { value: iteration_count, done: true}
    }
  };
  return range_iterator;
}

let it = make_range_iterator(1, 10, 2);
let result = it.next();
while (!result.done) {
  console.log(result.value);
  result = it.next();
}
console.log("iterated over sequence of size: ", result.value);