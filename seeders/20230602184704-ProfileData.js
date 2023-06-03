"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Profiles", [
      {
        phone: "9961118634",
        country_code: "52",
        email: "alex123@gmail.com",
        alt_email: "alex456@gmail.com",
        reference: "Google",
        other_reference: "TikTok",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        phone: "9961008591",
        country_code: "52",
        email: "alan123@gmail.com",
        alt_email: "alan456@gmail.com",
        reference: "Instagram",
        other_reference: "TikTok",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        phone: "9961007001",
        country_code: "52",
        email: "santi123@gmail.com",
        alt_email: "santi456@gmail.com",
        reference: "Linkedin",
        other_reference: "TikTok",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Profiles", null, {});
  },
};
