import { Request, Response } from "express";
import Todomodel from "../ModelController/TodoModel";
import { Todos } from "../entity/Todos";

export default class HomeController {
  async getAllData(req: Request, res: Response) {
    let result = await getAllFunction();
    res.send(result);
  }

  async getSingleData(req: Request, res: Response) {
    let result = await getSingleFunction(req.params.id);
    res.send([result]);
  }

  async saveData(req: Request, res: Response) {
    let result = await saveFunction(req.body.text);
    res.send(result);
  }

  async updateData(req: Request, res: Response) {
    let result = await updateFunction(req.params.id, req.body.text);
    res.send(result);
  }

  async deleteData(req: Request, res: Response) {
    let result = await deleteFunction(req.params.id);
    res.send(result);
  }
}

const getAllFunction = async () => {
  let init = await Todomodel();
  const data: Array<Todos> = await init.find();
  return data;
};

const getSingleFunction = async (id) => {
  let init = await Todomodel();
  const data = await init.findOne(id);
  return data;
};

const saveFunction = async (text) => {
  let init = await Todomodel();
  let todo = new Todos();
  todo.text = text;
  let res = await init.manager.save(todo);
  return res;
};

const updateFunction = async (id, text) => {
  let init = await Todomodel();
  let todo = await init.findOne(id);
  todo.text = text;
  let res = await init.manager.save(todo);
  return res;
};

const deleteFunction = async (id) => {
  let init = await Todomodel();
  let todo = await init.findOne(id);
  if (todo?.id) {
    let res = await init.manager.remove(todo);
    return res;
  }
  return 404;
};
