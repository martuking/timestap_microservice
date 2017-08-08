var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get("/:value",function(request, response){
  var value = request.params.value;
  
  response.json({unix:value, natural:value});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
