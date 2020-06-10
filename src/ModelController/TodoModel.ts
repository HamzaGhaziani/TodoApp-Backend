import { SQLconnection } from "../connection/connection";
import { Todos } from "../entity/Todos";

const Todomodel = async () => {
  let con = await SQLconnection;
  let res = await con.getRepository(Todos);
  return res;
};

export default Todomodel;
