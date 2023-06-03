"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("FormalEducationInfos", [
      {
        university_name: "ITESCAM",
        state: "Campeche",
        country: "Mexico",
        career_name: "Mechatronics Engineer",
        classes_completed: true,
        proof_classes_completed: "",
        degree_completed: true,
        proof_degree_completed: "",
        license_completed: true,
        proof_license_completed: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        university_name: "University generic name",
        state: "Campeche",
        country: "Mexico",
        career_name: "Teacher",
        classes_completed: true,
        proof_classes_completed: "",
        degree_completed: true,
        proof_degree_completed: "",
        license_completed: true,
        proof_license_completed: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        university_name: "Generic University name",
        state: "Yucatan",
        country: "Mexico",
        career_name: "Teacher",
        classes_completed: true,
        proof_classes_completed: "",
        degree_completed: true,
        proof_degree_completed: "",
        license_completed: true,
        proof_license_completed: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("FormalEducationInfos", null, {});
  },
};
