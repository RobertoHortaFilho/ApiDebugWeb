import { NextApiRequest, NextApiResponse } from "next";
import { IData, errorConverter } from "./interfaces";
import createService, { getRequests } from "../../models/service";

export default async function request(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.method);
  let response: IData;
  switch (req.method) {
    case "POST":
      response = await POSTRequest(req.body);
      break;
    case "GET":
      response = await GETRequest(req.body);
      break;
    default:
      response = {
        error: "Invalid-Method",
        message: `Metodo ${req.method} inválido`,
      };
      break;
  }
  return res.status(errorConverter(response.error)).json(response.message);
}

const POSTRequest = async (data: any): Promise<IData> => {
  console.log('post')
  return createService(data)
  
};

const GETRequest = async (data: any): Promise<IData> => {
  console.log('get')
  return await getRequests();
};
