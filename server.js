// Get the packages we need
var express = require('express');
// Create our Express application
var app = express();
var configauth = require('./config');
app.set('superSecret', configauth.secret); // secret variable

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Access-Control-Request-Headers,token');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // decode token
 
    next();
});

// Use environment defined port or 3000

var port = process.env.PORT || 3000;

// Create our Express router
var router = express.Router();

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port);

console.log('Started At ' + new Date());
console.log('Insert on port ' + port);


require('./service/node')(app); 


