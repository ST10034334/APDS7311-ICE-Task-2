import { MongoClient } from "mongodb";
import dotenv from "dotenv";

//Loads environment variables from .env file.
dotenv.config();

//Gets the connection string from environment variables or set it to an empty string if not found.
const connectionString = process.env.ATLAS_URI || "";

console.log(connectionString);

//Creates a new MongoClient instance with the connection string.
const client = new MongoClient(connectionString);

let conn;

//Attempts to connect to the MongoDB server and logs a success message if connected successfully.
//Otherwise logs any errors that occur during the connection attempt.
try {
    conn = await client.connect();
    console.log('MongoDB Connected!'); 
} catch (e) {
    console.error(e);
}

//Selects the "FirstDBWithReact" database from the MongoDB client.
let db = client.db("FirstDBWithReact");
try {
    // Retrieve and log the collection names.
    const collections = await db.collections();
    collections.forEach((collection) => console.log('Collection:', collection.collectionName));
} catch (err) {
    console.error('Database query error:', err);
}

//Exports the database object for use in other parts of the application.
export default db;
