
const {ReportModel} = require('../Models/reportModel')
const moment = require('moment')
const { HeadingLevel, Paragraph, ExternalHyperlink, TextRun } = require("docx");

const getRecommendedProcedure = async (req, res) => {
    const Report = await ReportModel.find({}).sort({ _id: -1 }).limit(1);


    let recommendedProcedureArr = JSON.parse(Report[0].recommendedProcedureArr)
    let a = recommendedProcedureArr[0]
    let a1 = recommendedProcedureArr[1]
    let b = recommendedProcedureArr[2]
    let c = recommendedProcedureArr[3]
    let d = recommendedProcedureArr[4]


    const createDescription = (arr) => {
        const data = arr.map(item => {
            const { description, link } = item;
            if (link) {
                return new Paragraph({
                    bullet: { level: 0 },
                    spacing: {
                        line: 276,
                    },
                    indent: { left: 1400 },
                    text: description,
                    children: [
                        new TextRun(" "),
                        new ExternalHyperlink({
                            children: [
                                new TextRun({
                                    style: "Hyperlink",
                                    text: link,
                                }),
                            ],
                            link: link,
                        }),

                    ],
                })
            } else {
                return new Paragraph({
                    bullet: { level: 0 },
                    indent: { left: 1400 },
                    spacing: {
                        line: 276,
                    }, text: description
                })
            }
        });

        return data
    }
    //a
    const data1 = createDescription(a1)
    //b
    const data2 = createDescription(b)
    //c
    const data3 = createDescription(c)
    //d
    const data4 = createDescription(d)


    const indentOFPara = {
        left: 400
    }
    const spacingOfPara = {
        before: 230,
        after: 100
    }

    let content = [
        new Paragraph({
            text: '4.5 Recommended Procedure',
            heading: HeadingLevel.HEADING_2,
            keepLines: true,
            spacing: {
                before: 220,
            }
        }),
        new Paragraph({
            text: "Below are the recommendations on how to remediate the gaps identified in this Health Check.",
            keepLines: true,
        }),
        new Paragraph({
            indent: indentOFPara,
            spacing: spacingOfPara,
            children: [
                new TextRun({
                    text: "A. Outdated Software Updates",
                    bold: true
                })
            ]
        }),
        new Paragraph({
            indent: {
                left: 600
            },

            text: `1. ${a[0].description}`,
        }),
        new Paragraph({
            spacing: {
                after: 150,
                before: 150
            },
            text: "Note: Show the # of endpoints with outdated software and a breakdown of Offline/Online endpoints.",
        }),

        new Paragraph({
            indent: {
                left: 600
            },
            spacing: {
                after: 150,
                before: 150
            },
            text: 'Action'
        }),

        ...data1,

        //B
        new Paragraph({
            indent: indentOFPara,
            spacing: spacingOfPara,
            children: [
                new TextRun({
                    text: "B. Offline Agents",
                    bold: true
                })
            ]
        }),
        ...data2,
        //C
        new Paragraph({
            indent: indentOFPara,
            spacing: spacingOfPara,
            children: [
                new TextRun({
                    text: "C. Security patterns update automatically and manually:",
                    bold: true
                })
            ]
        }),

        ...data3,

        //D
        new Paragraph({
            indent: indentOFPara,
            spacing: spacingOfPara,
            children: [
                new TextRun({
                    text: "D. Policy creation and deployment:",
                    bold: true
                })
            ]
        }),
        ...data4

    ]

    return content
    
    try {

    } catch (error) {
        console.log("error - Recomendation ")
    }
}



module.exports = { getRecommendedProcedure }

