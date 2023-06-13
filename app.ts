
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const userRegisterController = require('./controllers/userRegister');


app.set("view engine", "jade");
app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));


app.post("/register", userRegisterController.userRegister)
// app.post("/login", )


const port = 8000;
app.listen(port, function () {
  console.log("Express server listening on port " + port);
});

