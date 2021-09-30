'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('teams', {
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
       profession: {
         type: Sequelize.STRING,
         allowNull: false
       },
       link: {
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

     await queryInterface.dropTable('teams');

  }
};
