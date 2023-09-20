//import conexion a bd
const database=require('../config/database')
const mysql2=require ('mysql2');
//Funciones de user
function ReadUser(req,res){
  const {id}=req.params;
  const readQuery=`select * from usuario where Id_usuario=?;`;
  const query=mysql2.format(readQuery,[id]);
  database.query(query, (err, result)=>{
    if (err)throw err
    if (result[0] != undefined){
        res.json(result[0])
    }
    else{
        res.json({message:'Usuario no encontrado'});
    }
  });
}
function IngresarUsu(req, res) {
  const { user, contra } = req.body;
  const readQuery = `select * from usuario where Usuario=? and Clave=?;`;
  const query = mysql2.format(readQuery, [user, contra]);
  database.query(query, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error en el servidor' });
    } else if (result[0] !== undefined) {
      res.json(result[0]);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  });
}
function CreateUser(req,res){
    const {usu,contra,nombre,telefono,cedula,fecha_n,correo,direccion}=req.body;
    const readQuery=`insert into usuario (Usuario,Clave,Nombre,Telefono,Cedula,Fecha_Nacimiento,Correo,Direccion) values (?,?,?,?,?,?,?,?);`;
    const query=mysql2.format(readQuery,[usu,contra,nombre,telefono,cedula,fecha_n,correo,direccion]);
    database.query(query,(err,result)=>{
        if (err)throw err;
        console.log(result);
        res.send({message:'Usuario creado'});
    })
}
function UpdateUser(req,res){
    const {usu,contra,nombre,telefono,cedula,fecha_n,correo,direccion}=req.body;
    const readQuery=`update usuario set Usuario=? Clave=? Nombre=? Telefono=? Cedula=? Fecha_Nacimiento=? Correo=? Direccion=? where Id_usuario=?;`;
    const query=mysql2.format(readQuery,[usu,contra,nombre,telefono,cedula,fecha_n,correo,direccion]);
    database.query(query,(err,result)=>{
        if (err)throw err;
        console.log(result);
        res.send({message:'Usuario Actualizado'});
    })
}
function InactivarUser(req,res){
    const {Id_user}=req.body;
    const readQuery=`update usuario set Estado_user=? where Id_usuario=?;`;
    const query=mysql2.format(readQuery,[Id_user]);
    database.query(query,(err,result)=>{
        if (err)throw err;
        console.log(result);
        res.send({message:'Usuario Inactivado'});
    })
}

function ConsultarUser(req,res) {
    const {id,nombre}=req.params;
    res.send(`Peticion tipo select, mostrando datos que llegan ${id} y ${nombre}`)
}

module.exports={
    CreateUser,
    ConsultarUser,
    UpdateUser,
    InactivarUser,
    ReadUser,
    IngresarUsu
}