const { response, request } = require('express');

const getUsuarios = (req = request, res = response) => {

    const query = req.query;

    res.json({
        msg: 'Get API - controlador',
        query
    });
}

const putUsuarios = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'Put API - Controlador',
        id
    });
}


const postUsuarios = (req, res = response) => {

    const { nombre, edad} = req.body;

    res.json({
        msg: 'Post API - Controlador',
        nombre,
        edad
    });
    //res.json(body) // para mostrar solo el body tal como viene
}


const deleteUsuarios = (req, res = response) => {
    res.json({
        msg: 'Delete API - Controlador'
    });
}

const patchUsuarios = (req, res = response) => {
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