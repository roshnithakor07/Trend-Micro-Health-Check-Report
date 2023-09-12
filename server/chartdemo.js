const { Ag, Virus, Spyware, Bm, Dc, Ips, Smartscan, Wr, Cc, FurtherInformation } = require('./Models/chartModel');

let chartFolderName = 'chart-image';

const getCharts = async (req, res) => {
    const ag1 = await Ag.find({}).sort({ _id: -1 }).limit(1);
    // const virus1 = await Virus.find({}).sort({ _id: -1 }).limit(1);
    // const spyware1 = await Spyware.find({}).sort({ _id: -1 }).limit(1);
    // const wr1 = await Wr.find({}).sort({ _id: -1 }).limit(1);
    // const ips1 = await Ips.find({}).sort({ _id: -1 }).limit(1);
    // const bm1 = await Bm.find({}).sort({ _id: -1 }).limit(1);
    // const dc1 = await Dc.find({}).sort({ _id: -1 }).limit(1);
    // const cc1 = await Cc.find({}).sort({ _id: -1 }).limit(1);
    // const smartscan1 = await Smartscan.find({}).sort({ _id: -1 }).limit(1);
    // const furtherInformation1 = await FurtherInformation.find({}).sort({ _id: -1 }).limit(1);

    let content = [];

    //furtherInformation
    // let linkTitle1 = JSON.parse(furtherInformation1[0].linkTitle1)
    // let furtherInformation11 = JSON.parse(furtherInformation1[0].furtherInformation1)
    // let linkTitle2 = JSON.parse(furtherInformation1[0].linkTitle2)
    // let furtherInformation2 = JSON.parse(furtherInformation1[0].furtherInformation2)
    // let linkTitle3 = JSON.parse(furtherInformation1[0].linkTitle3)
    // let furtherInformation3 = JSON.parse(furtherInformation1[0].furtherInformation3)

    // let link1 = [], link2 = [], link3 = []

    // for (var i = 0; i < linkTitle1.length; i++) {
    //     link1.push({
    //         text: `${linkTitle1[i]}`,
    //         link: `${furtherInformation11[i]}`,
    //         fontSize: 11,
    //         color: "blue",
    //         decoration: 'underline',
    //         lineHeight: 1.2,
    //         margin: [15, 5, 0, 0]
    //     })
    // }

    // for (var i = 0; i < linkTitle2.length; i++) {
    //     link2.push({
    //         text: `${linkTitle2[i]}`,
    //         link: `${furtherInformation2[i]}`,
    //         fontSize: 11,
    //         color: "blue",
    //         decoration: 'underline',
    //         lineHeight: 1.2,
    //         margin: [15, 5, 0, 0]
    //     })
    // }

    // for (var i = 0; i < linkTitle3.length; i++) {
    //     link3.push({
    //         text: `${linkTitle3[i]}`,
    //         link: `${furtherInformation3[i]}`,
    //         fontSize: 11,
    //         color: "blue",
    //         decoration: 'underline',
    //         lineHeight: 1.2,
    //         margin: [15, 5, 0, 0]
    //     })
    // }



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

    const showCharts = JSON.parse(ag1[0].showCharts);

    // const showCharts = [true, true, true, true, true, true, true, true, true]

    const agChart = [], vChart = [], spChart = [], wrChart = [], ipChart = [];
    const dcChart = [], ccChart = [], bmChart = [], ssChart = [];


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
                margin: [0, 10, 0, 0],
                text: ag1[0].chartTitle ? ag1[0].chartTitle : "6.1 Agent Distribution",
                tocItem: ['subToc'],
                style: 'heading',
                tocStyle: { italics: true },
                tocMargin: [20, 5, 0, 0],
            },
            {
                pageBreak: "after",
                unbreakable: true,
                margin: [50, 15, 0, 0],
                lineHeight: 1.5,
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
            },

            { image: `${chartFolderName}/ag_img1.png`, style: "chartImage", width: 350, height: 200 },

            {
                ul: [
                    ...ag_des0
                ],
                style: "chartText"
            }
        )
    }


    


   


    try {



        content = [

            {
                pageBreak : "before",
                text: '6 Apex One Product Efficacy',
                tocItem: ['subToc'],
                style: ['heading'],
                tocMargin: [0, 10, 0, 0],
                tocStyle: { bold: true },
            },

            //5 Apex One Product Efficacy      
            ...agChart,

            // // 6.2 Virus
            // ...vChart,

            // // 6.3 Spyware/ Grayware

            // ...spChart,

            // //6.4 Web Reputation Detections
            // ...wrChart,
            // // '6.5 Intrusion Prevention'     
            // ...ipChart,
            // //6.6 Device control Detection
            // ...dcChart,

            // //6.7 C&C Callbacks
            // ...ccChart,
            // //6.8 Behavior Monitoring
            // ...bmChart,

            // // '6.9 Smart Scan Agent Pattern Coverage Details'
            // ...ssChart,

            // 6 Apex One & Apex Central Further Information

            // {
            //     margin: [0, 30, 0, 0],
            //     text: '7 Apex One & Apex Central Further Information',
            //     style: ['heading'],
            //     tocItem: ['mainToc', 'subToc'],
            //     tocStyle: { bold: true },
            //     tocMargin: [0, 10, 0, 0]
            // },
            // ...link1,
            // {

            //     margin: [0, 40, 0, 0],
            //     text: '8 End of Life for Trend Micro Products information',
            //     style: 'heading',
            //     tocItem: ['mainToc', 'subToc'],
            //     tocStyle: { bold: true },
            //     tocMargin: [0, 10, 0, 0],
            // },
            // ...link2,

            // {
            //     margin: [0, 40, 0, 0],
            //     text: '9 Other documentation',
            //     style: 'heading',
            //     tocItem: ['mainToc', 'subToc'],
            //     tocStyle: { bold: true },
            //     tocMargin: [0, 10, 0, 0]
            // },
            // ...link3,

        ]

    } catch (error) {
        console.log("error - chart.js")
    }

    return content
}

module.exports = { getCharts }

