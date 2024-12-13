const { json } = require("express")
const usuarioModel = require("../models/usuario.model")
const jwt = require('jsonwebtoken')
require('dotenv').config()


exports.obtenerUsuarios = async (req, res)=>{
    try {
        let usuarios = await usuarioModel.find()
        res.status(200).json(usuarios)
    } catch (error) {
        console.log(error);
        res.status(500).send({error:"algo ocurrio mk"})
    }
}
exports.obtenerUnUsuario = async (req, res)=>{
    try {
        let id = req.params.id
        if (id.length == 24) {
            let user = await usuarioModel.findOne({_id: id})
            
            if (user) {
                res.status(200).json(user)    
            } else {
                res.status(500).send({error:"usuario no encontrado"})
            }
        } else {
            res.status(500).send({error:"id  invalido"})
        }

        
    } catch (error) {
        console.log(error);
        res.status(500).send({error:"algo ocurrio mk"})
    }
    
}
exports.crearUsuario = async (req, res)=>{
        try {
                let regexEmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
                let data = req.body
                console.log(data);
                

                if (regexEmail.test(data.email)) {
                    let user = await usuarioModel.findOne({ email:data.email })
                    if (user) {
                        res.send("correo existe")
                    } else {
                        newUser = await usuarioModel(data)
                        newUser.save()
                        res.json(newUser)
                    }
                } else {
                    res.send("Correo invalido")
                }
            
        } catch (error) {
            res.send({error:"Error cstch"})
        }
    // try {
    //     let regexEmail = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/
    //     let data = req.body
    //     let email = data.email
    //     console.log(email);
        
    //     if (regexEmail.test(email)) {
    //         let busquedaCorreo = await usuarioModel.findOne({email: data.email})
    //         if (!busquedaCorreo) {
    //             let nuevousuario = new usuarioModel(data)
    //             creado = await nuevousuario.save()
    //             res.status(200).json(creado)
    //         } else {
    //             res.status(500).send({error:"correo ya existe"})
    //         }
    //     } else {
    //         res.status(500).send({error:"correo invalido"})
    //     }


    // } catch (error) {
    //     console.log(error);
    //     res.status(500).send({error:"algo ocurrio mk"})
    // }
}
exports.eliminarUsuario = async (req, res)=>{
    try {
        let id= req.params.id
        if (id.length == 24) {
            let buscar = await usuarioModel.findOne({_id: id})
            if (buscar) {
                let deleteado = await usuarioModel.findOneAndDelete({_id: id})
            res.status(200).json(deleteado)
            } else {
                res.status(500).send({error:"usuario no encontrado"})
            }
        } else {
            res.status(500).send({error:"id invalido"})
        }
    
    } catch (error) {
        console.log(error);
        res.status(500).send({error:"algo ocurrio mk"})
    }
}
exports.actualizarUsuario = async (req, res)=>{
    try {
        let id = req.params.id
        let data = req.body
        if (id.length == 24) {
            let encontrar = await usuarioModel.findOne({_id:id})
            if (encontrar) {
                let user = await  usuarioModel.findById(id)
                Object.assign(user, data)
        
                let actualizado = await usuarioModel.findOneAndUpdate({_id: id}, user)
                res.status(200).json(actualizado)
                    
                
            } else {
                res.status(500).send({error:" id invalido"})
                
            }
           
        } else {
            res.status(500).send({error:" id invalido"})
            
        }


        

    
    } catch (error) {
        console.log(error);
        res.status(500).send({error:"algo ocurrio mk"}) 
    }
}
exports.inicioSesion = async (req, res)=>{
    try {
        let data = req.body
        let user = await usuarioModel.findOne({email: data.email})
        if (user) {
            if (user.password == data.password) {
                let payload = {
                    id: user._id,
                    roll: user.roll,
                    nombre: `${user.nombre} ${user.apellido}`
                }
                let SECRET_KEY_JWT = process.env.SECRET_KEY_JWT
                let token =jwt.sign(payload, SECRET_KEY_JWT, {expiresIn: '24h'} )
                res.status(200).json(token)

//                  tokenn recibe 3 parametros
                // informacion (payload)=infromacion que voy a guardar en ese token
                // llave = SECRET_KEY_JWT
                // tiempo = expiresIn

                
                
            } else{
                res.status(400).send({error: "clave inavlido bro"})
            }
            
        } else {
            res.status(400).send({error: "correo inavlido bro"})
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({error: "ha ocurrido algo"})
    }
}