'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('heros', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
       title: {
          type: Sequelize.STRING,
          allowNull: false
       },
       image: {
         type: Sequelize.STRING,
         allowNull: false
       },
       type: {
         type: Sequelize.STRING,
         allowNull: true
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
       },

     });

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('heros');

  }
};
