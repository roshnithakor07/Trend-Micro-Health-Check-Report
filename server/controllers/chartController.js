const express = require("express");
const router = express.Router();
const QuickChart = require('quickchart-js');
const chart = new QuickChart();
const fs = require("fs");

const { Chart1, Ag, Virus, Spyware, Bm, Dc, Ips, Smartscan, Wr, Cc, FurtherInformation } = require('../Models/chartModel');

let chartFolderName = 'chart-image';

let agText = ["Agent Program Version"];
let virusText = [
    "Top 10 Virus/Malware Detection",
    "Top 10 Endpoints in Virus/Malware Detection",
    "Action",
];

let spText = [
    "Top 10 Spyware/Grayware Detection",
    "Top 10 Endpoints in Spyware/Grayware Detection",
    "Action",
];
let bmText = ["BM Detection on Endpoints", "BM Detection By Policy"];
let dcText = ["Device Type", "Top 10 Endpoints in DC Detection", "Action"];
let ipsText = [
    "Top 10 IPS Rules Triggered",
    "Top 10 Endpoints in IPS Detection",
    "Action",
];
let ssText = ["Smart Scan Agent Pattern"];
let ccText = ["Endpoints Having C&C Detection", "C&C Callbacks Address"];
const wrText = ['Top 10 URL Detections in WRS', 'Top 10 Endpoints in WRS Detection', 'Action'];


