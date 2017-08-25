'use strict';

var app = require('./app');
var moongose = require('mongoose');
var port = process.env.PORT || 3678;

moongose.connect('mongodb://localhost:27017/curso_node_angular2', {useMongoClient: true}, (err, res) => {
    if (err) {
        throw err;
    } else {
        app.listen(3678, function () {
            console.log("Conexión a MongoDB correcta");
            console.log(`server on in http://localhost:${port}`);
        });
    }
});


