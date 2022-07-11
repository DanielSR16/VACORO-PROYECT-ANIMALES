module.exports = (sequelize, Sequelize) =>{

    const Becerro = sequelize.define('becerros',{
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
        fecha_llegada: Sequelize.STRING,
        estado: Sequelize.STRING,
        edad: Sequelize.INTEGER,
        id_vaca: Sequelize.INTEGER,

        
    }, { freezeTableName: true, timestamps: false });
    return Becerro;
}
    