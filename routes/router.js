const express = require ('express')
const router = express.Router()
const userController = require ('../controller/usuario.controller')
const productController = require ('../controller/productos.controller')
const middlewareJWT = require('../middleware/jwt')

//--------------------------usuarios--------------------------------------------
router.get('/usuarios',middlewareJWT.verificacionToken, userController.obtenerUsuarios)
router.get('/usuario/:id', userController.obtenerUnUsuario)
router.post('/crearUsuario', userController.crearUsuario)
router.delete('/eliminarUsuario/:id', userController.eliminarUsuario)
router.put('/actualizar/:id', userController.actualizarUsuario)
router.post('/inicioSesion', userController.inicioSesion)

//--------------------------productos------------------------------------------------
router.get('/productos',verificacionToken, productController.obtenerProductos )
router.get('/producto/:id', productController.obtenerUnProducto)
router.post('/crearProducto', productController.crearProducto)
router.delete('/eliminarProducto/:id', productController.eliminarProducto)
router.put('/actualizarProducto/:id', productController.actualizarProducto)



module.exports = router