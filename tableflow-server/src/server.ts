import dotenv from 'dotenv'
dotenv.config()

import express from "express";
import cors from 'cors'
import db from "./config/db";
import productoRoutes from './routes/productoRoutes'

// creamos la aplicacio nde express
const app = express()

app.use(cors()) // permite peticiones desde el frontend
app.use(express.json()) // permite recibir y enviar JSON

const conectarDB = async () => {
    try {
        await db.authenticate()
        console.log('Conexion a la base de datos exitosa')
        await db.sync()
        console.log('Tablas creadas correctamente')
    } catch (error) {
        console.log('Error al conectar a la base de datos')
        console.log(error)
    }
}

conectarDB()

app.use('/api/productos', productoRoutes)

app.get('/api', (req, res) => {
    res.json({msg: 'TableFlow API funcionando'})
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})

export default app