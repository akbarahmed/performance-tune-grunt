'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Black and yellow, hello!');
});

var server = app.listen(3000, function() {
    console.log('Express is running on port %d', server.address().port);
});

