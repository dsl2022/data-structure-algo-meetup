class PriorityQueue {
  constructor(array) {
    this.priorityQ = this.buildPriorityQueue(array);
  }
  buildPriorityQueue(array) {
    const firstParantIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParantIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }
  getSmallerChild(currentIdx, endIdx, array) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      if (
        childTwoIdx !== -1 &&
        array[childTwoIdx].priority < array[childOneIdx].priority
      ) {
        childOneIdx = childTwoIdx;
      }
      if (array[currentIdx].priority < array[childOneIdx].priority) {
        return -1;
      }
      this.swap(currentIdx, childOneIdx, array);
      currentIdx = childOneIdx;
      childOneIdx = currentIdx * 2 + 1;
    }
  }
  siftDown(currentIdx, endIdx, array) {
    const childToSwap = this.getSmallerChild(currentIdx, endIdx, array);
    if (array[childToSwap] < array[currentIdx]) {
      this.swap(currentIdx, childToSwap, array);
      currentIdx = childToSwap;
      childOneIdx = currentIdx * 2 + 1;
    }
  }
  siftUp(currentIdx, array) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (
      currentIdx > 0 &&
      array[currentIdx].priority < array[parentIdx].priority
    ) {
      this.swap(currentIdx, parentIdx, array);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }
  remove() {
    this.swap(0, this.priorityQ.length - 1, this.priorityQ);
    const valueToRemove = this.priorityQ.pop();
    this.siftDown(0, this.priorityQ.length - 1, this.priorityQ);
    return valueToRemove;
  }
  insert(value) {
    this.priorityQ.push(value);
    this.siftUp(this.priorityQ.length - 1, this.priorityQ);
  }

  swap(currentIdx, childOneIdx, array) {
    const temp = array[currentIdx];
    array[currentIdx] = array[childOneIdx];
    array[childOneIdx] = temp;
  }
  peek() {
    return this.priorityQ[0];
  }
}

const queue = [
  { value: "something", priority: 5 },
  { value: "something", priority: 3 },
  { value: "something", priority: 4 },
  { value: "something", priority: 2 },
  { value: "something", priority: 8 },
  { value: "something", priority: 7 },
  { value: "something", priority: 9 },
  { value: "something", priority: 0 },
];

// console.log("original", queue);
const pq = new PriorityQueue(queue);
pq.showQueue();
// console.log(pq.peek());
// console.log(pq.remove());
// pq.insert({ value: "somethingcool", priority: 1 });
// console.log(pq.peek());
