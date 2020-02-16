let express = require("express"), app = express();
let bodyParser = require("body-parser");
let urlParser = bodyParser.urlencoded({extended: false});
let mc = require("mongodb").MongoClient, url = "mongodb://localhost";
let db;

app.use(express.static("../client"));
app.listen(8000);