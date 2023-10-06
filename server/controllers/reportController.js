const { ReportModel, BlobDocx } = require('../Models/reportModel')
const fs = require("fs")
const dontenv = require("dotenv")
dontenv.config({ path: '../config.env' });
const { Readable } = require('stream');
const fetch = require('node-fetch');

const PORT = process.env.PORT || 5000;

const convertBase64ToImg = async (req, res) => {
    const Report = await ReportModel.find({}).sort({ _id: -1 }).limit(1);

    try {

        if (Report[0].productArchitecture !== "images/PA.png") {
            let base64Image = Report[0].productArchitecture.split(';base64,').pop();
            fs.writeFile('./images/productArchitecture.png', base64Image, { encoding: 'base64' }, function (err) {
                if (err) throw err;
            });
        }

        if (Report[0].cLogo !== "images/evenuts-logo.png") {
            let base64Image = Report[0].cLogo.split(';base64,').pop();
            fs.writeFile('./images/companyLogo.png', base64Image, { encoding: 'base64' }, function (err) {
                if (err) throw err;
            });
        }



    } catch (error) {
        // res.status(500).json({ message: error.message });
    }
}

const getReport = async (req, res) => {
    try {
        const Report = await ReportModel.find({}).sort({ _id: -1 }).limit(1);
        res.json(Report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getOneReport = async (req, res) => {
    const id = req.params.id;
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

//store report file 
const saveDocxFile = async (req, res) => {
    try {
        // Fetch the data from the URL
        const response = await fetch(`http://localhost:5000/docx/getTrendMicroReportDocx`);
        const dataBuffer = await streamToBuffer(response.body);
        // Create a new document with size, type, and data fields
        const docxData = new BlobDocx({
          size: dataBuffer.length,          // Size of the data
          type: response.headers.get('content-type'), // Content type of the data
          data: dataBuffer,                // Binary data
        });
    
        // Save the document to MongoDB
        await docxData.save();
    
        res.status(200).json({ message: 'Data saved to MongoDB' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error saving data to MongoDB' });
      }
}

const getDocxFile = async (req, res) => {
  
    try {
        const id = req.params.id;
        const blob = await BlobDocx.findById(id);

        if (!blob) {
          return res.status(404).json({ error: 'Blob not found' });
        }
    
        res.setHeader('Content-Disposition', `attachment; filename=file.docx`);
        res.setHeader('Content-Type', blob.type);
        res.setHeader('Content-Length', blob.size);
        res.end(blob.data);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function streamToBuffer(stream) {
    const chunks = [];
    for await (const chunk of stream) {
        chunks.push(chunk);
    }
    return Buffer.concat(chunks);
}

module.exports = {
    convertBase64ToImg, saveDocxFile, getDocxFile,
    getOneReport, getReport, saveData, updateData, deleteAllData, getAllData, deleteReport
} 