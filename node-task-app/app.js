var express = require('express');
var app = express();

// Binding the express app to port 3000
app.listen(3000, function(){
  console.log('Node server running @ http://localhost:3000')
});
