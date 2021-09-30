const category_portofolio = require('./CategoryPortofolio');
module.exports = (sequelize, DataTypes) => {
    const Portofolio = sequelize.define('Portofolio', {
       id: {
           type: DataTypes.INTEGER,
           autoIncrement: true,
           primaryKey: true,
           allowNull: false
       },
       name: {
           type: DataTypes.STRING,
           allowNull: false
       },
       category_id: {
           type: DataTypes.INTEGER,
           allowNull: false
       },
       image: {
           type: DataTypes.STRING,
           allowNull: false
       },
       link: {
           type: DataTypes.STRING,
           allowNull: false
       },
       description: {
           type: DataTypes.TEXT,
           allowNull: false
       },
       createdAt: {
           type: DataTypes.DATE,
           field: 'created_at',
           allowNull: false
       },
       updatedAt: {
           type: DataTypes.DATE,
           field: 'updated_at',
           allowNull: false
       }
    }, {
        tableName: 'portofolios',
        timestamps: true
    });


    return Portofolio;
}