const { ReportModel } = require('../Models/reportModel')
const policyModel = require('../Models/policyModel')
const { HeadingLevel, Paragraph, ExternalHyperlink, TextRun } = require("docx");
const { Ag } = require('../Models/chartModel');
const getREQ = async (req, res) => {
    const Report = await ReportModel.find({}).sort({ _id: -1 }).limit(1);
    const PolicyModel = await policyModel.find({}).sort({ _id: -1 }).limit(1);

    const ag1 = await Ag.find({}).sort({ _id: -1 }).limit(1);

    const apex41 = JSON.parse(Report[0].allApex41ReqSummary);
    const apex43 = JSON.parse(Report[0].allApex43ReqSummary);
    const po1 = JSON.parse(Report[0].allPolicyOneRSummeryArr);
    const common = JSON.parse(Report[0].allCommonPolicySummeryArr);
    const po2 = JSON.parse(Report[0].allPolicyTwoRSummeryArr);
    const agREQ = JSON.parse(ag1[0].agReq);

    const allPolicyOneRSummeryArr = po1.map(i => (new Paragraph({ text: i, style: "bullet-para" })));
    const allPolicyTwoRSummeryArr = po2.map(i => (new Paragraph({ text: i, style: "bullet-para" })));
    const allCommonPolicySummeryArr = common.map(i => (new Paragraph({ text: i, style: "bullet-para" })));
    const agReqSummeryArr = agREQ.map(i => (new Paragraph({ text: i, style: "bullet-para" })));

    let addPo2Summary = [];


    try {
        if (allCommonPolicySummeryArr.length) {
            addPo2Summary.push(
                new Paragraph({
                    spacing: {
                        line: 276,
                        before: 220,
                        after: 180,
                    },
                    keepLines: true,
                    children: [new TextRun({ text: `In Both Policy:`, bold: true, size: "16pt" })]
                }),
                ...allCommonPolicySummeryArr
            )
        };
        if (allPolicyOneRSummeryArr.length) {
            addPo2Summary.push(
                new Paragraph({
                    spacing: {
                        line: 276,
                        before: 220,
                        after: 180,
                    },
                    keepLines: true,

                    children: [new TextRun({ size: "16pt", text: `In ${Report[0].OverviewPolicyName1} Policy: `, bold: true })]
                }),
                ...allPolicyOneRSummeryArr
            )
        };
        if (allPolicyTwoRSummeryArr.length) {
            addPo2Summary.push(
                new Paragraph({
                    spacing: {
                        line: 276,
                        before: 220,
                        after: 180,
                    },
                    keepLines: true,
                    children: [new TextRun({ size: "16pt", text: `In ${PolicyModel[0].OverviewPolicyName1} Policy: `, bold: true })]
                }),
                ...allPolicyTwoRSummeryArr
            )
        };

    } catch (error) {
        console.log("error - ES - policy")
    }

    const allApexSummaryArr = [], allApex43ReqSummary = []

    try {
        for (let i = 0; i < apex41.length; i++) {
            if (apex41[i].description) {
                if (apex41[i].link) {
                    allApexSummaryArr.push(
                        new Paragraph({
                            style: "bullet-para",
                            text: apex41[i].description,
                            children: [
                                new TextRun(" "),
                                new ExternalHyperlink({
                                    children: [
                                        new TextRun({
                                            style: "Hyperlink",
                                            text: apex41[i].linkTitle ? apex41[i].linkTitle : apex41[i].link,
                                        }),
                                    ],
                                    link: apex41[i].link,
                                }),

                            ],
                        })
                    )
                } else {
                    allApexSummaryArr.push(new Paragraph({
                        style: "bullet-para",
                        text: apex41[i].description
                    }))
                }
            }
        }


    } catch (error) {
        console.log("error - ES - APEX41")
    }

    try {
        for (let i = 0; i < apex43.length; i++) {
            if (apex43[i].description) {
                if (apex43[i].link) {
                    allApex43ReqSummary.push(
                        new Paragraph({
                            style: "bullet-para",
                            text: apex43[i].description,
                            children: [
                                new TextRun(" "),
                                new ExternalHyperlink({
                                    children: [
                                        new TextRun({
                                            style: "Hyperlink",
                                            text: apex43[i].linkTitle ? apex43[i].linkTitle : apex43[i].link,
                                        }),
                                    ],
                                    link: apex43[i].link,
                                }),

                            ],
                        })
                    )
                } else {
                    allApex43ReqSummary.push(new Paragraph({
                        style: "bullet-para",
                        text: apex43[i].description
                    }))
                }
            }
        }
    } catch (error) {
        console.log("error - ES - APEX43")
    }



    const content = [
        new Paragraph({
            text: '4.4 Identified Gaps and Recommendations',
            heading: HeadingLevel.HEADING_2,
            keepLines: true,
            spacing: {
                before: 220,
                after: 230,
            }
        }),

        ...allApexSummaryArr,
        ...agReqSummeryArr,
        ...allApex43ReqSummary,
        ...addPo2Summary

    ]
    return content;

    try {


    } catch (error) {
        console.log("error - Recommendation")
    }


}



module.exports = { getREQ }

