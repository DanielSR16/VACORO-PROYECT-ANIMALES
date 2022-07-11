module.exports = (sequelize, Sequelize) =>{

    const Toro = sequelize.define('toros',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        nombre: Sequelize.STRING,
        descripcion: Sequelize.STRING,
        raza: Sequelize.STRING,
        num_arete: Sequelize.STRING,
        url_img: Sequelize.STRING,
        estado: Sequelize.INET,
        edad: Sequelize.INTEGER,
        fecha_llegada: Sequelize.STRING,

    }, { freezeTableName: true, timestamps: false });
    return Toro;
}
    