"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ArrestLogs", {
      OBJECTID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      DATE_ARRESTED: {
        type: Sequelize.DATE,
      },
      Arrest_ID: {
        type: Sequelize.STRING,
      },
      Case_Number: {
        type: Sequelize.STRING,
      },
      Charge_Sequence: {
        type: Sequelize.INTEGER,
      },
      Degree: {
        type: Sequelize.STRING,
      },
      Arrest_Charge: {
        type: Sequelize.STRING,
      },
      Charge_Description: {
        type: Sequelize.STRING,
      },
      TIME_ARREST: {
        type: Sequelize.INTEGER,
      },
      ArrestLocationStreet: {
        type: Sequelize.STRING,
      },
      ArrestLocationCity: {
        type: Sequelize.STRING,
      },
      ArrestLocationAptFlr: {
        type: Sequelize.STRING,
      },
      LASTNAME: {
        type: Sequelize.STRING,
      },
      FIRSTNAME: {
        type: Sequelize.STRING,
      },
      MIDDLENAME: {
        type: Sequelize.STRING,
      },
      SUFFIX: {
        type: Sequelize.STRING,
      },
      RACE: {
        type: Sequelize.STRING,
      },
      SEX: {
        type: Sequelize.STRING,
      },
      DOB: {
        type: Sequelize.DATE,
      },
      AGE: {
        type: Sequelize.INTEGER,
      },
      ARREST_STATUS: {
        type: Sequelize.STRING,
      },
      UNIQUEKEY: {
        type: Sequelize.INTEGER,
      },
      OBJECTID_1: {
        type: Sequelize.INTEGER,
      },
      ArrestLocationStreetNBR: {
        type: Sequelize.STRING,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ArrestLogs");
  },
};
