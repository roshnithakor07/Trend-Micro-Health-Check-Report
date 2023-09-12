const Pdfmake = require("pdfmake");
const path = require("path")
const ReportModel = require('../Models/reportModel')
const { getA1pdf } = require('./A1')

var fs = require("fs");
const mime = require('mime');
var pdfMake = require("pdfmake/build/pdfmake");
var pdfFonts = require("pdfmake/build/vfs_fonts");
const moment = require('moment')
pdfMake.vfs = pdfFonts.pdfMake.vfs;
const date = new Date();

var fonts = {
  Roboto: {
    normal: "fonts/roboto/Poppins-Regular.ttf",
    bold: "fonts/roboto/Poppins-Bold.ttf",
    italics: "fonts/roboto/Poppins-Italic.ttf",
    bolditalics: "fonts/roboto/Poppins-MediumItalic.ttf",
  },
};

let pdfmake = new Pdfmake(fonts);


const getFinalPdf = async (req, res) => {
  const content = await getA1pdf();
  console.log(content)
  try {
    var dd = {
      compress: true,
      pageSize: 'LETTER',
      pageOrientation: 'portrait',

      background: (currentPage, pageSize) => {
        if (currentPage === 1) {
          return {
            image: "images/bg.png",
            width: 792,
            // absolutePosition: { x: -10, y: -200 },
            absolutePosition: { x: -10, y: -120 },
          }
        } else {
          return {}
        }
      },

      content: content
    }

    const pdfDoc = pdfmake.createPdfKitDocument(dd);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=sample.pdf');
    pdfDoc.pipe(res);
    pdfDoc.end();

  } catch (error) {

  }


}


module.exports = {
  getFinalPdf
}


