
const ReportModel = require('../Models/reportModel')
const moment = require('moment');
const { PageBreak, convertInchesToTwip, VerticalPositionAlign, HorizontalPositionAlign, HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom, TextWrappingType, TextWrappingSide, ImageRun, HeadingLevel, Paragraph, TextRun, AlignmentType,
    Table, TableRow, TableCell, WidthType, VerticalAlign, BorderStyle,
    TableOfContents
} = require("docx");
const fs = require('fs');


const getReportpdf = async (req, res) => {
    const Report = await ReportModel.find({}).sort({ _id: -1 }).limit(1);

    const firstImagePath = './images/companyLogo.png';
    const secondImagePath = "./images/evenuts-logo.png";

    let imagePath;

    if (fs.existsSync(firstImagePath)) {
        imagePath = firstImagePath;
    } else {
        imagePath = secondImagePath;
    }

    let vd1 = (Report[0].vd1 !== null) ? `${moment(Report[0].vd1).format('DD/MM/YYYY')}` : ""
    let vd2 = (Report[0].vd2 !== null) ? `${moment(Report[0].vd2).format('DD/MM/YYYY')}` : ""

    const transformation = {
        width: 20,
        height: 20
    };

    const tableBorder = {

        top: {
            size: 2,
            style: BorderStyle.SINGLE,
            color: "f7caac",
        },
        bottom: {
            style: BorderStyle.SINGLE,
            size: 2,
            color: "f7caac",
        },
        left: {
            style: BorderStyle.SINGLE,
            size: 2,
            color: "f7caac",
        },
        right: {
            size: 2,
            style: BorderStyle.SINGLE,
            color: "f7caac",
        },

    }

    try {
        const content = [
            new Paragraph({

                alignment: AlignmentType.CENTER,
                spacing: {
                    line: 276,
                    before: 800,
                    after: 260,
                },
                children: [
                    new TextRun({
                        text: "Trend Micro Health Check",
                        size: "31pt",
                    }),
                    new TextRun({
                        text: "Endpoint Security for",
                        break: 1,
                        size: "31pt",
                    }),

                ]
            }),

            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new ImageRun({
                        data: fs.readFileSync(imagePath),
                        transformation: {
                            width: 175,
                            height: 165.16535433,
                        },
                    }),

                ]
            }),

            new Paragraph({
                alignment: AlignmentType.CENTER,
                border: {
                    bottom: {
                        color: "auto",
                        space: 1,
                        style: "single",
                        size: 6,
                    },
                },
                children: [
                    new TextRun({
                        text: `Review of ${Report[0]["cName"]} Apex One ${Report[0].report_type} Implementation`,
                        size: "17pt",
                        break: 2,
                        specVanish: true,
                        font: "Calibri (Body)",
                    })
                ],
            }),

            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new ImageRun({
                        data: fs.readFileSync("./images/bg.png"),
                        transformation: {
                            width: 800,
                            height: 300,

                        },
                        floating: {
                            allowOverlap: true,
                            horizontalPosition: {
                                relative: HorizontalPositionRelativeFrom.PAGE,
                                align: HorizontalPositionAlign.INSIDE,
                            },
                            verticalPosition: {
                                relative: VerticalPositionRelativeFrom.PARAGRAPH,
                                align: VerticalPositionAlign.OUTSIDE,
                            },
                            wrap: {
                                type: TextWrappingType.SQUARE,
                                side: TextWrappingSide.BOTH_SIDES,
                            },
                        },
                    })
                ]
            }),

            new Paragraph({
                alignment: AlignmentType.LEFT,
                size: "11pt",
                indent: {
                    left: convertInchesToTwip(3.7),
                },
                children: [
                    new TextRun({
                        text: `Document Version: ${Report[0].dv}`,
                    }),
                    new TextRun({
                        text: `Version Release Date: ${moment(Report[0].vd).format('DD/MM/YYYY')}`,
                        break: 2,
                    }),
                    new TextRun({
                        text: `Prepared By: ${Report[0].pb}`,
                        break: 2,
                    }),
                    new TextRun({
                        text: `Approved By: ${Report[0].ab}`,
                        break: 2,
                    }),
                    new TextRun({
                        text: `Trend Micro India Pvt Ltd`,
                        break: 2,
                    }),

                    new PageBreak(),




                ]
            }),


            //Document Information & Version History
            new Paragraph({
                spacing: {
                    after: 200
                },
                children: [
                    new TextRun({
                        text: "Document Information",
                        bold: true,
                    })
                ]
            }),
            new Table({
                margins: {
                    top: 150,
                    bottom: 150,
                    left: 200,
                    right: 200
                },
                alignment: AlignmentType.CENTER,
                columnWidths: [2000, 4000, 2000, 4000],
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 2000,
                                    type: WidthType.DXA,
                                },
                                children: [
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        children: [
                                            new TextRun({
                                                text: `Document Version`,
                                                bold: true
                                            }),

                                        ]

                                    })
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 4000,
                                    type: WidthType.DXA,
                                },
                                children: [
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        children: [
                                            new TextRun({
                                                text: Report[0].documentVersion,
                                            }),


                                        ]

                                    })
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 2000,
                                    type: WidthType.DXA,
                                },
                                children: [
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        children: [
                                            new TextRun({
                                                text: `Version Date`,
                                                bold: true
                                            }),

                                        ]

                                    })
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 4000,
                                    type: WidthType.DXA,
                                },
                                children: [
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        children: [
                                            new TextRun({
                                                text: moment(Report[0].vd).format('DD/MM/YYYY'),
                                            }),

                                        ]

                                    })
                                ],
                            }),
                        ],
                    }),

                    new TableRow({
                        children: [
                            new TableCell({
                                children: [
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        children: [
                                            new TextRun({
                                                text: `Title`,
                                                bold: true
                                            }),

                                        ]

                                    })
                                ],
                            }),
                            new TableCell({
                                columnSpan: 3,
                                children: [new Paragraph(`${Report[0].title}`)
                                ],
                            }),

                        ],
                    }),
                ],

            }),

            new Paragraph({
                spacing: {
                    before: 700,
                    after: 200
                },
                children: [
                    new TextRun({
                        text: "Version History",
                        bold: true,

                    })
                ]
            }),

            new Table({
                margins: {
                    top: 150,
                    bottom: 150,
                    left: 200,
                    right: 200
                },
                alignment: AlignmentType.CENTER,
                columnWidths: [800, 2000, 3000, 5000],
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 800,
                                    type: WidthType.DXA,
                                },
                                children: [
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        children: [
                                            new TextRun({
                                                text: `#`,
                                                bold: true
                                            }),

                                        ]

                                    })
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 2000,
                                    type: WidthType.DXA,
                                },
                                children: [
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        children: [
                                            new TextRun({
                                                text: 'Ver. Date',
                                                bold: true
                                            }),


                                        ]

                                    })
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 3000,
                                    type: WidthType.DXA,
                                },
                                children: [
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        children: [
                                            new TextRun({
                                                text: `Revised by`,
                                                bold: true
                                            }),

                                        ]

                                    })
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 5000,
                                    type: WidthType.DXA,
                                },
                                children: [
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        children: [
                                            new TextRun({
                                                text: `Description`,
                                                bold: true
                                            }),

                                        ]

                                    })
                                ],
                            }),
                        ],
                    }),

                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph('1.0')],
                            }),
                            new TableCell({
                                children: [new Paragraph(vd1)],
                            }),
                            new TableCell({
                                children: [new Paragraph(Report[0].initialdraft)],
                            }),
                            new TableCell({
                                children: [new Paragraph('Initial Draft')],
                            }),

                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph('1.1')],
                            }),
                            new TableCell({
                                children: [new Paragraph(vd2)],
                            }),
                            new TableCell({
                                children: [new Paragraph(Report[0].finalreport)],
                            }),
                            new TableCell({
                                children: [new Paragraph('Final Report')],
                            }),

                        ],
                    }),
                ],

            }),

            new Paragraph({ children: [new PageBreak()] }),


            //table of content
            new Paragraph({
                spacing: {
                    after: 200,
                },
                children: [
                    new TextRun({
                        text: "Content",
                        color: '8B0000',
                        size: "16pt",
                    })
                ]
            }),
            new TableOfContents("Summary", {
                hyperlink: true,
                headingStyleRange: "1-5",
                
            }),

            //2.0 INTRODUCTION SECTION
            new Paragraph({
                pageBreakBefore: true,
                text: "1 Introduction",
                heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
                text: `All best practice statements in this document are formed from base principles with the products, and many years of experience within Trend Micro, however all recommendations herein should be validated as being acceptable to meet business, regulation, and security requirements of ${Report[0].cName} to have a successful outcome.`,
                style: "common-space",
            }),
            new Paragraph({
                text: `This document provides best practice recommendations in comparison to the published Best Practice product guides from Trend Micro to the configuration at ${Report[0].cName}. Trend Micro recommends that ${Report[0].cName} evaluate each recommended setting to verify it is suitable within their environment.`,
                style: "common-space",

            }),
            new Paragraph({
                text: `This document follows an established "Red, Amber, Green" methodology for highlighting gaps in best practice.`,
                style: "common-space",
            }),

            new Table({
                margins: {
                    top: 140,
                    bottom: 140,
                    left: 70,
                    right: 70
                },
                alignment: AlignmentType.CENTER,
                columnWidths: [1000, 4505, 1000],
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                shading: {
                                    color: "ffffff",
                                    fill: "989898"
                                },
                                width: {
                                    size: 1000,
                                    type: WidthType.DXA,
                                },
                                children: [
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        children: [
                                            new TextRun({
                                                text: `Status`,
                                                color: "ffffff",
                                                bold: true
                                            }),

                                        ]

                                    })
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,

                                shading: {
                                    color: "ffffff",
                                    fill: "989898"
                                },

                                width: {
                                    size: 4505,
                                    type: WidthType.DXA,
                                },
                                children: [
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        children: [
                                            new TextRun({
                                                text: `Description`,
                                                color: "ffffff",
                                                bold: true
                                            }),


                                        ]

                                    })
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                shading: {
                                    color: "ffffff",
                                    fill: "989898"
                                },
                                width: {
                                    size: 900,
                                    type: WidthType.DXA,
                                },
                                children: [
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        children: [
                                            new TextRun({
                                                text: `Key`,
                                                color: "ffffff",
                                                bold: true
                                            }),

                                        ]

                                    })
                                ],
                            }),
                        ],
                    }),

                    new TableRow({

                        children: [
                            new TableCell({
                                children: [new Paragraph("Good")],
                            }),
                            new TableCell({
                                children: [new Paragraph("Meets Trend Micro Minimum Requirements / Best Practice recommendations")
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new ImageRun({
                                            data: fs.readFileSync("./images/tab1.png"),
                                            transformation: transformation,

                                        })
                                    ]
                                })],
                            }),
                        ],
                    }),

                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph("Concern")],
                            }),
                            new TableCell({
                                children: [new Paragraph("May have a security and/or operational impact on the organization")],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new ImageRun({
                                            data: fs.readFileSync("./images/tab2.png"),
                                            transformation: transformation,
                                        })
                                    ]
                                })],
                            }),
                        ],
                    }),
                    new TableRow({

                        children: [
                            new TableCell({

                                children: [new Paragraph("Critical")],
                            }),
                            new TableCell({

                                children: [new Paragraph("Likely to have a high security and/or operational impact on the organization")

                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new ImageRun({
                                            data: fs.readFileSync("./images/tab3.png"),
                                            transformation: transformation,
                                        })
                                    ]
                                })],
                            }),
                        ],
                    }),
                    new TableRow({

                        children: [
                            new TableCell({

                                children: [new Paragraph("Info")],
                            }),
                            new TableCell({

                                children: [new Paragraph("Tips and Recommendations")

                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new ImageRun({
                                            data: fs.readFileSync("./images/tab4.png"),
                                            transformation: {
                                                width: 23,
                                                height: 23
                                            },
                                        })
                                    ]
                                })],
                            }),
                        ],
                    })

                ],

            }),

            new Paragraph({
                children: [
                    new TextRun({ text: 'Note: ', bold: true }),
                    new TextRun(`Status items are in context to the configuration of the Trend Micro product only and do not consider any other external mitigating feature that ${Report[0].cName} may have in place and context as if ${Report[0].cName} did not have any mitigation of any description.`)
                ],
                alignment: AlignmentType.JUSTIFIED,
                spacing: {
                    line: 276,
                    before: 400,
                    after: 200,
                },
            }),

            new Paragraph({
                text: `Configuration is subject to the requirements of each organization. Trend Micro acknowledges that deviations from published Best Practices are within the scope of ${Report[0].cName} by their specific environment and are subject to internal security requirements. Also, Trend Micro's Best Practice recommendation is subject to change at any time.`,
                style: "common-space",
            }),

            new Paragraph({
                text: "1.1 Health Check Attendees",
                heading: HeadingLevel.HEADING_2,
                spacing: {
                    before: 700,
                    after: 260
                },
            }),

            new Table({
                margins: {
                    top: 150,
                    bottom: 150,
                    left: 200,
                    right: 200
                },
                alignment: AlignmentType.CENTER,
                columnWidths: [3000, 7000],
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({
                                borders: tableBorder,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 3000,
                                    type: WidthType.DXA,
                                },
                                children: [
                                    new Paragraph('Location')
                                ],
                            }),
                            new TableCell({
                                borders: tableBorder,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 7000,
                                    type: WidthType.DXA,
                                },
                                children: [
                                    new Paragraph(Report[0].location)
                                ],
                            }),

                        ],
                    }),

                    new TableRow({
                        children: [
                            new TableCell({
                                borders: tableBorder,
                                children: [new Paragraph('Customer Attendance')],
                            }),
                            new TableCell({
                                borders: tableBorder,
                                children: [new Paragraph(Report[0].customerAttendance)],
                            }),


                        ],
                    }),
                    new TableRow({

                        children: [
                            new TableCell({
                                borders: tableBorder,
                                children: [new Paragraph('Trend Micro Attendance')],
                            }),
                            new TableCell({
                                borders: tableBorder,
                                children: [new Paragraph(Report[0].trendMicroAttendance)],
                            }),

                        ],
                    }),
                ],

            })

        ]

        return content;

    } catch (error) {

        console.log("error doc")
        if (error) throw error


    }
}



module.exports = {
    getReportpdf
}

