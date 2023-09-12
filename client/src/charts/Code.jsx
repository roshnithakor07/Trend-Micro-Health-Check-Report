import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Button from "@mui/material/Button";
//import { Chart } from "react-google-charts";
import Chart from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from "axios";
import Endpoints from '../UI/Endpoints'


export default function GoogleChart(props) {
  const { ipsApi } = Endpoints();

  //database data : 
  const [myChartData, setMycharts] = useState({
    device_type: [],
    device_type_count: [],
    product_endpoint: [],
    product_endpoint_count: [],
    permissions: [],
    permissions_count: [],
    device_type_per: [],
    chartTypes: [],
    chartFirstLine: '',
    checkDescriptionAdded: false,
    total_detection: 0,
  });


  let canavaId = ["myChart51", "myChart52", "myChart53"];

  let wrapperId = ["wrapper51", "wrapper52", "wrapper53"];

  let firstId = ["first51", "first52", "first53"];

  let secondId = ["second51", "second52", "second53"];


  let text = ["USB Storage Device", "Top 10 Endpoints in DC Detection"];
  let cTitle = "Device control Detection";

  let vm = ["Device Type", "Product Entity/Endpoint", "Permission"]

  const [total_detection, setTotalDetections] = useState(0)

  let chartFirstLine = `We generated a ${cTitle} Event of the last ${props.logDays} days on ${props.logCollectionDate} from Apex central/Apex One. There was a total of ${total_detection} detections.`;

  const [dataPoints, setDataPoints] = useState([])
  const [columnsNames, setCoulmnsName] = useState(vm[0]);
  const [lable, setLableData] = useState([])
  const [data, setData] = useState([])

  const [x, setX] = useState([]);
  const [y1, setY1] = useState([]);
  const [myChart, setMyChart] = useState([])
  const [chartType, setChartType] = useState("bar")
  const [description, setDescription] = useState([[], []]);
  const [chartTypes, setChartTypes] = useState(['', ''])




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
        load({ target: { value: columnsNames } });
      },
    });
  };

  const csvColumnNameOptions = vm.map((i) => (
    <option value={i} key={i}>{i}</option>
  ));
  let permissionArr = []
  let userNameArr = [];
  let vendorNameArr = [];

  let totalVendors = [];
  let totalPermission = [];
  let totalUsers = [];

  if (permissionArr.length === 0 || userNameArr.length === 0 || vendorNameArr.length === 0) {
    for (let i = 0; i < dataPoints.length; i++) {
      const { Permission, User, Vendor } = dataPoints[i];
      permissionArr.push(Permission);
      userNameArr.push(User);
      vendorNameArr.push(Vendor);
    }
  }

  const load = (e) => {


    setCoulmnsName(e.target.value);

    const count = {};
    const top10Data = [];
    let sum = 0;


    for (const d of dataPoints) {
      const value = d[e.target.value];
      count[value] = (count[value] || 0) + 1;
      // Update the sum
    }


    for (const val of Object.values(count)) {
      sum += val
    }

    setTotalDetections(sum)

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
    <a href="#" key={e}>
      <input type="checkbox" name="messageCheckbox0" defaultChecked={e} defaultValue={e} onChange={handleCheckboxChange} />
      {e}
    </a>
  ));


  if (columnsNames === vm[0]) {

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
      totalUsers.push(...indices.map(k => userNameArr[k]), "-");
      totalPermission.push(...indices.map(k => permissionArr[k]), "-");
      totalVendors.push(...indices.map(k => vendorNameArr[k]), "-");
    }

    totalUsers.pop();
    totalPermission.pop();
    totalVendors.pop();

    const separatorIndex = totalUsers.indexOf('-');
    const user0 = totalUsers.slice(0, separatorIndex).filter((endpoint, index, self) => self.indexOf(endpoint) === index);
    const user1 = totalUsers.slice(separatorIndex + 1).filter((endpoint, index, self) => self.indexOf(endpoint) === index);

    const separatorIndex1 = totalPermission.indexOf('-');
    const permission0 = totalPermission.slice(0, separatorIndex1).filter((endpoint, index, self) => self.indexOf(endpoint) === index);
    const permission1 = totalPermission.slice(separatorIndex1 + 1).filter((endpoint, index, self) => self.indexOf(endpoint) === index);

    const separatorIndex2 = totalVendors.indexOf('-');
    const vendors0 = totalVendors.slice(0, separatorIndex2).filter((endpoint, index, self) => self.indexOf(endpoint) === index);
    const vendors1 = totalVendors.slice(separatorIndex2 + 1).filter((endpoint, index, self) => self.indexOf(endpoint) === index);


    

    const frequencyMap0 = new Map();
    const frequencyMap1 = new Map();

    const frequencyMap2 = new Map();
    const frequencyMap3 = new Map();

    const frequencyMap4 = new Map();
    const frequencyMap5 = new Map();

    console.log(frequencyMap0,frequencyMap4)


    for (const element of user0) {
      const count = frequencyMap0.get(element) || 0;
      frequencyMap0.set(element, count + 1);
    }

    for (const element of user1) {
      const count = frequencyMap1.get(element) || 0;
      frequencyMap1.set(element, count + 1);
    }

    for (const element of permission0) {
      const count = frequencyMap2.get(element) || 0;
      frequencyMap2.set(element, count + 1);
    }

    for (const element of permission1) {
      const count = frequencyMap3.get(element) || 0;
      frequencyMap3.set(element, count + 1);
    }

    for (const element of vendors0) {
      const count = frequencyMap4.get(element) || 0;
      frequencyMap4.set(element, count + 1);
    }

    for (const element of vendors1) {
      const count = frequencyMap5.get(element) || 0;
      frequencyMap5.set(element, count + 1);
    }

    function getTop5Keys(frequencyMap) {
      const sortedEntries = [...frequencyMap.entries()].sort((a, b) => b[1] - a[1]);
      const top5Keys = sortedEntries.slice(0, 5).map(([key]) => key);
      return top5Keys;
    }

    const top5Keys0 = getTop5Keys(frequencyMap0);
    const top5Keys1 = getTop5Keys(frequencyMap1);

    const top5Keys2 = getTop5Keys(frequencyMap2);
    const top5Keys3 = getTop5Keys(frequencyMap3);

    const top5Keys4 = getTop5Keys(frequencyMap4);
    const top5Keys5 = getTop5Keys(frequencyMap5);










    if (columnsNames === vm[0]) {
      description[0][0] = `Device Control regulates access to external storage devices and network resources connected to computers. Device Control helps prevent data loss and leakage and combined with file scanning, helps guard against security risks. Allow trusted devices only.`;
      description[0][1] = ``;
    } else if (columnsNames === vm[1]) {
      description[1][0] = `${x[0]} was the endpoint which was triggered the most having Device control detection and was blocked successfully. All the device control which was triggered has been blocked successfully so no other actions are required.`;
      description[1][1] = ``;
    }


  }






  function handleSubmit() {

    document.getElementById('Chartbutton').style.display = "block"

    if (columnsNames === vm[0]) {

      createCharts(0, x, y1, wrapperId[0], canavaId[0], firstId[0], secondId[0], text[0])
      document.getElementById('chartFirstLine5').style.display = "block";
      document.getElementById('dcChartFirstLine').value = chartFirstLine;
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
      createCharts(1, x, y1, wrapperId[1], canavaId[1], firstId[1], secondId[1], text[1])
      myChartData['product'] = JSON.stringify(x)
      myChartData['product_count'] = JSON.stringify(y1)

    } else if (columnsNames === vm[2]) {

      myChartData['permission'] = JSON.stringify(x)
      myChartData['permission_count'] = JSON.stringify(y1)


      var existingTable = document.getElementById('documentV');
      if (existingTable) {
        existingTable.remove();
      }

      let sum = 0
      for (let i = 0; i < y1.length; i += 1) {

        sum += y1[i]

      }
      // myChartData.platform_count_sum = sum;
      document.getElementById("wrapper53").style.display = "block";
      var table = document.createElement('table');
      table.id = "documentV"
      var th1 = document.createElement('th');
      var th2 = document.createElement('th');
      var text1 = document.createTextNode('DEVICE CONTROL USERS & VENDORS');
      var text2 = document.createTextNode('Count');
      var tr = document.createElement('tr');
      th1.appendChild(text1);

      th2.appendChild(text2);

      tr.appendChild(th1);

      tr.appendChild(th2);

      table.appendChild(tr);

      for (var j = 0; j < y1.length; j++) {

        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var text1 = document.createTextNode(x[j]);
        var text2 = document.createTextNode(y1[j]);
        td2.style.textAlign = "center"
        td1.appendChild(text1);
        td2.appendChild(text2);
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
      }
      var th1 = document.createElement('th');
      var th2 = document.createElement('th');
      var text1 = document.createTextNode('Total');
      var text2 = document.createTextNode(sum);
      var tr = document.createElement('tr');
      th1.appendChild(text1);
      th2.appendChild(text2);
      tr.appendChild(th1);
      tr.appendChild(th2);
      table.appendChild(tr);
      document.getElementById('wrapper53').appendChild(table)
    }

    //setSum(sum)
  }


  function createCharts(no, x, y1, wrapper, canvas, firstId, secondId, text) {
    document.getElementById(wrapper).style.display = "block";
    document.getElementById(firstId).value = description[no][0];
    document.getElementById(secondId).value = description[no][1];
    Chart.register(ChartDataLabels);

    myChartData[firstId] = description[no][0]
    myChartData[secondId] = description[no][1]
    chartTypes[no] = chartType


    const ctx = document.getElementById(canvas).getContext("2d");

    if (myChart[no]) {
      myChart[no].destroy(); // Destroy existing chart if it exists
    }

    const newChart = new Chart(ctx, {
      type: chartType === 'pie' ? 'pie' : 'bar',
      data: {
        labels: x,
        datasets: [{
          data: y1,
          backgroundColor: chartType === 'pie' ? pieChartColor : barChartColor,
          borderColor: chartType === 'pie' ? "#fff" : barChartColor,
          borderWidth: 2,
        }],
      },
      options: {
        indexAxis: chartType === 'horizontalBar' ? 'y' : 'x',
        plugins: {
          legend: {
            display: chartType === 'pie' ? true : false,
            position: 'bottom',
            align: 'end',
            labels: {
              color: 'gray',
            },
          },
          datalabels: chartType === 'pie' ? pieDatalabels : barDatalabels,
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


  const handleDes = (e) => {
    setMycharts((prev) => ({
      ...prev, [e.target.name]: e.target.value

    }))


  }


  //process database

  const handleCharts = () => {

    console.log(myChartData)
    myChartData.total_detection = total_detection;
    myChartData.chartFirstLine = chartFirstLine;
    myChartData.chartTypes = JSON.stringify(chartTypes)

    const getProductById = async (e) => {
      try {
        // console.log("hello inside handlevirus", myChartData)
        await axios.post(ipsApi, myChartData);

      } catch (error) {

        console.log(error);
      }
    }
    getProductById()
    alert(`${cTitle} Data Save Successfully`)


  }


  return (
    <>
      <div className="dc-section common-chart" id='dc'>
        <h3 >6.6 Device control Detection</h3>

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
              <select name="agColumn" id="agColumn" onChange={(e) => { load(e); }}>
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

                <option value="bar">Bar</option>
                <option value="horizontalBar">Horizontal Bar</option>
                <option value="pie">Pie</option>
              </select>
            </li>

            <li>
              <Button variant="contained" color="primary" onClick={handleSubmit}>Create</Button>
            </li>
          </ul>
        </div>


        <span id="chartFirstLine5"><input style={inputStyle} onChange={handleDes} name="chartFirstLine" type="text" id="dcChartFirstLine" /></span>

        <div className="main-chart">

          <div className="chart-wrapper" id="wrapper51">
            {/* <!-- <canvas id="myChart" className="myChart" width="400" height="400"></canvas> --> */}
            <canvas
              id="myChart51"
              width="500"
              height="500"
              aria-label="Hello ARIA World"
              role="img"
            ></canvas>

            <div id="points">
              <textarea type="text" id="first51" className="chartDes" spellCheck="false" name="first51" onChange={handleDes}></textarea>
              <textarea type="text" id="second51" className="chartDes" spellCheck="false" name="second51" onChange={handleDes}></textarea>
            </div>
          </div>
          <div className="chart-wrapper" id="wrapper52">
            <canvas
              id="myChart52"
              className="myChart"
              width="400"
              height="400"
            ></canvas>
            <div id="points">
              <textarea type="text" id="first52" className="chartDes" spellCheck="false" name="first52" onChange={handleDes}></textarea>
              <textarea type="text" id="second52" className="chartDes" spellCheck="false" name="second52" onChange={handleDes}></textarea>
            </div>
          </div>
          <div className="chart-wrapper" id="wrapper53">
            <canvas
              id="myChart53"
              className="myChart"
              width="400"
              height="400"
            ></canvas>
            <div id="points">
              <textarea type="text" id="first53" className="chartDes" spellCheck="false" name="first53" onChange={handleDes}></textarea>
              <textarea type="text" id="second53" className="chartDes" spellCheck="false" name="second53" onChange={handleDes}></textarea>
            </div>
          </div>

        </div>

        <br />
        <br />

        <Button variant="contained" color="success" className="Chartbutton" id="Chartbutton" onClick={handleCharts}>
          Save Data
        </Button>
        <br /><br />
      </div>

    </>
  )
}


