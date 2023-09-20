const express=require('express');
const cors=require('cors');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
//Para exportar 
module.exports=app

//enpoints, que son como las rutas que identifican cada tarea
const userRoutes=require('../routes/user.routes');
//creamos un enpoint para identificar las funciones de solo el usuario empleando la constante app
app.use('/user',userRoutes); 
const pastelRoutes=require('../routes/pastel_routes');
app.use('/pastel',pastelRoutes);