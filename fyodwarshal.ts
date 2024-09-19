function floyd(graph:number[][]): number[][]{
  const dist = graph.map(row => [...row]);
  const V = graph.length;

  for(let k=0; k< V; k++){
    for(let i=0; i<V; i++){
      for(let j-0; j<V; j++){
        if(dist[i][k]+ dist[k][j] < dist[i][j]){
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist;
}
