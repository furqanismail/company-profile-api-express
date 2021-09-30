'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('contacts', {
       id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         primaryKey: true,
         allowNull: false
       },
       address: {
         type: Sequelize.STRING,
         allowNull: false
       },
       phone: {
         type: Sequelize.STRING,
         allowNull: false
       },
       instagram: {
         type: Sequelize.STRING,
         allowNull: false
       },
       facebook: {
         type: Sequelize.STRING,
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

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('contacts');

  }
};
