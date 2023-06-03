"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Addresses", [
      {
        street: "18",
        in_between_street_a: "23",
        in_between_street_b: "25",
        city: "Calkini",
        state: "Campeche",
        country: "Mexico",
        zip: "24903",
        proof_of_address: "Proof here",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        street: "18",
        in_between_street_a: "23",
        in_between_street_b: "25",
        city: "Calkini",
        state: "Campeche",
        country: "Mexico",
        zip: "24903",
        proof_of_address: "Proof here",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        street: "18",
        in_between_street_a: "23",
        in_between_street_b: "25",
        city: "Calkini",
        state: "Campeche",
        country: "Mexico",
        zip: "24903b",
        proof_of_address: "Proof here",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Addresses", null, {});
  },
};
