"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("BankAccountInfos", [
      {
        acc_number: "12912819281",
        clabe: "1923012930129301200",
        bank: "BBVA",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        acc_number: "7864612819281",
        clabe: "2023012930129301200",
        bank: "BBVA",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        acc_number: "564612819281",
        clabe: "3023012930129301200",
        bank: "BBVA",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("BankAccountInfos", null, {});
  },
};
