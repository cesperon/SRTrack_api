"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("PursuitLogs", {
      OBJECTID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      IncidentNumber: {
        type: Sequelize.INTEGER,
      },
      UniqueKey: {
        type: Sequelize.INTEGER,
      },
      CaseNumber: {
        type: Sequelize.STRING,
      },
      PursuitNumber: {
        type: Sequelize.INTEGER,
      },
      OccurredDayOfWeek: {
        type: Sequelize.STRING,
      },
      OccurredDate: {
        type: Sequelize.DATE,
      },
      COUNTY: {
        type: Sequelize.STRING,
      },
      Division: {
        type: Sequelize.STRING,
      },
      Bureau: {
        type: Sequelize.STRING,
      },
      Team: {
        type: Sequelize.STRING,
      },
      Assignment: {
        type: Sequelize.STRING,
      },
      Aborted: {
        type: Sequelize.STRING,
      },
      Accident: {
        type: Sequelize.STRING,
      },
      Arrest: {
        type: Sequelize.STRING,
      },
      DamageHR: {
        type: Sequelize.INTEGER,
      },
      DamageOther: {
        type: Sequelize.INTEGER,
      },
      DamagePolice: {
        type: Sequelize.INTEGER,
      },
      DamageParkedVehicle: {
        type: Sequelize.INTEGER,
      },
      DamageProperty: {
        type: Sequelize.INTEGER,
      },
      DamageSuspectVehicle: {
        type: Sequelize.INTEGER,
      },
      Distance: {
        type: Sequelize.STRING,
      },
      Reason: {
        type: Sequelize.STRING,
      },
      TimeOfDay: {
        type: Sequelize.STRING,
      },
      VehicleType: {
        type: Sequelize.STRING,
      },
      MaxSpeed: {
        type: Sequelize.INTEGER,
      },
      OfficerAge: {
        type: Sequelize.INTEGER,
      },
      YearsOfService: {
        type: Sequelize.INTEGER,
      },
      OffenderSex: {
        type: Sequelize.STRING,
      },
      OffenderRace: {
        type: Sequelize.STRING,
      },
      CopterAvailable: {
        type: Sequelize.STRING,
      },
      CopterUsed: {
        type: Sequelize.STRING,
      },
      DUIArrest: {
        type: Sequelize.STRING,
      },
      StopDeviceUsed: {
        type: Sequelize.STRING,
      },
      StopDevice: {
        type: Sequelize.STRING,
      },
      JUSTIFIED: {
        type: Sequelize.STRING,
      },
      FollowPolicy: {
        type: Sequelize.STRING,
      },
      WeatherCondition: {
        type: Sequelize.STRING,
      },
      LocationBegan: {
        type: Sequelize.STRING,
      },
      LocationEnded: {
        type: Sequelize.STRING,
      },
      InCarCamAvailable: {
        type: Sequelize.STRING,
      },
      InCarCamUsed: {
        type: Sequelize.STRING,
      },
      TotalTimeMinutes: {
        type: Sequelize.INTEGER,
      },
      InfluencingFactor: {
        type: Sequelize.STRING,
      },
      VIOLATION: {
        type: Sequelize.STRING,
      },
      AbortedBy: {
        type: Sequelize.STRING,
      },
      ConcludedBy: {
        type: Sequelize.STRING,
      },
      DamageType: {
        type: Sequelize.STRING,
      },
      InjuryType: {
        type: Sequelize.STRING,
      },
      InitiatedByAgency: {
        type: Sequelize.STRING,
      },
      ConcludedByAgency: {
        type: Sequelize.STRING,
      },
      LiabilityClaim: {
        type: Sequelize.STRING,
      },
      AssociatedOfficerCount: {
        type: Sequelize.INTEGER,
      },
      OfficerCondition: {
        type: Sequelize.STRING,
      },
      Count_: {
        type: Sequelize.INTEGER,
      },
      F_first_match: {
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
    await queryInterface.dropTable("PursuitLogs");
  },
};
