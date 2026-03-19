import {Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany} from 'sequelize-typescript'
import Restaurante from './Restaurante'
import Pedido from './Pedido'

@Table({tableName: 'mesas'})
class Mesa extends Model {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
    })
    declare id: string

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare numero: number

    @Column({
        type: DataType.STRING(200),
        allowNull: true
    })
    declare qrCode: string

    // Relacion con Restaurante
    @ForeignKey(() => Restaurante)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare restauranteId: string

    @BelongsTo(() => Restaurante)
    declare restaurante: Restaurante

    // Pedido
    @HasMany(() => Pedido)
    declare pedidos: Pedido[]

}

export default Mesa