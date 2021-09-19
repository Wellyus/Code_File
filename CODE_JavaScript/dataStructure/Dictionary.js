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
var dictionary = new Dictionary();
dictionary.clear();

