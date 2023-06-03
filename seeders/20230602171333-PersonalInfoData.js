"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("PersonalInfos", [
      {
        name: "Alexander",
        last_name: "Suarez",
        second_last_name: "Vivas",
        gender: "alexanderisv19@gmail.com",
        gender_other: "9961118634",
        date_of_birth: new Date(),
        city_of_birth: "Merida",
        state_of_birth: "Yucatan",
        country_of_birth: "Mexico",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        name: "Alan",
        last_name: "Suarez",
        second_last_name: "Vivas",
        gender: "alan020595@gmail.com",
        gender_other: "9961127755",
        date_of_birth: new Date(),
        city_of_birth: "Merida",
        state_of_birth: "Yucatan",
        country_of_birth: "Mexico",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        name: "Sani",
        last_name: "Suarez",
        second_last_name: "Parra",
        gender: "josans05@gmail.com",
        gender_other: "9961007001",
        date_of_birth: new Date(),
        city_of_birth: "Oxcutzcab",
        state_of_birth: "Yucatan",
        country_of_birth: "Mexico",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("PersonalInfos", null, {});
  },
};
