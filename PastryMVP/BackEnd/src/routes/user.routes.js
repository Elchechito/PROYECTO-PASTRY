//Usamos una funcion que nos brinda express llamada router que nos permite enrutar cada crud

const {Router}=require('express')

const router=Router();

//Tomando lo que se exporto de user.controller para usarlo
const {CreateUser,IngresarUsu,UpdateUser,InactivarUser,ReadUser}=require('../controllers/user.controllers');
const { route } = require('../config/app');

router.get('/pastry/:name/:id',ReadUser);
router.post('/pastry',CreateUser);
router.post('/pastry/Ingresar',IngresarUsu)
router.put('/pastry',UpdateUser );
router.delete('/pastry',InactivarUser);

//Lo exportamos para usarlo en app.js
module.exports=router