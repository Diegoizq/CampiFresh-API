const express = require ('express')
const router = express.Router()
const userController = require ('../controller/usuario.controller')
const productController = require ('../controller/productos.controller')
const middlewareJWT = require('../middleware/jwt')
const { payload } = require('../controller/payload.controller')

//--------------------------usuarios--------------------------------------------
router.get('/usuarios',userController.obtenerUsuarios)
router.get('/usuario/:id', userController.obtenerUnUsuario)
router.post('/crearUsuario', userController.crearUsuario)
router.delete('/eliminarUsuario/:id', userController.eliminarUsuario)
router.put('/actualizar/:id', userController.actualizarUsuario)
router.post('/inicioSesion', userController.inicioSesion)
router.get('/infoToken', payload)

//--------------------------productos------------------------------------------------
router.get('/productos', productController.obtenerProductos )
router.get('/producto/:id', productController.obtenerUnProducto)
router.post('/crearProducto', productController.crearProducto)
router.delete('/eliminarProducto/:id', productController.eliminarProducto)
router.put('/actualizarProducto/:id', productController.actualizarProducto)



module.exports = router