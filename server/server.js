const conn = require("./config/db");
const express = require("express");
var bodyParser = require('body-parser');

const loginRegist =require('./router/login') 

const app = express();
const server = require('http').createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));


loginRegist(app,conn)

server.listen(7878);
console.log("server start");