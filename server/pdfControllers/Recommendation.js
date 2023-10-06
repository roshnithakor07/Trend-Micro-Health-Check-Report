const {ReportModel} = require('../Models/reportModel')
const policyModel = require('../Models/policyModel')

const getREQ = async (req, res) => {
  const Report = await ReportModel.find({}).sort({ _id: -1 }).limit(1);
  const PolicyModel = await policyModel.find({}).sort({ _id: -1 }).limit(1);

  const apex41 = JSON.parse(Report[0].allApex41ReqSummary);
  const apex43 = JSON.parse(Report[0].allApex43ReqSummary);
  const po1 = JSON.parse(Report[0].allPolicyOneRSummeryArr);
  const common = JSON.parse(Report[0].allCommonPolicySummeryArr);
  const po2 = JSON.parse(Report[0].allPolicyTwoRSummeryArr);

  const allPolicyOneRSummeryArr = po1.map(i => ({ text: i, unbreakable: true, margin: [0, 6, 0, 0] }));
  const allPolicyTwoRSummeryArr = po2.map(i => ({ text: i, unbreakable: true, margin: [0, 6, 0, 0] }));
  const allCommonPolicySummeryArr = common.map(i => ({ text: i, unbreakable: true, margin: [0, 6, 0, 0] }));

  const topTwoSenPolicy1 = allPolicyOneRSummeryArr.splice(0, 1);
  const topTwoSenPolicy2 = allPolicyTwoRSummeryArr.splice(0, 1);
  const topTwoCommonPolicy = allCommonPolicySummeryArr.splice(0, 1);

  let addPo2Summary = [];

  try {
    if (Report[0].checkPolicyOverviewTwoAdded === true) {

      if (topTwoCommonPolicy.length) {
        addPo2Summary.push({
          margin: [0, 11, 0, 0],
          unbreakable: true,
          lineHeight: 1.3,
          stack: [
            { text: `In Both Policy: `, bold: true, margin: [15, 0, 0, 0] },
            {
              fontSize: 11,
              margin: [20, 0, 0, 0],
              ul: [
                ...topTwoCommonPolicy,
              ]
            }
          ]
        })
      }
      if (allCommonPolicySummeryArr.length > 0) {
        addPo2Summary.push(
          {
            fontSize: 11,
            margin: [20, 0, 0, 0],
            lineHeight: 1.3,
            ul: [
              ...allCommonPolicySummeryArr,
            ]
          }
        )

      }

      if (topTwoSenPolicy2.length) {
        addPo2Summary.push({
          margin: [0, 11, 0, 0],
          unbreakable: true,
          lineHeight: 1.3,
          stack: [
            { text: `In ${PolicyModel[0].OverviewPolicyName1} Policy: `, bold: true, margin: [15, 0, 0, 0] },
            {
              fontSize: 11,
              margin: [20, 0, 0, 0],
              ul: [
                ...topTwoSenPolicy2,
              ]
            }
          ]
        })
      }
      if (allPolicyTwoRSummeryArr.length > 0) {

        addPo2Summary.push(
          {
            fontSize: 11,
            margin: [20, 0, 0, 0],
            lineHeight: 1.3,
            ul: [
              ...allPolicyTwoRSummeryArr,
            ]
          }
        )

      }

      if (topTwoSenPolicy1.length) {
        addPo2Summary.push({
          margin: [0, 11, 0, 0],
          unbreakable: true,
          lineHeight: 1.3,
          stack: [
            { text: `In ${Report[0].OverviewPolicyName1} Policy: `, bold: true, margin: [15, 0, 0, 0] },
            {
              fontSize: 11,
              margin: [20, 0, 0, 0],
              ul: [
                ...topTwoSenPolicy1,
              ]
            }
          ]
        })
      }
      if (allPolicyOneRSummeryArr.length) {
        addPo2Summary.push(
          {
            fontSize: 11,
            margin: [20, 0, 0, 0],
            lineHeight: 1.3,
            ul: [
              ...allPolicyOneRSummeryArr,
            ]
          },
        )
      }
    } else {

      if (topTwoSenPolicy1.length) {
        addPo2Summary.push({
          margin: [0, 11, 0, 0],
          unbreakable: true,
          lineHeight: 1.3,
          stack: [
            { text: `In ${Report[0].OverviewPolicyName1} Policy: `, bold: true, margin: [15, 0, 0, 0] },
            {
              fontSize: 11,
              margin: [20, 0, 0, 0],
              ul: [
                ...topTwoSenPolicy1,
              ]
            }
          ]
        })
      }
      if (allPolicyOneRSummeryArr.length) {
        addPo2Summary.push(
          {
            fontSize: 11,
            margin: [20, 0, 0, 0],
            lineHeight: 1.3,
            ul: [
              ...allPolicyOneRSummeryArr,
            ]
          },
        )
      }
    }
  } catch (error) {
    console.log("error - ES - policy")
  }


  const allApexSummaryArr = [], allApex43ReqSummary = []
  let topApex41TwoElements = []
  try {

    for (let i = 0; i < apex41.length; i++) {
      if (apex41[i].description) {
        if (apex41[i].link) {
          allApexSummaryArr.push(
            {
              unbreakable: true,
              margin: [0, 6, 0, 0],
              lineHeight: 1.3,
              stack: [
                {
                  text: [
                    { text: apex41[i].description },
                    { text: "  " },
                    {
                      text: apex41[i].linkTitle ? apex41[i].linkTitle : apex41[i].link,
                      link: apex41[i].link,
                      fontSize: 11,
                      color: 'blue',
                      decoration: 'underline',
                    }
                  ]
                }
              ]
            }
          )
        } else {
          allApexSummaryArr.push({ text: apex41[i].description, unbreakable: true, margin: [0, 6, 0, 0], lineHeight: 1.3 });
        }
      }
    }

    topApex41TwoElements = allApexSummaryArr.splice(0, 1)
  } catch (error) {
    console.log("error - ES - APEX41")
  }

  try {
    for (let i = 0; i < apex43.length; i++) {
      if (apex43[i].description) {
        if (apex43[i].link) {
          allApex43ReqSummary.push(
            {
              unbreakable: true,
              margin: [0, 6, 0, 0],
              lineHeight: 1.3,
              stack: [
                {
                  text: [
                    { text: apex43[i].description },
                    { text: "  " },
                    {
                      text: apex43[i].linkTitle ? apex43[i].linkTitle : apex43[i].link,
                      link: apex43[i].link,
                      fontSize: 11,
                      color: 'blue',
                      decoration: 'underline',
                    }
                  ]
                }
              ]
            }
          )
        } else {
          allApexSummaryArr.push({ text: apex43[i].description, unbreakable: true, margin: [0, 6, 0, 0], lineHeight: 1.3 });
        }
      }
    }
  } catch (error) {
    console.log("error - ES - APEX43")
  }

  try {

    let content = [
      //  4.4 Recommendations
      {
        margin: [0,20, 0, 0],
        unbreakable: true,
        lineHeight: 1.3,
        stack: [
          {
            text: '5.4 Identified Gaps and Recommendations',
            tocItem: ['subToc'],
            style: 'heading',
            tocStyle: { italics: true },
            tocMargin: [20, 5, 0, 0],
          },
          {
            fontSize: 11,
            margin: [20, 0, 0, 0],
            ul: [
              ...topApex41TwoElements
            ]
          },

        ],

      },
      {
        fontSize: 11,
        margin: [20, 0, 0, 0],
        ul: [
          ...allApexSummaryArr,
          ...allApex43ReqSummary,
        ]
      },
      ...addPo2Summary
    ]
    return content;

  } catch (error) {
    console.log("error - Recommendation")
  }


}



module.exports = { getREQ }

