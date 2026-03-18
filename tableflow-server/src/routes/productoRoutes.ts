import { Router } from "express";
import { getProductos, getProductoById, crearProducto, actualizarProducto, eliminarProducto } from "../handlers/productos";

const router = Router()

router.get('/', getProductos)
router.get('/:id', getProductoById)
router.post('/', crearProducto)
router.put('/:id', actualizarProducto)
router.delete('/:id', eliminarProducto)

export default router