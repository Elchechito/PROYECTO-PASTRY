//Usamos una funcion que nos brinda express llamada router que nos permite enrutar cada crud

const {Router}=require('express')

const router=Router();

//Tomando lo que se exporto de user.controller para usarlo
const {CreateProduct,UpdateProduct,InactivarProduct,ReadProduct,ConsultaGproducts}=require('../controllers/pasteles.controllers.js');
const { route } = require('../config/app');

router.get('/pastry/:name/:id',ReadProduct);
router.post('/pastry/Pasteles',ConsultaGproducts);
router.post('/pastry',CreateProduct);
router.put('/pastry',UpdateProduct );
router.delete('/pastry',InactivarProduct);

//Lo exportamos para usarlo en app.js
module.exports=router