const express = require("express");
const router = express.Router();

const {getTrendMicroReportDocx} = require('../docxController/TrendMicroReport');


router.get('/getTrendMicroReportDocx',getTrendMicroReportDocx)




module.exports = router;