var express = require('express');
var path = require('path');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.use('/build', express.static(path.join(__dirname, '/frontend/build')));

app.use('/assets', express.static(path.join(__dirname, '/frontend/build/assets')));
app.use('/src/css',express.static(path.join(__dirname, '/frontend/src/css')));

app.get('/*', function(req, res) {
  res.sendFile('frontend/index.html' , { root : __dirname});
});

app.listen(process.env.PORT || 3000);
