
const {ReportModel} = require('../Models/reportModel')
const moment = require('moment')
const policyModel = require('../Models/policyModel')
const { Chart1, Virus, Spyware, Bm, Dc, Ips, Wr, Cc } = require('../Models/chartModel');
const { HeadingLevel, Paragraph } = require("docx");

const getES = async (req, res) => {
  const Report = await ReportModel.find({}).sort({ _id: -1 }).limit(1);
  const PolicyModel = await policyModel.find({}).sort({ _id: -1 }).limit(1);

  const chart1 = await Chart1.find({}).sort({ _id: -1 }).limit(1);
  const virus1 = await Virus.find({}).sort({ _id: -1 }).limit(1);
  const spyware1 = await Spyware.find({}).sort({ _id: -1 }).limit(1);
  const wr1 = await Wr.find({}).sort({ _id: -1 }).limit(1);
  const ips1 = await Ips.find({}).sort({ _id: -1 }).limit(1);
  const bm1 = await Bm.find({}).sort({ _id: -1 }).limit(1);
  const dc1 = await Dc.find({}).sort({ _id: -1 }).limit(1);
  const cc1 = await Cc.find({}).sort({ _id: -1 }).limit(1);


  const showCharts = JSON.parse(chart1[0].showCharts);

  let arr1 = JSON.parse(Report[0].allApex41ExecutiveSummary)
  let arr2 = JSON.parse(Report[0].allApex43ExecutiveSummary)
  let po1 = JSON.parse(Report[0].eSummaryPolicyOverview)
  let po2 = JSON.parse(Report[0].eSummaryPolicyOverview1)
  // let extraEsummarySen = JSON.parse(Report[0].extraEsummarySen)


  const allApexSummaryArr = arr1.map(i => (new Paragraph({ text: i, style: "bullet-para" })));
  const allApex43ExecutiveSummary = arr2.map(i => (new Paragraph({ text: i, style: "bullet-para" })));
  let eSummaryPolicyOverview = po1.map(i => (new Paragraph({ text: i, style: "bullet-para" })));
  const eSummaryPolicyOverview1 = po2.map(i => (new Paragraph({ text: i, style: "bullet-para" })));


  const displayChartCount = []

  if (showCharts[1]) {
    displayChartCount.push(new Paragraph({ text: `${virus1[0].total_detection} Virus/Malware Detected`, style: "bullet-para" }))
  }
  if (showCharts[2]) {
    displayChartCount.push(new Paragraph({ text: `${spyware1[0].total_detection} Spyware/Grayware Detected`, style: "bullet-para" }))
  }
  if (showCharts[3]) {
    displayChartCount.push(new Paragraph({ text: `${wr1[0].total_detection} Web Reputation Detected`, style: "bullet-para" }))
  }
  if (showCharts[4]) {
    displayChartCount.push(new Paragraph({ text: `${ips1[0].total_detection} Intrusion Prevention Detected`, style: "bullet-para" }))
  }
  if (showCharts[5]) {
    displayChartCount.push(new Paragraph({ text: `${dc1[0].total_detection} Device Control Detected`, style: "bullet-para" }))
  }
  if (showCharts[6]) {
    displayChartCount.push(new Paragraph({ text: `${cc1[0].total_detection} C&C Callback Detected`, style: "bullet-para" }))
  }
  
  if (showCharts[7]) {
    displayChartCount.push(new Paragraph({ text: `${bm1[0].total_detection} Behaviour Monitoring Detected`, style: "bullet-para" }))
  }



  try {

    let content = [
      new Paragraph({
        pageBreakBefore: true,
        text: "2 Executive Summary",
        heading: HeadingLevel.HEADING_1,
      }),
      new Paragraph({
        style: "common-space",
        text: `Trend Micro performed a Health Check on ${moment(Report[0].executivesummarydate).format('YYYY-MM-DD')} for ${Report[0].cName} to ensure Trend Micro Product(s) are configured as per best practice and provide gap analysis feedback.`,
      }),
      new Paragraph({
        style: "common-space",
        text: `This high-level summary provides an overview of the status of your Apex One and Apex Central deployment. Detailed instructions and references can be found within the individual sections further down in the report.`,
      }),

      ...allApexSummaryArr,
      ...eSummaryPolicyOverview,
      ...eSummaryPolicyOverview1,
      ...allApex43ExecutiveSummary,
      new Paragraph(
        { text: `We have captured ${chart1[0].logDays} ${chart1[0].logDuration} of logs on ${chart1[0].logCollectionDate} detections are below:`, style: "bullet-para" }
      ),

      ...displayChartCount

    ]

    return content
  } catch (error) {
    // res.status(500).json({ message: error.message });
  }


}



module.exports = { getES }

