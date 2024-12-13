const jwt = require ('jsonwebtoken')
require('dotenv').config()
// para desencriptar necesito secret key
//debe tener un next
// funcion para verificar y desencriptar el  token
exports.verificacionToken = async (req, res, next) => {
   try {
    let SECRET_KEY_JWT = process.env.SECRET_KEY_JWT
    let token = req.headers.authorization
    token = token.split(' ')[1]
    console.log(token);      

    jwt.verify(token, SECRET_KEY_JWT, (error, decoded)=> {

        if (error) {
            res.status(400).send({error: "token invalido"})
        } else {{
            next()
        }}

    })
   } catch (error) {
        console.log(error);
        res.status(500).send({error: "ha ocurrido algo"})

        
   }
}