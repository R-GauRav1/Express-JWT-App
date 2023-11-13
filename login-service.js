require('dotenv').config();
const connection = require('./connection');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const login = async(req, res) => {
    const{ email, password } =req.body;
    console.log(email+" "+password);
    
        connection.query("select password from register where email=?"
                          ,[email],(err,data)=>{
                            if(err) console.error(err);
                            console.log("data : ",data);
                            bcrypt.compare(password,data[0].password,(err,data1)=>{
                               if(err) {
                                console.error()
                               }
                              console.log("data1 : ",data1);
                               if( data1){
                                //console.log(data);
                                jwt.sign({data},process.env.SECRET_KEY,{expiresIn:'500s'},(err,token)=>{
                                 res.json({
                                   token
                                 })
                               })
                                 
                               }else{
                                 res.json("Username and password Is Incorrect");
                                }
                            })
                            
                           
                          })
    // res.json({
    //     msg: "login Succesful",
    //     token: ""
    // });
}

module.exports = { login }