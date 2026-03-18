import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

// creamos la aplicacio nde express
const app = express()

app.use(cors({
    origin: '*'
})) // permite peticiones desde el frontend
app.use(express.json()) // permite recibir y enviar JSON

app.get('/api', (req, res) => {
    res.json({msg: 'TableFlow API funcionando'})
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})

export default app