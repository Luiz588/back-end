const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express ();
const port = 3000;

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'login'
})

db.connect((error)=>{
    if(error){
        console.log('Erro ao conectar com o MySQL', error);
    } else{
        console.log('Conectado ao ')
    }
});

app.use(bodyParser.urlencoded({ extended:true}))

app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/login.html')
})

app.post("/login", (req, res)=>{
    const username = req.body.usuario
    const password = req.body.senha

    db.query('SELECT password FROM user WHERE username = ?', [username], (error, results)=>{
        if (results.length > 0){
            const passwordBD = results[0].password;

        }else{
            console.log('Usuario não cadastrado!')
        }
    })
   
})

app.listen(port, ()=>{
    console.log(`Servidor rodando no endereçO: https://localhost:${port}`)
})
