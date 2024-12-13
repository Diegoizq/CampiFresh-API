const mongoose = require ('mongoose')

const usuarioModel = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required:  false
    },
    activo:{
        type: Boolean,
        required: true,
        default: true
    },
    password:{
        type: String,
        required: true
    },
    imagen:{
        type: String,
        required: true
    
    },
    roll:{
        type: String,
        required: true,
        default: "user"
    }

}
,{ 
    versionKey: false,
    timestamps: true  
})

module.exports = mongoose.model('persona', usuarioModel)
// {
// "nombre":"diego",
// "apellido":"izquierdo",
// "email":"diego@gmail.com",
// "edad":12,
// "activo":true,
// "imagen":"affwf",
// "password":"diego123",
// "roll":"user"
// }