import { IData } from "../pages/api/interfaces";
import client from "./dbConnection"

export default async function createService (data: any): Promise<IData>{
  try {
    await client.connect()
    const database = client.db('requests');
    const collection = database.collection('gontijo');

    // const document = {
    //   user_id: 3,
    //   data: 'teste 123'
    // }

    const message = await collection.insertOne(data);
    
    return {error: 'created', message}
  } catch (error) {
    return {error: null, message: 'erro ao criar'}
  } finally {
    await client.close();
  }
}