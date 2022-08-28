function reachableNodes(n, edges, restricted) {
  let adj = [];
  let vis = Array(n).fill(false);
  for (i = 0; i < n; i++) adj[i] = [];
  for (let edge of edges) {
    let [src, dst] = edge;
    adj[src].push(dst);
    adj[dst].push(src);
  }

  console.log(adj);

  let count = 0;
  function dfs(node) {
    vis[node] = true;
    count++;
    console.log(`I'm at node ${node} and have ${adj[node]} children`);
    for (child of adj[node]) {
      console.log(
        `--I'm debating if child ${child} is part of ${restricted} or has been visited ${vis[child]}`
      );
      if (vis[child]) continue;
      if (restricted.includes(child)) continue;
      dfs(child);
    }
    return;
  }

  dfs(0);

  return count;
}

reachableNodes(
  7,
  [
    [0, 1],
    [1, 2],
    [3, 1],
    [4, 0],
    [0, 5],
    [5, 6],
  ],
  [4, 5]
);

module.exports.reachableNodes = reachableNodes;
