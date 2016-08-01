var express = require('express');

// Create our app
var app = express();

// get the port from Heroku, or set it to 3000 manually
const PORT = process.env.PORT||3000;

app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

// which folder do we want to serve?
app.use(express.static('public'));

// start the server
app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT);
});
