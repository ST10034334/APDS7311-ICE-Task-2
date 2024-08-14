import https from "https";
import fs from "fs";
import express from "express";
import posts from "./routes/post.mjs";
import users from "./routes/user.mjs";
import cors from "cors";

console.log("First APDS APP With Database!");

//Defines the port number for the server.
const PORT = 3001; 

//Creates a new Express application.
const app = express(); 

//Defines HTTPS options including the private key and certificate.
const options = {

   //Reads the private key file for decrypting data and signing data.
   key: fs.readFileSync('keys/privatekey.pem'), 

   //Reads the certificate file to establish a secure connection (contains the public key and information about the organization).
   cert: fs.readFileSync('keys/certificate.pem') 
};

//Uses CORS middleware to enable Cross-Origin Resource Sharing. (safely allows or restrict which websites can access your data).
app.use(cors());

//Uses Express JSON middleware to parse JSON request bodies.
app.use(express.json());

//Middleware to set custom CORS headers for all responses.
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*'); //Allows requests from any origin.
   res.setHeader('Access-Control-Allow-Headers', '*'); //Allows any headers in the request.
   res.setHeader('Access-Control-Allow-Methods', '*'); //Allows any HTTP methods.
   next(); //Passes control to the next piece of code.
});

//Uses the imported router for handling routes under '/post'.
app.use('/post', posts);
app.use('/user', users);

//Creates an HTTPS server with the defined options and the Express application.
let server = https.createServer(options, app);

console.log(PORT);

//Starts the server to listen for incoming connections on the specified port.
server.listen(PORT);