function Queue() {
    this.queue = [];
    this.push = function(item) {
        this.queue.push(item);
    };
    this.pop = function() {
        return this.queue.shift();
    };
    this.isEmpty = function() {
        return this.queue.length === 0;
    };
}

// returns object with all the node's distance from root.
function bfs(graph, root) {
    let nodesLen = {};
    let visited = [];
    for (let i = 0; i < graph.length; i++) {
        nodesLen[i] = (i === root ? 0 : Infinity);
        visited.push(false);
    }
    let queue = new Queue();
    queue.push(root);
    while (!queue.isEmpty()) {
      let node = queue.pop();
      visited[node] = true;
      graph[node].forEach((edge, otherNode) => {
        if (edge && !visited[otherNode]) {
            queue.push(otherNode);
            nodesLen[otherNode] = Math.min(nodesLen[otherNode], nodesLen[node] + 1);
        }
      });
    }
    return nodesLen;
}

let exBFSGraph = [
[0, 1, 0, 0],
[1, 0, 1, 0],
[0, 1, 0, 1],
[0, 0, 1, 0]
]; 

console.log(bfs(exBFSGraph, 1));
