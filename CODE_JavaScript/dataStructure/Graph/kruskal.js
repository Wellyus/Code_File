//kruskal 求最小生成树 core:依次选择最小的边（不重复，不成环）
function kruskal(graph) {
    const graph1 = new Array(this.vertice);
        for(let i = 0; i < this.vertice; i++) {
            graph1[i] = new Array(this.vertice);
            graph1[i].fill(false);
        }
        const parent = new Array(this.vertice);
        for(let i = 0; i < this.vertice; i++) {
            parent[i] = i;
        }
        let isValid = (j,k)=>{
            while(parent[j]!==j) {
                j = parent[j];
            }
            let parent1 = j;
            while(parent[k]!==k) {
                k = parent[k];
            }
            let parent2 = k;
            return parent1===parent2?false:true;
        }
        for(let i = 0; i < this.vertice-1; i++) {
            let min = Infinity;
            let x = -1;
            let y = -1;
            for(let j = 0; j < this.vertice; j++) {
                for(let k = 0; k < this.vertice; k++) {
                    if(this.graph[j][k]<min&&graph1[j][k]===false) {
                        if(isValid(j,k)) {
                            min = this.graph[j][k];
                            x = j;
                            y = k;
                        }
                    }
                }
            }
            let m = x;
            while(parent[m]!==m) {
                m = parent[m];
            }
            parent[m] = y;
            console.log(`选择的第${i+1}条边为:${x}->${y} = ${this.graph[x][y]}`);
        }
}