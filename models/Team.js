module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define('Team', {
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
       image: {
           type: DataTypes.STRING,
           allowNull: false
       },
       profession: {
           type: DataTypes.STRING,
           allowNull: false
       },
       link: {
           type: DataTypes.STRING,
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
        tableName: 'teams',
        timestamps: true
    });

    return Team;
}