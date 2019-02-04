// returns array of all nodes reachable from root.
function dfs(graph, root) {
  let nodesReachableFromRoot = [];
  let visited = Array(graph.length).fill(false);
  let stack = [];
  stack.push(root);
  while (stack.length !== 0) {
    let node = stack.pop();
    nodesReachableFromRoot.push(node);
    visited[node] = true;
    graph[node].forEach((edge, otherNode) => {
      if (edge && !visited[otherNode]) {
        stack.push(otherNode);
      }
    });
  }
  return nodesReachableFromRoot;
}

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(dfs(exDFSGraph, 3));