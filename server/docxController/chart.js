const fs = require('fs')
const { Chart1, Ag, Virus, Spyware, Bm, Dc, Ips, Smartscan, Wr, Cc, FurtherInformation } = require('../Models/chartModel');
const { ImageRun, HeadingLevel, Paragraph, TextRun, AlignmentType,
    Table, TableRow, TableCell, WidthType, VerticalAlign } = require("docx");

let chartFolderName = 'chart-image';

const transformation = {
    width: 427.84251969,
    height: 256.62992126
}

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
        link1.push({
            text: `${linkTitle1[i]}`,
            link: `${furtherInformation11[i]}`,
            fontSize: 11,
            color: "blue",
            decoration: 'underline',
            lineHeight: 1.2,
            margin: [15, 5, 0, 0]
        })
    }

    for (var i = 0; i < linkTitle2.length; i++) {
        link2.push({
            text: `${linkTitle2[i]}`,
            link: `${furtherInformation2[i]}`,
            fontSize: 11,
            color: "blue",
            decoration: 'underline',
            lineHeight: 1.2,
            margin: [15, 5, 0, 0]
        })
    }

    for (var i = 0; i < linkTitle3.length; i++) {
        link3.push({
            text: `${linkTitle3[i]}`,
            link: `${furtherInformation3[i]}`,
            fontSize: 11,
            color: "blue",
            decoration: 'underline',
            lineHeight: 1.2,
            margin: [15, 5, 0, 0]
        })
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

    const showCharts = JSON.parse(chart1[0].showCharts);
    const showChartVirus = JSON.parse(virus1[0].showChart);
    const showChartSpyware = JSON.parse(spyware1[0].showChart);
    const showChartsWr = JSON.parse(wr1[0].showChart);
    const showChartsIp = JSON.parse(ips1[0].showChart);
    const showChartsDc = JSON.parse(dc1[0].showChart);
    const showChartsCc = JSON.parse(cc1[0].showChart);
    const showChartsBm = JSON.parse(bm1[0].showChart);

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

                    ...agBody
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
                keepNext: true,
                spacing: {
                    before: 220,
                    after: 230,
                }
            }),
            new Paragraph({ text: `${virus1[0].chartFirstLine}`, style: "common-space" }),
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
            new Paragraph({
                style: 'image-style',
                children: [
                    new ImageRun({
                        data: fs.readFileSync(`${chartFolderName}/v_img2.png`),
                        transformation: transformation
                    })
                ]
            }),
            ...v_des1,

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
                keepNext: true,
                spacing: {
                    before: 220,
                    after: 230,
                }
            }),
            new Paragraph({ text: `${spyware1[0].chartFirstLine}`, style: "common-space" }),
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

            new Paragraph({
                style: 'image-style',
                children: [
                    new ImageRun({
                        data: fs.readFileSync(`${chartFolderName}/s_img3.png`),
                        transformation: transformation
                    })
                ]
            }),
            ...v_des2,

            ...vDescription
        )

    };

    //WR
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
                keepNext: true,
                spacing: {
                    before: 220,
                    after: 230,
                }
            }),
            new Paragraph({ text: `${wr1[0].chartFirstLine}`, style: "common-space" }),
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
    
            ...vDescription
        )
    
    };


    const content = [

        new Paragraph({
            text: '5 Apex One Product Efficacy',
            heading: HeadingLevel.HEADING_1,
            keepLines: true,
            keepNext: true,
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

    ]

    return content


    try {

    } catch (error) {
        console.log("error - chart.js")
    }
}

module.exports = { getCharts }

