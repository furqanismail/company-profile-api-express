module.exports = (sequelize, DataTypes) =>{
    const Hero = sequelize.define('Hero', {
       id: {
           type: DataTypes.INTEGER,
           autoIncrement: true,
           primaryKey: true,
           allowNull: false
       },
       title: {
           type: DataTypes.STRING,
           allowNull: false
       },
       image: {
           type: DataTypes.STRING,
           allowNull: false
       },
       type: {
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
        tableName: 'heros',
        timestamps: true
    });

    return Hero;
}