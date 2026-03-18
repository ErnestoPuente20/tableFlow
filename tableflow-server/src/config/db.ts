import { Sequelize } from "sequelize";

const db = new Sequelize(process.env.DATABASE_URL!, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true
        }
    },
    logging: false
})

export default db