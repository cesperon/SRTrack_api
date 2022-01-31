//converts object keys to camel case
const camelcaseKeys = require("camelcase-keys");

module.exports = (res, error, message, data = null, status = 200) => {
  data = camelcaseKeys(data, { deep: true });
  if (error) {
    return res.status(status).json({
      status: !error,
      message,
      status: false,
      data,
    });
  } else {
    return res.status(status).json({
      status: !error,
      message,
      data,
    });
  }
};
