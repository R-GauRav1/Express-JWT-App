require('dotenv').config();
const mysql = require('mysql2');
//const Connection = require('mysql2/typings/mysql/lib/Connection');

// const connection = mysql2.createConnection({
//  host:'localhost',
//  user:'root',
//  password:'mysql123',
//  database:'employee',
// });
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERDB,
    password:process.env.PASSWORD,
    database: process.env.DATABASE
  });

   connection.connect((err)=>{
    if(err) throw err;
    console.log("Database Connection Succesfully");
  });
  


  module.exports = connection;
