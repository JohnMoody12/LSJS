const express = require("express");
const app = express();

const port = 3000; // You can change the port number if needed
app.use(express.static("public"));
// Example route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
