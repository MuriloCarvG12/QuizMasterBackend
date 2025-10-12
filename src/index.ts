require("dotenv").config();

import "reflect-metadata";
import express from "express";
import  AppDataSource  from "./data_source";

import cors from "cors";
import subjectRouter from "./routes/Subject";
import topicRouter from "./routes/Topic";

const app = express();

app.use(cors()); // Permite que o express entenda requisições de outros domínios

app.use(express.json()); // Permite que o express entenda JSON

app.use("/Subject", subjectRouter);
app.use("/Topic", topicRouter);
app.get("/env", (req, res) => {
  res.json({
    port: process.env.PORT,
    node_env: process.env.NODE_ENV,
  });
});

AppDataSource.initialize()
  .then(() => {
    app.listen(3000, () => {
      console.log(`O servidor está rodando em http://localhost:3000`);
    });
  })
  .catch((error) => {console.log("teste" + error)});