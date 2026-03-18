import {Request, Response} from 'express'
import Producto from '../models/Producto'

// Obtener todos los productos
export const getProductos = async (req: Request, res: Response) => {
    try {
        const productos = await Producto.findAll()
        res.json({data: productos})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error al obtener los productos'})
    }
}

// Obtener un producto por id
export const getProductoById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string
        const producto = await Producto.findByPk(id)

        if (!producto) {
            res.status(404).json({error: 'Producto no encontrado'})
            return
        }

        res.json({data: producto})
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error al obtener el producto' })
    }
}

// crear un producto
export const crearProducto = async (req: Request, res: Response) => {
    try {
        const producto =  await Producto.create(req.body)
        res.status(201).json({data: producto})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error al crear el producto'})
    }
}

// Actualizar el producto
export const actualizarProducto = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string
        const producto = await Producto.findByPk(id)

        if (!producto) {
            res.status(404).json({error: 'Producto no encontrado'})
            return
        }

        await producto.update(req.body)
        res.json({data: producto})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error al actualizar el producto'})
    }
}

// Eliminar un producto
export const eliminarProducto = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string
        const producto = await Producto.findByPk(id)

        if (!producto) {
            res.status(404).json({error: 'Producto no encontrado'})
            return
        }

        await producto.destroy()
        res.json({msg: 'Producto eliminado correctamente'})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error al eliminar el producto'})
    }
}