require("dotenv").config();

const cors = require("cors");
const express = require("express");

const produtosRoutes = require("./routes/produtos");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/produtos", produtosRoutes);

app.get("/", (req, res) => {
  res.send("Servidor da Lanchonete funcionando!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
