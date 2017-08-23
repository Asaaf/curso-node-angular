'use strict';

function prueba(req, res) {
    var nombre = req.params.nombre;
    res.status(200).send({
        data: [1, 2, 3],
        message: `¡Hola! ${nombre}`
    });
}
function getFavorito(req, res) {
    var favoritoId = req.params.id;
    res.status(200).send({
        getFavorito: true,
        data: favoritoId
    });
}
function getFavoritos(req, res) {
    res.status(200).send({
       getFavoritos:true 
    });
}
function saveFavorito(req, res) {
    var params = req.body;
    res.status(200).send({
        saveFavorito:true,
        favorito: params
    });
}
function updateFavorito(req, res) {
    var params = req.body;
    res.status(200).send({
        updateFavorito:true,
        favorito: params
    });
}
function deleteFavorito(req, res) {
    var favoritoId = req.params.id;
    res.status(200).send({
        deleteFavorito:true,
        data: favoritoId
    });
}

module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
};

