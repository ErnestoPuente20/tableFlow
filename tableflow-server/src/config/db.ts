import { Sequelize } from "sequelize-typescript";
import Producto from "../models/Producto";

const db = new Sequelize(process.env.DATABASE_URL!, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true
        }
    },
    logging: false,
    models: [Producto]
})

export default db