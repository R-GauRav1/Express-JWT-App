const express = require('express');
const connection = require('../connection');
//const app = require('..');
const router = express.Router();
const middleWare = require('../middleware')
const jwt = require('jsonwebtoken');
const login = require('../login-service');

//const app = express();

//const port = 4000;


router.get('/read', async (req, res, next) => {
    try {
        const result = await connection.query("select * from employees")
        res.json(result);
    } catch (err) {
        console.error(err);// return internal server code 
    }

    //const { id,name,company,address} = result;
    //res.send(`id = ${id} name=${name} company = ${company} address = ${address}`);
   

});

router.post('/profile', middleWare, (req,res)=> {
    connection.query("select * from employee ",(err,result)=>{
        if(err) {
            console.error(err);
        }
        res.send(result)
    });
    
     
})

//     app.listen(port,()=>{
//         console.log(`App is Listening to port ${port}`);
//     })


module.exports = router;