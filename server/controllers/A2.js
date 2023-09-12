const Pdfmake = require("pdfmake");
const path = require("path")
const ReportModel = require('../models/reportModel')
const { ag, virus, spyware, bm, dc, ips, smartscan, agimages1, agimages2,
  virusimages1, virusimages2, virusimages3,
  spywareimages1, spywareimages2, spywareimages3,
  dcimages1, dcimages2,
  ipimages1, ipimages2, ipimages3,
  bmimages1, bmimages2, ssimages1
} = require('../models/chartsModel');

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

  const getA2pdf = async (req, res) => {
    const Report = await ReportModel.find({}).sort({ _id: -1 }).limit(1);
    const virus1 = await virus.find({}).sort({ _id: -1 }).limit(1);
    

  }


