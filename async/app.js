// const { Client } = require("pg");
// let client = new Client({
//   user: "postgres",
//   host: "localhost",
//   password: "123",
//   port: 5432,
//   database: "films",
// });

// async function logQuery(queryText) {
//   await client.connect();
//   let data = await client.query(queryText);
//   console.log(data.rows[0].title);
//   client.end();
// }

// logQuery(
//   "SELECT * FROM films JOIN directors ON films.director_id = directors.id WHERE name = 'Sidney Lumet'"
// );
async function fetchData() {
  console.log("Before fetch");
  const response = await setTimeout(() => {
    console.log("ahh");
  });
  console.log("After fetch");
}

console.log("Before calling fetchData");
fetchData();
console.log("After calling fetchData");
