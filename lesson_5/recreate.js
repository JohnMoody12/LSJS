function forE(array, callback, context) {
  console.log(context);
  for (let index = 0; index < array.length; index++) {
    callback.call(context, array[index], index, array);
  }
}

// forE(["a", "b", "c"], function (value, index, arr) {
//   console.log(`after ${value} comes ${arr[index + 1]}`);
// });
//[4, 5, 6].forE(foo.showItem);

function filter(array, callback) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) {
      newArray.push(array[index]);
    }
  }
  return newArray;
}

// let values = [1, "abc", null, true, undefined, "xyz"];
// //let values = [1, 2, 3, 4, "a"];
// console.log(filter(values, (value) => typeof value === "string"));

function map(array, callback) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    newArray.push(callback(array[index]));
  }

  return newArray;
}
// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, (number) => number * 3)); // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, (number) => number + 1)); // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));

// let values2 = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values2, (value) => String(value)));

function reduce(array, callback, start) {
  let reduced = start;
  let index = 0;

  if (start === undefined) {
    reduced = array[0];
    index = 1;
  }

  for (index; index < array.length; index++) {
    reduced = callback(reduced, array[index]);
  }

  return reduced;
}
let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number)); // => 15
console.log(reduce(numbers, (prod, number) => prod * number)); // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3)); // => 360
console.log(reduce([], (accum, number) => accum + number, 10)); // => 10
console.log(reduce([], (accum, number) => accum + number));

let stooges = ["Mo", "Larry", "Curly"];
console.log(
  reduce(
    stooges,
    (reversedStooges, stooge) => {
      reversedStooges.unshift(stooge);
      return reversedStooges;
    },
    []
  )
);
