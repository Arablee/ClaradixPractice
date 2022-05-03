const { MongoClient } = require("mongodb");
require('dotenv').config();
// Connection URI
const uri =
  "mongodb+srv://arablee:2478232g@firstcluster.8g6pd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("arablee").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
//run().catch(console.dir);


module.exports = run

