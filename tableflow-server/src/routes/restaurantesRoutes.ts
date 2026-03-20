import { Router } from "express";
import {getRestaurante, getRestauranteById, crearRestaurante} from '../handlers/restaurantes'

const router = Router()

router.get('/', getRestaurante)
router.get('/:id', getRestauranteById)
router.post('/', crearRestaurante)

export default router