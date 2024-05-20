let o = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
for (let i = 0; i < 1000; i++) {
  let number = Math.floor(Math.random() * 6 + 1);
  o[number]++;
}

let sum = 0;
for (let key in o) {
  sum += o[key];
}

console.log(o);
console.log(sum);
