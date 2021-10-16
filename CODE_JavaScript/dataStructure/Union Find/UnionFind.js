function UnionFind(n) {
    this.count = n;
    this.parent = [];
    this.size = [];
    for(let i = 0; i < n; i++) {
        this.parent[i] = i;
        this.size[i] = 1;
    }
    this.union = (p,q)=>{
        let x = this.find(p);
        let y = this.find(q);
        if(x != y) {
            if(this.size[x] < this.size[y]) {
                this.parent[x] = y;
                this.size[y] += this.size[x];
            } else {
                this.parent[y] = x;
                this.size[x] += this.size[y];
            }
            this.count--;
        }
    }
    this.find = (p)=>{
        while(this.parent[p] !== p) {
            //路径压缩
            let q = this.parent[p];
            this.parent[p] = this.parent[this.parent[p]];
            p = q;
        }
        return p;
    }
    this.connected = (p,q)=>{
        return this.find(p)===this.find(q);
    }
}
const UnionFind1 = new UnionFind(10);
UnionFind1.union(0,1);
UnionFind1.union(1,2);
UnionFind1.union(2,5);
UnionFind1.union(3,7);
console.log(UnionFind1.count);
console.log([...UnionFind1.parent]);
console.log([...UnionFind1.size]);
