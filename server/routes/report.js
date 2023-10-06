const express = require("express");
const router = express.Router();
const { saveDocxFile, getDocxFile, convertBase64ToImg, getOneReport, getReport, saveData, updateData, deleteAllData, getAllData, deleteReport } = require("../controllers/reportController")
const { getPolicy, savePolicyData, updatePolicyData } = require('../controllers/policyController')



router.get('/', getReport);
router.get('/getOneReport/:id', getOneReport);
router.get('/getAllReport', getAllData);
router.post('/', saveData);

router.patch('/updateOneReport/:id', updateData);
router.delete('/:id', deleteReport);
router.delete('/', deleteAllData);

router.get('/getPolicy', getPolicy);
router.post('/savePolicyData', savePolicyData);
router.patch('/updatePolicyData', updatePolicyData);

router.get('/convertBase64ToImg', convertBase64ToImg);

//save docx file
router.get('/getOneDocxReport/:id', getDocxFile);
router.post('/saveDocxFile', saveDocxFile);



module.exports = router;