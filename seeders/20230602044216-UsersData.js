"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        username: "Alexander",
        firstname: "Alexander",
        lastname: "Suarez",
        email: "alexanderisv19@gmail.com",
        phone: "9961118634",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Alan",
        firstname: "Alan",
        lastname: "Suarez",
        email: "alan020595@gmail.com",
        phone: "9961127755",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Sani",
        firstname: "Santiago",
        lastname: "Suarez",
        email: "josans05@gmail.com",
        phone: "9961007001",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
