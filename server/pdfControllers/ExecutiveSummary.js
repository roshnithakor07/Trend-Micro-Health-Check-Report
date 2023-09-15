
const ReportModel = require('../Models/reportModel')
const moment = require('moment')
const policyModel = require('../Models/policyModel')
const { Chart1, Virus, Spyware, Bm, Dc, Ips, Smartscan, Wr, Cc } = require('../Models/chartModel');

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


  const allApexSummaryArr = arr1.map(i => ({ text: i, unbreakable: true }));
  const allApex43ExecutiveSummary = arr2.map(i => ({ text: i, unbreakable: true }));
  let eSummaryPolicyOverview = po1.map(i => ({ text: i, unbreakable: true }));
  const eSummaryPolicyOverview1 = po2.map(i => ({ text: i, unbreakable: true }));
  // const extraEsummarySen1 = extraEsummarySen.map(i => ({ text: i, unbreakable: true }));


  let virusDetection = "", spyDetection = "", wrDetection = "", dcDetection = "";
  let ipsDetection = "", ccDetection = "", bmDetection = ""

  if (showCharts[1]) {
    if (virus1[0].total_detection) {
      virusDetection = `${virus1[0].total_detection} Virus/Malware Detected`;
    }
  }

  if (showCharts[2]) {
    if (spyware1[0].total_detection) {
      spyDetection = `${spyware1[0].total_detection} Spyware/Grayware Detected`;
    }

  }

  if (showCharts[3]) {

    if (wr1[0].total_detection) {
      wrDetection = `${wr1[0].total_detection} Web Reputation Detected`;
    }
  }


  if (showCharts[4]) {

    if (dc1[0].total_detection) {
      dcDetection = `${dc1[0].total_detection} Device Control Detected`;
    }
  }

  if (showCharts[5]) {

    if (ips1[0].total_detection) {
      ipsDetection = `${ips1[0].total_detection} Intrusion Prevention Detected`;
    }
  }

  if (showCharts[6]) {

    if (cc1[0].total_detection) {
      ccDetection = `${cc1[0].total_detection} C&C Callback Detected`;
    }
  }

  if (showCharts[7]) {

    if (bm1[0].total_detection) {
      bmDetection = `${bm1[0].total_detection} Behavior Monitoring Detected`;
    }
  }



  try {

    let content = [

      {
        // margin : [0,13,0,0],
        text: '3 Executive Summary',
        tocItem: ['subToc'],
        style: 'heading',
        tocMargin: [0, 10, 0, 0],
        tocStyle: { bold: true },
        pageBreak: 'before',
      },

      {
        text: `Trend Micro performed a Health Check on ${moment(Report[0].executivesummarydate).format('YYYY-MM-DD')} for ${Report[0].companyName} to ensure Trend Micro Product(s) are configured as per best practice and provide gap analysis feedback.`,
        style: 'common',

      },

      {
        text: `This high-level summary provides an overview of the status of your Apex One & Apex Central deployment. Detailed instructions and references can be found within the individual sections further down in the report.`,
        fontSize: 11,
        margin: [0, 15, 0, 0],
        lineHeight: 1.5,
        alignment: 'justify',
      },

      {
        fontSize: 11,
        margin: [20, 15, 0, 0],
        lineHeight: 1.7,
        // alignment: 'justify',
        ul: [
          ...allApexSummaryArr,
          ...eSummaryPolicyOverview,
          ...eSummaryPolicyOverview1,
          ...allApex43ExecutiveSummary,
          { text: `We have captured ${chart1[0].logDays} ${chart1[0].logDuration} logs on ${chart1[0].logCollectionDate} detections are below:` },
          virusDetection,
          spyDetection,
          wrDetection,
          dcDetection,
          ipsDetection,
          ccDetection,
          bmDetection
        ]

      },

    ]

    return content
  } catch (error) {
    // res.status(500).json({ message: error.message });
  }


}



module.exports = { getES }

