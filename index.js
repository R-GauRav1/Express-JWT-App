//const connection = require('./connection');
const express = require('express');
const connection = require('./connection');
const mysql = require('mysql2');
//const { password } = require('../EXPRESS-CRUD-OPERATION/config');
//const routes = express.Router();
const appRoute = require('./Routes/routes');
//const middleWare = require('./middleware');
const jwt = require('jsonwebtoken');
const { login } = require('./login-service');
const { register} = require('./register-service');
let cors = require('cors');

const app = express();
const port = 4000;
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password:'mysql123',
//     database: 'employee'
//   });

// connection.connect((err)=>{
//     if(err) throw err;
//     console.log("Database Connection Succesfully");
// });

//app.use(middleWare);
app.post('/login',login);
app.post('/register',register);
 


app.use(appRoute);
// app.get('/',(req,res,next)=>{
//     connection.query("select * from employees",(err,result)=>{
//         if(err) {
//             console.log("Oooops.... Error");
//         };
//         //const { id,name,company,address} = result;
//         //res.send(`id = ${id} name=${name} company = ${company} address = ${address}`);
//          res.json(result);
//       });
//     });

    app.listen(port,()=>{
        console.log(`App is Listening to port ${port}`);
    })



