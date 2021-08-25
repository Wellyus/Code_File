function Dictionary() {
    this.dataStore = [];
    this.add = (key,value)=> {
        this.dataStore[key] = value;
    }
    this.find = (key)=>{
        return this.dataStore[key];
    }
    this.remove = (key)=>{
        delete this.dataStore[key];
    }
    this.showAll = ()=>{
        for(var i of Object.keys(this.dataStore).sort()) {
            console.log(i+" -> "+this.dataStore[i]);
        }
    }
    this.count = ()=>{
        var count = Object.keys(this.dataStore);
        return count.length;
    }
    this.clear = ()=>{
        for(var i of Object.keys(this.dataStore)) {
            delete this.dataStore[i];
        }
    }
}
var dictionary1 = new Dictionary();
dictionary1.add("David",123);
dictionary1.add("Mike",689);
dictionary1.add(13,32);
dictionary1.showAll();
console.log(dictionary1.find("Mike"));
dictionary1.remove(13);
dictionary1.showAll();
console.log(dictionary1.count());
dictionary1.clear();
console.log(dictionary1.count());