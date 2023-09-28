const { Chart1, Ag, Virus, Spyware, Bm, Dc, Ips, Smartscan, Wr, Cc, FurtherInformation } = require('../Models/chartModel');
let chartFolderName = 'chart-image';

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

    let content = [];

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
                v_des0.push({ text: chartDescription1[value][i], unbreakable: true, style: "lineSpacing" })
                try {
                    const chartSubPoints1 = JSON.parse(chartArr[0].chartSubPoints);

                    if (chartSubPoints1[value][i].length) {
                        for (const iterator of chartSubPoints1[value][i]) {
                            v_des0.push({
                                ul: [
                                    { text: iterator, unbreakable: true, listType: 'circle', style: "lineSpacing" }
                                ],
                                margin: [15, 0, 0, 0],
                                fontSize: 11
                            });
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
            agBody.push([{ text: platform[i], alignment: 'center' }, { text: platform_count[i], alignment: 'center' }])

        };
        let chartDescription0 = JSON.parse(ag1[0].chartDescription);
        const ag_des0 = chartDescription0.map(i => ({ text: i, unbreakable: true }));

        agChart.push(
            {
                id: 'closingParagraph',
                margin: [0, 11, 0, 0],
                stack: [
                    {
                        text: '6 Apex One Product Efficacy',
                        tocItem: ['subToc'],
                        style: ['heading'],
                        tocMargin: [0, 10, 0, 0],
                        tocStyle: { bold: true },
                    },
                    {
                        margin: [0, 10, 0, 0],
                        text: chartTitle[0] ? chartTitle[0] : "6.1 Agent Distribution",
                        tocItem: ['subToc'],
                        style: 'heading',
                        tocStyle: { italics: true },
                        tocMargin: [20, 5, 0, 0],
                    },
                    {
                        margin: [50, 15, 0, 0],
                        lineHeight: 1.3,
                        table: {
                            fontSize: 11,
                            widths: [200, 200],
                            body: [
                                [{ text: 'Agent Platform ', bold: true, alignment: 'center', fillColor: 'lightblue' }, { text: 'Count', bold: true, alignment: 'center', fillColor: 'lightblue', }],
                                ...agBody,
                                [{ text: 'Total', bold: true, alignment: 'center', fillColor: 'lightblue' }, {
                                    text: `${ag1[0].platform_count_sum}`, bold: true, alignment: 'center', fillColor: 'lightblue'
                                }]
                            ]
                        }
                    }
                ]
            },
            { image: `${chartFolderName}/ag_img1.png`, style: "chartImage", width: 350, height: 200, id: 'closingParagraph' },
            {
                ul: [
                    ...ag_des0
                ],
                style: "chartText"
            }
        )

    }

    //6.2 VIRUS 
    if (showCharts[1]) {

        let vDesTitle = "", vDesImages = "";
        const vDescription = [];

        try {
            if (virus1[0].checkDescriptionAdded) {

                if (virus1[0].desTitle.length >= 0) {
                    vDesTitle = virus1[0].desTitle;

                    vDescription.push({
                        text: vDesTitle,
                        fontSize: 11,
                        margin: [0, 2, 0, 0],
                        alignment: 'justify',
                    })
                }

                if (virus1[0].desImages.length >= 0) {
                    vDesImages = virus1[0].desImages;

                    vDescription.push({
                        image: vDesImages,
                        margin: [0, 10, 0, 10],
                        alignment: "center",
                        width: 350,
                        height: 300
                    })
                }
                if (virus1[0].desDescription.length >= 0) {
                    let vDes = virus1[0].desDescription;
                    vDescription.push({
                        text: vDes,
                        fontSize: 11,
                        margin: [0, 2, 0, 0],
                        alignment: 'justify',
                    })
                }

            }
        } catch (error) {
            console.log("error - virus des")
        }

        const v_des0 = chartDescriptionFun(0, virus1);
        const v_des1 = chartDescriptionFun(1, virus1);
        const v_des2 = chartDescriptionFun(2, virus1);

        if (showChartVirus[0]) {
            vChart.push(
                {
                    id: 'closingParagraph',
                    stack: [
                        {
                            text: chartTitle[1] ? chartTitle[1] : "6.2 Virus/Malware",
                            tocItem: ['subToc'],
                            style: ['heading', 'commonGap'],
                            tocStyle: { italics: true },
                            tocMargin: [20, 5, 0, 0],
                        },
                        {
                            text: `${virus1[0].chartFirstLine}`,
                            style: "chartFirstLine"
                        },
                        { image: `${chartFolderName}/v_img1.png`, style: "chartImage", width: 350, height: 200 }
                    ]
                },
                {
                    ul: [
                        ...v_des0
                    ],
                    style: "chartText"
                }
            )

        } else {
            vChart.push(
                {
                    id: 'closingParagraph',
                    stack: [
                        {
                            text: chartTitle[1] ? chartTitle[1] : "6.2 Virus/Malware",
                            tocItem: ['subToc'],
                            style: ['heading', 'commonGap'],
                            tocStyle: { italics: true },
                            tocMargin: [20, 5, 0, 0],
                        },

                    ]
                }
            )
        }

        if (showChartVirus[1]) {
            vChart.push({ image: `${chartFolderName}/v_img2.png`, style: "chartImage", width: 350, height: 200, id: 'closingParagraph' },
                {
                    ul: [
                        ...v_des1
                    ],
                    style: "chartText"

                })
        }

        if (showChartVirus[2]) {
            vChart.push(
                { image: `${chartFolderName}/v_img3.png`, style: "chartImage", width: 350, height: 200, id: 'closingParagraph' },

                {
                    ul: [
                        ...v_des2
                    ],
                    style: "chartText"
                }
            )

        }

        vChart.push(
            ...vDescription
        );

    }

    // 6.3 Spyware/ Grayware

    if (showCharts[2]) {

        let sDesTitle = "", sDesImages = "", sDescription = [];

        try {

            if (spyware1[0].checkDescriptionAdded) {
                if (spyware1[0].desTitle.length >= 0) {
                    sDesTitle = virus1[0].desTitle;
                    sDescription.push({
                        text: spyware1[0].desTitle,
                        fontSize: 11,
                        margin: [0, 2, 0, 0],
                        alignment: 'justify',
                    })
                }

                if (spyware1[0].desImages.length >= 0) {
                    sDesImages = virus1[0].desImages;
                    sDescription.push({
                        image: `${spyware1[0].desImages}`,
                        margin: [0, 10, 0, 10],
                        alignment: "center",
                        width: 350,
                        height: 300
                    })
                }
                if (spyware1[0].desDescription.length >= 0) {
                    sDesImages = virus1[0].desImages;
                    sDescription.push({
                        text: spyware1[0].desDescription,
                        fontSize: 11,
                        margin: [0, 2, 0, 0],
                        alignment: 'justify',
                    })
                }
            }
        } catch (error) {
            console.log("error spyware des");
        }

        const sp_des1 = chartDescriptionFun(0, spyware1);
        const sp_des2 = chartDescriptionFun(1, spyware1);
        const sp_des3 = chartDescriptionFun(2, spyware1);

        if (showChartSpyware[0]) {
            spChart.push({
                id: 'closingParagraph',
                stack: [
                    {
                        text: chartTitle[2] ? chartTitle[2] : "6.3 Spyware/Grayware",
                        tocItem: ['subToc'],
                        style: ['heading', 'commonGap'],
                        tocStyle: { italics: true },
                        tocMargin: [20, 5, 0, 0],

                    },
                    {
                        text: `${spyware1[0].chartFirstLine}`,
                        style: "chartFirstLine"
                    },
                    { image: `${chartFolderName}/s_img1.png`, style: "chartImage", width: 350, height: 200 }
                ]
            },
                {
                    ul: [
                        ...sp_des1
                    ],
                    style: "chartText"
                },
            )
        } else {
            spChart.push(
                {
                    id: 'closingParagraph',
                    stack: [
                        {
                            text: chartTitle[2] ? chartTitle[2] : "6.3 Spyware/Grayware",
                            tocItem: ['subToc'],
                            style: ['heading', 'commonGap'],
                            tocStyle: { italics: true },
                            tocMargin: [20, 5, 0, 0],

                        },
                        {
                            text: `${spyware1[0].chartFirstLine}`,
                            style: "chartFirstLine"
                        }

                    ]
                }
            )
        }
        if (showChartSpyware[1]) {
            spChart.push({ image: `${chartFolderName}/s_img2.png`, style: "chartImage", width: 350, height: 200, id: 'closingParagraph' },

                {
                    ul: [
                        ...sp_des2
                    ],
                    style: "chartText"
                })
        }
        if (showChartSpyware[2]) {
            spChart.push({ image: `${chartFolderName}/s_img3.png`, style: "chartImage", width: 350, height: 200, id: 'closingParagraph' },

                {
                    ul: [
                        ...sp_des3
                    ],
                    style: "chartText"
                })
        }

        spChart.push(
            ...sDescription
        )
    }

    //6.4 wr

    if (showCharts[3]) {

        let wrDesTitle = "", wrDesImages = "", wrDescription = [];

        try {

            if (wr1[0].checkDescriptionAdded) {
                if (wr1[0].desTitle.length >= 0) {
                    wrDesTitle = wr1[0].desTitle;
                    wrDescription.push({
                        text: wr1[0].desTitle,
                        fontSize: 11,
                        margin: [0, 2, 0, 0],
                        alignment: 'justify',
                    })
                }

                if (wr1[0].desImages.length >= 0) {
                    wrDesImages = wr1[0].desImages;
                    wrDescription.push({
                        image: `${wr1[0].desImages}`,
                        margin: [0, 10, 0, 10],
                        alignment: "center",
                        width: 350,
                        height: 300
                    })
                }
                if (wr1[0].desDescription.length >= 0) {
                    wrDesImages = wr1[0].desImages;
                    wrDescription.push({
                        text: spyware1[0].desDescription,
                        fontSize: 11,
                        margin: [0, 2, 0, 0],
                        alignment: 'justify',
                    })
                }
            }

        } catch (error) {
            console.log("error wr des");
        }
        const wr_des0 = chartDescriptionFun(0, wr1);
        const wr_des1 = chartDescriptionFun(1, wr1);
        const wr_des2 = chartDescriptionFun(2, wr1);


        if (showChartsWr[0]) {
            wrChart.push(
                {
                    id: 'closingParagraph',
                    stack: [

                        {
                            text: chartTitle[3] ? chartTitle[3] : "6.4 Web Reputation",
                            tocItem: ['subToc'],
                            style: ['heading', "commonGap"],
                            tocStyle: { italics: true },
                            tocMargin: [20, 5, 0, 0],
                        },

                        {
                            text: `${wr1[0].chartFirstLine}`,
                            style: "chartFirstLine"


                        },
                        { image: `${chartFolderName}/wr_img1.png`, style: "chartImage", width: 350, height: 200 }
                    ]
                },

                {
                    ul: [
                        ...wr_des0
                    ],
                    style: "chartText"
                }
            )
        } else {
            wrChart.push(
                {
                    id: 'closingParagraph',
                    stack: [

                        {
                            text: chartTitle[3] ? chartTitle[3] : "6.4 Web Reputation",
                            tocItem: ['subToc'],
                            style: ['heading', "commonGap"],
                            tocStyle: { italics: true },
                            tocMargin: [20, 5, 0, 0],
                        }

                    ]
                }
            )
        }
        if (showChartsWr[1]) {
            wrChart.push(
                { image: `${chartFolderName}/wr_img2.png`, style: "chartImage", width: 350, height: 200, id: 'closingParagraph' },

                {
                    ul: [
                        ...wr_des1
                    ],
                    style: "chartText"
                }
            )
        }
        if (showChartsWr[2]) {
            wrChart.push(
                { image: `${chartFolderName}/wr_img3.png`, style: "chartImage", width: 350, height: 200, id: 'closingParagraph' },
                {
                    ul: [
                        ...wr_des2
                    ],
                    style: "chartText"
                }
            )
        }

        wrChart.push(
            ...wrDescription
        )
    }

    //6.5 ip

    if (showCharts[4]) {

        const ip_des0 = chartDescriptionFun(0, ips1);
        const ip_des1 = chartDescriptionFun(1, ips1);
        const ip_des2 = chartDescriptionFun(2, ips1);
        let IPBody = [];
        const IpTable = []

        try {
            if (showChartsIp[3]) {

                //IP TABLE
                let updatedIPTable = JSON.parse(ips1[0].updatedIPTable)
                const totalIPActionName = Object.keys(updatedIPTable[0].allActionNameArr);
                const totalIPActionCount = Object.values(updatedIPTable[0].allActionNameArr);
                //Header part done
                IPBody.push(
                    [{ text: "IPS DETECTION & SEVERITY", rowSpan: 2, alignment: "center", bold: true }, { text: "ACTION", colSpan: totalIPActionName.length, alignment: "center", bold: true }],
                    ["", ...totalIPActionName]
                );
                for (var i = 0; i < totalIPActionName.length - 1; i++) { IPBody[0].push('') }
                //body Part
                let IPContent = [];
                for (let i = 0; i < updatedIPTable.length; i++) {
                    IPContent.push([{ text: updatedIPTable[i].label, bold: true }])
                    let keys = Object.keys(updatedIPTable[i].action);
                    totalIPActionName.map((element) => {
                        if (keys.includes(element)) {
                            IPContent[IPContent.length - 1].push({ text: updatedIPTable[i].action[element], alignment: "center", bold: true })
                        } else {
                            IPContent[IPContent.length - 1].push("")
                        }
                    });
                    if (updatedIPTable[i].risk.length) {
                        for (const iterator of updatedIPTable[i].risk) {
                            IPContent.push([{ text: iterator, margin: [10, 0, 0, 0] }])
                            for (let i = 0; i < totalIPActionName.length; i++) {
                                IPContent[IPContent.length - 1].push("")
                            }
                        }
                    }

                }

                IPContent.push([{ text: "Total", bold: true }])
                for (let i = 0; i < totalIPActionName.length; i++) {
                    IPContent[IPContent.length - 1].push([{ text: totalIPActionCount[i], alignment: "center", bold: true }])
                }

                IPBody = [...IPBody, ...IPContent];
                IpTable.push({
                    margin: [130, 15, 0, 0],
                    table: {
                        fontSize: 11,
                        body: IPBody
                    }

                })

            }

        } catch (error) {
            console.log({ "error": "ip table" })
        }

        if (showChartsIp[0]) {
            ipChart.push(
                {
                    id: 'closingParagraph',
                    stack: [

                        {
                            text: chartTitle[4] ? chartTitle[4] : "6.5 Intrusion Prevention",
                            tocItem: ['subToc'],
                            style: ['heading', "commonGap"],
                            tocStyle: { italics: true },
                            tocMargin: [20, 5, 0, 0],

                        },
                        {
                            text: `${ips1[0].chartFirstLine}`,
                            style: "chartFirstLine"
                        },

                        { image: `${chartFolderName}/ip_img1.png`, style: "chartImage", width: 350, height: 200 }
                    ]
                },
                {
                    ul: [
                        ...ip_des0
                    ],
                    style: "chartText"
                })
        } else {
            ipChart.push(
                {
                    id: 'closingParagraph',
                    stack: [

                        {
                            text: chartTitle[4] ? chartTitle[4] : "6.5 Intrusion Prevention",
                            tocItem: ['subToc'],
                            style: ['heading', "commonGap"],
                            tocStyle: { italics: true },
                            tocMargin: [20, 5, 0, 0],

                        },
                    ]
                }
            )
        }

        if (showChartsIp[1]) {
            ipChart.push(
                { image: `${chartFolderName}/ip_img2.png`, style: "chartImage", width: 350, height: 200, id: 'closingParagraph' },
                {
                    ul: [
                        ...ip_des1
                    ],
                    style: "chartText"
                }
            )
        }
        if (showChartsIp[2]) {
            ipChart.push(
                { image: `${chartFolderName}/ip_img3.png`, style: "chartImage", width: 350, height: 200, id: 'closingParagraph' },
                {
                    ul: [
                        ...ip_des2
                    ],
                    style: "chartText"
                }
            )
        }

        ipChart.push(
            ...IpTable
        )
    }

    //6.6 dc
    if (showCharts[5]) {
        const dc_des0 = chartDescriptionFun(0, dc1);
        const dc_des1 = chartDescriptionFun(1, dc1);
        const dc_des2 = chartDescriptionFun(2, dc1);



        if (showChartsDc[0]) {
            dcChart.push({

                id: 'closingParagraph',
                stack: [

                    {
                        text: chartTitle[5] ? chartTitle[5] : "6.6 Device Control Detection",
                        tocItem: ['subToc'],
                        style: ['heading', 'commonGap'],
                        tocStyle: { italics: true },
                        tocMargin: [20, 5, 0, 0],
                    },

                    {
                        text: `${dc1[0].chartFirstLine}`,
                        style: "chartFirstLine"


                    },

                    { image: `${chartFolderName}/d_img1.png`, style: "chartImage", width: 350, height: 200 },
                ]

            },
                {
                    ul: [
                        ...dc_des0
                    ],
                    style: "chartText"
                })
        } else {
            dcChart.push(
                {

                    id: 'closingParagraph',
                    stack: [

                        {
                            text: chartTitle[5] ? chartTitle[5] : "6.6 Device Control Detection",
                            tocItem: ['subToc'],
                            style: ['heading', 'commonGap'],
                            tocStyle: { italics: true },
                            tocMargin: [20, 5, 0, 0],
                        },

                    ]

                },
                {
                    ul: [
                        ...dc_des0
                    ],
                    style: "chartText"
                })
        }
        if (showChartsDc[1]) {
            dcChart.push({ image: `${chartFolderName}/d_img2.png`, style: "chartImage", width: 350, height: 200, id: 'closingParagraph' },

                {
                    ul: [
                        ...dc_des1
                    ],
                    style: "chartText"
                })
        }
        if (showChartsDc[2]) {
            dcChart.push(
                { image: `${chartFolderName}/d_img3.png`, style: "chartImage", width: 350, height: 200, id: 'closingParagraph' },

                {
                    ul: [
                        ...dc_des2
                    ],
                    style: "chartText"
                })
        }




    }


    //6,7
    if (showCharts[6]) {

        const cc_des0 = chartDescriptionFun(0, cc1);
        const cc_des1 = chartDescriptionFun(1, cc1);

        if (showChartsCc[0]) {
            ccChart.push(
                {
                    id: 'closingParagraph',
                    stack: [
                        {
                            text: chartTitle[6] ? chartTitle[6] : "6.7 C&C Callback",
                            tocItem: ['subToc'],
                            style: ['heading', 'commonGap'],
                            tocStyle: { italics: true },
                            tocMargin: [20, 5, 0, 0],

                        },

                        {
                            text: `${cc1[0].chartFirstLine}`,
                            style: "chartFirstLine"


                        },
                        { image: `${chartFolderName}/cc_img1.png`, style: "chartImage", width: 350, height: 200 },
                    ]

                },
                {
                    ul: [
                        ...cc_des0
                    ],
                    style: "chartText"
                }
            )
        } else {
            ccChart.push(
                {
                    id: 'closingParagraph',
                    stack: [
                        {
                            text: chartTitle[6] ? chartTitle[6] : "6.7 C&C Callback",
                            tocItem: ['subToc'],
                            style: ['heading', 'commonGap'],
                            tocStyle: { italics: true },
                            tocMargin: [20, 5, 0, 0],

                        }
                    ]

                }
            )
        }
        if (showChartsCc[1]) {
            ccChart.push(
                { image: `${chartFolderName}/cc_img2.png`, style: "chartImage", width: 350, height: 200, id: 'closingParagraph' },

                {
                    ul: [
                        ...cc_des1
                    ],
                    style: "chartText"
                }
            )
        }

        ccChart.push(
            {
                unbreakable: 'true',
                ul: [
                    `Check below KB in case of Command and Control (C&C) callback detection. `
                ],
                style: "chartText"
            },

            {
                unbreakable: 'true',
                text: `https://success.trendmicro.com/solution/1121033`,
                link: `https://success.trendmicro.com/solution/1121033`,
                fontSize: 11,
                color: "blue",
                decoration: 'underline',
                lineHeight: 1.2,
                margin: [60, 5, 0, 0]
            },

            {
                unbreakable: 'true',
                text: `https://global.sitesafety.trendmicro.com/result.ph`,
                link: `https://global.sitesafety.trendmicro.com/result.ph`,
                fontSize: 11,
                color: "blue",
                decoration: 'underline',
                lineHeight: 1.2,
                margin: [60, 5, 0, 0]
            },

            {
                unbreakable: 'true',
                ul: [

                    `Recommended to check the Callback address which is triggered and whitelist the internal IP.`
                ],
                style: "chartText"
            }
        )
    }

    //6.8
    if (showCharts[7]) {

        const b_des0 = chartDescriptionFun(0, bm1);
        const b_des1 = chartDescriptionFun(1, bm1);

        let IPBody = [];
        const IpTable = []

        try {
            if (showChartsBm[2]) {

                //IP TABLE
                let updatedIPTable = JSON.parse(bm1[0].updatedPolicyRiskTable)
                const totalIPActionName = Object.keys(updatedIPTable[0].allActionNameArr);
                const totalIPActionCount = Object.values(updatedIPTable[0].allActionNameArr);
                //Header part done
                IPBody.push(
                    [{ text: "BM BY POLICY & RISK LEVEL", rowSpan: 2, alignment: "center", bold: true }, { text: "ACTION", colSpan: totalIPActionName.length, alignment: "center", bold: true }],
                    ["", ...totalIPActionName]
                );
                for (var i = 0; i < totalIPActionName.length - 1; i++) { IPBody[0].push('') }
                //body Part
                let IPContent = [];
                for (let i = 0; i < updatedIPTable.length; i++) {
                    IPContent.push([{ text: updatedIPTable[i].label, bold: true }])
                    let keys = Object.keys(updatedIPTable[i].action);
                    totalIPActionName.map((element) => {
                        if (keys.includes(element)) {
                            IPContent[IPContent.length - 1].push({ text: updatedIPTable[i].action[element], alignment: "center", bold: true })
                        } else {
                            IPContent[IPContent.length - 1].push("")
                        }
                    });
                    if (updatedIPTable[i].risk.length) {
                        for (const iterator of updatedIPTable[i].risk) {
                            IPContent.push([{ text: iterator, margin: [10, 0, 0, 0] }])
                            for (let i = 0; i < totalIPActionName.length; i++) {
                                IPContent[IPContent.length - 1].push("")
                            }
                        }
                    }

                }

                IPContent.push([{ text: "Total", bold: true }])
                for (let i = 0; i < totalIPActionName.length; i++) {
                    IPContent[IPContent.length - 1].push([{ text: totalIPActionCount[i], alignment: "center", bold: true }])
                }

                IPBody = [...IPBody, ...IPContent];
                IpTable.push({
                    margin: [130, 15, 0, 0],
                    table: {
                        fontSize: 11,
                        body: IPBody
                    }

                })

            }

        } catch (error) {
            console.log({ "error": "bm table" })
        }

        if (showChartsBm[0]) {
            bmChart.push(
                {
                    id: 'closingParagraph',
                    stack: [

                        {
                            text: chartTitle[7] ? chartTitle[7] : "6.8 Behavior Monitoring",
                            tocItem: ['subToc'],
                            style: ['heading', "commonGap"],
                            tocStyle: { italics: true },
                            tocMargin: [20, 5, 0, 0],

                        },
                        {
                            text: `${bm1[0].chartFirstLine}`,
                            style: "chartFirstLine"


                        },
                        { image: `${chartFolderName}/bm_img1.png`, style: "chartImage", width: 350, height: 200 },
                    ]
                },
                {
                    ul: [
                        ...b_des0
                    ],
                    style: "chartText"
                }
            )
        } else {
            bmChart.push(
                {
                    id: 'closingParagraph',
                    stack: [

                        {
                            text: chartTitle[7] ? chartTitle[7] : "6.8 Behavior Monitoring",
                            tocItem: ['subToc'],
                            style: ['heading', "commonGap"],
                            tocStyle: { italics: true },
                            tocMargin: [20, 5, 0, 0],

                        }
                    ]
                }
            )
        }
        if (showChartsBm[1]) {
            bmChart.push(
                { image: `${chartFolderName}/bm_img2.png`, style: "chartImage", width: 350, height: 200, id: 'closingParagraph' },
                {
                    ul: [
                        ...b_des1
                    ],
                    style: "chartText"
                }
            )
        }

        bmChart.push(...IpTable)

    }

    //6.9
    if (showCharts[8]) {

        let tablePatternData = JSON.parse(smartscan1[0].tablePatternData);
        const ssTableBody1 = [];
        let smartScanTable = [
            'Last 7 days Pattern updated agents',
            'Older than 7 Days Pattern updated agents',
            'Total Agents'
        ]
        for (var i = 0; i < smartScanTable.length; i++) {
            ssTableBody1.push([{ text: smartScanTable[i] }, { text: tablePatternData[i], alignment: 'center' }])

        };

        ssChart.push(
            {
                id: 'closingParagraph',
                stack: [
                    {
                        text: chartTitle[8] ? chartTitle[8] : "6.9 Smart Scan Agent Pattern Coverage Details",
                        tocItem: ['subToc'],
                        style: ['heading', 'commonGap'],
                        tocMargin: [20, 5, 0, 0],
                        tocStyle: { italics: true },
                    },
                    {

                        margin: [0, 11, 0, 0],
                        table: {
                            widths: ['*', 100],
                            body: [

                                ...ssTableBody1,
                            ]
                        }
                    }
                ]

            },

            { image: `${chartFolderName}/ss_img1.png`, style: "chartImage", width: 350, height: 200, id: 'closingParagraph' }
        )
    }



    try {
        content = [

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


            // 6 Apex One & Apex Central Further Information

            {

                id: 'closingParagraph',
                stack: [
                    {
                        margin: [0, 20, 0, 0],
                        text: '7 Apex One & Apex Central Further Information',
                        style: ['heading'],
                        tocItem: ['mainToc', 'subToc'],
                        tocStyle: { bold: true },
                        tocMargin: [0, 10, 0, 0]
                    },
                    ...link1,
                    {
                        margin: [0, 30, 0, 0],
                        text: '8 End of Life for Trend Micro Products information',
                        style: ['heading'],
                        tocItem: ['mainToc', 'subToc'],
                        tocStyle: { bold: true },
                        tocMargin: [0, 10, 0, 0],
                    },
                    ...link2
                ]

            },

            {
                id: 'closingParagraph',
                stack: [
                    {
                        margin: [0, 30, 0, 0],
                        text: '9 Other documentation',
                        style: ['heading'],
                        tocItem: ['mainToc', 'subToc'],
                        tocStyle: { bold: true },
                        tocMargin: [0, 10, 0, 0]
                    },
                    ...link3
                ]

            }

        ]

    } catch (error) {
        console.log("error - chart.js")
    }

    return content
}

module.exports = { getCharts }

