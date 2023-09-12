import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Button from "@mui/material/Button";
import { Chart } from "react-google-charts";



export default function GoogleChart() {
    let vm = ["Virus/Malware", "Endpoint", "Action"];
    const [dataPoints, setDataPoints] = useState([1, 2, 3])
    const [columnsNames, setCoulmnsName] = useState("Platform");
    const [filter_column, setFilterColumn] = useState(10)
    const [lable, setLableData] = useState([])
    const [data, setData] = useState([])

    const [x, setX] = useState([]);
    const [y1, setY1] = useState([]);

    const [chartType, setChartType] = useState("Bar")

    const [data1, setData1] = useState([
        ["x", "y"],
        ["Task", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ]);


    let topValue = {}
    let arr = [], count = {}



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
        dataPoints.map(function (d) {
            arr.push(d[e.target.value]);
        });

        for (const element of arr) {
            if (count[element]) {
                count[element] += 1;
            } else {
                count[element] = 1;
            }
        }

        let y = Object.values(count);

        y.sort(function (a, b) {
            return b - a;
        });

        if (columnsNames !== "Platform") { y = y.slice(0, filter_column) }


        function getObjKey(obj, value) {
            //console.log(obj);
            let key = Object.keys(obj).find((key) => obj[key] === value);
            topValue[key] = value;
            obj[key] = 0;
        }

        for (let i = 0; i < y.length; i++) {
            getObjKey(count, y[i]);
        }

        const keys = Object.keys(topValue);
        const values = Object.values(topValue);
        setX(keys);
        setY1(values);
        setLableData(keys);
        setData(values);

    }


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
            // Add the value to the array if it is checked
            let i = lable.indexOf(e.target.value)
            let value = data[i]
            const updatedX = [...x, e.target.value];
            const updatedY1 = [...y1, value];
            setX(updatedX);
            setY1(updatedY1);
        }
    }

    const dropdownOptions = lable.map((e) => (
        <a href="#" key={e}>
            <input type="checkbox" name="messageCheckbox0" defaultChecked={e} defaultValue={e} onChange={handleCheckboxChange} />
            {e}
        </a>
    ));

    const options = {
        title: "My Daily Activities",
        is3D: true,
    };

    function handleSubmit() {

        let data1 = []
        let sum = 0;
        data1.push(['x', 'y']);
        for (let i = 0; i < x.length; i++) {
            data1.push([x[i], y1[i]]);
            sum += y1[i];
        }
        setData1(data1);
        //setSum(sum)
    }



    return (
        <>
            <h4>this is design</h4>

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
                        {/* <label htmlFor="">Filter Column : </label><br /> */}
                        <input type="number" placeholder="Filter Column" defaultValue={10} name="filter_column" id="filter_column" onChange={(e) => setFilterColumn(e.target.value)} />
                    </li>
                    <li>
                        <select name="agColumn" id="agColumn" onChange={(e) => { load(e); setCoulmnsName(e.target.value) }}>
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
                        <select name="chartType" id="chartType" onChange={(e) => setChartType(e.target.value)}>
                            {/* onClick={(e) => setPlatforms(e.target.value)} */}
                            <option value="Bar">Bar</option>
                            <option value="BarChart">Horizontal Bar</option>
                            <option value="PieChart">Pie</option>
                        </select>
                    </li>

                    <li>
                        <Button variant="contained" onClick={handleSubmit} color="primary">Create</Button>
                    </li>
                </ul>



            </div>



        </>
    );
}


// let pieChart = ['rgb(67,114,204)', "#f07f34", "gray", "#ffa600"];
// let barChart = ['rgb(67,114,204)'];

// let pieDatalabels = {
//     formatter: (value, ctx) => {
//         let sum = 0;
//         let dataArr = ctx.chart.data.datasets[0].data;
//         dataArr.map(data => {
//             sum += data;
//         });
//         let percentage = (value * 100 / sum).toFixed(2) + "%";
//         return percentage;
//     },
//     color: '#fff',
// }
// let barDatalabels = {
//     anchor: 'end',
//     align: 'end',
//     color: "gray",
//     clamp: true,
//     formatter: Math.round,
//     font: {
//         size: 14,
//     },
// }




// function createCharts(no, x, y1, wrapper, canvas, firstId, secondId, text) {
//     document.getElementById(wrapper).style.display = "block";
//     Chart.register(ChartDataLabels);
//     const ctx = document.getElementById(canvas).getContext("2d");

//     if (myChart[no]) {
//         myChart[no].destroy(); // Destroy existing chart if it exists
//     }

//     const newChart = new Chart(ctx, {
//         type: chartType === 'pie' ? 'pie' : 'bar',
//         data: {
//             labels: x,
//             datasets: [{
//                 data: y1,
//                 backgroundColor: ['rgb(67,114,204)', "#f07f34", "gray", "#ffa600"],
//                 borderColor: "#fff",
//                 borderWidth: 2,
//             }],
//         },
//         options: {
//             indexAxis: chartType === 'pie' ? undefined : chartType,
//             plugins: {
//                 legend: {
//                     display: chartType === 'pie' ? true : false,
//                     position: 'bottom',
//                     align: 'end',
//                     labels: {
//                         color: 'gray',
//                     },
//                 },
//                 datalabels: chartType === 'pie' ? pieDatalabels : barDatalabels,
//                 title: {
//                     display: true,
//                     text: text,
//                     position: 'top',
//                     align: 'center',
//                     font: {
//                         weight: 'light',
//                     },
//                     padding: {
//                         top: 5,
//                         bottom: 20,
//                     },
//                     fullSize: true,
//                 },
//             },
//         },
//     });

//     myChart[no] = newChart;
// }
