// let arr = [[1, 2, 3], [4, 5, 6], , []];
// console.log();

// let graph = {
//   a: ["b", "c"],
//   b: ["c"],
//   c: ["d"],
//   d: [],
// };
// let memo = {};
// let dfs = (graph, location) => {
//   for (let node of graph[location]) {
//     if (memo[node]) continue;
//     memo[node] = 1;
//     console.log(node);
//     dfs(graph, node);
//   }
// };

// dfs(graph, "a");

// let graph = {
//   f: ["g", "i"],
//   g: ["h"],
//   h: [],
//   i: ["g", "k"],
//   j: ["i"],
//   k: [],
// };

// let memo = {};
// function dfs(graph, target, source) {
//   console.log("node " + source);
//   if (source === target) return true;
//   if (memo.hasOwnProperty(source)) return false;
//   memo[source] = 1;
//   for (let node of graph[source]) {
//     if (dfs(graph, target, node)) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(dfs(graph, "k", "f"));

// function convertGraph(list) {
//   let graph = {};
//   list.forEach((pair) => {
//     let [a, b] = pair;
//     if (graph[a]) {
//       graph[a].push(b);
//     } else {
//       graph[a] = [b];
//     }
//     if (graph[b]) {
//       graph[b].push(a);
//     } else {
//       graph[b] = [a];
//     }
//   });

//   return graph;
// }

// const edges = [
//   ["j", "o"],
//   ["i", "j"],
//   ["k", "i"],
//   ["m", "k"],
//   ["k", "l"],
//   ["o", "n"],
// ];

// function pathing(edges, target, source) {
//   let graph = convertGraph(edges);
//   let memo = {};
//   let trueList = {};
//   console.log(graph);
//   let answer = dfs(graph, target, source, memo, trueList);
//   console.log(memo);
//   return answer;
// }

// function dfs(graph, target, source, memo, trueList) {
//   if (source === target) {
//     return true;
//   }

//   if (memo.hasOwnProperty(source)) {
//     return false;
//   }
//   memo[source] = 1;

//   for (let node of graph[source]) {
//     if (dfs(graph, target, node, memo, trueList)) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(pathing(edges, "n", "j"));

// let a = [1, 2, -2, 4, 8, -100, 5];

// function maxSub(arr) {
//   let max = -Infinity;
//   let current = 0;

//   for (let i = 0; i < arr.length; i++) {
//     current += arr[i];
//     max = Math.max(current, max);
//     if (current < 0) current = 0;
//   }

//   return max;
// }

// console.log(maxSub(a));

// const a = [1, 2, 3];
// a = [4];
// console.log(a);


//object - traverse objects. what if an entry or key or value is missing? what's returned for each?
//array - traverse arrays. waht if an entry is missing? what's returned?
