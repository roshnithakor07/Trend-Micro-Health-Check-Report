
const ReportModel = require('../Models/reportModel')
const moment = require('moment')
const fs = require('fs');
const { ImageRun, HeadingLevel, Paragraph, TextRun, AlignmentType,
    Table, TableRow, TableCell, WidthType, VerticalAlign } = require("docx");

let tab1 = "images/tab1.png";

const transformation = {
    width: 20,
    height: 20
};


const apex43pdf = async (req, res) => {
    const Report = await ReportModel.find({}).sort({ _id: -1 }).limit(1);


    let product_registration = ""

    if (Report[0].product_registration === "Enabled") {
        product_registration = { text: `Apex One Server is Registered` }
    } else {
        product_registration = { text: `Apex One Server is not Registered` }
    }

    const preReport = [];

    if (Report[0].report_type === "On-Premises") {
        preReport.push(
            ['Version', `Build ${Report[0].version3}`, `Build ${Report[0].version4}`, { image: `${Report[0].tab60}`, style: "imgStyle", width: 15 }],
            ['License', 'Within Term', `${moment(Report[0].license_date2).format('DD/MM/YYYY')}`, { image: `${Report[0].tab6060}`, style: "imgStyle", width: 15 }],
        )
    }

    function createTableRow(data) {
        return new TableRow({
            children: [
                new TableCell({ children: [new Paragraph(data[0])] }),
                new TableCell({ children: [new Paragraph(data[1])] }),
                new TableCell({ children: [new Paragraph(data[2].text || data[2])] }),
                new TableCell({
                    verticalAlign: VerticalAlign.CENTER,
                    children: [
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new ImageRun({
                                    data: fs.readFileSync(data[3].image || data[3]),
                                    transformation: transformation
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }

    // Sample rows data
    const rowsData = [
        ['Active Directory Sync', 'Configure', { text: `${Report[0].active_directory}` }, { image: `${Report[0].tab61}`, style: "imgStyle", width: 15 }],

        ['Log Retention', 'Configure', { text: `${Report[0].log_retention}` }, { image: `${Report[0].tab62}`, style: "imgStyle", width: 15 }],

        ['Reports', 'Configure', { text: `${Report[0].reports}` }, { image: `${Report[0].tab63}`, style: "imgStyle", width: 15 }],

        ['Event Notifications', 'Enable', { text: `${Report[0].event_notification}` }, { image: `${Report[0].tab64}`, style: "imgStyle", width: 15 }],
        ['Syslog', 'Configure', `${Report[0].syslog}`, { image: `${Report[0].tab65}`, style: "imgStyle", width: 15 }],
        ['Report Maintenance', 'Configure', `${Report[0].report_maintenance}`, { image: `${Report[0].tab66}`, style: "imgStyle", width: 15 }],
        ['Product Registration', 'Register all Trend Micro products with Apex Central', product_registration, { image: `${Report[0].tab67}`, style: "imgStyle", width: 15 }],
    ];

    const tablesOfRows = [];
    
    for (const rowData of rowsData) {
        tablesOfRows.push(createTableRow(rowData))
    }

    if (preReport.length) {

        for (const rowData of preReport) {
            tablesOfRows.unshift(createTableRow(rowData))
        }
    }


    const content = [
        new Paragraph({
            text: '4.3 Apex Central Configuration Overview',
            heading: HeadingLevel.HEADING_2,
            keepLines: true,
            keepNext: true,
            spacing: {
                before: 220,
                after: 230,
            }
        }),
        new Table({
            margins: {
                top: 60,
                bottom: 60,
                left: 60,
                right: 50
            },
            alignment: AlignmentType.CENTER,
            columnWidths: [7000, 8000, 4500, 1000],
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            shading: {
                                color: "ffffff",
                                fill: "000000"
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 7000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    text: 'Component',
                                })
                            ],
                        }),
                        new TableCell({
                            shading: {
                                color: "ffffff",
                                fill: "000000"
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 8000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    text: 'Trend Recommended'
                                })
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 4500,
                                type: WidthType.DXA,
                            },
                            shading: {
                                color: "ffffff",
                                fill: "000000"
                            },
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    text: 'Deployed'
                                })
                            ],
                        }),
                        new TableCell({
                            shading: {
                                color: "ffffff",
                                fill: "000000"
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 1000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    text: 'Status'
                                })
                            ],
                        }),
                    ],
                }),

                new TableRow({
                    children: [
                        new TableCell({

                            shading: {
                                color: "000000",
                                fill: "ADD8E6"
                            },

                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Configuration Health - Overview",
                                        bold: true
                                    })
                                ]

                            })], columnSpan: 2
                        }),
                        new TableCell({ children: [new Paragraph("")] }),
                        new TableCell({ children: [new Paragraph("")] }),
                    ]
                }),


                ...tablesOfRows,



            ]
        })
    ]

    return content;


    try {

    } catch (error) {
        throw new Error(error.message);
    }

}



module.exports = { apex43pdf }

