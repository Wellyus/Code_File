//多源最短路径,有向图 core:DP 
function Floyd_Warshall(graph) {
    const dist = [];
    for(let i = 0; i < this.vertice; i++) {
        dist[i] = [];
        for(let j = 0; j < this.vertice; j++) {
            dist[i][j] = this.graph[i][j];
        }
    }
    for(let k = 0; k < this.vertice; k++) {
        for(let i = 0; i < this.vertice; i++) {
            for(let j = 0; j < this.vertice; j++) {
                if(dist[i][k]+dist[k][j]<dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    console.log([...dist]);
}