
const {ReportModel} = require('../Models/reportModel')
const moment = require('moment')

const getReportpdf = async (req, res) => {
    const Report = await ReportModel.find({}).sort({ _id: -1 }).limit(1);

    let vd1 = (Report[0].vd1 !== null) ? `${moment(Report[0].vd1).format('DD/MM/YYYY')}` : ""
    let vd2 = (Report[0].vd2 !== null) ? `${moment(Report[0].vd2).format('DD/MM/YYYY')}` : ""

    let content = [
        {
            text: `Trend Micro Health Check\nEndpoint Security`,
            style: "header",
            lineHeight: 1.2,
            margin: [0, 50, 0, 0],
        },
        {
            image: `${Report[0].cLogo}`,
            fit: [180, 180],
            margin: [0, 30, 0, 0],
            alignment: "center",
        },
        {
            text: `Review of ${Report[0]["cName"]} Apex One ${Report[0].report_type} Implementation`,
            fontSize: 17,
            // bold: true,
            alignment: "center",
            decoration: 'underline',
            margin: [0, 30, 0, 0],
        },
        {
            stack: [
                ` Document Version: ${Report[0].dv}
                    Version Release Date: ${moment(Report[0].vd).format('DD/MM/YYYY')}
                    Prepared By: ${Report[0].pb}
                    Approved By: ${Report[0].ab}
                    Trend Micro India Pvt Ltd `
            ],
            fontSize: 11,
            pageBreak: 'after',
            lineHeight: 2,
            absolutePosition: { x: 350, y: 620 },
        },

        // 2nd page design - intro 2
        { text: 'Document Information', style: 'header1' },
        {
            table: {
                widths: ['*', 100, 100, '*'],
                heights: [20, 20, 20, 20],
                body: [
                    [{ text: 'Document Version', style: 'tableExample', bold: true }, { text: `${Report[0].documentVersion}`, style: 'tableExample', }, { text: 'Version Date', style: 'tableExample', bold: true }, { text: `${moment(Report[0].vd).format('DD/MM/YYYY')}`, style: 'tableExample', }],
                    [{ text: 'Title', style: 'tableExample', bold: true }, { text: `${Report[0].title}`, colSpan: 3, style: 'tableExample', }],
                ],
            }
        },

        { text: 'Version History', style: 'header1', margin: [0, 30, 0, 0], },
        {
            margin: [0, 10, 0, 0],
            table: {
                widths: [20, 100, 100, '*'],
                heights: [20, 20, 20, 20],
                body: [
                    [{ text: '#', style: 'tableExample', bold: true }, { text: 'Version Date', style: 'tableExample', bold: true }, { text: 'Revised by', style: 'tableExample', bold: true }, { text: 'Description', style: 'tableExample', bold: true }],
                    [{ text: '1.0', style: 'tableExample' }, { text: vd1, style: 'tableExample' }, { text: `${Report[0].initialdraft}	`, style: 'tableExample' }, { text: 'Initial Draft', style: 'tableExample' }],
                    [{ text: '1.1', style: 'tableExample' }, { text: vd2, style: 'tableExample' }, { text: `${Report[0].finalreport}`, style: 'tableExample' }, { text: 'Final Report', style: 'tableExample' }],
                ],
            },
        },

        // table of content

        {
            pageBreak: 'before',
            toc: {
                id: 'mainToc',
                title: { text: 'INDEX' }
            },

            toc: {
                id: 'subToc',
                title: { text: '1 Content', fontSize: 16, bolditalics: true, color: '#8B0000' },
            }

        },
        {

            text: '2 Introduction',
            style: 'heading',
            tocItem: ['mainToc', 'subToc'],
            tocStyle: { bold: true },
            tocMargin: [0, 10, 0, 0],
            alignment: 'justify',
            pageBreak: 'before'
        },
        {
            text: `All best practice statements in this document are formed from base principles with the products, and many years of experience within Trend Micro, however all recommendations herein should be validated as being acceptable to meet business, regulation, and security requirements of ${Report[0].cName} to have a successful outcome.
        
                This document provides best practice recommendations in comparison to the published Best Practice product guides from Trend Micro to the configuration at ${Report[0].cName}. Trend Micro recommends that ${Report[0].cName} evaluate each recommended setting to verify it is suitable within their environment.
                
                This document follows an established "Red, Amber, Green" methodology for highlighting gaps to best practice.` ,
            style: "common",
        },

        {
            style: "common",
            table: {
                widths: ['*', 200, 200, '*'],
                heights: [20, 20, 20, 20],
                body: [
                    [{ text: 'Status', style: 'tableExample', bold: true, alignment: 'center', fillColor: "#989898", color: '#fff' }, { text: 'Description', style: 'tableExample', bold: true, alignment: 'center', colSpan: 2, fillColor: "#989898", color: '#fff' }, {},
                    { text: 'Key', style: 'tableExample', bold: true, alignment: 'center', fillColor: "#989898", color: '#fff' }],

                    [{ text: "Good", style: 'tableExample' }, { text: 'Meets Trend Micro Minimum Requirements / Best Practice recommendations', colSpan: 2, style: 'tableExample' }, {}, { image: "images/tab1.png", margin: [12, 7, 0, 0], width: 15 }],
                    [{ text: "Concern", style: 'tableExample' }, { text: 'Concern It May have security and/or operational impact on the organization', colSpan: 2, style: 'tableExample' }, {}, { image: "images/tab2.png", margin: [12, 7, 0, 0], width: 15 }],
                    [{ text: "Critical", style: 'tableExample' }, { text: 'Likely to have high security and/or operational impact on the organization', colSpan: 2, style: 'tableExample' }, {}, { image: "images/tab3.png", margin: [12, 6, 0, 0], width: 15 }],
                    [{ text: "Info", style: 'tableExample' }, { text: 'Tips and recommendations.', colSpan: 2, style: 'tableExample' }, {}, { image: "images/tab4.png", margin: [11, 6, 0, 0], width: 19 }]
                ],
            }
        },

        {
            style: "common",

            text: [
                { text: 'Note: ', bold: true },
                `Status items are in context to the configuration of the Trend Micro product only and do not consider any other external mitigating feature that ${Report[0].cName} may have in place and context as if ${Report[0].cName} did not have any mitigation of any description.
        
                Configuration is subject to the requirements of each organization. Trend Micro acknowledges that deviations from published Best Practices are within the scope of ${Report[0].cName} by their specific environment and are subject to internal security requirements. Also, Trend Micro Best Practice recommendation is subject to change at any time.`

            ]
        },

        {

            text: '2.1 Health Check Attendees',
            tocItem: ['subToc'],
            style: ['heading', 'commonGap'],
            tocStyle: { italics: true },
            tocMargin: [20, 5, 0, 0],

        },
        {
            unbreakable: 'true',
            style: "common",
            table: {
                widths: ['*', 100, 100, 100, 100, '*'],
                heights: [20, 20, 20, 20, 20, 20],

                body: [

                    [{ text: 'Location', style: 'tableExample', bold: true, colSpan: 2 }, {}, { text: `${Report[0].location}`, colSpan: 3, style: 'tableExample', }, {}, {}],

                    [{ text: 'Customer Attendance', style: 'tableExample', bold: true, colSpan: 2 }, {}, { text: `${Report[0].customerAttendance}`, colSpan: 3, style: 'tableExample', }, {}, {}],

                    [{ text: 'Trend Micro Attendance', style: 'tableExample', bold: true, colSpan: 2 }, {}, { text: `${Report[0].trendMicroAttendance}`, colSpan: 3, style: 'tableExample', }, {}, {}],
                ],
            },
            layout: {
                hLineColor: function (i, node) {
                    return '#f7caac';
                },
                vLineColor: function (i, node) {
                    return '#f7caac';
                },
            },
        },
    ]






    return content
}



module.exports = {
    getReportpdf
}

