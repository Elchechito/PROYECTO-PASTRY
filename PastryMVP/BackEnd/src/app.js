//Creamos un servidor usando la constante que almacena o usa la dependencia express, esta variable nos permitira utilizar las funciones y demas que incluye express
const express=require('express');
//Aui usamos la desctruccion de objetos para extraer el objeto createConnection directamente del modulo mysql2 que importamos  
const mysql2=require('mysql2')
const { createConnection } = require('mysql2');
//Creamos una constante para usar ese servidor
const app=express();
app.use(express.json());//Con esta linea de codigo vamos a formatear la informacion que entra aqui o parcearla, ya que antes de entrar a las peticiones pasaria por aqui 
app.use(express.urlencoded({extended:true}))
//Funciones o peticiones
//En esta peticion se usa un id y nombre y el res, es como una respuesta
app.get('/pastry/:name/:id', (req,res)=>{ //El url definido se debe usar tal cual
    const {id}=req.params //estamos definiendo como un valor que tiene un objeto
    const {name}=req.params
    res.send(`Mostrando por medio de una peticion get el usuario ${name} ${id}`)//mostramos esos datos
});
app.post('/pastry', (req,res)=>{
    const {email,password}=req.body;//esta linea hace una solicitud tipo post de el email y password, la diferencia con la otra es que optimiza lineas de codigo. Es como si definieramos 2 espacios a la vez
    res.send(`Peticion post de email y password, Email:${email} y password:${password}`)
});
app.put('/pastry', (req,res)=>{
    res.send('Peticion put')
});
app.delete('/pastry', (req,res)=>{
    res.send('Peticion delete')
});
//Creamos una funcion que active el servidor en el puerto 3000
app.listen(3000,()=>{
  console.log("Servidor encendido");
});

// Conexion de la base de datos
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Pasteleria',
});
// Probando conexión
connection.connect((err) => {
    if (err) throw err
    console.log('BD, CONECTADA');
});

// Querys como sentencias SQL
const querySQL = `insert into usuario(Usuario, Clave, Nombre, Telefono, Cedula, Fecha_Nacimiento, Correo, Direccion) values ('juan35', '1235', 'Julian Andres', 3508010097, 1031646772, '2005-06-13', 'juliperalta1306@gmail.com', 'cra133a#130a08')`;

connection.query(querySQL, (err, res) => {
    if (err) throw err
    console.log('Respuesta del insert', res)
});

const Getquery = `select * from usuario`;

connection.query(Getquery, (err, res) => {
    if (err) throw err
    console.log('Respuesta de la consulta', res)
});
