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
  var dataFormat = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  if(isNaN(value)){
    var naturalDate = new Date(value);
    naturalDate = value.toLocaleString("en-us",dataFormat);
    var unixDate = new Date(value).getTime()/1000;
  }
  else{
    var unixDate = value;
    var naturalDate = new Date(value*1000);
    naturalDate = naturalDate.toLocaleString("en-us",dataFormat);
  }
  response.json({unix:unixDate, natural:naturalDate});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
