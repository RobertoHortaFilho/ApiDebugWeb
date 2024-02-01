import { IData } from "../pages/api/interfaces";
import client from "./dbConnection"

export default async function createService (data: any): Promise<IData>{
  console.log('entrou no service', new Date().getSeconds())
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

export const getRequests = async (): Promise<IData> => {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Access the 'gontijo' collection
    const database = client.db('requests');
    const collection = database.collection('gontijo');

    // Query the collection for documents
    const result = await collection.find({}).toArray();

    return {error: 'ok', message: result}
  } catch (e) {
    return {error: null, message: e}
  }

  finally {
    // Make sure to close the connection when done
    await client.close();
  }
}