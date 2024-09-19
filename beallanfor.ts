function bell (graph: number[][][], start: number): number[] | string{
  const dist = Array(graph.length).fill(Infinity);
  dist[start]=0;

  for(let i=0; i< graph.lenght -1; i+){
    for(let u=0; u< graph.length; u++){
      for(const[v, weigth] of graph[u]){
        if(dist[u] + weight < dist[v]){
          dist[v]= dist[u] + weight;
        }
      }
    }
  }

  //check for negative cycles
  for(let u=0; u< graph.length; u++){
    for(const[v, weight] of graph[u]){
      if(dist[u] +weight< dist[v]){
        return "Negative cycle detected";
      }
    }
  }
  return dist;
}
