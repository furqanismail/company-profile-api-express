const category_article = require('./CategoryArticle');
module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define('Article', {
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
       category_id: {
           type: DataTypes.INTEGER,
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
        tableName: 'articles',
        timestamps: true
    });

    return Article;
}