const policyModel = require('../Models/policyModel')

const getPolicy = async (req, res) => {
    try {
        const Report = await policyModel.find({}).sort({ _id: -1 }).limit(1);
        res.json(Report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const savePolicyData = async (req, res) => {
    const user = new policyModel(req.body);
    console.log(req.body)
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updatePolicyData = async (req, res) => {
    try {
        const updateduser = await policyModel.updateOne({ _id: req.body._id }, { $set: req.body });
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


module.exports = {
    getPolicy, savePolicyData, updatePolicyData
} 