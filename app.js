var express = require("express");
var cool = require('cool-ascii-faces');
var pjson = require('./package.json');

var app = express();

app.get("/", function (req, res) {
    res.send("Social v" + pjson.version);
});

app.get("/hello", function (req, res) {
    res.send("Hello world");
});

app.get('/cool', function (req, res) {
    var response = "Cool face ---->  " + cool();
    res.send(response);
});

app.listen(process.env.PORT || 9095);
