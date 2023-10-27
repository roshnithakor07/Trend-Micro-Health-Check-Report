import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Button from "@mui/material/Button";
import axios from "axios";
import Chart from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Endpoints from '../API/Endpoints'
import { Input } from "@mui/material";

export default function SmartScan(props) {
    const { smartscanApi } = Endpoints();

    const [patternDays, setPatternDays] = useState(7)
    let vm = ["Smart Scan Agent Pattern"];

    //database data : 
    const [myChartData, setMycharts] = useState({
        r_id: "",
        ssap: "[]",
        ssap_count: "[]",
        chartFirstLine: '',
        total_detection: 0,
        tablePatternData: "[]",
        patternDays: 7
    });


    const [dataPoints, setDataPoints] = useState([])
    const [columnsNames, setCoulmnsName] = useState(vm[0]);
    const [lable, setLableData] = useState([])
    const [data, setData] = useState([])

    const [x, setX] = useState([]);
    const [y1, setY1] = useState([]);
    const [myChart, setMyChart] = useState([])
    const [tablePatternData, setTablePatternData] = useState([])

    const [total_detection, setTotalDetections] = useState([])


    let cTitle = "Smart Scan Agent Pattern";


    let smartScanTable = [
        `Last ${patternDays} days Pattern updated agents`,
        `Older than ${patternDays} Days Pattern updated agents`,
        'Total Agents'
    ];



    const form1 = (event) => {
        // Passing file data (event.target.files[0]) to parse using Papa.parse
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                setDataPoints(results.data)
            },
        });
    };

    const csvColumnNameOptions = vm.map((i) => (
        <option value={i} key={i}>{i}</option>
    ));


    const load = (e) => {

        if (e.target.value === "select") return;
        setCoulmnsName(e.target.value);

        const count = {};
        const mainCount = {}
        let top10Data = [];
        let sum = 0;

        for (const d of dataPoints) {
            const value = d[e.target.value];

            if (value !== "") {
                mainCount[value] = (mainCount[value] || 0) + 1;
            }
            if (value !== "N/A" && value !== "" && parseFloat(value) >= 10) {
                count[value] = (count[value] || 0) + 1;
            }


        }

        for (const val of Object.values(mainCount)) {
            sum += val
        }

        setTotalDetections(sum)

        for (const [key, value] of Object.entries(count)) {
            top10Data.push({ key, value });
        }

        top10Data.sort((a, b) => b.value - a.value);

        const keys = top10Data.slice(0, 10).map(item => item.key);
        const values = top10Data.slice(0, 10).map(item => item.value);

        let totatSevenPattern = Object.keys(count)
        //totatSevenPattern = totatSevenPattern.filter(item => item !== "N/A" && parseFloat(item) >= 10)
        totatSevenPattern = totatSevenPattern.sort()

        let days = patternDays;
        let last7Pattern = totatSevenPattern.slice(-days);

        let sum1 = 0;

        for (let i = 0; i < days; i++) {
            sum1 += count[last7Pattern[i]]
            console.log(last7Pattern[i], count[last7Pattern[i]])
        }

        tablePatternData[0] = (sum1)
        tablePatternData[1] = ((sum - sum1))
        tablePatternData[2] = (sum)

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

    const handleDes = (e) => {
        setMycharts((prev) => ({
            ...prev, [e.target.name]: e.target.value

        }))

    }

    const handleSubmit = () => {
        myChartData.tablePatternData = JSON.stringify(tablePatternData);

        createCharts(x, y1)
        myChartData['ssap'] = JSON.stringify(x)
        myChartData['ssap_count'] = JSON.stringify(y1)

        var existingTable = document.getElementById('documentV1');
        if (existingTable) {
            existingTable.remove();
        }

        var table = document.createElement('table');
        table.id = "documentV1"

        for (var j = 0; j < 3; j++) {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');

            var text1 = document.createTextNode(smartScanTable[j]);
            var text2 = document.createTextNode(tablePatternData[j]);
            td2.style.textAlign = "center";

            // Create edit button for text2
            var editButton1 = document.createElement("button");
            editButton1.textContent = "Edit";
            editButton1.onclick = createEditFunction(td2, text2, j);
            editButton1.style.outline = "none"
            editButton1.style.border = "none"
            editButton1.style.padding = " 2px 10px"
            editButton1.style.marginLeft = "10px"

            td1.appendChild(text1);
            td2.appendChild(text2);
            td2.appendChild(editButton1);

            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);
        }


        // Function to handle editing the cell
        function createEditFunction(td, textNode, j) {
            return function () {
                var newText = prompt("Edit the text:", textNode.nodeValue);
                if (newText !== null) {
                    textNode.nodeValue = newText;
                    tablePatternData[j] = newText;
                }
                myChartData.tablePatternData = JSON.stringify(tablePatternData);
            };
        }

        document.getElementById("wrapper81").style.display = "block";
        document.getElementById('wrapper81').appendChild(table);
    }

    function createCharts(x, y1) {
        document.getElementById("wrapper82").style.display = "block";
        Chart.register(ChartDataLabels);

        const ctx = document.getElementById("myChart82").getContext("2d");

        if (myChart[0]) {
            myChart[0].destroy(); // Destroy existing chart if it exists
        }

        const newChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: x,
                datasets: [{
                    data: y1,
                    backgroundColor: ['rgb(67,114,204)'],
                    borderColor: ['rgb(67,114,204)'],
                    borderWidth: 2,
                }],
            },
            options: {

                plugins: {
                    legend: {
                        display: false,
                        position: 'bottom',
                        align: 'end',
                        labels: {
                            color: 'gray',
                        },
                    },
                    datalabels: {
                        anchor: 'end',
                        align: 'end',
                        color: "gray",
                        clamp: true,
                        formatter: Math.round,
                        font: {
                            size: 14,
                        },
                    },
                    title: {
                        display: true,
                        text: "Smart Scan Agent Pattern",
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

        myChart[0] = newChart;
    }

    //process database

    const handleCharts = () => {
        myChartData["r_id"] = props.report_id;
        myChartData["chartTitle"] = props.chartTitle;
        myChartData.total_detection = total_detection;
        myChartData.patternDays = patternDays;

        const getProductById = async (e) => {
            try {
                console.log("hello inside smart scan", myChartData)
                await axios.post(smartscanApi, myChartData);

            } catch (error) {

                console.log(error);
            }
        }
        getProductById()
        alert(`${cTitle} Data Save successfully`)


    }


    return (
        <>

            <div className="smartscan-section common-chart" id='smartscan'>
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
                            <select onChange={(e) => { setPatternDays(e.target.value) }}>
                                {/* <option value="select">Last {patternDays} days Pattern updated agents</option> */}
                                <option value={7}>Last 7 days Pattern updated agents</option>
                                <option value={1}>Last 1 day Pattern updated agents</option>
                                <option value={2}>Last 2 days Pattern updated agents</option>
                                <option value={3}>Last 3 days Pattern updated agents</option>
                                <option value={4}>Last 4 days Pattern updated agents</option>
                                <option value={5}>Last 5 days Pattern updated agents</option>
                                <option value={6}>Last 6 days Pattern updated agents</option>
                                <option value={8}>Last 8 days Pattern updated agents</option>
                                <option value={9}>Last 9 days Pattern updated agents</option>
                                <option value={10}>Last 10 days Pattern updated agents</option>
                                <option value={11}>Last 11 days Pattern updated agents</option>
                                <option value={12}>Last 12 days Pattern updated agents</option>
                                <option value={13}>Last 13 days Pattern updated agents</option>
                                <option value={14}>Last 14 days Pattern updated agents</option>
                                <option value={15}>Last 15 days Pattern updated agents</option>
                            </select>
                        </li>

                        <li>
                            <select name="agColumn" id="agColumn" onClick={(e) => { load(e) }}>
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
                            <Button variant="contained" onClick={handleSubmit} color="primary">Create</Button>
                        </li>
                    </ul>
                </div>


                {/* <span id="chartFirstLine8"><input style={inputStyle} onChange={handleDes} name="chartFirstLine" type="text" id="ssChartFirstLine" /></span> */}

                <div className="main-chart">

                    <div className="chart-wrapper" id="wrapper81">


                    </div>
                    <div className="chart-wrapper" id="wrapper82">
                        <canvas
                            id="myChart82"
                            width="500"
                            height="500"
                            aria-label="Hello ARIA World"
                            role="img"
                        ></canvas>
                        <div id="points">
                            <textarea type="text" id="first82" className="chartDes" spellCheck="false" name="first82" onChange={handleDes}></textarea>
                            <textarea type="text" id="second82" className="chartDes" spellCheck="false" name="second82" onChange={handleDes}></textarea>
                        </div>
                    </div>


                </div>

                <br />
                <br />

                <Button onClick={handleCharts} variant="contained" color="success" className="Chartbutton" id="Chartbutton" >
                    Save Data
                </Button>
                <br /><br />
            </div>
            {/* <!-- div 0  5.1 Agent Distribution--> */}

        </>
    );

}