"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Projects", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      projectName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      projectOwner: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      projectMembers: {
        type: DataTypes.JSON, // Allows storing an array or object
        allowNull: true,
        defaultValue: [],
      },
      descriptions: {
        type: Sequelize.TEXT, 
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Projects");
  },
};
