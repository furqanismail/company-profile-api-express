module.exports = (sequelize, DataTypes) => {
    const CategoryPortofolio = sequelize.define('CategoryPortofolio', {
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
        tableName: 'category_portofolios',
        timestamps: true
    });

    return CategoryPortofolio;
}