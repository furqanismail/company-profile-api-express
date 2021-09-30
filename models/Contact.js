module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define('Contact', {
       id: {
           type: DataTypes.INTEGER,
           autoIncrement: true,
           primaryKey: true,
           allowNull: false
       },
       address: {
           type: DataTypes.STRING,
           allowNull: false
       },
       phone: {
           type: DataTypes.STRING,
           allowNull: false
       },
       instagram: {
           type: DataTypes.STRING,
           allowNull: false
       },
       facebook: {
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
        tableName: 'contacts',
        timestamps: true
    });

    return Contact;
}