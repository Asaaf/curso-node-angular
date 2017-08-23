'use strict';

var app = require('./app');
var port = process.env.PORT || 3678;

app.listen(3678, function () {
    console.log(`server on in http://localhost:${port}`);
});


