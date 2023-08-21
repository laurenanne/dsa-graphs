class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    let nodeSet = this.nodes;
    if (!nodeSet.has(vertex)) {
      nodeSet.add(vertex);
    }
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    let nodeSet = this.nodes;
    for (let vertex of vertexArray) {
      if (!nodeSet.has(vertex)) {
        nodeSet.add(vertex);
      }
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    let nodeSet = this.nodes;
    if (nodeSet.has(vertex)) {
      nodeSet.delete(vertex);
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let toVisitStack = [start];
    let seen = new Set(toVisitStack);
    let result = [];

    while (toVisitStack.length > 0) {
      let curr = toVisitStack.pop();
      result.push(curr.value);

      for (let adj of curr.adjacent) {
        if (!seen.has(adj)) {
          toVisitStack.push(adj);
          seen.add(adj);
        }
      }
    }
    return result;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let toVisitQueue = [start];
    let seen = new Set(toVisitQueue);
    let result = [];

    while (toVisitQueue.length > 0) {
      let curr = toVisitQueue.shift();
      result.push(curr.value);

      for (let adj of curr.adjacent) {
        if (!seen.has(adj)) {
          toVisitQueue.push(adj);
          seen.add(adj);
        }
      }
    }
    return result;
  }
}

module.exports = { Graph, Node };
