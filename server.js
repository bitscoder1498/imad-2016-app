var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
app.use(express.static('ui'));
app.use(express.static('js'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.html'));
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blog.html'));
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'support.html'));
});
app.get('/ui/css/coin-slider.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'css/coin-slider.css'));
});
app.get('/ui/css/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'css/style.css'));
});

app.get('/ui/js/coin-slider.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'js/coin-slider.min.js'));
});
app.get('/ui/js/cufon-titillium-250.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'js/cufon-titillium-250.js'));
});
app.get('/ui/js/cufon-titillium-250.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'js/cufon-titillium-250.js'));
});
app.get('/ui/js/cufon-yui.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'js/cufon-yui.js'));
});
app.get('/ui/js/jquery-1.4.2.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'js/jquery-1.4.2.min.js'));
});
app.get('/ui/js/script.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'js/script.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
