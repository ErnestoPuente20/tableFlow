import {Table, Column, Model, DataType, HasMany} from 'sequelize-typescript'
import Mesa from './Mesa'
import Pedido from './Pedido'

@Table({ tableName: 'restaurantes' })
class Restaurante extends Model {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
    })
    declare id: string

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare nombre: string

    @Column({
        type: DataType.STRING(200),
        allowNull: false,
        unique: true
    })
    declare slug: string

    @Column({
        type: DataType.STRING(200),
        allowNull: true
    })
    declare logo: string

    // Mesa
    @HasMany(() => Mesa)
    declare mesas: Mesa[]

    // Pedido
    @HasMany(() => Pedido)
    declare pedidos: Pedido[]
}

export default Restaurante