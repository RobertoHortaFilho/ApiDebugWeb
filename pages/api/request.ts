import { NextApiRequest, NextApiResponse } from "next";
import { IData, errorConverter } from "./interfaces";

export default function request(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.method);
  let response: IData;
  switch (req.method) {
    case "POST":
      console.log("poset");
      response = POSTRequest(req.body);
      break;
    case "GET":
      console.log("gete");
      response = GETRequest(req.body);
      break;
    default:
      console.log("defult");
      response = {
        error: "Invalid-Method",
        message: `Metodo ${req.method} inválido`,
      };
      break;
  }
  console.log("exit");
  return res.status(errorConverter(response.error)).json(response.message);
}

const POSTRequest = (data: any): IData => {
  return { error: "created", message: "criado com sucesso" };
};

const GETRequest = (data: any): IData => {
  return { error: "ok", message: [] };
};
