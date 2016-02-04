var express = require('express');
var path = require('path');
var app = express();

var routes = require('./routes');

var baseHtml = path.join(__dirname, '../frontend/index.html');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// app.use('/', express.static(path.join(__dirname, '../frontend/')));
// //app.use(express.static('../frontend'));
// app.use('/css',express.static(path.join(__dirname, '../frontend/css')));


var baseHtml = path.join(__dirname, '../frontend/index.html');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.use('/build', express.static(path.join(__dirname, '../frontend/build')));

app.use('/src/css',express.static(path.join(__dirname, '../frontend/src/css')));

//app.use('/', routes);

app.get('/*', function (req, res) {
    res.sendFile(baseHtml);
});

app.listen(3000);
