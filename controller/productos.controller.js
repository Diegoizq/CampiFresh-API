const { trusted } = require('mongoose')
const productoModel = require ('../models/prodructo.model')
const prodructoModel = require('../models/prodructo.model')
require ('dotenv').config()

productoModel

exports.obtenerProductos = async (req, res) => {
    try {
        let productos = await productoModel.find()
        res.status(200).json(productos)
    } catch (error) {
        console.log(error);
        res.status(500).send({error:"ha ocurrido un error"})
        
    }
}
exports.obtenerUnProducto = async (req, res) => {
    try {
        let id = req.params.id
        let product = await productoModel.findOne({_id: id})
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error);
        res.status(500).send({error:"ha ocurrido un error"})
        
    }
}
exports.crearProducto = async (req, res) => {
    try {
        let data = req.body
        let nuevoproducto = new productoModel(data)
        await nuevoproducto.save()
        res.status(200).json(nuevoproducto)
    } catch (error) {
        console.log(error);
        res.status(500).send({error:"ha ocurrido un error"}) 
    }
    
}
exports.eliminarProducto = async (req, res) => {
    try {
        let id = req.params.id
        let deleteado = await productoModel. findOneAndDelete({_id:id})
        res.status(200).json(deleteado)
    } catch (error) {
        console.log(error);
        res.status500.send({error:"ha ocurrido un error"})
    }
}
exports.actualizarProducto = async (req, res) => {
    try {
        let id = req.params.id
        let data = req.body
        let producto = await productoModel.findById(id)
        Object.assign(producto, data)

        let actualizado = await prodructoModel.findOneAndUpdate({_id:id}, producto)
        res.status(200).json(actualizado)

    } catch (error) {
        console.log(error);
        res.status(500).send({error:"ha ocurrido un error"}) 
    }
    
}