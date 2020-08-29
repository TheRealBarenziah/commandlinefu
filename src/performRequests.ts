import axios from "axios";
import IResponseObject from "./IResponseObject";

export default (queryString: string, objectMode: boolean = false) =>
  new Promise<IResponseObject | IResponseObject[]>(async (resolve, reject) => {
    await axios
      .get(`http://www.commandlinefu.com/commands/${queryString}`)
      .then((res) => (objectMode ? resolve(res.data[0]) : resolve(res.data)))
      .catch((e) => reject(e));
  });
