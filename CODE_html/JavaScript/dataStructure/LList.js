function node(element) {
    this.element = element;
    this.next = null;
}
function LList() {
    this.head = new node("head");
    this.insert = (element)=>{
        var current = this.head;
        var newNode = new node(element);
        newNode.next = current.next;
        current.next = newNode;
    }
    this.print = ()=>{
        var current = this.head;
        while(current!=null) {
            console.log(current.element);
            current = current.next;
        }
    }
    this.find = (element)=>{
        var current = this.head;
        while(current.element!=element) {
            if(current.next==null) {
                return null;
            }
            current = current.next;
        }
        console.log("find successfully!");
        return current;
    }
    this.insertAfter = (element,data) => {
        var current = this.find(element);
        if(current!=null) {
            var newNode = new node(data);
            newNode.next = current.next;
            current.next = newNode;
        }
    }
    this.findBefore = (element)=>{
        var current = this.head;
        var before = null;
        while(current.element!=element) {
            if(current.next==null) {
                return null;
            }
            before = current;
            current = current.next;
        }
        return before;
    }
    this.remove = (element)=>{
        var current = this.findBefore(element);
        if(current!=null) {
            current.next = current.next.next;
        }
    }
}
var LList1 = new LList();
console.log(LList1.head.element);
LList1.insert(5);
LList1.insert(3);
LList1.insert(1);
console.log(LList1.head.next.element);
LList1.print();
LList1.insertAfter(5,7);
LList1.print();
LList1.remove(7);
LList1.print();