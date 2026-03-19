import {Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany} from 'sequelize-typescript'
import Restaurante from './Restaurante'
import Mesa from './Mesa'
import ItemPedido from './ItemPedido'

@Table({tableName: 'pedidos'})
class Pedido extends Model {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
    })
    declare id: string

    @Column({
        type: DataType.ENUM('PENDIENTE', 'EN_PREPARACION', 'LISTO', 'ENTREGADO'),
        allowNull: false,
        defaultValue: 'PENDIENTE'
    })
    declare estado: 'PENDIENTE' | 'EN_PREPARACION' | 'LISTO' | 'ENTREGADO'

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    declare clienteNombre: string

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    declare nota: string

    // Relaciones
    @ForeignKey(() => Mesa)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare mesaId: string

    @BelongsTo(() => Mesa)
    declare mesa: Mesa

    @ForeignKey(() => Restaurante)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare restauranteId: string

    @BelongsTo(() => Restaurante)
    declare restaurante: Restaurante

    // ItemPedido
    @HasMany(() => ItemPedido)
    declare itemPedido: ItemPedido[]
}

export default Pedido