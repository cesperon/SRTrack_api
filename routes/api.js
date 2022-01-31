const router = require("express").Router();
const arrestLog = require("../controller/arrestLog");

router.get("/arrestLog", arrestLog.getArrestLogs);
module.exports = router;
