'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('articles', {
       id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         primaryKey: true,
         allowNull: false
       },
       name: {
         type: Sequelize.STRING,
         allowNull: false
       },
       image: {
         type: Sequelize.STRING,
         allowNull: false
       },
       category_id: {
         type: Sequelize.INTEGER,
         allowNull: false
       },
       description: {
         type: Sequelize.TEXT,
         allowNull: false
       },
       created_at: {
         type: Sequelize.DATE,
         allowNull: false
       },
       updated_at: {
         type: Sequelize.DATE,
         allowNull: false
       }
     });

     await queryInterface.addConstraint('articles', {
       type: 'foreign key',
       fields: ['category_id'],
       name: 'FOREIGN_KEY_ARTICLE_CATEGORY_ID',
       references: {
         table: 'category_articles',
         field: 'id'
       },
       onDelete: 'cascade'
     });

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('articles');

  }
};
