const HTTP = require("http");
const PORT = 3000;
const URL = require("url").URL;

function dieRoll(min, max = 6) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;
  const myURL = new URL(
    path,
    `${req.connection.encrypted ? "https" : "http"}://${req.headers.host}`
  );
  let params = myURL.searchParams;
  let rolls = params.get("rolls");
  let sides = params.get("sides");

  if (path === "/favicon.ico") {
    res.statusCode = 404;
    res.end();
  } else {
    let content;

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    for (let i = 0; i < rolls; i++) {
      content = dieRoll(1, sides);
      res.write(`${content}\n`);
    }

    res.write(`${method} ${path}\n`);
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
