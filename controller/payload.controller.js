const jwt = require('jsonwebtoken')
require('dotenv')

exports.payload = async (req, res, next) => {
   try {
    let SECRET_KEY_JWT = process.env.SECRET_KEY_JWT
    let token = req.headers.authorization

    if (token){
    token = token.split(' ')[1]
    console.log(token);      

    jwt.verify(token, SECRET_KEY_JWT, (error, decoded)=> {

        if (error) {
            res.status(400).send({error: "token invalido"})
        }
            
            
            res.status(200).json(decoded)
    })
    } else {
            res.status(200).json({error: "token no proporcionado"})
        }

   } catch (error) {
        console.log(error);
        res.status(500).send({error: "ha ocurrido algo comunicate con el admin"})   
   }
}
