require('dotenv').config();
const connection = require('./connection');
const bcrypt = require('bcryptjs');
const register = async (req, res) => {
    const jwt = require('jsonwebtoken');
    /*
     const payLoad = {
    firstName,
    lastName,
    email,
    password
   }
    */
    const { firstName, lastName, email, password } = req.body;
    //insert into register(firstname,lastname,email,password) values()
    // try {
    //     const data = await connection.query("insert into register(firstname,lastname,email,password) values(?,?,?,?)"
    //         , [firstName, lastName, email, password])
    //         jwt.sign({data},"secreteKey",{expiresIn:'500s'},(err,token)=>{

    //             res.send({
    //                 token
    //             })
    //         })
    // } catch (err) {
    //     console.error(err);
    // }
    const passwordHash = await bcrypt.hash(password, 10);
    connection.query("insert into register(firstname,lastname,email,password) values(?,?,?,?)"
        , [firstName, lastName, email, passwordHash], (err, data) => {

            if (err) console.error(err);
            else {
                jwt.sign({ data }, process.env, SECRET_KEY, { expiresIn: '500s' }, (err, token) => {
                    res.json({
                        token
                    })
                })
            }
        })
}

module.exports = { register }
