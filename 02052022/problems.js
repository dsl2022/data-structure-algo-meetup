// take home challenges
// prereqs possible
// Write a function, preqPossible, that takes in number of courses and prerequisites as arguments.
// Courses have ids ranging from 0 through n - 1. e.g, [B, C] means that course B must be taken before course C.
// it should return true if courses can be taken or false if not.

// const numCourses = 6;
// const prereqs = [
//   [0, 1],
//   [2, 3],
//   [0, 2],
//   [1, 3],
//   [4, 5],
// ];

// tips, translate the edge graph into ajacency list
// then apply the cycle detection algorithm we went through in session
// if there is a cycle, then it will return false, because courses can't be taken. e.g [A, B],[B, C], [C, A], since it's a cycle
// courses can't be taken sucessfully.

// preqPossible(numOfCourses, prereqs);

// Question solved during session
// has cycle
// create a search function, that takes in an adjacency list of a directed graph. The function should detect if the graph has a cycle.
// If it has cycle, return true. If it doesn't, return false.

const search = (graph) => {
  const visited = new Set(); // Black

  const nodes = Object.keys(graph);
  for (let node of Object.keys(graph)) {
    if (hasCycle(graph, node, visited)) {
      return true;
    }
  }

  return false;
};

const hasCycle = (graph, key, visited, visiting = new Set()) => {
  // Base case 1: Have we visited this node yet? (CHECK BLACK and return false)
  if (visited.has(key)) {
    return false;
  }

  // Base case 2: Are we actively visiting this node? (CHECK GREY and return false)
  if (visiting.has(key)) {
    // We have a cycle.
    return true;
  }

  // Otherwise, this is a new node, mark it as "visiting" (ADD GREY).
  visiting.add(key);

  // Recurse to connected nodes.
  // const values = graph[key];
  for (let neighbor of graph[key]) {
    if (hasCycle(graph, neighbor, visited, visiting)) {
      return true;
    }
  }

  // Move node from visiting to visited set.
  visiting.delete(key);
  visited.add(key);

  // If no cycle, done.
  return false;
};

const graph1 = {
  q: ["r", "s"],
  r: ["t", "u"],
  s: [],
  t: [],
  u: ["q"],
  v: ["w"],
  w: [],
  x: ["w"],
};

const graph2 = {
  a: ["b"],
  b: ["c"],
  c: ["a"],
};
console.log(search(graph1));
console.log(search(graph2));
