function HashTable() {
    this.table = new Array(137);
    this.value = new Array(137);        //线性勘测消除元素碰撞
    this.simpleHash = (data)=>{
        var total = 0;
        const H = 37;
        for(var i = 0; i < data.length; i++) {
            total = total*H + data.charCodeAt(i);
            return total%=this.table.length;
        }
    }
    this.put = (key,value)=>{
        var index = this.simpleHash(key);
        var pos = 0;
        if(this.table[index][pos]==undefined) {
            this.table[index][pos] = key;
            this.table[index][++pos] = value;
        } else {
            while(this.table[index][pos]!=undefined) {
                pos++;
            }
            this.table[index][pos] = key;
            this.table[index][++pos] = value;

        }
    }
    this.putLinear = (key,value)=>{
        var index = this.simpleHash(key);
        while(this.table[index]!=undefined) {       
            index++;
        }
        this.table[index] = key;
        this.value[index] = value;
    }
    this.getChains = (key)=>{
        var index = this.simpleHash(key);
        var pos = 0;
        var length = this.table[index].length;
        if(length==0) {
            return undefined;
        } else {
            var store = [];
            while(pos<=length-2) {          //最后一次循环的位置
                if(this.table[index][pos]==key) {
                    store.push(this.table[index][pos+1]);
                }
                pos = pos + 2;
            } if(store.length>0) {
                return store.join(",");
            } else {
                return undefined;
            }
        }
    }
    this.getLinear = (key)=>{
        var index = this.simpleHash(key);
        var store = [];
        while(this.table[index]!=undefined) {
            if(this.table[index] == key) {
                store.push(this.value[index]);
            }
            index++;
        }
        return store.toString();
    
    }
    this.buildChains = ()=>{
        for(var i = 0; i < this.table.length; ++i) {
            this.table[i] = [];
        }
    }
    this.show = ()=>{
        var table = Object.keys(this.table);
        for(var i of table) {
            console.log(i+"->"+this.table[i]);
        }
    }
    this.showChains = ()=>{
        for(var i = 0; i < this.table.length; ++i) {
            if(this.table[i][0]!=undefined) {
                var pos = 0;
                while(pos<=this.table[i].length-2) {
                    console.log(this.table[i][pos]+"->"+this.table[i][pos+1]);
                    pos+=2;
                }
            }
        }
    }
}
var table = new HashTable();
table.putLinear("123",12);
table.putLinear("123",3241);
console.log(table.getLinear("123"));
console.log(table.getLinear("this"));