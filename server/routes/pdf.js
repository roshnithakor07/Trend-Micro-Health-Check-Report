const express = require("express");
const router = express.Router();

const {getTrendMicroReportPdf} = require('../pdfControllers/TrendMicroReport');


router.get('/getTrendMicroReportPdf',getTrendMicroReportPdf)




module.exports = router;