//mainChart 
const getChartModel = async (req, res) => {
    try {

        const chart11 = await Chart1.find({}).sort({ _id: -1 }).limit(1);
        res.json(chart11);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const saveDataChart = async (req, res) => {
    console.log(req.body)
    const user = new Chart1(req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Ag
const getagModel = async (req, res) => {
    try {

        const ag1 = await Ag.find({}).sort({ _id: -1 }).limit(1);
        createChart(JSON.parse(ag1[0].agent_Program), JSON.parse(ag1[0].agent_Program_Count), agText[0], "ag_img1", "bar")

        res.json(ag1);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const saveDataag = async (req, res) => {
    const user = new Ag(req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


// virus
const getvirusModel = async (req, res) => {
    try {

        const virus1 = await Virus.find({}).sort({ _id: -1 }).limit(1);
        virusText[0] = JSON.parse(virus1[0].virus).length === 10 ? virusText[0] : "Virus/Malware Detection";
        virusText[1] = JSON.parse(virus1[0].endpoint).length === 10 ? virusText[1] : "Endpoints in Virus/Malware Detection";

        let chartTypes = JSON.parse(virus1[0].chartTypes)

        createChart(JSON.parse(virus1[0].virus), JSON.parse(virus1[0].virus_count), virusText[0], "v_img1", chartTypes[0])
        createChart(JSON.parse(virus1[0].endpoint), JSON.parse(virus1[0].endpoint_count), virusText[1], "v_img2", chartTypes[1])
        createChart(JSON.parse(virus1[0].action), JSON.parse(virus1[0].action_count), virusText[2], "v_img3", chartTypes[2])

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const saveDatavirus = async (req, res) => {
    const user = new Virus(req.body);
    try {
        const inserteduser = await user.save();
        console.log(req.body)
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


// spyware
const getspywareModel = async (req, res) => {
    try {
        const spyware1 = await Spyware.find({}).sort({ _id: -1 }).limit(1);
        let rules = JSON.parse(spyware1[0].spyware);
        let chartTypes = JSON.parse(spyware1[0].chartTypes)

        spText[0] = rules.length === 10 ? spText[0] : "Spyware/Grayware Detection";
        spText[1] = JSON.parse(spyware1[0].endpoint).length === 10 ? spText[1] : "Endpoints in Spyware/Grayware Detection";

        createChart(rules, JSON.parse(spyware1[0].spyware_count), spText[0], "s_img1", chartTypes[0])
        createChart(JSON.parse(spyware1[0].endpoint), JSON.parse(spyware1[0].endpoint_count), spText[1], "s_img2", chartTypes[1])
        createChart(JSON.parse(spyware1[0].action), JSON.parse(spyware1[0].action_count), spText[2], "s_img3", chartTypes[2])
        res.json(spyware1);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const saveDataspyware = async (req, res) => {
    const user = new Spyware(req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//wr
const getwrModel = async (req, res) => {
    try {
        const wr1 = await Wr.find({}).sort({ _id: -1 }).limit(1);
        let chartTypes = JSON.parse(wr1[0].chartTypes);
        let urls = JSON.parse(wr1[0].url);

        for (let i = 0; i < urls.length; i++) {
            if (urls[i].length > 15) {
                urls[i] = urls[i].slice(0, 25) + "..."
            }
        }

        wrText[0] = urls.length === 10 ? wrText[0] : "Web Reputation Detection";
        wrText[1] = JSON.parse(wr1[0].endpoint).length === 10 ? wrText[1] : "Endpoints in Web Reputation Detection";

        createChart(urls, JSON.parse(wr1[0].url_count), wrText[0], "wr_img1", chartTypes[0])
        createChart(JSON.parse(wr1[0].endpoint), JSON.parse(wr1[0].endpoint_count), wrText[1], "wr_img2", chartTypes[1])
        createChart(JSON.parse(wr1[0].protocol), JSON.parse(wr1[0].protocol_count), wrText[2], "wr_img3", chartTypes[2])

        res.json(wr1);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const saveDatawr = async (req, res) => {
    console.log(req.body)
    const user = new Wr(req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


// ips

const getipsModel = async (req, res) => {
    try {
        const ips1 = await Ips.find({}).sort({ _id: -1 }).limit(1);
        let rules = JSON.parse(ips1[0].rule);
        let endPoints = JSON.parse(ips1[0].product_endpoint);
        let chartTypes = JSON.parse(ips1[0].chartTypes);

        ipsText[1] = endPoints.length === 10 ? ipsText[1] : "Endpoints in IPS Detection";

        if (rules.length > 1) {
            for (let i = 0; i < rules.length; i++) {
                if (rules[i].length > 15) {
                    rules[i] = rules[i].slice(0, 25) + "..."
                }
            }
        }


        // console.log(rules)

        createChart(rules, JSON.parse(ips1[0].rule_count), ipsText[0], "ip_img1", chartTypes[0])
        createChart(JSON.parse(ips1[0].product_endpoint), JSON.parse(ips1[0].product_endpoint_count), ipsText[1], "ip_img2", chartTypes[1])
        createChart(JSON.parse(ips1[0].action), JSON.parse(ips1[0].action_count), ipsText[2], "ip_img3", chartTypes[2])
        res.json(ips1);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const saveDataips = async (req, res) => {
    const user = new Ips(req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


// BM

const getbmModel = async (req, res) => {
    try {
        const bm1 = await Bm.find({}).sort({ _id: -1 }).limit(1);
        let chartTypes = JSON.parse(bm1[0].chartTypes);
        createChart(JSON.parse(bm1[0].endpoint), JSON.parse(bm1[0].endpoint_count), bmText[0], "bm_img1", chartTypes[0])
        createChart(JSON.parse(bm1[0].policy), JSON.parse(bm1[0].policy_count), bmText[1], "bm_img2", chartTypes[1])
        res.json(bm1);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const saveDatabm = async (req, res) => {
    const user = new Bm(req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//dc

const getdcModel = async (req, res) => {
    try {
        const dc1 = await Dc.find({}).sort({ _id: -1 }).limit(1);
        let chartTypes = JSON.parse(dc1[0].chartTypes);
        let device_type = JSON.parse(dc1[0].device_type);

        dcText[1] = (JSON.parse(dc1[0].product_endpoint).length === 10) ? dcText[1] : "Endpoints in DC Detection";


        createChart(device_type, JSON.parse(dc1[0].device_type_count), dcText[0], "d_img1", chartTypes[0])
        createChart(JSON.parse(dc1[0].product_endpoint), JSON.parse(dc1[0].product_endpoint_count), dcText[1], "d_img2", chartTypes[1])
        createChart(JSON.parse(dc1[0].permission), JSON.parse(dc1[0].permission_count), dcText[2], "d_img3", chartTypes[2])
        res.json(dc1);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const saveDatadc = async (req, res) => {
    const user = new Dc(req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


//cc
const getccModel = async (req, res) => {
    try {
        const cc1 = await Cc.find({}).sort({ _id: -1 }).limit(1);
        let chartTypes = JSON.parse(cc1[0].chartTypes);

        createChart(JSON.parse(cc1[0].product_endpoint), JSON.parse(cc1[0].product_endpoint_count), ccText[0], "cc_img1", chartTypes[0])
        createChart(JSON.parse(cc1[0].callback_address), JSON.parse(cc1[0].callback_address_count), ccText[1], "cc_img2", chartTypes[1])
        res.json(cc1);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const saveDatacc = async (req, res) => {

    const user = new Cc(req.body);
    try {

        const inserteduser = await user.save();
        res.status(201).json(inserteduser);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


//smartscan

const getsmartscanModel = async (req, res) => {
    try {
        const smartscan1 = await Smartscan.find({}).sort({ _id: -1 }).limit(1);
        createChart(JSON.parse(smartscan1[0].ssap), JSON.parse(smartscan1[0].ssap_count), ssText[0], "ss_img1", "bar")
        res.json(smartscan1);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const saveDatasmartscan = async (req, res) => {
    const user = new Smartscan(req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


// furtherInformation
const getfurtherinformationModel = async (req, res) => {
    try {
        const furtherInformation1 = await FurtherInformation.find({}).sort({ _id: -1 }).limit(1);
        res.json(furtherInformation1);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const saveDatafurtherinformation = async (req, res) => {
    const user = new FurtherInformation(req.body);
    console.log(user)
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


function createChart(l, d, title, img, type = 'bar') {

    let piePadding = {
        "bottom": 0,
        "top": 50,
        "left": 0,
        "right": 0
    }
    let pieTitlePosition = "left";
    let pieLegendPosition = "bottom";
    if (l.length < 1 || d.length < 1) return;
    if (type === "outlabeledPie") {
        if (l.length == 1) {
            piePadding = {
                "bottom": 0,
                "top": 0,
                "left": 0,
                "right": 0
            };
            pieTitlePosition = "top";
            pieLegendPosition = "top";
        }
    }

    chart.setWidth(500)
    chart.setHeight(300);
    chart.setVersion('2');
    chart.devicePixelRatio = 2.0;
    chart.setBackgroundColor('#595958');

    let pieColor = ["#4372cc", "#f07f34", "gray", "#ffa600"]
    let barColor = '#4372cc';

    try {

        if (type === "") { type = "bar" }
        let barLayoutPadding = {
            "padding": {
                "bottom": 10,
                "top": 0,
                "left": 10,
                "right": 10
            }
        }
        if (type === "horizontalBar") {
            barLayoutPadding = {
                "padding": {
                    "bottom": 10,
                    "top": 0,
                    "left": 10,
                    "right": 35
                }
            }
        };

        let barOptions = {
            "scales": {
                "yAxes": [
                    {
                        "ticks": {
                            "fontColor": "#fff"
                        },
                        display: true,
                        position: 'left',
                        stacked: true,
                    }
                ],
                "xAxes": [
                    {
                        "ticks": {
                            "fontColor": "#fff"
                        }

                    },
                ]
            },
            "title": {
                "display": true,
                "text": title,
                "fontSize": 18,
                "fontColor": "#fff",
                "fontweight": 'light',
                "padding": 20
            },
            "legend": {
                "display": false
            },
            "layout": barLayoutPadding,
            "plugins": {
                "datalabels": {
                    "anchor": "end",
                    "align": "end",
                    "color": "#fff",
                    "font": {
                        "weight": "bold"
                    }
                }
            }
        }

        let pieOptions = {
            "layout": {
                "padding": piePadding
            },
            legend: {
                position: pieLegendPosition,
                labels: { fontColor: '#fff' }
            },
            title: {
                position: pieTitlePosition,
                display: true,
                text: title,
                fontColor: '#fff',
                fontSize: "18",
            },
            plugins: {
                "outlabels": {
                    "text": "%p",
                    "color": "white",
                    "stretch": 30,
                    "font": {
                        "resizable": true,
                        "minSize": 12,
                        "maxSize": 18
                    }
                }
            }
        }

        chart.setConfig({
            type: type,
            data: {
                labels: l,
                datasets: [
                    {
                        data: d,
                        backgroundColor: type == "outlabeledPie" ? pieColor : barColor,
                        borderColor: type == "outlabeledPie" ? '#ffff' : barColor,
                        borderWidth: 0,
                    },
                ],
            },
            options: type == "outlabeledPie" ? pieOptions : barOptions
        });
        chart.toFile(`${chartFolderName}/${img}.png`);

    } catch (error) {
        console.log("error - while generating charts", title)
    }
}


const convertChartBase64ToImg = async (req, res) => {

    const virus1 = await Virus.find({}).sort({ _id: -1 }).limit(1);
    const spyware1 = await Spyware.find({}).sort({ _id: -1 }).limit(1);
    const wr1 = await Wr.find({}).sort({ _id: -1 }).limit(1);

    try {

        if (virus1[0].desImages !== "") {

            let base64Image = virus1[0].desImages.split(';base64,').pop();
            fs.writeFile('./images/virusIMage.png', base64Image, { encoding: 'base64' }, function (err) {
                if (err) throw err;
            });
        }

        if (spyware1[0].cLogo !== "") {
            let base64Image = spyware1[0].desImages.split(';base64,').pop();
            fs.writeFile('./images/spywareIMage.png', base64Image, { encoding: 'base64' }, function (err) {
                if (err) throw err;
            });
        }

        if (wr1[0].cLogo !== "") {
            let base64Image = wr1[0].desImages.split(';base64,').pop();
            fs.writeFile('./images/WRIMage.png', base64Image, { encoding: 'base64' }, function (err) {
                if (err) throw err;
            });
        }



    } catch (error) {
        // res.status(500).json({ message: error.message });
    }
}



module.exports = {
    convertChartBase64ToImg,
    getChartModel, saveDataChart,
    getagModel, saveDataag,
    getvirusModel, saveDatavirus,
    getspywareModel, saveDataspyware,
    getwrModel, saveDatawr,
    getipsModel, saveDataips,
    getbmModel, saveDatabm,
    getdcModel, saveDatadc,
    getccModel, saveDatacc,
    getsmartscanModel, saveDatasmartscan,
    getfurtherinformationModel, saveDatafurtherinformation

}