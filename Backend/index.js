const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.listen(3001, () => {
   console.log('running server');
});

const mysql = require('mysql2');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'DA06PA07',
    database: 'filmtrip',
 });

 app.use(
    cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
    })
   );

 app.post('/register', (req, res)=> {
 
        const Primer_Nombre = req.body.Primer_Nombre;
        const Primer_Apellido = req.body.Primer_Apellido;
        const Passwordl = req.body.Passwordl;
        const Correo = req.body.Correo;
        const Telefono = req.body.Telefono;


    db.execute(
      'INSERT INTO usuario (ID_Usuario,Primer_Nombre, Primer_Apellido, Passwordl, Correo, Telefono) VALUES (?,?,?,?,?,?)',
      [1,Primer_Nombre, Primer_Apellido, Passwordl, Correo, Telefono],
      (err, result)=> {
      console.log(err);
      console.log(err);
      }
    );
 });


 app.post('/login', (req, res) => {
    
    const correo = req.body.Correo;
    const password = req.body.Password;
    
    db.execute(
        "SELECT * FROM usuario WHERE Correo = ? AND Passwordl = ?",
        [correo, password],
        (err, result)=> {
            if (err) {
                console.log('error fatal');
                res.send({err: err});
            }
     
            if (result.length > 0) {
                res.send( result);
                console.log('Entro');
                }else{
                    console.log('No se pudo')
                    {message: "Wrong username/password combination!"};
                }
            }
        
    )
        }
 );