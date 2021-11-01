const arr = [1,2,3,4,5];
console.log(arr.sort((num1, num2)=>{
  return num1 - num2;
}));
arr.forEach((num)=>{
  console.log(num, num * num);
});
console.log(arr.every((num)=>{
  return num % 2 === 0;
}));
console.log(arr.some((num)=>{
  return num % 2 === 1;
}));
console.log(arr.reduce((runningTotal, currentValue)=>{
  return runningTotal + currentValue;
}))
const words = ['the ', 'quick ', 'brown ', 'fox '];
console.log(words.reduceRight((accumulatedString, item)=>{
  return accumulatedString + item;
}));
const mapOfArr = arr.map((item)=>{
  return item % 2 === 1;
})
console.log([...mapOfArr]);
const filterOfArr = arr.filter((item)=>{
  return item % 2 === 1;
})
console.log(filterOfArr);
console.log(arr.reduceRight((sum, current)=>{
  return sum * current;
}))
const mergeArrays = (...arrays)=>{
  return [].concat(...arrays);
}
console.log(mergeArrays ([1, 2, 3], [4, 5], [6]));

const arr_ = [1,2,3,4,5,6];
let i = 0.1;
console.log(arr_.reduceRight((previous, current)=>{
  i *= 10;
  return previous + current * i;
}, 0));