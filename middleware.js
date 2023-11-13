require("dotenv").config();
const jwt = require('jsonwebtoken');
// const middleWare = (req,res,next)=>{
//     if(!req.query.uname && !req.query.password){
//       res.send(`Please Provide Parameters`);
//     }else{
//       connection.query('select password from AuthTable where uname = ?',[req.query.uname]
//                           ,(err,result)=>{
//                             if(err){
//                               console.log("username Incorrect");
//                               console.error(err);
//                             }else{
//                               console.log(result);
//                               const [password] = result;
//                               // console.log(password.password);
//                               // console.log(req.query.password)

//                               if(password.password === req.query.password ){
//                                 next();
//                               }else{
//                                 res.send("UserName Password Is Incorrect");
//                               }

//                             }

//                           });

//     }
//   }

function middleWare(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')[1];
        req.token = bearer;
        jwt.verify(req.token, process.env.SECRET_KEY, (err, data) => {

            if (err) {
                //set unauthorized status code
            } else {
                next()
            }
        })

    } else {
        res.send({
            "message": "token not valid"
        })
    }
}
module.exports = middleWare;