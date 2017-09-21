const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// API file for interacting with MongoDB
const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, './')));

// API location
app.use('/api', api);

app.get('/*',function(req,res,next){
    res.header('Access-Control-Allow-Origin' , '*' );
    next(); // http://expressjs.com/guide.html#passing-route control
});

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = app.listen(port, () => console.log(`Running on http://localhost:${port}`));

module.exports = server;
