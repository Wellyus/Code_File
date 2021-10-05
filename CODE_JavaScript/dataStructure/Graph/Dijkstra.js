//求解图单源到其他顶点的最短距离，且图中不能有负权值边
function Graph(v) {
    this.vertice = v;
    this.graph = new Array(v);
    for(let i= 0; i < v; i++) {
        this.graph[i] = new Array(v);
    }
    for(let i = 0; i < v; i++) {
        for(let j = 0; j < v; j++) {
            if(i===j) {
                this.graph[i][j] = 0;
            } else {
                this.graph[i][j] = Infinity;
            }
        }
    }
    this.addEdge = (x,y,val)=>{
        this.graph[x][y] = val;
        this.graph[y][x] = val;
    }
    this.showGraph = ()=>{
        for(let i = 0; i < v; i++) {
            let str = `${i}`;
            for(let j = 0; j < v; j++) {
                if(this.graph[i][j]!==Infinity&&this.graph[i][j]!==0) {
                    str += `->${j}`
                }
            }
            console.log(str);
        }
    }
    this.Dijkstra = (src)=>{
        let len = this.vertice;
        //贪心算法,选最小值，更新其他值，重复顶点的次数
        const dist = new Array(this.vertice);
        dist.fill(Infinity);
        dist[src] = 0;
        const visited = new Array(this.vertice);
        visited.fill(false);
        const res = new Array(this.vertice);
        res.fill(-1);
        //再选n-1个最小距离即可
        for(let i= 0; i < this.vertice; i++) {
            let min = Infinity;
            let index = src;
            for(let i = 0; i < len; i++) {
                if(visited[i]===false&&dist[i]<min) {
                    min = dist[i];
                    index = i;
                }
            }
            //选出一个最小距离dist[index]标记为true
            visited[index] = true;
            //用index更新其他距离dist[i]，必要的话
            for(let i = 0; i < len; i++) {
                if(dist[index]+this.graph[index][i]<dist[i]&&this.graph[index][i]!==Infinity&&visited[i]===false) {
                    dist[i] = dist[index] + this.graph[index][i];
                    res[i] = index;
                }
            }
        }
        for(let i = 0; i < this.vertice; i++) {
            let str = ""+i;
            let j = i;
            while(res[j]!==-1) {
                str = res[j] + str;
                j = res[j];
            }
            console.log(str+" "+dist[i]);
        }
    }
    this.prim = ()=>{
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
    this.kruskal = ()=>{
        const graph1 = new Array(this.vertice);
        for(let i = 0; i < this.vertice; i++) {
            graph1[i] = new Array(this.vertice);
            graph1[i].fill(false);
        }
        const parent = new Array(this.vertice);
        for(let i = 0; i < this.vertice; i++) {
            parent[i] = i;
        }
        const isValid = (j,k)=>{
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
                    if(this.graph[j][k]<min&&!graph1[j][k]&&isValid(j,k)) {
                        min = this.graph[j][k];
                        x = j;
                        y = k;
                    }
                }
            }
            let m = x;
            while(parent[m]!==m) {
                m = parent[m];
            }
            parent[m] = y;
            console.log(`选择的第${i+1}条边为:${x}->${y} = ${this.graph[x][y]}`);
            graph1[x][y] = true;
        }
    }
}
let graph1 = new Graph(6);
{
    //初始化
    graph1.addEdge(0,1,2);
    graph1.addEdge(0,2,4);
    graph1.addEdge(1,2,2);
    graph1.addEdge(1,3,4);
    graph1.addEdge(1,4,2);
    graph1.addEdge(2,4,3);
    graph1.addEdge(3,4,3);
    graph1.addEdge(3,5,2);
    graph1.addEdge(4,5,2);
}
graph1.showGraph();
graph1.Dijkstra(0);
graph1.prim();
graph1.kruskal();