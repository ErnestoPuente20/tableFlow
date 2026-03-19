import { Table, Column, Model, DataType, Default, HasMany } from 'sequelize-typescript'
import ItemPedido from './ItemPedido'

@Table({ tableName: 'productos' })
class Producto extends Model {

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
        type: DataType.TEXT,
        allowNull: false
    })
    declare descripcion: string

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    declare precio: number

    @Column({
        type: DataType.STRING(200),
        allowNull: true
    })
    declare imagen: string

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    declare categoria: string

    @Default(true)
    @Column({
        type: DataType.BOOLEAN
    })
    declare disponible: boolean

    @HasMany(() => ItemPedido)
    declare items: ItemPedido[]
}

export default Producto