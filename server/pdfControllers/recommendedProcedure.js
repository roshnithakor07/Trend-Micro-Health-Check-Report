
const ReportModel = require('../Models/reportModel')
const moment = require('moment')


const getRecommendedProcedure = async (req, res) => {
    const Report = await ReportModel.find({}).sort({ _id: -1 }).limit(1);
   
   
    let recommendedProcedureArr = JSON.parse(Report[0].recommendedProcedureArr)
    let a = recommendedProcedureArr[0]
    let a1 = recommendedProcedureArr[1]
    let b = recommendedProcedureArr[2]
    let c = recommendedProcedureArr[3]
    let d = recommendedProcedureArr[4]

    //a
    const data = a1.map(item => {
        const { description, link } = item;
        if (link) {
            return {
                text: [
                    { text: description, fontSize: 11 },
                    { text: link, link: link, fontSize: 11, color: 'blue', decoration: 'underline', margin: [0, 0, 0, 5] }
                ]
            };
        } else {
            return { text: description };
        }
    });

    //b
    const data2 = b.map(item => {
        const { description, link } = item;
        if (link) {
            return {
                text: [
                    { text: description, fontSize: 11 },
                    { text: link, link: link, fontSize: 11, color: 'blue', decoration: 'underline', margin: [0, 0, 0, 5] }
                ]
            };
        } else {
            return { text: description };
        }
    });

    //c
    const data3 = c.map(item => {
        const { description, link } = item;
        if (link) {
            return {
                text: [
                    { text: description, fontSize: 11 },
                    { text: link, link: link, fontSize: 11, color: 'blue', decoration: 'underline', margin: [0, 0, 0, 5] }
                ]
            };
        } else {
            return { text: description };
        }
    });

    //d
    const data4 = d.map(item => {
        const { description, link } = item;
        if (link) {
            return {
                text: [
                    { text: description, fontSize: 11 },
                    { text: link, link: link, fontSize: 11, color: 'blue', decoration: 'underline', margin: [0, 0, 0, 5] }
                ]
            };
        } else {
            return { text: description };
        }
    });

    
    try {

      let content = [
            //  5.5 Recommended Procedure
            {
                pageBreak: 'before',
                text: '5.5 Recommended Procedure',
                tocItem: ['subToc'],
                style: 'heading',
                tocStyle: { italics: true },
                tocMargin: [20, 5, 0, 0],
            },
            {
                text: "Below are the recommendations on how to remediate the gaps identified in this Health Check.",
                fontSize: 11,
                margin: [0, 2, 0, 0],
                alignment: 'justify',
            },
            {
                text: "A. Outdated Software Updates",
                fontSize: 11,
                margin: [20, 10, 0, 0],
                alignment: 'justify',
                bold: true
            },
            {
                text: `1. ${a[0].description}`,
                fontSize: 11,
                margin: [35, 5, 0, 0],
                alignment: 'justify',
            },
            {
                text: "Note:Show the # of endpoints with outdated software and a breakdown of Offline/Online endpoints.",
                fontSize: 11,
                margin: [0, 9, 0, 0],
                alignment: 'justify',
            },
            {
                text: `Action: `,
                fontSize: 11,
                margin: [35, 5, 0, 0],
                alignment: 'justify',
            },
            {
                fontSize: 10,
                margin: [50, 11, 0, 0],
                alignment: 'justify',
                lineHeight: 1.2,
                ul: [
                    ...data
                ]
            },
            // B Section
            {
                text: "B. Offline Agents",
                fontSize: 11,
                margin: [20, 10, 0, 0],
                alignment: 'justify',
                bold: true
            },
            {
                fontSize: 10,
                margin: [50, 11, 0, 0],
                alignment: 'justify',
                lineHeight: 1.2,
                ul: [
                    ...data2
                ]
            },

            // C Section
            {
                text: "C. Security patterns update automatically & manually:",
                fontSize: 11,
                margin: [20, 10, 0, 0],
                alignment: 'justify',
                bold: true
            },
            {
                fontSize: 10,
                margin: [50, 11, 0, 0],
                alignment: 'justify',
                lineHeight: 1.2,
                ul: [
                    ...data3
                ]
            },

            // D Section
            {
                text: "D. Policy creation and deployment:",
                fontSize: 11,
                margin: [20, 10, 0, 0],
                alignment: 'justify',
                bold: true
            },
            {
                fontSize: 10,
                margin: [50, 11, 0, 0],
                alignment: 'justify',
                lineHeight: 1.2,
                ul: [
                    ...data4
                ]
            },
        ]

        return content
    } catch (error) {
      console.log("error - Recomendation ")
    }
}



module.exports = { getRecommendedProcedure }

