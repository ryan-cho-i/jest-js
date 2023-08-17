const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 9000;
app.listen(PORT, () => {
  console.log("Server is listening", PORT);
});
