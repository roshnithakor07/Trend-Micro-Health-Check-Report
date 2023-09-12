const express = require("express");
const router = express.Router();

const {
    getChartModel,saveDataChart,
    getagModel, saveDataag,
    getvirusModel, saveDatavirus,
    getspywareModel, saveDataspyware,
    getwrModel,saveDatawr,
    getipsModel,saveDataips,
    getbmModel,saveDatabm, 
    getdcModel, saveDatadc,
    getccModel,saveDatacc,
    getsmartscanModel,saveDatasmartscan,
    getfurtherinformationModel,saveDatafurtherinformation
} = require("../controllers/chartController")



router.get('/',(req,res)=>{res.send("hello charts")});

router.get('/getChartValue', getChartModel)

router.get('/getAgValue', getagModel)
router.get('/getVirusValue', getvirusModel)
router.get('/getSpywareValue', getspywareModel)
router.get('/getWrValue', getwrModel)
router.get('/getIpValue', getipsModel)
router.get('/getBmValue', getbmModel)
router.get('/getDcValue', getdcModel)
router.get('/getcc', getccModel)
router.get('/getSmartScanValue', getsmartscanModel)

router.post("/saveDataChart", saveDataChart)
router.post("/agentdistribution", saveDataag)
router.post("/virus", saveDatavirus)
router.post("/spyware", saveDataspyware)
router.post("/wr", saveDatawr)
router.post("/ips", saveDataips)
router.post("/bm", saveDatabm)
router.post("/dc", saveDatadc)
router.post("/cc", saveDatacc)
router.post("/smartscan",saveDatasmartscan)



router.get("/getfurtherinformation",getfurtherinformationModel)
router.post("/furtherinformation",saveDatafurtherinformation)

//router.delete("/deleteallcharts",deleteAllCharts);

module.exports = router;