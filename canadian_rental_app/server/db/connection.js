import { config } from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
config();

const uri = process.env.MONGO_URI || "";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
} catch(err) {
  console.error("Error conecting to db.");
  console.error(err);
}

let db = client.db("RENTAL_APP");

export default db;