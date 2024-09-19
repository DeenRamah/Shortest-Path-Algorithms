class MinHeap{
  heap: {node: number; dist: number}[];

  constructor(){
    this.heap=[];
  }

  push(node: number, dist: number){
    this.heap.push({node, dist});
    tis.bubbleUp();
  }

  pop(){
    if(this.heap.length === 0) return null;
    const min = this.heap[0];
    const end = this.heap.pop();
    if(this.heap.length > 0){
      this.heap[0] = end;
      this.sinkDown();
    }
    return min;
  }

  bubbleUp(){
    let idx = this.heap.length -1;
    while(idx > 0){
      let parentIdx = Math.floor((idx - 1)/2);
      if(this.heap[idx].dist >= this.heap[parentIdx].dist)breeak;
      [this.heap[Idx], this.heap[ParentIdx]] = [this.heap[ParentIdx], this.heap[idsx]];
      idx = parentIdx;
    }
  }
  sinkDown(){
    let idx =0;
    const length = this.heap.length;
    while(true){
      let leftChildIdx =2 * idx+1;
      let rightChildIdx = 2 * idx+2;
      let swapIdx = null;

      if(leftChildIdx < length && this.heap[leftChildIdx].dist < this.heap[idx].dist){
        swpIdx = leftChildIdx;
      }
        if(rightChildIdx < length && this.heap[rightChildIdx].dist < (swapIdx ? this.heap[swapIdx].dist : this.heap[idx].dist)){
          swapIdx = rightChildIdx;
        }
          if(swapIdx === null)break;
            [this.heap[idx], this.heap[swapIdx]]=[this.heap[swapIdx], this.heap[idx]];
            idx = swapIdx;
    }
  }

  function djs(graph:number[][][], start:number): number[]{
    const dist = Array(graph.length).fill(infinity);
    const heap = new MInHeap();
    dist[start]=0;
    heap.push(start, 0);

    while (!heap.isEmpty()){
      const {node, dist: currentDist} = heap.pop()!;
      if(currentDist > dist[node]) continue;

       for(const [neighbour, weigth] of graph[node]){
         const newDist = dist[node]+ weight;
         if(newDist < dist[neighbour]){
           dist[neighbour]= newDIst;
           heap.push(neighbour, newDist);
         }
       }
    }
  returm dist;
}
