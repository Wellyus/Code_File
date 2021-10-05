//prim  求最小生成树 core:依次加入节点扩大最小生成树并标记为true，然后更新最小生成树到其他节点的最小距离
function prim(graph) {
    const dist = new Array(this.vertice);
        dist.fill(Infinity);
        dist[0] = 0;
        const visited = new Array(this.vertice);
        visited.fill(false);
        const parent = new Array(this.vertice);
        parent.fill(-1);
        let sum = 0;
        for(let i = 0; i < this.vertice; i++) {
            let index = -1;
            let min = Infinity;
            //选一个未选择最小值加入最小生成树，并标记为true
            for(let j = 0; j < this.vertice; j++) {
                if(dist[j]<min&&visited[j]===false) {
                    min = dist[j];
                    index = j;
                }
            }
            sum += min;
            visited[index] = true;
            for(let j = 0; j < this.vertice; j++) {
                //更新最小生成树到其他节点的距离
                if(visited[j]===false&&this.graph[index][j]<dist[j]) {
                    dist[j] = this.graph[index][j];
                    //记录每个节点的父节点
                    parent[j] = index;
                }
            }
        }
        for(let i = 1; i < this.vertice; i++) {
            console.log(parent[i]+" "+i+" "+this.graph[parent[i]][i]);
        }
        console.log(sum);
}