const { AlignmentType, NumberFormat, Footer, Header,
    PageBreak, PageNumber, Document, HeadingLevel, LevelFormat,
    Packer, Paragraph, TextRun, UnderlineType, ImageRun,
    VerticalPositionAlign,
    HorizontalPositionAlign, HorizontalPositionRelativeFrom,
    VerticalPositionRelativeFrom,
    TextWrappingType, TextWrappingSide, addCompatibility, doNotExpandShiftReturn
} = require("docx");
const ReportModel = require('../Models/reportModel')
const moment = require('moment')
const fs = require('fs');
const date = new Date();
const saveAs = require('file-saver');

const { getReportpdf } = require('./report');
const { getES } = require('./ExecutiveSummary');
const { apex41pdf } = require('./apex41');
const { apex43pdf } = require('./apex43');
const { getPo1 } = require('./po1');
const { getPo2 } = require('./po2');
const { getREQ } = require('./Recommendation');
const { getRecommendedProcedure } = require("./recommendedProcedure")
const { getCharts } = require("./chart")

const getTrendMicroReportDocx = async (req, res) => {
    const Report = await ReportModel.find({}).sort({ _id: -1 }).limit(1);

    const [report, ES, apex41, po1, apex43, Recommendation, charts] = await Promise.all([
        getReportpdf(),
        getES(),
        apex41pdf(),
        getPo1(),
        apex43pdf(),
        getREQ(),
        getCharts(),
    ]);

    let combinedContent = []

    if (Report[0].checkPolicyOverviewTwoAdded) {
        const po2 = await getPo2();
        combinedContent = [...report, ...ES, ...apex41, ...po1, ...po2, ...apex43, ...Recommendation];
    }
    else {
        combinedContent = [...report, ...ES, ...apex41, ...po1, ...apex43, ...Recommendation];
    }

    if (Report[0].showRecommendedProcedure) {
        const recommendedProcedureArr = await getRecommendedProcedure();
        combinedContent = [...combinedContent, ...recommendedProcedureArr, ...charts];
    } else {
        combinedContent = [...combinedContent, ...charts];
    }



    let headerText = {
        text: `Trend Micro Health Check | Apex one As a Service | ${Report[0].companyName}`,
        alignment: "left",
    }

    if (Report[0].report_type === "On-Premises") {
        headerText = {
            text: `Trend Micro Health Check | Apex one On Premises | ${Report[0].companyName}`,
            alignment: "left",
        }
    }


    const doc = new Document({
        features: {
            updateFields: true,
        },
        creator: "Eventus Security",
        title: "Sample Document",
        description: "docx of Trend Micro Health check report",
        numbering: {
            config: [
                {
                    reference: "my-crazy-numbering",
                    levels: [
                        {
                            level: 1,
                            format: "decimal",
                            text: "%2.",
                            format: LevelFormat.BULLET,
                            text: "\u27A2",
                            alignment: AlignmentType.START,
                            style: {
                                paragraph: {
                                    indent: { left: 1440, hanging: 980 },
                                    alignment: AlignmentType.JUSTIFIED,
                                    spacing: {
                                        line: 276,
                                        before: 230,
                                        after: 200
                                    },
                                    keepLines: true,
                                },
                            },
                        },


                    ],
                },
            ],
        },
        styles: {
            default: {
                heading1: {
                    run: {
                        color: '8B0000',
                        size: "16pt",
                    }
                },
                heading2: {
                    run: {
                        color: '8B0000',
                        size: "16pt",
                    }
                },
                listParagraph: {
                    run: {
                        color: "000000",
                    },
                },
                document: {
                    run: {
                        size: "11pt",
                        font: "Calibri",
                    }
                },
            },
            paragraphStyles: [
                {
                    id: "common-space",
                    name: "common-space",
                    paragraph: {
                        alignment: AlignmentType.JUSTIFIED,
                        spacing: {
                            line: 276,
                            before: 220,
                            after: 200,
                        },
                        keepLines: true,
                    },
                },
                {
                    id: "bullet-para",
                    name: "bullet-para",
                    paragraph: {
                        alignment: AlignmentType.JUSTIFIED,
                        spacing: {
                            line: 276,
                        },
                        bullet: { level: 0 },
                        keepLines: true,
                    },
                },
                {
                    id: "bullet-para1",
                    name: "bullet-para1",
                    paragraph: {
                        spacing: {
                            line: 276,
                        },
                        bullet: { level: 0 },
                        keepLines: true,
                        indent: { left: 1440, hanging: 980 },
                    },
                },
                {
                    id: "image-style",
                    name: "image-style",
                    paragraph: {
                        alignment: AlignmentType.CENTER,
                        spacing: {
                            line: 276,
                            before: 300,
                            after: 230,
                        },
                        keepLines: true,

                    },
                },

            ],
        },
        sections: [
            {
                properties: {
                    page: {
                        pageNumbers: {
                            start: 1,
                            formatType: NumberFormat.DECIMAL,
                        },
                    },
                },
                headers: {
                    default: new Header({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        size: "9pt",
                                        text: headerText,
                                    }),
                                    new ImageRun({
                                        data: fs.readFileSync("./images/footer-logo.png"),
                                        transformation: {
                                            width: 100,
                                            height: 30
                                        },
                                        floating: {
                                            horizontalPosition: {
                                                relative: HorizontalPositionRelativeFrom.MARGIN,
                                                align: HorizontalPositionAlign.RIGHT,

                                            },
                                            verticalPosition: {
                                                relative: VerticalPositionRelativeFrom.TOP_MARGIN,
                                                align: VerticalPositionAlign.CENTER,
                                            },
                                            wrap: {
                                                type: TextWrappingType.SQUARE,
                                                side: TextWrappingSide.BOTH_SIDES,
                                            },
                                        },
                                    })
                                ]
                            })
                        ],
                    }),

                },
                footers: {
                    default: new Footer({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [

                                    new TextRun({
                                        children: ["Page | ", PageNumber.CURRENT],
                                    })

                                ],
                            }),
                        ],
                    }),
                },
                children: combinedContent,
            },
        ],
    })


    const b64string = await Packer.toBase64String(doc);
    res.setHeader('Content-Disposition', 'attachment; filename=My Document.docx');
    res.send(Buffer.from(b64string, 'base64'));

    Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync("My Document.docx", buffer);
    });


}


module.exports = {
    getTrendMicroReportDocx
}


