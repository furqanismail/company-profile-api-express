module.exports = (sequelize, DataTypes) => {
    const Service = sequelize.define('Service', {
       id: {
           type: DataTypes.INTEGER,
           autoIncrement: true,
           primaryKey: true,
           allowNull: false
       },
       name: {
           type: DataTypes.INTEGER,
           allowNull: false
       },
       image: {
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
        tableName: 'services',
        timestamps: true
    });

    return Service;
}