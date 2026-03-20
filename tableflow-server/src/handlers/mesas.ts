import {Request, Response} from 'express'
import Mesa from '../models/Mesa'

// Obtener todas las mesas
export const getMesa = async (req: Request, res: Response) => {
    try {
        const mesas = await Mesa.findAll()
        res.json({data: mesas})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error al obtener las mesas'})
    }
}

// Obtener una mesa por id
export const getMesaById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string
        const mesa = await Mesa.findByPk(id)

        if (!mesa) {
            res.status(404).json({error: 'Mesa no encontrado'})
            return
        }

        res.json({data: mesa})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error al obtener la mesa'})
    }
}

// Crear una mesa
export const crearMesa = async (req: Request, res: Response) => {
    try {
        const mesa = await Mesa.create(req.body)
        res.status(201).json({data: mesa})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error al crear la mesa'})
    }
}

//Actualizar una mesa
export const actualizarMesa = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string
        const mesa = await Mesa.findByPk(id)

        if (!mesa) {
            res.status(404).json({error: 'Mesa no encontrada'})
            return
        }

        await mesa.update(req.body)
        res.json({data: mesa})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error al actualizar el producto'})
    }
}

// Eliminar el producto
export const eliminarMesa = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string
        const mesa = await Mesa.findByPk(id)

        if (!mesa) {
            res.status(404).json({error: 'Mesa no encontrada'})
            return
        }

        await mesa.destroy()
        res.json({msg: 'Mesa eliminada correctamente'})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error al eliminar la mesa'})
    }
}
