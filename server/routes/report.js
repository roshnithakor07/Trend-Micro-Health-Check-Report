const express = require("express");
const router = express.Router();
const {convertBase64ToImg,getOneReport,getReport,saveData,updateData,deleteAllData,getAllData,deleteReport} = require("../controllers/reportController")
const {getPolicy,savePolicyData, updatePolicyData} = require('../controllers/policyController')


router.get('/convertBase64ToImg',convertBase64ToImg);
router.get('/',getReport);
router.get('/getOneReport/:id', getOneReport);
router.get('/getAllReport',getAllData);
router.post('/',saveData);

router.patch('/updateOneReport/:id', updateData);
router.delete('/:id',deleteReport);
router.delete('/',deleteAllData);

router.get('/getPolicy',getPolicy);
router.post('/savePolicyData',savePolicyData);
router.patch('/updatePolicyData',updatePolicyData);


module.exports = router;