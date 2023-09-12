
const { json } = require('express')
const ReportModel = require('../Models/reportModel')
const moment = require('moment')


const apex43pdf = async (req, res) => {
    const Report = await ReportModel.find({}).sort({ _id: -1 }).limit(1);


    let product_registration = ""

    if (Report[0].product_registration === "Enabled") {
        product_registration = { text: `Apex One Server is Registered` }
    } else {
        product_registration = { text: `Apex One Server is not Registered` }
    }

    const preReport = [];
    let saasPageBreak = "before", saasMargin = [0, 0, 0, 0];

    if (Report[0].report_type === "On-Premises") {
        saasPageBreak = "none"
        saasMargin = [0, 20, 0, 0]
        preReport.push(
            ['Version', `Build ${Report[0].version3}`, `Build ${Report[0].version4}`, { image: `${Report[0].tab60}`, style: "imgStyle", width: 15 }],
            ['License', 'Within Term', `${moment(Report[0].license_date2).format('DD/MM/YYYY')}`, { image: `${Report[0].tab6060}`, style: "imgStyle", width: 15 }],
        )
    }

    try {

        let content = [
            //5.3 Apex Central Configuration Overview

            {
                margin: saasMargin,
                pageBreak: saasPageBreak,
                text: '5.3 Apex Central Configuration Overview',
                tocItem: ['subToc'],
                style: 'heading',
                tocStyle: { italics: true },
                tocMargin: [20, 5, 0, 0],
            },

            {
                fontSize: 11,
                margin: [0, 11, 0, 0],
                lineHeight: 1.5,
                table: {

                    body: [
                        [{ text: 'Component', style: "apexone41" }, { text: 'Trend Recommended', style: "apexone41" }, { text: 'Deployed', style: "apexone41" }, { text: 'Status', style: "apexone41" }],
                        [{ text: 'Configuration Health - Overview', bold: true, colSpan: 2, fillColor: 'lightblue' }, '', { text: " " }, ''],
                        ...preReport,
                        ['Active Directory Sync', 'Configure', { text: `${Report[0].active_directory}` }, { image: `${Report[0].tab61}`, style: "imgStyle", width: 15 }],

                        ['Log Retention', 'Configure', { text: `${Report[0].log_retention}` }, { image: `${Report[0].tab62}`, style: "imgStyle", width: 15 }],

                        ['Reports', 'Configure', { text: `${Report[0].reports}` }, { image: `${Report[0].tab63}`, style: "imgStyle", width: 15 }],

                        ['Event Notifications', 'Enable', { text: `${Report[0].event_notification}` }, { image: `${Report[0].tab64}`, style: "imgStyle", width: 15 }],
                        ['Syslog', 'Configure', `${Report[0].syslog}`, { image: `${Report[0].tab65}`, style: "imgStyle", width: 15 }],
                        ['Report Maintenance', 'Configure', `${Report[0].report_maintenance}`, { image: `${Report[0].tab66}`, style: "imgStyle", width: 15 }],
                        ['Product Registration', 'Register all Trend Micro products with Apex Central', product_registration, { image: `${Report[0].tab67}`, style: "imgStyle", width: 15 }],

                    ]
                }
            },
        ]

        return content;
    } catch (error) {
        throw new Error(error.message);
    }

}



module.exports = { apex43pdf }

