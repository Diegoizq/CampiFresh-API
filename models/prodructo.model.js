const mongoose = require ('mongoose')

const productoModel = mongoose.Schema ({

    nombre: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: false
    },
    precio: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: false
    },
    descripcion: {
        type: String,
        required:false
    },
    imagen: {
        type: String,
        required: true
    },
   
})

module.exports = mongoose.model('producto', productoModel)
// {
//     "nombre":"mango",
//     "tipo":"Fruta",
//     "precio":2000,
//     "stock":500,
//     "descripcion":"amarillo, dulce"
//     "imagen":"http:image/mango"

// }
