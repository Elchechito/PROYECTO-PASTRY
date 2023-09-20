const app=require('./app');

const database=require('./database');

function main(){
    database.connect((err)=>{
        if (err) throw err
        console.log('Base de datos conectada');
    })
    app.listen(3000,()=>{
        console.log('Escuchando servidor en el puerto 3000');
    })
}
main()