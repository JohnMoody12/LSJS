function a() {
  let that = this;
  (function () {
    console.log(`this this is ${this}`);
  })();
  return function () {
    console.log(`this is ${this}`);
    console.log(`that is ${that}`);
  };
}

let test = a();

test();
