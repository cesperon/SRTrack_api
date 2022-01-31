"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ArrestLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ArrestLog.init(
    {
      OBJECTID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      DATE_ARRESTED: DataTypes.DATE,
      Arrest_ID: DataTypes.STRING,
      Case_Number: DataTypes.STRING,
      Charge_Sequence: DataTypes.INTEGER,
      Degree: DataTypes.STRING,
      Arrest_Charge: DataTypes.STRING,
      Charge_Description: DataTypes.STRING,
      TIME_ARREST: DataTypes.INTEGER,
      ArrestLocationStreet: DataTypes.STRING,
      ArrestLocationCity: DataTypes.STRING,
      ArrestLocationAptFlr: DataTypes.STRING,
      LASTNAME: DataTypes.STRING,
      FIRSTNAME: DataTypes.STRING,
      MIDDLENAME: DataTypes.STRING,
      SUFFIX: DataTypes.STRING,
      RACE: DataTypes.STRING,
      SEX: DataTypes.STRING,
      DOB: DataTypes.DATE,
      AGE: DataTypes.INTEGER,
      ARREST_STATUS: DataTypes.STRING,
      UNIQUEKEY: DataTypes.INTEGER,
      OBJECTID_1: DataTypes.INTEGER,
      ArrestLocationStreetNBR: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ArrestLog",
    }
  );
  return ArrestLog;
};
