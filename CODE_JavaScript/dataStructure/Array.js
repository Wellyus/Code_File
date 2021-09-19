function weekTemps() {
    this.dataStore = [];
    this.add = (temp) => {
        this.dataStore.push(temp);
    }
    this.average = () => {
        let sum = 0;
        for(let i = 0; i < this.dataStore.length; ++i) {
            sum += this.dataStore[i];
        }
        sum/=this.dataStore.length;
        return sum;
    }
}
function Points() {
    this.dataStore = [];
    this.add = (obj)=>{
        this.dataStore.push(obj);
    }
    this.display = ()=>{
        for(let i = 0; i < this.dataStore.length; ++i) {
            console.log(this.dataStore[i].x+","+this.dataStore[i].y);
        }
    }
}
function Point(x,y) {
    this.x = x;
    this.y = y;
}
