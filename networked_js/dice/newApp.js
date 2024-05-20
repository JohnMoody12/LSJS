const HTTP = require("http");
const PORT = 3000;

function die(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;
  //let number = die(req.)
  console.log(method);
  console.log(path);

  if (path != "/favicon.ico") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    //res.setHeader("Set-Cookie", "Baba=Booey; Path=/babano; HttpOnly");
    res.write(`${number}\n ${method} ${path}`);
    console.log(number);
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log("listenin");
});

//http://localhost:3000/?rolls=4&sides=8
