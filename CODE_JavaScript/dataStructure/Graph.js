//定义顶点
/*function Vertex(label,wasVisited) {
    this.label = label;
    this.wasVisited = wasVisited;
}*/
function Graph(v) {
    this.vertices = v;      //顶点
    this.edges = 0;         //边
    this.adj = [];          //邻接表
    this.marked = [];
    this.edgeTo = [];
    for(let i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
        this.marked[i] = false;
        this.edgeTo[i] = -1;
    }
    this.addEdge = (v,w)=>{
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }
    this.showGraph = ()=>{
        for(var i = 0; i < this.vertices; i++) {
            if(this.adj[i][0]!=void 0) {
                var str = i+"->";
                for(let j = 0; j < this.adj[i].length; j++) {
                    str = str + " " + this.adj[i][j];
                }
                console.log(str);
            }
        }
    }
    //depth first search
    this.dfs = (v)=>{
        if(this.marked[v]===false) {
            console.log(v + " is visited");
            this.marked[v] = true;
        } else {
            return ;
        }
        if(this.adj[v][0] !== void 0) {
            for(let vertex of this.adj[v]) {
                if(this.marked[vertex]===false) {
                    this.dfs(vertex);
                }
            }
        }
    }
    //breadth first search
    this.bfs = (v)=>{
        const queue = [];
        queue.push(v);
        this.marked[v] = true;
        while(queue.length > 0) {
            let len = queue.length;
            for(let i = 0; i < len; i++) {
                let d = queue.shift();
                console.log(d+" is visited!");
                if(this.adj[d][0]!==void 0) {
                    for(let j of this.adj[d]) {
                        if(this.marked[j]===false) {
                            queue.push(j);
                            this.marked[j] = true;
                            this.edgeTo[j] = d;
                        }
                    }
                }
            }
        }
    }
    this.pathTo = (u,v)=>{
        if(this.marked[v]===false) {
            return undefined;
        } else {
            const path = [];
            while(v!==u) {
                path.unshift(v);
                v = this.edgeTo[v];
            }
            path.unshift(v);
            let str = "";
            for(let i = 0; i < path.length; i++) {
                str = str + " " + path[i];
            }
            return str;
        } 
    }
}
let graph = new Graph(8);
graph.addEdge(0,1);
graph.addEdge(0,6);
graph.addEdge(2,1);
graph.addEdge(3,1);
graph.addEdge(2,5);
graph.addEdge(2,4);
graph.showGraph();
graph.bfs(0);
console.log(graph.pathTo(0,4));
