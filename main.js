var http = require("http");
var fs = require('fs');
var express = require('express');
var app = express();

//Create HTTP server and listen on port 8000 for requests

app.use('/', express.static('./'));

app.get('/', (req, res) => res.sendFile(__dirname+'/home.html'));

app.listen(8000, () => console.log("Port: 8000"));

// Print URL for accessing server
console.log('Server running at http://127.0.0.1:8000/')