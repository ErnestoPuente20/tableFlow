import {Router} from 'express'
import {getMesa, getMesaById, crearMesa, actualizarMesa, eliminarMesa} from '../handlers/mesas'

const router = Router()

router.get('/', getMesa)
router.get('/:id', getMesaById)
router.post('/', crearMesa)
router.put('/:id', actualizarMesa)
router.delete('/:id', eliminarMesa)

export default router