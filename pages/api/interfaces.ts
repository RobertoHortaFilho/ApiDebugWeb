import { NextApiRequest, NextApiResponse } from "next"

export default async function request(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({message: 'i'})
}

export type TError = 'Invalid-Method' | 'created' | 'ok';

export interface IData {
  error: TError | null;
  message: any;
}

export const errorConverter = (error: TError | null) => {
  const errors = {
    'Invalid-Method': 500,
    'created': 201,
    'ok': 200,
  }
  if (error == null) return 500;
  return errors[error] == undefined ? 500 : errors[error]
}