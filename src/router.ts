import { Router } from "express";
import HomeController from "./Controllers/Home";

let http = Router();
function log(req, res, next) {
  next();
}
let Home = new HomeController();

http.get("/todo", log, Home.getAllData);

http.get("/todo/:id", log, Home.getSingleData);

http.post("/todo", log, Home.saveData);

http.put("/todo/:id", log, Home.updateData);

http.delete("/todo/:id", log, Home.deleteData);

export default http;
