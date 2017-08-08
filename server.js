// server.js
// where your node app starts

// init project
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get("/dateV/:value",function(request, response){
  var value = request.params.value;
  
});




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
