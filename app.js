const express = require('express');
const app = express();
const path = require('path');
let cors = require('cors');
let bodyParser = require('body-parser');    //Extract data from Express

app.use(cors())

let test_api = require('./routes/test_api');

//Sending a GET to localhost:8080/dummy should return this
app.get('/dummy', (req, res) => res.send('Response from Route of the Express Server!!'))

app.listen(8080);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 
app.use('/test_api', test_api);

console.log("Server running on 8080")


app.use(express.static('./public/index.html'));

module.exports = app;