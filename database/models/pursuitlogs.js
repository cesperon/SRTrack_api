"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PursuitLogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PursuitLogs.init(
    {
      OBJECTID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      IncidentNumber: DataTypes.INTEGER,
      UniqueKey: DataTypes.INTEGER,
      CaseNumber: DataTypes.STRING,
      PursuitNumber: DataTypes.INTEGER,
      OccurredDayOfWeek: DataTypes.STRING,
      OccurredDate: DataTypes.DATE,
      COUNTY: DataTypes.STRING,
      Division: DataTypes.STRING,
      Bureau: DataTypes.STRING,
      Team: DataTypes.STRING,
      Assignment: DataTypes.STRING,
      Aborted: DataTypes.STRING,
      Accident: DataTypes.STRING,
      Arrest: DataTypes.STRING,
      DamageHR: DataTypes.INTEGER,
      DamageOther: DataTypes.INTEGER,
      DamagePolice: DataTypes.INTEGER,
      DamageParkedVehicle: DataTypes.INTEGER,
      DamageProperty: DataTypes.INTEGER,
      DamageSuspectVehicle: DataTypes.INTEGER,
      Distance: DataTypes.STRING,
      Reason: DataTypes.STRING,
      TimeOfDay: DataTypes.STRING,
      VehicleType: DataTypes.STRING,
      MaxSpeed: DataTypes.INTEGER,
      OfficerAge: DataTypes.INTEGER,
      YearsOfService: DataTypes.INTEGER,
      OffenderSex: DataTypes.STRING,
      OffenderRace: DataTypes.STRING,
      CopterAvailable: DataTypes.STRING,
      CopterUsed: DataTypes.STRING,
      DUIArrest: DataTypes.STRING,
      StopDeviceUsed: DataTypes.STRING,
      StopDevice: DataTypes.STRING,
      JUSTIFIED: DataTypes.STRING,
      FollowPolicy: DataTypes.STRING,
      WeatherCondition: DataTypes.STRING,
      LocationBegan: DataTypes.STRING,
      LocationEnded: DataTypes.STRING,
      InCarCamAvailable: DataTypes.STRING,
      InCarCamUsed: DataTypes.STRING,
      TotalTimeMinutes: DataTypes.INTEGER,
      InfluencingFactor: DataTypes.STRING,
      VIOLATION: DataTypes.STRING,
      AbortedBy: DataTypes.STRING,
      ConcludedBy: DataTypes.STRING,
      DamageType: DataTypes.STRING,
      InjuryType: DataTypes.STRING,
      InitiatedByAgency: DataTypes.STRING,
      ConcludedByAgency: DataTypes.STRING,
      LiabilityClaim: DataTypes.STRING,
      AssociatedOfficerCount: DataTypes.INTEGER,
      OfficerCondition: DataTypes.STRING,
      Count_: DataTypes.INTEGER,
      F_first_match: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PursuitLogs",
    }
  );
  return PursuitLogs;
};
