const ReportModel = require('../Models/reportModel')



const getReport = async (req, res) => {
    try {
        const Report = await ReportModel.find({}).sort({ _id: -1 }).limit(1);
        res.json(Report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getOneReport = async (req, res) => {
    const id = req.params.id ;
    try {
        const Report = await ReportModel.findById(id);
        res.json(Report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const saveData = async (req, res) => {
    const user = new ReportModel(req.body);
    console.log(req.body)
    try {
        const inserteduser = await user.save();

        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const updateData = async (req, res) => {
    try {
        const updateduser = await ReportModel.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteAllData = async (req, res) => {
    try {
        const deleteAllReport = await ReportModel.collection.deleteMany();
        res.status(200).json(deleteAllReport);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const getAllData = async (req, res) => {
    try {
        const getAllReport = await ReportModel.find({});
        res.status(200).json(getAllReport);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteReport = async (req, res) => {

    try {
        const deletereport = await ReportModel.deleteOne({ _id: req.params.id });
        res.status(200).json(deletereport);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


module.exports = {
    getOneReport, getReport, saveData, updateData, deleteAllData, getAllData, deleteReport
} 