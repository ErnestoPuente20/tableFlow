import {Table, Column, Model, DataType, Default, AllowNull} from 'sequelize-typescript'

@Table({
    tableName: 'productos'
})

class Producto extends Model {
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
}

export default Producto