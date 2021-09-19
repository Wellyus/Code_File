//Set集合，无序且不重复,传入的值遵循严格的类型检查
let set = new Set();
//add方法会把数组当成一个元素
set.add([1,2,3])
//size属性表示集合元素个数
console.log(set.size);
//add()返回调用它的集合,delete()返回布尔值,clear()用于添加，删除，清空
console.log(set.add(1));
set.add("1");
console.log(set.delete("j"));
console.log(set);
const a = [1,2,4];
set.add(a);
const c = [1,2,4];
console.log(set.has(c));
console.log(set.delete(c));
for(let i of set) {
    console.log(i);
}
//展开运算法，转数组或者作为实参列表
console.log(...set);
let str = ``;
set.forEach((item)=>{
    str+=item;
})
console.log(str);
let u = 100;
set.add(u);
let v = 100;
console.log(set.delete(v));
const arr1 = [1,2,3];
const arr2 = [1,2,3];
console.log(arr1===arr2);       //set中add和delete是基于严格的相等性检查，即===