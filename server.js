var express = require('express');
var path = require('path');
var app = express();
var routes = require('./server/routes/routes')(app);

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static('client'));

app.listen(process.env.PORT || 3000, function () {
  console.log('Run on port 3000');
});