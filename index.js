const express = require("express");

const app = express();

const categoriaController = require("./GameControler");
;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.get("/", (req, res) => {
//   console.log("Start ");
//   res.send("ok");
// });

console.log("A REQUISIÇÃO PASSOU PELA INDEX");
app.use("/", categoriaController);

app.listen(9020, () => {
  console.log("Servidor rodando em: http://localhost:9020");
});
