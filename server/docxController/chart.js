const fs = require('fs')
const { Chart1, Ag, Virus, Spyware, Bm, Dc, Ips, Smartscan, Wr, Cc, FurtherInformation } = require('../Models/chartModel');
const { ImageRun, HeadingLevel, Paragraph, TextRun, AlignmentType,
    Table, TableRow, TableCell, WidthType, VerticalAlign,
    ExternalHyperlink } = require("docx");

let chartFolderName = 'chart-image';

const transformation = {
    width: 427.84251969,
    height: 256.62992126
};
const commonSpace = {
    before: 260,
    after: 100,
};
const commonTableSpace = {
    before: 200,
    after: 100,
};

const spacing = {
    line: 276,
    after: 200,
};

const getCharts = async (req, res) => {

    const chart1 = await Chart1.find({}).sort({ _id: -1 }).limit(1);
    const ag1 = await Ag.find({}).sort({ _id: -1 }).limit(1);
    const virus1 = await Virus.find({}).sort({ _id: -1 }).limit(1);
    const spyware1 = await Spyware.find({}).sort({ _id: -1 }).limit(1);
    const wr1 = await Wr.find({}).sort({ _id: -1 }).limit(1);
    const ips1 = await Ips.find({}).sort({ _id: -1 }).limit(1);
    const bm1 = await Bm.find({}).sort({ _id: -1 }).limit(1);
    const dc1 = await Dc.find({}).sort({ _id: -1 }).limit(1);
    const cc1 = await Cc.find({}).sort({ _id: -1 }).limit(1);
    const smartscan1 = await Smartscan.find({}).sort({ _id: -1 }).limit(1);
    const furtherInformation1 = await FurtherInformation.find({}).sort({ _id: -1 }).limit(1);



    //furtherInformation
    let linkTitle1 = JSON.parse(furtherInformation1[0].linkTitle1)
    let furtherInformation11 = JSON.parse(furtherInformation1[0].furtherInformation1)
    let linkTitle2 = JSON.parse(furtherInformation1[0].linkTitle2)
    let furtherInformation2 = JSON.parse(furtherInformation1[0].furtherInformation2)
    let linkTitle3 = JSON.parse(furtherInformation1[0].linkTitle3)
    let furtherInformation3 = JSON.parse(furtherInformation1[0].furtherInformation3)

    let link1 = [], link2 = [], link3 = []

    for (var i = 0; i < linkTitle1.length; i++) {
        link1.push(
            new Paragraph({
                alignment: AlignmentType.JUSTIFIED,
                indent: { left: 400 },
                spacing: {
                    line: 276,
                    before: 220,
                    after: 200,
                },
                keepLines: true,
                children: [
                    new ExternalHyperlink({
                        children: [
                            new TextRun({
                                text: `${linkTitle1[i]}`,
                                style: "Hyperlink",
                            }),
                        ],
                        link: `${furtherInformation11[i]}`,
                    }),
                ],
            })
        )
    }

    for (var i = 0; i < linkTitle2.length; i++) {
        link2.push(
            new Paragraph({
                alignment: AlignmentType.JUSTIFIED,
                indent: { left: 400 },
                spacing: {
                    line: 276,
                    before: 220,
                    after: 200,
                },
                keepLines: true,
                children: [
                    new ExternalHyperlink({
                        children: [
                            new TextRun({
                                text: `${linkTitle2[i]}`,
                                style: "Hyperlink",
                            }),
                        ],
                        link: `${furtherInformation2[i]}`,
                    }),
                ],
            })
        )
    }

    for (var i = 0; i < linkTitle3.length; i++) {
        link3.push(new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            indent: { left: 400 },
            spacing: {
                line: 276,
                before: 220,
                after: 200,
            },
            keepLines: true,
            children: [
                new ExternalHyperlink({
                    children: [
                        new TextRun({
                            text: `${linkTitle3[i]}`,
                            style: "Hyperlink",
                        }),
                    ],
                    link: `${furtherInformation3[i]}`,
                }),
            ],
        }))
    }

    const chartDescriptionFun = (value, chartArr) => {
        let v_des0 = []

        let chartDescription1 = JSON.parse(chartArr[0].chartDescription);
        if (chartDescription1[value].length) {
            for (let i = 0; i < chartDescription1[value].length; i++) {
                v_des0.push(
                    new Paragraph({
                        style: "bullet-para",
                        text: chartDescription1[value][i],
                    })
                )
                try {
                    const chartSubPoints1 = JSON.parse(chartArr[0].chartSubPoints);

                    if (chartSubPoints1[value][i].length) {
                        for (const iterator of chartSubPoints1[value][i]) {
                            v_des0.push(
                                new Paragraph({
                                    text: iterator,
                                    spacing: {
                                        line: 276,
                                        before: 100,
                                        after: 100
                                    },
                                    bullet: {
                                        level: 1,
                                    },
                                }),
                            );
                        }

                    }

                } catch (error) {

                }
            }
        }
        return v_des0

    }

    const showCharts = JSON.parse(chart1[0].showCharts); //9
    const showChartVirus = JSON.parse(virus1[0].showChart); //3
    const showChartSpyware = JSON.parse(spyware1[0].showChart); //3
    const showChartsWr = JSON.parse(wr1[0].showChart); //3
    const showChartsIp = JSON.parse(ips1[0].showChart); //3 + table = 4
    const showChartsDc = JSON.parse(dc1[0].showChart);// 3 + table = 4
    const showChartsCc = JSON.parse(cc1[0].showChart); // 2
    const showChartsBm = JSON.parse(bm1[0].showChart); // 2 + table = 3

    const chartTitle = JSON.parse(chart1[0].chartTitles);


    const agChart = [], vChart = [], spChart = [], wrChart = [], ipChart = [];
    const dcChart = [], ccChart = [], bmChart = [], ssChart = [];


    //6.1 AG
    if (showCharts[0]) {

        const agBody = [];
        const platform = JSON.parse(ag1[0].platform);
        const platform_count = JSON.parse(ag1[0].platform_count);

        for (var i = 0; i < platform.length; i++) {
            agBody.push(
                new TableRow({
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    text: platform[i]
                                })
                            ]
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    text: `${platform_count[i]}`
                                })
                            ]
                        })
                    ]
                }))
        };

        let chartDescription0 = JSON.parse(ag1[0].chartDescription);
        const ag_des0 = chartDescription0.map(i => ((new Paragraph({ text: i, style: "bullet-para" }))));

        agChart.push(

            new Paragraph({
                text: (chartTitle[0]) ? chartTitle[0] : "5.1 Agent Distribution",
                heading: HeadingLevel.HEADING_2,
                keepLines: true,
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
                columnWidths: [8000, 5000],
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({
                                shading: {
                                    color: "000000",
                                    fill: "ADD8E6"
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 8000,
                                    type: WidthType.DXA,
                                },
                                children: [
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        children: [
                                            new TextRun({
                                                text: 'Agent Platform ',
                                                bold: true,
                                            })
                                        ]
                                    })
                                ]
                            }),
                            new TableCell({
                                shading: {
                                    color: "000000",
                                    fill: "ADD8E6"
                                },
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
                                                text: 'Count',
                                                bold: true,
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),

                    ...agBody,

                    new TableRow({
                        children: [
                            new TableCell({
                                shading: {
                                    color: "000000",
                                    fill: "ADD8E6"
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 8000,
                                    type: WidthType.DXA,
                                },
                                children: [
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        children: [
                                            new TextRun({
                                                text: 'Total',
                                                bold: true,
                                            })
                                        ]
                                    })
                                ]
                            }),
                            new TableCell({
                                shading: {
                                    color: "000000",
                                    fill: "ADD8E6"
                                },
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
                                                text: `${ag1[0].platform_count_sum}`,
                                                bold: true,
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                ]
            }),
            new Paragraph({
                style: 'image-style',
                children: [
                    new ImageRun({
                        data: fs.readFileSync(`${chartFolderName}/ag_img1.png`),
                        transformation: transformation
                    })
                ]
            }),
            ...ag_des0

        )

    }


    //6.2 VIRUS 
    if (showCharts[1]) {
        const vDescription = [];
        try {
            const firstImagePath = './images/virusIMage.png';
            const secondImagePath = './images/PA.png';

            let imagePath;

            if (fs.existsSync(firstImagePath)) {
                imagePath = firstImagePath;
            } else {
                imagePath = secondImagePath;
            }

            let vDesTitle = virus1[0].desTitle;
            let vDesImages = virus1[0].desImages;
            let vDes = virus1[0].desDescription;

            if (virus1[0].checkDescriptionAdded) {

                if (vDesTitle.length) {

                    vDescription.push(
                        new Paragraph({
                            indent: {
                                left: 350
                            },
                            text: vDesTitle, style: 'common-space'
                        })
                    )

                }

                if (vDesImages.length) {
                    vDescription.push(
                        new Paragraph({
                            style: 'image-style',
                            children: [
                                new ImageRun({
                                    data: fs.readFileSync(imagePath),
                                    transformation: {
                                        width: 399.87401575,
                                        height: 233.95275591
                                    }
                                })
                            ]
                        }),
                    )
                }

                if (vDes.length) {
                    vDescription.push(
                        new Paragraph({ text: vDes, style: 'bullet-para' })
                    )
                }

            }
        } catch (error) {
            console.log("error - virus des")
        }


        const v_des0 = chartDescriptionFun(0, virus1);
        const v_des1 = chartDescriptionFun(1, virus1);
        const v_des2 = chartDescriptionFun(2, virus1);

        vChart.push(
            new Paragraph({
                text: chartTitle[1] ? chartTitle[1] : "5.2 Virus/Malware",
                heading: HeadingLevel.HEADING_2,
                keepLines: true,
                spacing: commonSpace
            }),
            new Paragraph({ text: `${virus1[0].chartFirstLine}`, spacing: spacing }),
        )

        if (showChartVirus[0]) {
            vChart.push(
                new Paragraph({
                    style: 'image-style',
                    children: [
                        new ImageRun({
                            data: fs.readFileSync(`${chartFolderName}/v_img1.png`),
                            transformation: transformation
                        })
                    ]
                }),
                ...v_des0,
                ...vDescription
            )
        };

        if (showChartVirus[1]) {
            vChart.push(
                new Paragraph({
                    style: 'image-style',
                    children: [
                        new ImageRun({
                            data: fs.readFileSync(`${chartFolderName}/v_img2.png`),
                            transformation: transformation
                        })
                    ]
                }),
                ...v_des1
            )

        }
        if (showChartVirus[2]) {
            vChart.push(
                new Paragraph({
                    style: 'image-style',
                    children: [
                        new ImageRun({
                            data: fs.readFileSync(`${chartFolderName}/v_img3.png`),
                            transformation: transformation
                        })
                    ]
                }),
                ...v_des2,

                ...vDescription
            )
        }


    };

    // 6.3 Spyware/ Grayware

    if (showCharts[2]) {

        const vDescription = [];
        try {
            const firstImagePath = './images/spywareIMage.png';
            const secondImagePath = './images/PA.png';

            let imagePath;

            if (fs.existsSync(firstImagePath)) {
                imagePath = firstImagePath;
            } else {
                imagePath = secondImagePath;
            }

            let vDesTitle = spyware1[0].desTitle;
            let vDesImages = spyware1[0].desImages;
            let vDes = spyware1[0].desDescription;

            if (spyware1[0].checkDescriptionAdded) {

                if (vDesTitle.length) {

                    vDescription.push(
                        new Paragraph({
                            indent: {
                                left: 350
                            },
                            text: vDesTitle, style: 'common-space'
                        })
                    )

                }

                if (vDesImages.length) {
                    vDescription.push(
                        new Paragraph({
                            style: 'image-style',
                            children: [
                                new ImageRun({
                                    data: fs.readFileSync(imagePath),
                                    transformation: {
                                        width: 399.87401575,
                                        height: 233.95275591
                                    }
                                })
                            ]
                        }),
                    )
                }

                if (vDes.length) {
                    vDescription.push(
                        new Paragraph({ text: vDes, style: 'bullet-para' })
                    )
                }

            }
        } catch (error) {
            console.log("error - spyware des")
        }

        const v_des0 = chartDescriptionFun(0, spyware1);
        const v_des1 = chartDescriptionFun(1, spyware1);
        const v_des2 = chartDescriptionFun(2, spyware1);

        spChart.push(
            new Paragraph({
                text: chartTitle[2] ? chartTitle[2] : "5.3 Spyware/Grayware",
                heading: HeadingLevel.HEADING_2,
                keepLines: true,
                spacing: commonSpace
            }),
            new Paragraph({ text: `${spyware1[0].chartFirstLine}`, spacing: spacing })
        )

        if (showChartSpyware[0]) {
            spChart.push(
                new Paragraph({
                    style: 'image-style',
                    children: [
                        new ImageRun({
                            data: fs.readFileSync(`${chartFolderName}/s_img1.png`),
                            transformation: transformation
                        })
                    ]
                }),
                ...v_des0,
                ...vDescription
            )
        };
        if (showChartSpyware[1]) {
            spChart.push(
                new Paragraph({
                    style: 'image-style',
                    children: [
                        new ImageRun({
                            data: fs.readFileSync(`${chartFolderName}/s_img2.png`),
                            transformation: transformation
                        })
                    ]
                }),
                ...v_des1,

            )
        };
        if (showChartSpyware[2]) {
            spChart.push(
                new Paragraph({
                    style: 'image-style',
                    children: [
                        new ImageRun({
                            data: fs.readFileSync(`${chartFolderName}/s_img3.png`),
                            transformation: transformation
                        })
                    ]
                }),
                ...v_des2
            )

        };


    };

    // 5.4 WR
    if (showCharts[3]) {
        const vDescription = [];
        try {
            const firstImagePath = './images/WRIMage.png';
            const secondImagePath = './images/PA.png';

            let imagePath;

            if (fs.existsSync(firstImagePath)) {
                imagePath = firstImagePath;
            } else {
                imagePath = secondImagePath;
            }

            let vDesTitle = wr1[0].desTitle;
            let vDesImages = wr1[0].desImages;
            let vDes = wr1[0].desDescription;

            if (wr1[0].checkDescriptionAdded) {

                if (vDesTitle.length) {

                    vDescription.push(
                        new Paragraph({
                            indent: {
                                left: 350
                            },
                            text: vDesTitle, style: 'common-space'
                        })
                    )

                }

                if (vDesImages.length) {
                    vDescription.push(
                        new Paragraph({
                            style: 'image-style',
                            children: [
                                new ImageRun({
                                    data: fs.readFileSync(imagePath),
                                    transformation: {
                                        width: 399.87401575,
                                        height: 233.95275591
                                    }
                                })
                            ]
                        }),
                    )
                }

                if (vDes.length) {
                    vDescription.push(
                        new Paragraph({ text: vDes, style: 'bullet-para' })
                    )
                }

            }
        } catch (error) {
            console.log("error - WR des")
        }

        const v_des0 = chartDescriptionFun(0, wr1);
        const v_des1 = chartDescriptionFun(1, wr1);
        const v_des2 = chartDescriptionFun(2, wr1);

        wrChart.push(
            new Paragraph({
                text: chartTitle[3] ? chartTitle[3] : "5.4 Web Reputation",
                heading: HeadingLevel.HEADING_2,
                keepLines: true,

                spacing: commonSpace
            }),
            new Paragraph({ text: `${wr1[0].chartFirstLine}`, spacing: spacing }),)

        if (showChartsWr[0]) {
            wrChart.push(
                new Paragraph({
                    style: 'image-style',
                    children: [
                        new ImageRun({
                            data: fs.readFileSync(`${chartFolderName}/wr_img1.png`),
                            transformation: transformation
                        })
                    ]
                }),
                ...v_des0,
                ...vDescription
            )
        };
        if (showChartsWr[1]) {
            wrChart.push(
                new Paragraph({
                    style: 'image-style',
                    children: [
                        new ImageRun({
                            data: fs.readFileSync(`${chartFolderName}/wr_img2.png`),
                            transformation: transformation
                        })
                    ]
                }),
                ...v_des1,
            )
        };
        if (showChartsWr[2]) {
            wrChart.push(
                wrChart.push(
                    new Paragraph({
                        style: 'image-style',
                        children: [
                            new ImageRun({
                                data: fs.readFileSync(`${chartFolderName}/wr_img3.png`),
                                transformation: transformation
                            })
                        ]
                    }),
                    ...v_des2,

                )

            )
        };

    };

    // 5.5 IPS
    if (showCharts[4]) {

        const v_des0 = chartDescriptionFun(0, ips1);
        const v_des1 = chartDescriptionFun(1, ips1);
        const v_des2 = chartDescriptionFun(2, ips1);

        let IPBody = [];
        const IpTable = []

        try {
            if (showChartsIp[3]) {
                //IP TABLE
                let updatedIPTable = JSON.parse(ips1[0].updatedIPTable)
                const totalIPActionName = Object.keys(updatedIPTable[0].allActionNameArr);
                const totalIPActionCount = Object.values(updatedIPTable[0].allActionNameArr);
                //Header part done
                let newTableCell = []
                for (const iterator of totalIPActionName) {
                    newTableCell.push(
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({ text: iterator, bold: true })
                                    ],
                                    alignment: AlignmentType.CENTER,
                                })
                            ]
                        })
                    )

                }

                IPBody.push(

                    new TableRow({
                        children: [
                            new TableCell({
                                width: {
                                    size: 6000,
                                    type: WidthType.DXA,
                                },
                                rowSpan: 2,
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({ text: "IPS DETECTION & SEVERITY", bold: true })
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    })
                                ]
                            }),
                            new TableCell({
                                width: {
                                    size: 5000,
                                    type: WidthType.DXA,
                                },
                                columnSpan: totalIPActionName.length,
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({ text: "ACTION", bold: true })
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    })
                                ]
                            })
                        ]
                    }),

                    new TableRow({
                        children: [
                            ...newTableCell
                        ]
                    })
                )

                //body Part
                newTableCell = []
                let IPContent = [];
                let IpRowsContent = []
                for (let i = 0; i < updatedIPTable.length; i++) {
                    newTableCell.push(
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: updatedIPTable[i].label,
                                            bold: true
                                        })
                                    ],
                                })
                            ]
                        }))

                    let keys = Object.keys(updatedIPTable[i].action);
                    totalIPActionName.map((element) => {
                        if (keys.includes(element)) {
                            newTableCell.push(
                                new TableCell({
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            alignment: AlignmentType.CENTER,
                                            children: [
                                                new TextRun({
                                                    text: `${updatedIPTable[i].action[element]}`,
                                                    bold: true
                                                })
                                            ],

                                        })
                                    ]
                                })
                            )
                        } else {
                            newTableCell.push(
                                new TableCell({
                                    children: [new Paragraph({ text: ' ' })]
                                })
                            )
                        }
                    })

                    IpRowsContent.push(new TableRow({
                        children: [
                            ...newTableCell
                        ]
                    }))

                    IPContent.push(...IpRowsContent);

                    newTableCell = []
                    IpRowsContent = []

                    if (updatedIPTable[i].risk.length) {
                        for (const iterator of updatedIPTable[i].risk) {
                            newTableCell.push(
                                new TableCell({
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({ text: iterator, indent: { left: 300 } })
                                    ]
                                })
                            )

                        }
                        for (let i = 0; i < totalIPActionName.length; i++) {
                            newTableCell.push(
                                new TableCell({
                                    children: [new Paragraph('')]
                                })
                            )
                        }
                    }

                    IpRowsContent.push(
                        new TableRow({
                            children: [
                                ...newTableCell
                            ]
                        }))

                    IPContent.push(...IpRowsContent);

                    newTableCell = []
                    IpRowsContent = []

                }


                newTableCell = []
                IpRowsContent = []

                newTableCell.push(
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Total",
                                        bold: true
                                    })
                                ],

                            })
                        ]
                    })

                )

                for (let i = 0; i < totalIPActionName.length; i++) {
                    newTableCell.push(
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `${totalIPActionCount[i]}`,
                                            bold: true
                                        })
                                    ],

                                })
                            ]
                        })

                    )
                }

                IpRowsContent.push(
                    new TableRow({
                        children: [
                            ...newTableCell
                        ]
                    }))

                IPContent.push(...IpRowsContent);


                IPBody = [...IPBody, ...IPContent];
                IpTable.push(
                    new Table({
                        margins: {
                            top: 60,
                            bottom: 60,
                            left: 60,
                            right: 50
                        },
                        alignment: AlignmentType.CENTER,
                        columnWidths: [6000, 5000],
                        rows: [
                            ...IPBody
                        ]
                    })
                )

            }

        } catch (error) {
            console.log({ "error": "ip table" })
        }

        ipChart.push(
            new Paragraph({
                text: chartTitle[4] ? chartTitle[4] : "5.5 Intrusion Prevention",
                heading: HeadingLevel.HEADING_2,
                keepLines: true,
                spacing: commonSpace
            }),
            new Paragraph({ text: `${ips1[0].chartFirstLine}`, spacing: spacing }),
        )

        if (showChartsIp[0]) {
            ipChart.push(
                new Paragraph({
                    style: 'image-style',
                    children: [
                        new ImageRun({
                            data: fs.readFileSync(`${chartFolderName}/ip_img1.png`),
                            transformation: transformation
                        })
                    ]
                }),
                ...v_des0,
            )
        };
        if (showChartsIp[1]) {
            ipChart.push(
                new Paragraph({
                    style: 'image-style',
                    children: [
                        new ImageRun({
                            data: fs.readFileSync(`${chartFolderName}/ip_img2.png`),
                            transformation: transformation
                        })
                    ]
                }),
                ...v_des1,

            )
        };

        if (showChartsIp[2]) {
            ipChart.push(
                new Paragraph({
                    style: 'image-style',
                    children: [
                        new ImageRun({
                            data: fs.readFileSync(`${chartFolderName}/ip_img3.png`),
                            transformation: transformation
                        })
                    ]
                }),
                ...v_des2,
            )
        };

        if (showChartsIp[3]) {
            ipChart.push(
                new Paragraph({
                    spacing: commonTableSpace,
                    text: ''
                }),
                ...IpTable
            )
        }

    }

    // 5.6 DC
    if (showCharts[5]) {
        const v_des0 = chartDescriptionFun(0, dc1);
        const v_des1 = chartDescriptionFun(1, dc1);
        const v_des2 = chartDescriptionFun(2, dc1);


        dcChart.push(
            new Paragraph({
                text: chartTitle[5] ? chartTitle[5] : "5.6 Device Control Detection",
                heading: HeadingLevel.HEADING_2,
                keepLines: true,
                spacing: commonSpace
            }),
            new Paragraph({ text: `${dc1[0].chartFirstLine}`, spacing: spacing }),
        )
        if (showChartsDc[0]) {
            dcChart.push(
                new Paragraph({
                    style: 'image-style',
                    children: [
                        new ImageRun({
                            data: fs.readFileSync(`${chartFolderName}/d_img1.png`),
                            transformation: transformation
                        })
                    ]
                }),
                ...v_des0,
            )
        }
        if (showChartsDc[1]) {
            dcChart.push(
                new Paragraph({
                    style: 'image-style',
                    children: [
                        new ImageRun({
                            data: fs.readFileSync(`${chartFolderName}/d_img2.png`),
                            transformation: transformation
                        })
                    ]
                }),
                ...v_des1,
            )
        }
        if (showChartsDc[2]) {
            dcChart.push(
                new Paragraph({
                    style: 'image-style',
                    children: [
                        new ImageRun({
                            data: fs.readFileSync(`${chartFolderName}/d_img3.png`),
                            transformation: transformation
                        })
                    ]
                }),
                ...v_des2,

            )
        }


    }

    // 5.7 cc
    if (showCharts[6]) {

        const v_des0 = chartDescriptionFun(0, cc1);
        const v_des1 = chartDescriptionFun(1, cc1);

        ccChart.push(
            new Paragraph({
                text: chartTitle[6] ? chartTitle[6] : "6.7 C&C Callback",
                heading: HeadingLevel.HEADING_2,
                keepLines: true,
                spacing: commonSpace
            }),
            new Paragraph({ text: `${cc1[0].chartFirstLine}`, spacing: spacing }),
        );
        if (showChartsCc[0]) {
            ccChart.push(
                new Paragraph({
                    style: 'image-style',
                    children: [
                        new ImageRun({
                            data: fs.readFileSync(`${chartFolderName}/cc_img1.png`),
                            transformation: transformation
                        })
                    ]
                }),
                ...v_des0,
            )
        }
        if (showChartsCc[1]) {
            ccChart.push(
                new Paragraph({
                    style: 'image-style',
                    children: [
                        new ImageRun({
                            data: fs.readFileSync(`${chartFolderName}/cc_img2.png`),
                            transformation: transformation
                        })
                    ]
                }),
                ...v_des1,

                new Paragraph({
                    style: "bullet-para",
                    text: `Check below KB in case of Command and Control (C&C) callback detection. `,
                }),

                new Paragraph({
                    alignment: AlignmentType.JUSTIFIED,
                    spacing: {
                        line: 276,
                        before: 100,
                        after: 100
                    },
                    bullet: {
                        level: 1,
                    },
                    keepLines: true,
                    children: [
                        new ExternalHyperlink({
                            children: [
                                new TextRun({
                                    text: `https://success.trendmicro.com/solution/1121033`,
                                    style: "Hyperlink",
                                }),
                            ],
                            link: `https://success.trendmicro.com/solution/1121033`,
                        }),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.JUSTIFIED,
                    spacing: {
                        line: 276,
                        before: 100,
                        after: 100
                    },
                    bullet: {
                        level: 1,
                    },
                    keepLines: true,
                    children: [
                        new ExternalHyperlink({
                            children: [
                                new TextRun({
                                    text: `https://global.sitesafety.trendmicro.com/result.ph`,
                                    style: "Hyperlink",
                                }),
                            ],
                            link: `https://global.sitesafety.trendmicro.com/result.ph`,
                        }),
                    ],
                }),

                new Paragraph({
                    style: "bullet-para",
                    text: `Recommended to check the Callback address that is triggered and whitelist the internal IP.`
                })

            )
        }
    }

    // 5.8 bm
    if (showCharts[7]) {
        const v_des0 = chartDescriptionFun(0, bm1);
        const v_des1 = chartDescriptionFun(1, bm1);

        let BMBody = [];
        const BMTable = [];

        try {
            if (showChartsBm[2]) {

                let updatedIPTable = JSON.parse(bm1[0].updatedPolicyRiskTable)
                const totalIPActionName = Object.keys(updatedIPTable[0].allActionNameArr);
                const totalIPActionCount = Object.values(updatedIPTable[0].allActionNameArr);
                //Header part done
                let newTableCell = []
                for (const iterator of totalIPActionName) {
                    newTableCell.push(
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({ text: iterator, bold: true })
                                    ],
                                    alignment: AlignmentType.CENTER,
                                })
                            ]
                        })
                    )
                }

                BMBody.push(

                    new TableRow({
                        children: [
                            new TableCell({
                                width: {
                                    size: 6000,
                                    type: WidthType.DXA,
                                },
                                rowSpan: 2,
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({ text: "BM BY POLICY & RISK LEVEL", bold: true })
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    })
                                ]
                            }),
                            new TableCell({
                                width: {
                                    size: 5000,
                                    type: WidthType.DXA,
                                },
                                columnSpan: totalIPActionName.length,
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({ text: "ACTION", bold: true })
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    })
                                ]
                            })
                        ]
                    }),

                    new TableRow({
                        children: [
                            ...newTableCell
                        ]
                    })
                )

                //body Part
                newTableCell = []
                let IPContent = [];
                let IpRowsContent = []
                for (let i = 0; i < updatedIPTable.length; i++) {
                    newTableCell.push(
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: updatedIPTable[i].label,
                                            bold: true
                                        })
                                    ],
                                })
                            ]
                        }))

                    let keys = Object.keys(updatedIPTable[i].action);
                    totalIPActionName.map((element) => {
                        if (keys.includes(element)) {
                            newTableCell.push(
                                new TableCell({
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            alignment: AlignmentType.CENTER,
                                            children: [
                                                new TextRun({
                                                    text: `${updatedIPTable[i].action[element]}`,
                                                    bold: true
                                                })
                                            ],

                                        })
                                    ]
                                })
                            )
                        } else {
                            newTableCell.push(
                                new TableCell({
                                    children: [new Paragraph({ text: ' ' })]
                                })
                            )
                        }
                    })

                    IpRowsContent.push(new TableRow({
                        children: [
                            ...newTableCell
                        ]
                    }))

                    IPContent.push(...IpRowsContent);

                    newTableCell = []
                    IpRowsContent = []

                    if (updatedIPTable[i].risk.length) {
                        for (const iterator of updatedIPTable[i].risk) {
                            newTableCell.push(
                                new TableCell({
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({ text: iterator, indent: { left: 300 } })
                                    ]
                                })
                            )

                        }
                        for (let i = 0; i < totalIPActionName.length; i++) {
                            newTableCell.push(
                                new TableCell({
                                    children: [new Paragraph('')]
                                })
                            )
                        }
                    }

                    IpRowsContent.push(
                        new TableRow({
                            children: [
                                ...newTableCell
                            ]
                        }))

                    IPContent.push(...IpRowsContent);

                    newTableCell = []
                    IpRowsContent = []

                }


                newTableCell = []
                IpRowsContent = []

                newTableCell.push(
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Total",
                                        bold: true
                                    })
                                ],

                            })
                        ]
                    })

                )

                for (let i = 0; i < totalIPActionName.length; i++) {
                    newTableCell.push(
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `${totalIPActionCount[i]}`,
                                            bold: true
                                        })
                                    ],

                                })
                            ]
                        })

                    )
                }

                IpRowsContent.push(
                    new TableRow({
                        children: [
                            ...newTableCell
                        ]
                    }))

                IPContent.push(...IpRowsContent);


                BMBody = [...BMBody, ...IPContent];

                BMTable.push(
                    new Table({
                        margins: {
                            top: 60,
                            bottom: 60,
                            left: 60,
                            right: 50
                        },
                        alignment: AlignmentType.CENTER,
                        columnWidths: [6000, 5000],
                        rows: [
                            ...BMBody
                        ]
                    })
                )

            }

        } catch (error) {
            console.log({ "error": "BM table" })
        }


        bmChart.push(
            new Paragraph({
                text: chartTitle[7] ? chartTitle[7] : "5.8 Behavior Monitoring",
                heading: HeadingLevel.HEADING_2,
                keepLines: true,
                spacing: commonSpace
            }),
            new Paragraph({ text: `${bm1[0].chartFirstLine}`, spacing: spacing }),
        );

        if (showChartsBm[0]) {
            bmChart.push(
                new Paragraph({
                    style: 'image-style',
                    children: [
                        new ImageRun({
                            data: fs.readFileSync(`${chartFolderName}/bm_img1.png`),
                            transformation: transformation
                        })
                    ]
                }),
                ...v_des0,
            );
        }
        if (showChartsBm[1]) {
            bmChart.push(
                new Paragraph({
                    style: 'image-style',
                    children: [
                        new ImageRun({
                            data: fs.readFileSync(`${chartFolderName}/bm_img2.png`),
                            transformation: transformation
                        })
                    ]
                }),
                ...v_des1,
            );
        }
        if (showChartsBm[2]) {
            bmChart.push(
                new Paragraph({
                    spacing: commonTableSpace,
                    text: ''
                }),

                ...BMTable

            )
        }

    }

    // 5.9 SMARTSCAN
    if (showCharts[8]) {

        let tablePatternData = JSON.parse(smartscan1[0].tablePatternData);
        const ssTableBody1 = [];
        let smartScanTable = [
            'Last 7 days Pattern updated agents',
            'Older than 7 Days Pattern updated agents',
            'Total Agents'
        ]
        for (var i = 0; i < smartScanTable.length; i++) {

            ssTableBody1.push(
                new TableRow({
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 9000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({

                                    text: smartScanTable[i]
                                })
                            ]
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
                                    text: `${tablePatternData[i]}`
                                })
                            ]
                        })
                    ]
                })

            )
        };


        ssChart.push(

            new Paragraph({
                text: chartTitle[8] ? chartTitle[8] : "5.9 Smart Scan Agent Pattern Coverage Details",
                heading: HeadingLevel.HEADING_2,
                keepLines: true,
                spacing: commonSpace
            }),

            new Table({
                margins: {
                    top: 60,
                    bottom: 60,
                    left: 60,
                    right: 50
                },
                alignment: AlignmentType.CENTER,

                rows: [
                    ...ssTableBody1
                ]
            }),

            new Paragraph({
                style: 'image-style',
                children: [
                    new ImageRun({
                        data: fs.readFileSync(`${chartFolderName}/ss_img1.png`),
                        transformation: transformation
                    })
                ]
            }),
        );
    }


    const content = [

        new Paragraph({
            text: '5 Apex One Product Efficacy',
            heading: HeadingLevel.HEADING_1,
            spacing: {
                before: 220,
                after: 230,
            }
        }),

        //5 Apex One Product Efficacy      
        ...agChart,

        // 6.2 Virus
        ...vChart,

        // 6.3 Spyware/ Grayware
        ...spChart,

        //6.4 Web Reputation Detections
        ...wrChart,

        // '6.5 Intrusion Prevention'     
        ...ipChart,

        //6.6 Device control Detection
        ...dcChart,

        //6.7 C&C Callbacks
        ...ccChart,

        //6.8 Behavior Monitoring
        ...bmChart,

        // '6.9 Smart Scan Agent Pattern Coverage Details'
        ...ssChart,


        new Paragraph({
            text: '6 Apex One & Apex Central Further Information',
            heading: HeadingLevel.HEADING_1,
            keepLines: true,
            spacing: {
                before: 220,
                after: 230,
            }
        }),

        ...link1,

        new Paragraph({
            text: '7 End of Life for Trend Micro Products information',
            heading: HeadingLevel.HEADING_1,
            keepLines: true,
            spacing: {
                before: 220,
                after: 230,
            }
        }),
        ...link2,

        new Paragraph({
            text: '8 Other documentation',
            heading: HeadingLevel.HEADING_1,
            keepLines: true,
            spacing: {
                before: 220,
                after: 230,
            }
        }),
        ...link3,



    ]

    return content


    try {

    } catch (error) {
        console.log("error - chart.js")
    }
}

module.exports = { getCharts }

