"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        firstname: "Balender",
        lastname: "kumar",
        email: "balender1@gmail.com",
        password: "Balender@gmail", // Note: Store hashed passwords in production
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: "Sanjeev",
        lastname: "Singh",
        email: "sanjeevkush06@gmail.com",
        password: "sanju@email", // Note: Store hashed passwords in production
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
