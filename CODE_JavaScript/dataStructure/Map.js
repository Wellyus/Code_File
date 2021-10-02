//Map,映射,包含一组键  
let obj1 = {"1":1,"2":2,}
//对象转映射
let map = new Map(Object.entries(obj1));    //[[],[],[]]
console.log(map);
map.set("3",3);
map.set(3,"3");
console.log(map);
map.set(3,3);   //set设置键值对或更改键对应的值
console.log(map);
console.log(map.get(7));        //get返回键对应的值，不存在返回undefined
console.log(map.has(3));        //has返回是否包含键
console.log(map.delete(7));     //delete返回是否删除键值对,不存在元素返回false
let map1 = new Map().set(1,1).set(2,2).set(33,4);   //set返回映射表
console.log(map1);
console.log([...map1]);
console.log(map1.entries());       //返回一个可迭代对象
console.log([...map1.keys()]);
//迭代映射,for of 传递键和值
for(let [key,value] of map1) {
    console.log(key+" "+value);
}
//迭代方式2,forEach()先传递值，再传递键
map1.forEach((value,key)=>{
    console.log(key+""+value);
})
console.log(map1.size);     //map.size表示映射中键的数目
