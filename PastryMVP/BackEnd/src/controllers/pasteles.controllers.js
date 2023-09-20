const database=require('../config/database')
const mysql2=require ('mysql2');
//Funciones de user
function ReadProduct(req,res){
  const {id}=req.params;
  const readQuery=`select * from producto where Id_producto=?;`;
  const query=mysql2.format(readQuery,[id]);
  database.query(query, (err, result)=>{
    if (err)throw err
    if (result[0] != undefined){
        res.json(result[0])
    }
    else{
        res.json({message:'Prodcuto no encontrado'});
    }
  });
}

function CreateProduct(req,res){
    const {Nombrep,Descrip,Img,Estado}=req.body;
    const readQuery=`insert into producto (Nombre,Descripcion,Imagen,Estado) values (?,?,?,?);`;
    const query=mysql2.format(readQuery,[Nombrep,Descrip,Img,Estado]);
    database.query(query,(err,result)=>{
        if (err)throw err;
        console.log(result);
        res.send({message:'Producto Creado'});
    })
}
function UpdateProduct(req,res){
    const {Id,Nombrep,Descrip,Img,Estado}=req.body;
    const readQuery=`update producto set Nombre=? Descripcion=? Imagen=? Estado=? where Id_producto=?;`;
    const query=mysql2.format(readQuery,[Nombrep,Descrip,Img,Estado,Id]);
    database.query(query,(err,result)=>{
        if (err)throw err;
        console.log(result);
        res.send({message:'Producto Actualizado'});
    })
}
function InactivarProduct(req,res){
    const {Id}=req.body;
    const readQuery=`update producto set Estado=? where Id_producto=?;`;
    const query=mysql2.format(readQuery,[Id]);
    database.query(query,(err,result)=>{
        if (err)throw err;
        console.log(result);
        res.send({message:'Producto Inactivado'});
    })
}

function ConsultaGproducts(req,res) {
    const {Estado}=req.body;
    console.log(Estado);
    const readQuery=`select * from producto where Estado=?`;
    const query=mysql2.format(readQuery,[Estado]);
    database.query(query, (err, result)=>{
        console.log(result);
        if (err)throw err
        if (result != undefined){
            res.json(result)
        }
        else{
            res.json({message:'Producto no encontrado'});
        }
      });
}

module.exports={
    ReadProduct,
    ConsultaGproducts,
    CreateProduct,
    UpdateProduct,
    InactivarProduct
}