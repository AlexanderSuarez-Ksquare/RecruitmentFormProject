"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Skills", [
      {
        preferred_programming_language: "Javascript",
        experience: "Less than three",
        disability: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        preferred_programming_language: "Java",
        experience: "Less than three",
        disability: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        preferred_programming_language: "Php",
        experience: "Less than three",
        disability: "motor",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Skills", null, {});
  },
};
