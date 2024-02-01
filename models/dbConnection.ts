const { MongoClient, ServerApiVersion } = require('mongodb');

const password = process.env.PASSWORD_DB;
const username = process.env.USERNAME_DB;

const uri = `mongodb+srv://${username}:${password}@services.1yzpksl.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function run() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Access the 'gontijo' collection
    const database = client.db('requests');
    const collection = database.collection('gontijo');

    // Query the collection for documents
    const result = await collection.find({}).toArray();

    // Return the result
    console.log(result);
  } finally {
    // Make sure to close the connection when done
    await client.close();
  }
}


export default client