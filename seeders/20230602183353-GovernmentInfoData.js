"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("GovernmentInfos", [
      {
        curp: "SUVA981219HYNRVL04",
        identification_number: "2131236",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        curp: "SUVA650527HYNRVL04",
        identification_number: "543535353",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        curp: "SUVA950502HYNRVL04",
        identification_number: "7656745",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("GovernmentInfos", null, {});
  },
};
