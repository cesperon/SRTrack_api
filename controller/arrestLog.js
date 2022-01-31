const res = require("express/lib/response");
const models = require("../database/models");
const getArrestLogs = async () => {
  try {
    const arrestLogs = await models.ArrestLog.findAll({}).then((logs) => {
      console.log(logs);
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getArrestLogs,
};
