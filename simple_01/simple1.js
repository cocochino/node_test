/*
Simple Application 1
Build a simple HTTP server that listens to port 2000 using Express.
Respond with "Simple Example 1" message.
*/

//Load Express web framework 
const express = require("express");
//Create Express applicaton called app
const app = express();


console.log("simple1.js has been started")

app.get("/", (req, res) => res.send("Simple Example 1"));

const httpServer = app.listen(2000);
