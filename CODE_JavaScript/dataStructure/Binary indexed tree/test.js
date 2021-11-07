const nums = [1,2,2,2,3,4,4];
const map = new Map();
  for (let item of nums) {
    if (!map.has(item)) {
      map.set(item, 1);
    }
  }
  const singleArray = [...map.keys()];
  console.log(singleArray);