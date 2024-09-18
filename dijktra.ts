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

      if(leftChildIdx < length &))
    }
  }
}
