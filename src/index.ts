import express from "express";
import "reflect-metadata";
import { SQLconnection } from "./connection/connection";
import bodyparser from "body-parser";
import http from "./router";

const app = express();
app.use(bodyparser.json());
app.use(http);

const port = 4000;

SQLconnection.then(() => {
  app.listen(port, () => console.log(`Listening on Port # ${port}`));
});
