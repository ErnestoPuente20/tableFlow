import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import Pedido from "./Pedido";
import Producto from "./Producto";

@Table({ tableName: 'items_pedido' })
class ItemPedido extends Model{
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
    declare cantidad: number

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    declare precioUnitario: number

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    declare subtotal: number

    // Relaciones
    @ForeignKey(() => Pedido)
    @Column({ type: DataType.UUID, allowNull: false })
    declare pedidoId: string

    @BelongsTo(() => Pedido)
    declare pedido: Pedido

    @ForeignKey(() => Producto)
    @Column({ type: DataType.UUID, allowNull: false })
    declare productoId: string

    @BelongsTo(() => Producto)
    declare producto: Producto
} 

export default ItemPedido