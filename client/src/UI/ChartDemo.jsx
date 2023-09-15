import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Button from "@mui/material/Button";
//import { Chart } from "react-google-charts";
import Chart from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from "axios";
import Endpoints from '../API/Endpoints'
import { green, indigo } from "@mui/material/colors";
const success = indigo[700];
const save = green[900];

export default function ChartDemo(props) {
    const { dcApi, getReportData } = Endpoints();

    //database data : 
    const [myChartData, setMycharts] = useState({
        r_id: "",
        device_type: "[]",
        device_type_count: "[]",
        product_endpoint: "[]",
        product_endpoint_count: "[]",
        device_type_per: "[]",
        permission_type: "[]",
        permission_count: "[]",
        chartTypes: "[]",
        chartFirstLine: '',
        total_detection: 0,
        chartDescription: '[]',
        updatedDCVendorTable: "[]",
        chartSubPoints: "[]",
        showChart: true,
    });


    useEffect(() => {
        const getProductById = async () => {
            await axios({
                url: getReportData,
                method: "GET",
            })
                .then((res) => {
                    myChartData.r_id = res.data[0]._id;
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getProductById();
    });

    let canavaId = ["myChart51", "myChart52", "myChart53"];

    let wrapperId = ["wrapper51", "wrapper52", "wrapper54"];

    const heading = ["DEVICE TYPE & VENDORS", "PERMISSION"]

    let cTitle = "Device control Detection";

    let vm = ["Device Type", "Product Entity/Endpoint", "Permission", "Table"]

    const [total_detection, setTotalDetections] = useState(0)

    const [chartFirstLine, setChartFirstLine] = useState("")
    let line = `We generated a ${cTitle} Event of the last ${props.logDays} ${props.logDuration} on ${props.logCollectionDate} from Apex central/Apex One. There was a total of ${total_detection} detections.`

    const [dataPoints, setDataPoints] = useState([])
    const [columnsNames, setCoulmnsName] = useState(vm[0]);
    const [lable, setLableData] = useState([])
    const [data, setData] = useState([])

    const [x, setX] = useState([]);
    const [y1, setY1] = useState([]);
    const [myChart, setMyChart] = useState([])
    const [chartType, setChartType] = useState("horizontalBar")
    const [description, setDescription] = useState([[], [], []]);
    const [chartTypes, setChartTypes] = useState(['', ''])
    const [dcVendorTable, setDcVendorTable] = useState([])
    let updatedDCVendorTable = []

    //chart Points
    const [PointArr, setPointArr] = useState([[], [], []]);
    const [updatechartDes, setUpdatechartDes] = useState("");;
    const [updateLinkId, setUpdateLinkId] = useState("");
    const [showChart, setShowChart] = useState([false,false,false,false])

    const [chartDes, setchartDess] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupIndex, setPopupIndex] = useState(0);

    //sub points
    const [isSubPointPopupOpen, setIsSubPopupOpen] = useState(false);
    const [subPointIndex, setSubPointIndex] = useState(0);
    const [SubPointArr, setSubPointArr] = useState([[[], [], []], [[], [], []], [[], [], []]]);


    //Sub Point Section
    const deleteSubPoint = (e, index, subIndex, linkArrNo) => {
        const subPoints = [...SubPointArr];
        subPoints[linkArrNo][index].splice(subIndex, 1);
        setSubPointArr(subPoints);
    };

    const openSubPointPopup = (e, index, subIndex) => {
        setIsSubPopupOpen(true)
        setUpdatechartDes(chartDes);
        setSubPointIndex(subIndex);
        setPopupIndex(index);
    };

    const addSubPoint = (e) => {
        const subPoints = [...SubPointArr];
        subPoints[popupIndex][subPointIndex].push(updatechartDes);
        setSubPointArr(subPoints);
        setIsSubPopupOpen(false)
    };

    const closePopup = () => { setIsPopupOpen(false); setIsSubPopupOpen(false); }

    let pieChartColor = ['rgb(67,114,204)', "#f07f34", "gray", "#ffa600"];
    let barChartColor = ['rgb(67,114,204)'];

    let pieDatalabels = {
        formatter: (value, ctx) => {
            let sum = 0;
            let dataArr = ctx.chart.data.datasets[0].data;
            dataArr.map(data => {
                sum += data;
            });
            let percentage = (value * 100 / sum).toFixed(2) + "%";
            return percentage;
        },
        color: '#fff',
    }

    let barDatalabels = {
        anchor: 'end',
        align: 'end',
        color: "gray",
        clamp: true,
        formatter: Math.round,
        font: {
            size: 14,
        },
    }


    let inputStyle = {
        width: "90%",
        height: "25px",
        textAlign: "center"
    };

    const form1 = (event) => {
        const file = event.target.files[0];
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: ({ data }) => {
                setDataPoints(data);

            },
        });
    };

    const csvColumnNameOptions = vm.map((i) => (
        <option value={i} key={i} >{i}</option>
    ));

    let permissionArr = [];
    let vendorArr = [];


    let totalVendorArr = [];
    let totalPermissionArr = [];

    if (permissionArr.length === 0 || vendorArr.length === 0) {
        for (let i = 0; i < dataPoints.length; i++) {
            const { Permission, Vendor } = dataPoints[i];
            permissionArr.push(Permission);
            vendorArr.push(Vendor)

        }

    }


    const load = (e) => {
        if (e.target.value === "select") return;
        setCoulmnsName(e.target.value);

        const count = {}, mainCount = {};
        for (const d of dataPoints) {
            const value = d[e.target.value];
            mainCount[value] = (mainCount[value] || 0) + 1;
            if (value !== "N/A" && value !== "") {
                count[value] = (count[value] || 0) + 1;
            }
        }

        let sum = 0;
        for (const val of Object.values(mainCount)) {
            sum += val
        }

        setTotalDetections(sum)
        const top10Data = [];

        for (const [key, value] of Object.entries(count)) {
            top10Data.push({ key, value });
        }

        top10Data.sort((a, b) => b.value - a.value);

        const keys = top10Data.slice(0, 10).map(item => item.key);
        const values = top10Data.slice(0, 10).map(item => item.value);

        setX(keys);
        setY1(values);
        setLableData(keys);
        setData(values);

    };

    const handleCheckboxChange = (e) => {
        if (!e.target.checked) {
            const updatedX = x.filter((item) => item !== e.target.value);
            let i = lable.indexOf(e.target.value);
            let value = data[i]
            const index = y1.findIndex((item) => item === value);
            if (index !== -1) {
                const updatedY1 = [...y1.slice(0, index), ...y1.slice(index + 1)];
                setY1(updatedY1);
            }

            setX(updatedX);

        } else {
            const updatedX = [...x];
            const updatedY1 = [...y1];
            // Add the value to the array if it is checked
            let i = lable.indexOf(e.target.value)
            let value = data[i]
            // const updatedX = [...x, e.target.value];
            // const updatedY1 = [...y1, value];
            updatedX.splice(i, 0, e.target.value);
            updatedY1.splice(i, 0, value);
            setX(updatedX);
            setY1(updatedY1);
        }
    }

    const dropdownOptions = lable.map((e) => (
        <span key={e}>
            <input type="checkbox" name="messageCheckbox0" defaultChecked={e} defaultValue={e} onChange={handleCheckboxChange} />
            {e}
        </span>
    ));


    function transformKey(key) {
        let currentKey = key.toLowerCase();

        if (currentKey.includes("list device content only")) {
            return "list device content only";
        } else if (currentKey.includes("read and execute")) {
            return "read";
        } else if (currentKey.includes("clean")) {
            return "cleaned";
        } else if (currentKey.includes("terminate")) {
            return "terminated";
        } else if (currentKey.includes("block")) {
            return "Blocked";
        }
    }

    const makeDesSentences = () => {
        const arr = dataPoints.map((d) => d[columnsNames]);

        const desObject = {};
        x.slice(0, 2).forEach((xVal, i) => {
            desObject[xVal] = y1[i];
        });


        const desArry = Object.keys(desObject).map((key) => {
            return arr.reduce((acc, el, i) => {
                if (el === key) {
                    acc.push(i);
                }
                return acc;
            }, []);
        });


        for (const indices of desArry) {

            totalPermissionArr.push(...indices.map(k => permissionArr[k]), "-");

        }

        totalPermissionArr.pop();

        const separatorIndex1 = totalPermissionArr.indexOf('-');
        const actionPoint0 = totalPermissionArr.slice(0, separatorIndex1).filter((endpoint, index, self) => self.indexOf(endpoint) === index);
        const actionPoint1 = totalPermissionArr.slice(separatorIndex1 + 1).filter((endpoint, index, self) => self.indexOf(endpoint) === index);

        const frequencyMap2 = new Map();
        const frequencyMap3 = new Map();


        for (const element of actionPoint0) {
            const count = frequencyMap2.get(element) || 0;
            frequencyMap2.set(element, count + 1);
        }

        for (const element of actionPoint1) {
            const count = frequencyMap3.get(element) || 0;
            frequencyMap3.set(element, count + 1);
        }

        function getTop5Keys(frequencyMap) {
            const sortedEntries = [...frequencyMap.entries()].sort((a, b) => b[1] - a[1]);
            const top5Keys = sortedEntries.slice(0, 5).map(([key]) => key);
            return top5Keys;
        }

        //Action
        const top5Keys2 = getTop5Keys(frequencyMap2);
        const top5Keys3 = getTop5Keys(frequencyMap3);

        for (let i = 0; i < top5Keys2.length; i++) {
            top5Keys2[i] = transformKey(top5Keys2[i]);
        }

        for (let i = 0; i < top5Keys3.length; i++) {
            top5Keys3[i] = transformKey(top5Keys3[i]);
        }


        let actionVal0, actionVal1;


        if (top5Keys2.length > 1) {
            actionVal0 = top5Keys2.slice(0, -1).join(", ") + " and " + top5Keys2[top5Keys2.length - 1];
        } else {
            if (top5Keys2.length) {
                actionVal0 = top5Keys2[0];
            } else {
                actionVal0 = "no action was required";
            }
        }

        if (top5Keys3.length > 1) {
            actionVal1 = top5Keys3.slice(0, -1).join(", ") + " and " + top5Keys3[top5Keys3.length - 1];
        } else {
            if (top5Keys3.length) {
                actionVal1 = top5Keys3[0];
            } else {
                actionVal1 = "no action was required"
            }

        }
        description[1][0] = `${x[0]} was the endpoint that was triggered the most having Device control detection and was ${actionVal0} successfully.`;
        // description[1][1] = `${x[1]} was the endpoint that was triggered the most having Device control detection and was ${actionVal1} successfully.`;
    }


    switch (columnsNames) {

        case vm[1]:
            makeDesSentences()
            break;

        default:
            break;
    }

    if (columnsNames === vm[2]) {

        const top5Keys2 = [...x];

        for (let i = 0; i < top5Keys2.length; i++) {
            top5Keys2[i] = transformKey(top5Keys2[i]);
        }

        PointArr[2][0] = `All detections triggered have been ${top5Keys2.join(', ').replace(/,([^,]*)$/, ', and$1')} by Apex One Agent.`
    }


    if (columnsNames === vm[3]) {
        let count = {}
        const arr = dataPoints.map((d) => d["Device Type"]);

        for (const d of dataPoints) {
            const value = d["Device Type"];
            count[value] = (count[value] || 0) + 1;
            // Update the sum
        }

        let deviceNameArr = Object.keys(count)

        const desArry = Object.keys(count).map((key) => {
            return arr.reduce((acc, el, i) => {
                if (el === key) {
                    acc.push(i);
                }
                return acc;
            }, []);
        });

        for (const indices of desArry) {
            totalPermissionArr.push(...indices.map(k => permissionArr[k]), "-");
            totalVendorArr.push(...indices.map(k => vendorArr[k]), "-");
        }

        totalPermissionArr.pop();
        totalVendorArr.pop();

        function calculateFrequencies(arr) {
            const dividedArrays = [];
            let currentArray = [];

            for (const item of arr) {
                if (item === '-') {
                    if (currentArray.length > 0) {
                        dividedArrays.push(currentArray);
                        currentArray = [];
                    }
                } else {
                    currentArray.push(item);
                }
            }

            if (currentArray.length > 0) {
                dividedArrays.push(currentArray);
            }

            const frequencies = [];
            for (const arr of dividedArrays) {
                const frequency = {};
                for (const item of arr) {
                    frequency[item] = (frequency[item] || 0) + 1;
                }
                frequencies.push(frequency);
            }

            return frequencies;
        }

        const permissionsFrequencies = calculateFrequencies(totalPermissionArr);

        const allPermissionsName = {};
        for (const frequencyObj of permissionsFrequencies) {
            for (const key in frequencyObj) {
                if (frequencyObj.hasOwnProperty(key)) {
                    allPermissionsName[key] = (allPermissionsName[key] || 0) + frequencyObj[key];
                }
            }
        }


        const segments = [];
        let currentSegment = new Set();

        for (const vendor of totalVendorArr) {
            if (vendor !== '-') {
                currentSegment.add(vendor);
            } else {
                if (currentSegment.size > 0) {
                    segments.push([...currentSegment]);
                    currentSegment.clear();
                }
            }
        }

        // Add the last segment if it exists
        if (currentSegment.size > 0) {
            segments.push([...currentSegment]);
        }


        updatedDCVendorTable = deviceNameArr.map((item, index) => {
            return {
                label: item,
                vendors: segments[index % segments.length],
                permissionsFrequencies: permissionsFrequencies[index % permissionsFrequencies.length],
                allPermissionsName: allPermissionsName
            };
        });



    }

    function handleSubmit() {
        const link = [...showChart];
        
        document.getElementById('Chartbutton').style.display = "block"
        const link1 = [...PointArr]
        if (columnsNames === vm[0]) {
            link[0] = true
            createCharts(0, x, y1, wrapperId[0], canavaId[0], "Device Type")
            document.getElementById('chartFirstLine5').style.display = "block";
            setChartFirstLine(line);
            myChartData['device_type'] = JSON.stringify(x)
            myChartData['device_type_count'] = JSON.stringify(y1)

            let sum = 0
            for (const i of y1) {
                sum += i
            }

            let percentage = []

            for (let i = 0; i < y1.length; i++) {

                percentage.push((y1[i] * 100 / sum).toFixed(2) + "%")
            }

            myChartData.device_type_per = JSON.stringify(percentage)


        } else if (columnsNames === vm[1]) {
            link1[1][0] = description[1][0];
            link[1] = true
            createCharts(1, x, y1, wrapperId[1], canavaId[1], "Top 10 Endpoints in DC Detection")

            myChartData['product_endpoint'] = JSON.stringify(x)
            myChartData['product_endpoint_count'] = JSON.stringify(y1)

        } else if (columnsNames === vm[3]) {
            link[3] = true
            setDcVendorTable([...updatedDCVendorTable])

            var existingTable = document.getElementById('DCdocumentV');
            if (existingTable) {
                existingTable.remove();
            }

            document.getElementById("wrapper53").style.display = "block";
            var DCTable = document.createElement("table");
            DCTable.id = "DCdocumentV";
            const totalActionName = Object.keys(updatedDCVendorTable[0].allPermissionsName);
            const totalActionCount = Object.values(updatedDCVendorTable[0].allPermissionsName);
            var thead = document.createElement("thead");
            DCTable.appendChild(thead);
            //THEAD DONE
            for (let i = 0; i < 2; i++) {
                var tr = document.createElement('tr');
                for (let j = 0; j < 3; j++) {

                    if (i === 0) {
                        var th = document.createElement('th');
                        var text = document.createTextNode(heading[j]);
                        if (j === 2) {
                            break;
                        }
                    } else {
                        if (totalActionName[j]) {
                            var th = document.createElement('th');
                            var text = document.createTextNode(totalActionName[j]);
                        }
                    }
                    if (i === 0 && j === 0) {
                        th.rowSpan = 2
                    }
                    if (i === 0 && j === 1) {
                        th.colSpan = totalActionName.length;
                    }
                    th.appendChild(text);
                    tr.appendChild(th);
                }
                tr.style.textAlign = "center"
                thead.appendChild(tr);
            }
            DCTable.append(thead)

            //TBODY 
            var tbody = document.createElement("tbody");
            DCTable.appendChild(tbody);

            //add rows
            for (let i = 0; i < updatedDCVendorTable.length; i++) {
                var tr = document.createElement('tr');
                var td = document.createElement('td');
                var text = document.createTextNode(updatedDCVendorTable[i].label);
                td.appendChild(text);
                td.style.fontWeight = "bold";
                tr.appendChild(td);
                let keys = Object.keys(updatedDCVendorTable[i].permissionsFrequencies);
                totalActionName.map((element, index) => {
                    if (keys.includes(element)) {
                        var td = document.createElement('td');
                        var text = document.createTextNode(updatedDCVendorTable[i].permissionsFrequencies[element]);
                        td.appendChild(text);
                        tr.appendChild(td);
                    } else {
                        var td = document.createElement('td');
                        tr.appendChild(td);
                    }
                });
                tbody.appendChild(tr);
                if (updatedDCVendorTable[i].vendors.length) {
                    for (const iterator of updatedDCVendorTable[i].vendors) {
                        if (iterator && iterator.trim() !== "N/A") { // Skip if iterator is "N/A" or blank
                            var tr = document.createElement('tr');
                            var td = document.createElement('td');
                            var text = document.createTextNode(iterator);
                            td.appendChild(text);
                            tr.appendChild(td);
                            for (let i = 0; i < totalActionName.length; i++) {
                                var td = document.createElement('td');
                                tr.appendChild(td);
                            }
                            tbody.appendChild(tr);
                        }
                    }
                }

            }

            var tr = document.createElement('tr');
            var th = document.createElement('th');
            var text = document.createTextNode('Total');
            th.appendChild(text);
            tr.appendChild(th);

            for (let i = 0; i < totalActionName.length; i++) {
                var th = document.createElement('th');
                var text = document.createTextNode(totalActionCount[i]);
                th.appendChild(text);
                tr.appendChild(th);
            }
            tbody.appendChild(tr);
            document.getElementById('wrapper-child53').appendChild(DCTable)
        } else if (columnsNames === vm[2]) {
            link[2] = true
            myChartData['permission'] = JSON.stringify(x)
            myChartData['permission_count'] = JSON.stringify(y1)
            createCharts(2, x, y1, wrapperId[2], canavaId[2], "Action")

        }
        setPointArr(link1);
        setShowChart(link)
    }

    function createCharts(no, x, y1, wrapper, canvas, text) {

        console.log(text)
        document.getElementById(wrapper).style.display = "block";
        Chart.register(ChartDataLabels);
        chartTypes[no] = chartType

        const ctx = document.getElementById(canvas).getContext("2d");

        if (myChart[no]) {
            myChart[no].destroy();
        }

        const newChart = new Chart(ctx, {
            type: chartType === 'outlabeledPie' ? 'pie' : 'bar',
            data: {
                labels: x,
                datasets: [{
                    data: y1,
                    backgroundColor: chartType === 'outlabeledPie' ? pieChartColor : barChartColor,
                    borderColor: chartType === 'outlabeledPie' ? "#fff" : barChartColor,
                    borderWidth: 2,
                }],
            },
            options: {
                indexAxis: chartType === 'horizontalBar' ? 'y' : 'x',
                plugins: {
                    legend: {
                        display: chartType === 'outlabeledPie' ? true : false,
                        position: 'bottom',
                        align: 'end',
                        labels: {
                            color: 'gray',
                        },
                    },
                    datalabels: chartType === 'outlabeledPie' ? pieDatalabels : barDatalabels,
                    title: {
                        display: true,
                        text: text,
                        position: 'top',
                        align: 'center',
                        font: {
                            weight: 'light',
                        },
                        padding: {
                            top: 5,
                            bottom: 20,
                        },
                        fullSize: true,
                    },
                },
                layout: {
                    padding: {
                        top: 20,    // Adjust the top padding as needed
                        right: 50,  // Adjust the right padding as needed
                        bottom: 20, // Adjust the bottom padding as needed
                        left: 20,   // Adjust the left padding as needed
                    },
                },
            },
        });

        myChart[no] = newChart;
    }
    //process database

    const handleCharts = () => {

        myChartData["chartDescription"] = JSON.stringify(PointArr)
        myChartData.total_detection = total_detection;
        myChartData["chartSubPoints"] = JSON.stringify(SubPointArr)
        myChartData.chartFirstLine = chartFirstLine;
        myChartData.chartTypes = JSON.stringify(chartTypes)
        myChartData["updatedDCVendorTable"] = JSON.stringify(dcVendorTable);
        myChartData["showChart"] = showChart;

        const getProductById = async (e) => {
            try {
                // console.log("hello inside handlevirus", myChartData)
                await axios.post(dcApi, myChartData);

            } catch (error) {

                console.log(error);
            }
        }
        getProductById()
        alert(`${cTitle} Data Save successfully`)


    }
    //chart points 

    const addValue = (e, linkArrNo, chartDesId) => {

        if (chartDes.trim() === '') {
            alert("Please fill in both the link title and the link.");
            return;
        }
        const link1 = [...PointArr];
        link1[linkArrNo].push(chartDes);
        setPointArr(link1);
        document.getElementById(chartDesId).value = "";
        setchartDess("")
    };

    const deletePopup = (e, index, linkArrNo) => {
        const link1 = [...PointArr];
        link1[linkArrNo].splice(index, 1);
        setPointArr(link1);

    };

    const updateValue = () => {
        const link1 = [...PointArr];

        switch (popupIndex) {
            case 0:
                link1[0][updateLinkId] = updatechartDes;
                break;
            case 1:
                link1[1][updateLinkId] = updatechartDes;
                break;
            case 2:
                link1[2][updateLinkId] = updatechartDes;
                break;
            default:
                break;

        };
        setPointArr(link1);
        setUpdatechartDes("");
        setUpdateLinkId('');
        closePopup()
    }


    const openPopup = (e, index, chartDes, no) => {
        setIsPopupOpen(true);
        setUpdatechartDes(chartDes);
        setUpdateLinkId(index);
        setPopupIndex(no);
        console.log(index, no)
    };


    const closeChart = (e, idVal, index) => {
        const link = [...showChart];
        document.getElementById(idVal).style.display = "none"
        link[index] = false
        setShowChart(link)
    }

   


    console.log(showChart)



    return (
        <>
            <div className="dc-section common-chart" id='dc'>
                <h3 >{props.chartTitle}</h3>

                <div className="chartMenu">
                    <ul id="chartMenuItem">
                        <li>
                            <form id="myForm0" className="c-0">
                                <input
                                    type="file"
                                    id="csvFile0"
                                    name="file" required accept=".csv" onChange={form1} /></form>
                        </li>


                        <li>
                            <select name="agColumn" id="agColumn" onChange={(e) => { load(e);}}>
                                <option value="select">----select----</option>
                                {csvColumnNameOptions}
                            </select>
                        </li>

                        <li>
                            <div className="dropdown" id="dropdown00">
                                <button className="dropbtn">{columnsNames}</button>
                                <div className="dropdown-content" id="dropdown-content00">
                                    {dropdownOptions}
                                </div>
                            </div>
                        </li>

                        <li>
                            <select name="chartType" id="chartType" onChange={(e) => { setChartType(e.target.value) }}>

                                <option value="horizontalBar">Horizontal Bar</option>
                                <option value="bar">Bar</option>
                                <option value="outlabeledPie">Pie</option>
                            </select>
                        </li>

                        <li>
                            <Button variant="contained" color="primary" onClick={handleSubmit}>Create</Button>
                        </li>
                    </ul>
                </div>


                <span id="chartFirstLine5"><input style={inputStyle} value={chartFirstLine} onChange={(e) => { setChartFirstLine(e.target.value) }} name="chartFirstLine" type="text" id="dcChartFirstLine" /></span>

                <div className="main-chart">

                    <div className="chart-wrapper" id="wrapper51">
                        <div className="close-icon1" onClick={(e) => { closeChart(e, "wrapper51", 0) }}>✖</div>

                        {/* <!-- <canvas id="myChart" className="myChart" width="400" height="400"></canvas> --> */}
                        <canvas
                            id="myChart51"
                            width="500"
                            height="500"
                            aria-label="Hello ARIA World"
                            role="img"
                        ></canvas>

                        <div id="points">
                            <textarea cols="10" rows="2" onChange={(e) => setchartDess(e.target.value)} type="text" id="dcchartDescription31" className="chartDes" spellCheck="false" name="first31"></textarea>
                            <Button
                                variant="contained"
                                style={{ backgroundColor: success }}
                                onClick={(e) => addValue(e, 0, "dcchartDescription31")}
                            >
                                Add
                            </Button>


                            <div className="showLinks">
                                {PointArr[0].map((artist, index) => (
                                    <div key={index}>
                                        <ul>
                                            <li>{artist}</li>

                                            <li className="handle-icons">
                                                <img
                                                    src="images/edit.png"
                                                    onClick={(e) => {
                                                        openPopup(e, index, artist, 0);
                                                    }}
                                                    alt=""
                                                />

                                                <img
                                                    src="images/delete.png"
                                                    onClick={(e) => {
                                                        deletePopup(e, index, 0);
                                                    }}
                                                    alt=""
                                                />
                                            </li>
                                        </ul>

                                        {
                                            (index <= 2) ? (
                                                <>
                                                    {SubPointArr[0][index].map((subPoint, subIndex) => (
                                                        <div key={subIndex} style={{ position: "relative", left: '20px', top: "10px" }} >
                                                            <ul>
                                                                <li>{subPoint}</li>

                                                                <li className="handle-icons">
                                                                    <img
                                                                        src="images/delete.png"
                                                                        onClick={(e) => {
                                                                            deleteSubPoint(e, index, subIndex, 0);
                                                                        }}
                                                                        alt=""
                                                                    />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    ))}
                                                    {/* Add Sub Point Button */}
                                                    <img src="images/more-details.png" style={{ width: "30px", height: "30px", position: "relative", left: '20px', top: "10px" }} alt="Close Icon" onClick={(e) => openSubPointPopup(e, 0, index)} />
                                                </>
                                            ) : ""
                                        }

                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>
                    <div className="chart-wrapper" id="wrapper52">
                        <div className="close-icon1" onClick={(e) => { closeChart(e, "wrapper52", 1) }}>✖</div>
                        <canvas
                            id="myChart52"
                            className="myChart"
                            width="400"
                            height="400"
                        ></canvas>
                        <div id="points">
                            <textarea cols="10" rows="2" onChange={(e) => setchartDess(e.target.value)} type="text" id="dcchartDescription32" className="chartDes" spellCheck="false" name="first31"></textarea>
                            <Button
                                variant="contained"
                                style={{ backgroundColor: success }}
                                onClick={(e) => addValue(e, 1, "dcchartDescription32")}
                            >
                                Add
                            </Button>

                            <div className="showLinks">
                                {PointArr[1].map((artist, index) => (
                                    <div key={index}>
                                        <ul>
                                            <li>{artist}</li>

                                            <li className="handle-icons">
                                                <img
                                                    src="images/edit.png"
                                                    onClick={(e) => {
                                                        openPopup(e, index, artist, 1);
                                                    }}
                                                    alt=""
                                                />

                                                <img
                                                    src="images/delete.png"
                                                    onClick={(e) => {
                                                        deletePopup(e, index, 1);
                                                    }}
                                                    alt=""
                                                />
                                            </li>
                                        </ul>

                                        {
                                            (index <= 2) ? (
                                                <>
                                                    {SubPointArr[1][index].map((subPoint, subIndex) => (
                                                        <div key={subIndex} style={{ position: "relative", left: '20px', top: "10px" }} >
                                                            <ul>
                                                                <li>{subPoint}</li>

                                                                <li className="handle-icons">
                                                                    <img
                                                                        src="images/delete.png"
                                                                        onClick={(e) => {
                                                                            deleteSubPoint(e, index, subIndex, 1);
                                                                        }}
                                                                        alt=""
                                                                    />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    ))}
                                                    {/* Add Sub Point Button */}
                                                    <img src="images/more-details.png" style={{ width: "30px", height: "30px", position: "relative", left: '20px', top: "10px" }} alt="Close Icon" onClick={(e) => openSubPointPopup(e, 1, index)} />
                                                </>
                                            ) : ""
                                        }

                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>


                    <div className="chart-wrapper" id="wrapper54">
                        <div className="close-icon1" onClick={(e) => { closeChart(e, "wrapper54", 3) }}>✖</div>
                        {/* <!-- <canvas id="myChart" className="myChart" width="400" height="400"></canvas> --> */}
                        <canvas
                            id="myChart53"
                            width="500"
                            height="500"
                            aria-label="Hello ARIA World"
                            role="img"
                        ></canvas>

                        <div id="points">
                            <textarea cols="10" rows="2" onChange={(e) => setchartDess(e.target.value)} type="text" id="dcchartDescription33" className="chartDes" spellCheck="false" name="first31"></textarea>
                            <Button
                                variant="contained"
                                style={{ backgroundColor: success }}
                                onClick={(e) => addValue(e, 2, "dcchartDescription33")}
                            >
                                Add
                            </Button>
                            <div className="showLinks">
                                {PointArr[2].map((artist, index) => (
                                    <div key={index}>
                                        <ul>
                                            <li>{artist}</li>

                                            <li className="handle-icons">
                                                <img
                                                    src="images/edit.png"
                                                    onClick={(e) => {
                                                        openPopup(e, index, artist, 2);
                                                    }}
                                                    alt=""
                                                />

                                                <img
                                                    src="images/delete.png"
                                                    onClick={(e) => {
                                                        deletePopup(e, index, 2);
                                                    }}
                                                    alt=""
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    <div className="chart-wrapper" id="wrapper53">
                        <div className="close-icon1" onClick={(e) => { closeChart(e, "wrapper53", 2) }}>✖</div>
                        <div id="wrapper-child53"></div>
                    </div>


                </div>

                <br />
                <br />

                <Button variant="contained" color="success" className="Chartbutton" id="Chartbutton" onClick={handleCharts}>
                    Save Data
                </Button>
                {isPopupOpen && (
                    <div id="popup" className="popup">
                        <span className="close-icon">
                            <img src="images/close.png" alt="Close Icon" onClick={closePopup} />
                        </span>
                        <h3>Update Value</h3>
                        <div className="popup-content">

                            <textarea name="" id="popupLinkTitle" cols="40" value={updatechartDes} rows="7" onChange={(e) => setUpdatechartDes(e.target.value)}>
                            </textarea>

                        </div>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: save }}
                            onClick={(e) => updateValue(e)}
                        >
                            Update
                        </Button>
                    </div>

                )}

                {isSubPointPopupOpen && (
                    <div id="popup" className="popup">
                        <span className="close-icon">
                            <img src="images/close.png" alt="Close Icon" onClick={closePopup} />
                        </span>
                        <h3>Add Value</h3>
                        <div className="popup-content">

                            <textarea name="" id="popupLinkTitle" cols="40" rows="7" onChange={(e) => setUpdatechartDes(e.target.value)}>
                            </textarea>

                        </div>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: save }}
                            onClick={(e) => addSubPoint(e)}
                        >
                            Add
                        </Button>
                    </div>

                )}

                <br /><br />
            </div>

        </>
    )
}


