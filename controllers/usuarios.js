const { response, request } = require('express');

//Función para enviar datos cuando se ejecuta un GET desde el front
const getUsuarios = (req = request, res = response) => {

    // se obtienen los parámetros que fueron enviados desde la url de la petición GET en el front
    const query = req.query;

    //se envia respuesta en formato JSON
    res.json({
        msg: 'Get API - controlador',
        query
    });
}

//Función para enviar datos cuando se ejecuta un PUT desde el front
const putUsuarios = (req, res = response) => {

    // se obtienen los parámetros que fueron enviados desde la url de la petición PUT en el front
    const id = req.params.id;

    //se envia respuesta en formato JSON
    res.json({
        msg: 'Put API - Controlador',
        id
    });
}

//Función para enviar datos cuando se ejecuta un POST desde el front
const postUsuarios = (req, res = response) => {

    // se obtienen los parámetros que fueron enviados desde la url de la petición POST en el front
    const { nombre, edad} = req.body;

    //se envia respuesta en formato JSON
    res.json({
        msg: 'Post API - Controlador',
        nombre,
        edad
    });
    //res.json(body) // para mostrar solo el body tal como viene
}

//Función para enviar datos cuando se ejecuta un DELETE desde el front
const deleteUsuarios = (req, res = response) => {

    //se envia respuesta en formato JSON
    res.json({
        msg: 'Delete API - Controlador'
    });
}

//Función para enviar datos cuando se ejecuta un PATCH desde el front
const patchUsuarios = (req, res = response) => {

    //se envia respuesta en formato JSON
    res.json({
        msg: 'Patch API - Controlador'
    });
}

module.exports = {
    getUsuarios,
    putUsuarios,
    postUsuarios,
    deleteUsuarios,
    patchUsuarios
}