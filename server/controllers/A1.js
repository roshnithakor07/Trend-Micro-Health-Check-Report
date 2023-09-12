
const ReportModel = require('../Models/reportModel')

const getA1pdf = async (req, res) => {
  const Report = await ReportModel.find({}).sort({ _id: -1 }).limit(1);

  let content = [
    {
      image: `${Report[0].cLogo}`,
      width: 180,
      height: 180,
      margin: [0, 30, 0, 0],
      alignment: "center",
    },
    {
      text: `Review of ${Report[0].cName} Apex One On-Premises`,
      fontSize: 15,
      bold: true,
      alignment: "center",
      decoration: 'underline',
      margin: [0, 30, 0, 0],
    },

  ]



  return content
}



module.exports = {
  getA1pdf
}

