import { Sequelize } from "sequelize-typescript";
import Producto from "../models/Producto";
import Restaurante from "../models/Restaurante";
import Mesa from "../models/Mesa";
import Pedido from "../models/Pedido";
import ItemPedido from "../models/ItemPedido";

const db = new Sequelize(process.env.DATABASE_URL!, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true
        }
    },
    logging: false,
    models: [Producto, Restaurante, Mesa, Pedido, ItemPedido]
})

export default db