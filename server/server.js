const conn = require("./config/db");
// const getUser = require("./routes/user");
const express = require("express");
var bodyParser = require('body-parser');
// var session = require("./routes/session");
// var wsocket = require("./websocket");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

var server = require('http').createServer(app);
// getUser(app,conn);
// session(app,conn);
// wsocket(app,conn);

app.post("/register", (req, res) => { //注册
    res.header("Access-Control-Allow-Origin", "*");
   console.log(req.body);
   let data = req.body;
   let post = {
       username: data.phoneRegister,
       pwd: data.passwordValue
   }
   conn.query("insert into user set ?", post, function(err, rs) {
       if(err) {
           console.log(err.message);
       } else {
           res.send("ok");
       }
   })
});
server.listen(7878);
console.log("server start");