const Pdfmake = require("pdfmake");
const path = require("path")
const ReportModel = require('../Models/reportModel')

var pdfMake = require("pdfmake/build/pdfmake");
var pdfFonts = require("pdfmake/build/vfs_fonts");
const moment = require('moment')
const fs = require('fs');;
pdfMake.vfs = pdfFonts.pdfMake.vfs;
const date = new Date();

const { getReportpdf } = require('./report');
const { getES } = require('./ExecutiveSummary');
const { apex41pdf } = require('./apex41');
const { getPo1 } = require('./Po1');
const { getPo2 } = require('./Po2');
const { getREQ } = require('./Recommendation');
const { apex43pdf } = require('./apex43')
const { getCharts } = require("./chart")
const { getRecommendedProcedure } = require("./recommendedProcedure")

var fonts = {
    Roboto: {
        normal: "fonts/roboto/calibri-regular.ttf",
        bold: "fonts/roboto/calibri-bold.ttf",
        italics: "fonts/roboto/calibri-italic.ttf",
        bolditalics: "fonts/roboto/calibri-bold-italic.ttf",
    },
};


let pdfmake = new Pdfmake(fonts);


const getTrendMicroReportPdf = async (req, res) => {
    const Report = await ReportModel.find({}).sort({ _id: -1 }).limit(1);
    const [report, ES, apex41, po1, apex43, Recommendation, charts] = await Promise.all([
        getReportpdf(),
        getES(),
        apex41pdf(),
        getPo1(),
        apex43pdf(),
        getREQ(),
        getCharts(),
    ]);


    let combinedContent = []

    if (Report[0].checkPolicyOverviewTwoAdded) {
        const po2 = await getPo2();
        combinedContent = [...report, ...ES, ...apex41, ...po1, ...po2, ...apex43, ...Recommendation];
    }
    else {
        combinedContent = [...report, ...ES, ...apex41, ...po1, ...apex43, ...Recommendation];
    }


    if (Report[0].showRecommendedProcedure) {
        const recommendedProcedureArr = await getRecommendedProcedure();
        combinedContent = [combinedContent, ...recommendedProcedureArr, ...charts];
    } else {
        combinedContent = [combinedContent, ...charts];
    }


    let headerText = {
        text: `Trend Micro Health Check | Apex one As a Service | ${Report[0].companyName}`,
        alignment: "left",
    }

    if (Report[0].report_type === "On-Premises") {
        headerText = {
            text: `Trend Micro Health Check | Apex one On Premises | ${Report[0].companyName}`,
            alignment: "left",
        }
    }


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
                        absolutePosition: { x:-100, y: 320 },
                    }
                } else {
                    return {}
                }
            },

            content: combinedContent,

            // styles of pdf 
            styles: {
                header1: {
                    fontSize: 11,
                    bold: true,
                    margin: [0, 0, 0, 10]
                },

                heading: {
                    fontSize: 16,
                    color: '#8B0000',

                },
                commonGap: { margin: [0, 11, 0, 0] },

                header: {
                    fontSize: 31,
                    //bold: true,
                    alignment: "center",
                },
                subheader: {
                    fontSize: 16,
                    bold: true,
                    alignment: "center",
                    decoration: 'underline'
                },


                tableExample: {
                    margin: [0, 4, 0, 0],

                },
                text: {
                    alignment: "justify",
                },

                common: {
                    fontSize: 11,
                    margin: [0, 15, 0, 0],
                    alignment: 'justify',
                    lineHeight: 1.5,
                },

                lineSpacing: {
                    margin: [0, 6, 0, 0],
                    lineHeight: 1.5
                },
                chartFirstLine: {
                    fontSize: 11,
                    margin: [0, 6, 0, 0],
                    lineHeight: 1.5,
                    alignment: 'justify',
                },
                chartText: {
                    fontSize: 11,
                    // alignment: 'justify',
                    margin: [30, 11, 0, 0],
                    lineHeight: 1.2
                },

                imgStyle: {
                    alignment: 'center',
                    margin: [0, 4, 0, 0],
                },

                chartImage: {
                    margin: [80, 20, 0, 0],
                    alignment: 'center',
                },

                apexone41: {
                    fontSize: 12,
                    bold: true,
                    fillColor: 'black',
                    color: "white",
                    alignment: 'center'
                },

                table3: {
                    alignment: 'left',
                    fillColor: 'lightblue',
                    bold: true,
                }

            },

            //header and footer design 

            header: {
                fontSize: 8,
                columns: [

                    headerText,

                    {
                        with: "auto",
                        alignment: "right",
                        // text: '© Blogger Nepal 2022'
                        image: "images/footer-logo.png",
                        margin: [10, 0, 0, 500],
                        fit: [80, 80]
                    },
                ],
                margin: [15, 10, 15, 15],
            },

            footer: (currentPage, pageCount, pageSize) => {
                return {
                    // margin: [15, 15, 15, 15 ],
                    fontSize: 8,
                    columns: [
                        {
                            margin: [15, 15, 15, 15],
                            with: "auto",
                            alignment: "right",
                            // text: 'Page | 1'
                            text: [
                                {
                                    color: "#7f7f7f",
                                    text: "Page | ",
                                },
                                {
                                    text: currentPage,
                                },
                            ],
                        },
                    ],
                };
            },
            pageBreakBefore: function (currentNode, followingNodesOnPage, nodesOnNextPage, previousNodesOnPage) {
                //check if last paragraph is entirely on a single page, add pagebreak if not
                if (currentNode.id === 'closingParagraph' && currentNode.pageNumbers.length != 1) {
                    return true;
                }
                return false;
            }

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
    getTrendMicroReportPdf
}


