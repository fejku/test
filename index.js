const express = require("express");
const app = express();

app.get("/", (_, res) => res.json({ a: "test" }));

app.listen(5000, () => {
  console.log("server running");
});
