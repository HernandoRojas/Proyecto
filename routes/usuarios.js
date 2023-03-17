const { Router } = require('express');
const { getUsuarios , 
        putUsuarios , 
        postUsuarios , 
        deleteUsuarios , 
        patchUsuarios } = require('../controllers/usuarios');

const router = Router(); //Se instancia la clase Router la cual ayudará con el enrutamiento hacia las rutas del controlador


//Se definen las rutas para cada método
router.get('/', getUsuarios)

router.put('/:id', putUsuarios)

router.post('/', postUsuarios)

router.delete('/', deleteUsuarios)

router.patch('/', patchUsuarios)

module.exports = router;