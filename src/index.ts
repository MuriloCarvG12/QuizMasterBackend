import "reflect-metadata";

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import  AppDataSource  from "./data_source.js";

import cors from "cors";
import subjectRouter from "./routes/Subject.js";
import topicRouter from "./routes/Topic.js";
import subtopicRouter from "./routes/SubTopic.js";
import questionRouter from "./routes/question.js";
import imageRouter from "./routes/Image.ts";

const app = express();

app.use(cors()); // Permite que o express entenda requisições de outros domínios

app.use(express.json()); // Permite que o express entenda JSON

app.use("/Subject", subjectRouter);
app.use("/Topic", topicRouter);
app.use("/SubTopic", subtopicRouter);
app.use("/Question", questionRouter);
app.use("/Image", imageRouter)

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