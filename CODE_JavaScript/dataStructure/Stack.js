function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = Length;
    this.clear = Clear;
}
function push(element) {
    this.dataStore[this.top++] = element;
}
function pop() {
    return this.dataStore[--this.top];
}
function peek() {
    return this.dataStore[this.top-1];
}
function Length() {
    return this.top;
}
function Clear() {
    this.top = 0;
}
var stack1 = new Stack();
console.log(typeof(stack1));
stack1.push("string");      
stack1.push(1234);
stack1.push([1,2,4]);
stack1.pop();
console.log(stack1.peek());     
console.log(stack1.length());   
console.log(stack1.clear());

//数制转换
function change(num1,num2) {
    var str = "";
    switch(num2) {
        case "a":num2 = 11;break;
        case "A":num2 = 11;break;
    }
    var stack = new Stack();
    do {
        stack.push(num1%num2);
        num1 = Math.floor(num1 / num2);
    }while(num1 > 0)
    while(stack.length()>0) {
        str += stack.pop();
    }
    return str;
}
console.log(change(520,"a"));