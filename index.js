const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("Start ");
  res.send("ok");
});

app.listen(9080, () => {
  console.log("Servidor rodando em: http://localhost:9080");
});
