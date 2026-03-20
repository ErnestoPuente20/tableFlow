import { Request, Response } from "express";
import Restaurante from "../models/Restaurante";

export const getRestaurante = async (req: Request, res: Response) => {
    try {
        const restaurantes = await Restaurante.findAll()
        res.json({data: restaurantes})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error al obtener los restaurante'})
    }
}

export const getRestauranteById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string
        const restaurante = await Restaurante.findByPk(id)

        if (!restaurante) {
            res.status(404).json({error: 'Restaurante no encontrado'})
            return
        }

        res.json({data: restaurante })
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error al obtener el restaurante'})
    }
}

//Crear restaurante
export const crearRestaurante = async (req: Request, res: Response) => {
    try {
        const restaurante = await Restaurante.create(req.body)
        res.status(201).json({data: restaurante})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error al crear el restaurante'})
    }
}