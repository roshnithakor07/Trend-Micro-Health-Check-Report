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

export default function BM(props) {
  const { bmApi } = Endpoints();



  //database data : 
  const [myChartData, setMycharts] = useState({
    r_id: "",
    endpoint: "[]",
    endpoint_count: "[]",
    policy: "[]",
    policy_count: "[]",
    updatedPolicyRiskTable: "[]",
    chartTypes: "[]",
    chartFirstLine: '',
    total_detection: 0,
    chartDescription: '[]',
    chartSubPoints: "[]",
    showChart: "[false, false, false]",
  });



  let canavaId = ["myChart71", "myChart72"];
  const heading = ["BM BY POLICY & RISK LEVEL", "Action"]
  let wrapperId = ["wrapper71", "wrapper72"];
  let cTitle = "Behavior Monitoring";
  // let text = ["BM Detection on Endpoints", "BM Detection By Policy"];

  let vm = ["Endpoint", "Policy"];

  const [total_detection, setTotalDetections] = useState(0)

  const [chartFirstLine, setChartFirstLine] = useState("")
  let line = `We generated a ${cTitle} Event of the last ${props.logDays} ${props.logDuration} on ${props.logCollectionDate} from Apex Central/Apex One. There was a total of ${total_detection} detections.`

  const [dataPoints, setDataPoints] = useState([])
  const [columnsNames, setCoulmnsName] = useState(vm[0]);
  const [lable, setLableData] = useState([])
  const [data, setData] = useState([])
  const [bmPolicyRiskTable, setbmPolicyRiskTable] = useState([])
  let updatedPolicyRiskTable = []


  const [x, setX] = useState([]);
  const [y1, setY1] = useState([]);
  const [myChart, setMyChart] = useState([])
  const [chartType, setChartType] = useState("horizontalBar")
  const [description, setDescription] = useState([[], []]);
  const [chartTypes, setChartTypes] = useState(['', ''])

  //chart Points
  const [PointArr, setPointArr] = useState([[], [], []]);
  const [updatechartDes, setUpdatechartDes] = useState("");;
  const [updateLinkId, setUpdateLinkId] = useState("");

  const [chartDes, setchartDess] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupIndex, setPopupIndex] = useState(0);
  const [showChart, setShowChart] = useState([false, false, false])

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

  let actionArr = []
  let endpointName = [];
  let scanNameArr = [];
  let policyNameArr = [];

  let totalScanTypes = [];
  let totalActions = [];
  let totalEndpoints = [];



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


  if (actionArr.length === 0 || endpointName.length === 0 || scanNameArr.length === 0) {
    for (let i = 0; i < dataPoints.length; i++) {
      const { Action, Endpoint, "Risk Level": ScanType, Policy } = dataPoints[i];
      actionArr.push(Action);
      endpointName.push(Endpoint);
      scanNameArr.push(ScanType);
      policyNameArr.push(Policy)
    }

  }


  const load = (e) => {


    if (e.target.value === "select") return;
    setCoulmnsName(e.target.value);

    const count = {};
    for (const d of dataPoints) {
      const value = d[e.target.value];
      
      if (value !== "N/A" && value !== "") {
        count[value] = (count[value] || 0) + 1;
      }
    }

    let sum = 0;
    for (const val of Object.values(count)) {
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

  if (columnsNames === vm[0] || columnsNames === vm[1]) {

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
      totalEndpoints.push(...indices.map(k => endpointName[k]), "-");
      totalActions.push(...indices.map(k => actionArr[k]), "-");
      totalScanTypes.push(...indices.map(k => scanNameArr[k]), "-");
    }

    totalEndpoints.pop();
    totalActions.pop();
    totalScanTypes.pop();

    const separatorIndex = totalEndpoints.indexOf('-');
    const endPoint0 = totalEndpoints.slice(0, separatorIndex).filter((endpoint, index, self) => self.indexOf(endpoint) === index);
    const endPoint1 = totalEndpoints.slice(separatorIndex + 1).filter((endpoint, index, self) => self.indexOf(endpoint) === index);

    const separatorIndex1 = totalActions.indexOf('-');
    const actionPoint0 = totalActions.slice(0, separatorIndex1).filter((endpoint, index, self) => self.indexOf(endpoint) === index);
    const actionPoint1 = totalActions.slice(separatorIndex1 + 1).filter((endpoint, index, self) => self.indexOf(endpoint) === index);

    const separatorIndex2 = totalScanTypes.indexOf('-');
    const scanTypePoint0 = totalScanTypes.slice(0, separatorIndex2).filter((endpoint, index, self) => self.indexOf(endpoint) === index);
    const scanTypePoint1 = totalScanTypes.slice(separatorIndex2 + 1).filter((endpoint, index, self) => self.indexOf(endpoint) === index);



    const frequencyMap0 = new Map();
    const frequencyMap1 = new Map();

    const frequencyMap2 = new Map();
    const frequencyMap3 = new Map();

    const frequencyMap4 = new Map();
    const frequencyMap5 = new Map();



    for (const element of endPoint0) {
      const count = frequencyMap0.get(element) || 0;
      frequencyMap0.set(element, count + 1);
    }

    for (const element of endPoint1) {
      const count = frequencyMap1.get(element) || 0;
      frequencyMap1.set(element, count + 1);
    }

    for (const element of actionPoint0) {
      const count = frequencyMap2.get(element) || 0;
      frequencyMap2.set(element, count + 1);
    }

    for (const element of actionPoint1) {
      const count = frequencyMap3.get(element) || 0;
      frequencyMap3.set(element, count + 1);
    }

    for (const element of scanTypePoint0) {
      const count = frequencyMap4.get(element) || 0;
      frequencyMap4.set(element, count + 1);
    }

    for (const element of scanTypePoint1) {
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

    function updateKeys(array) {
      for (let i = 0; i < array.length; i++) {
        const currentKey = array[i].toLowerCase();

        if (currentKey.includes("assess")) {
          array[i] = "assessed";
        } else if (currentKey.includes("deny")) {
          array[i] = "denied";
        } else if (currentKey.includes("clean")) {
          array[i] = "cleaned";
        } else if (currentKey.includes("terminate")) {
          array[i] = "terminated";
        } else if (currentKey.includes("block")) {
          array[i] = "blocked";
        }
      }
    }


    updateKeys(top5Keys2);
    updateKeys(top5Keys3);

    let scanVal0, scanVal1;

    if (top5Keys4.length > 1) {
      scanVal0 = top5Keys4.slice(0, -1).join(", ") + " and " + top5Keys4[top5Keys4.length - 1];
    } else {
      scanVal0 = top5Keys4[0];
    }

    if (top5Keys5.length > 1) {
      scanVal1 = top5Keys5.slice(0, -1).join(", ") + " and " + top5Keys5[top5Keys5.length - 1];
    } else {
      scanVal1 = top5Keys5[0];
    }

    // for EndPoints
    function formatEndpoints(arr) {
      if (arr.length === 1) {
        return "the " + arr[0] + " endpoint,"
      } else if (arr.length === 2) {
        return arr.join(', ').replace(/,([^,]*)$/, ' and$1') + " endpoints,";
      }
      else if (arr.length >= 2) {
        return arr.join(', ').replace(/,([^,]*)$/, ', and$1' + " endpoints,");
      } else {
        return "no endpoint,";
      }
    }

    let endPointVal0 = formatEndpoints(top5Keys0);
    let endPointVal1 = formatEndpoints(top5Keys1);

    //for Actions
    function formatArray(arr) {

      if (arr.length === 1) {
        return arr[0].toString();

      } else if (arr.length === 2) {
        return arr.join(', ').replace(/,([^,]*)$/, ' and$1');
      }
      else if (arr.length >= 2) {

        return arr.join(', ').replace(/,([^,]*)$/, ', and$1');

      } else {

        return "no action required";
      }
    }

    let actionVal0 = formatArray(top5Keys2)
    let actionVal1 = formatArray(top5Keys3)

    const yValue0 = (y1[0] > 1) ? `${y1[0]} times` : `${y1[0]} time`;
    const yValue1 = (y1[1] > 1) ? `${y1[1]} times` : `${y1[1]} time`;

    if (columnsNames === vm[0]) {
      description[0][0] = `On the endpoint, ${x[0]} Behavior Monitoring was triggered ${yValue0} with ${scanVal0} Severity. Processes were ${actionVal0} by Apex One. `;
      description[0][1] = `On the endpoint, ${x[1]} Behavior Monitoring was triggered ${yValue1} with ${scanVal1} Severity. Processes were ${actionVal1} by Apex One. `;
    } else if (columnsNames === vm[1]) {
      description[1][0] = `${yValue0} ${x[0]} was triggered on ${endPointVal0} and it was ${actionVal0} by Apex One.`;
      description[1][1] = `${yValue1} ${x[1]} was triggered on ${endPointVal1} and it was ${actionVal1} by Apex One.`;
    }

  }


  if (columnsNames === vm[1]) {
    const totalActions = [], totalScanTypes = [];
    const arr = dataPoints.map((d) => d[columnsNames]);

    const desObject = {};
    x.slice(0).forEach((xVal, i) => {
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
      totalActions.push(...indices.map(k => actionArr[k]), "-");
      totalScanTypes.push(...indices.map(k => scanNameArr[k]), "-");
    }
    totalActions.pop();
    totalScanTypes.pop();

    // give frequncy of actions
    let giveAllActionFrq = [];
    let frequency = {};

    let currentGroup = [];
    for (let i = 0; i < totalActions.length; i++) {
      const action = totalActions[i];
      if (action !== '-') {
        currentGroup.push(action);
        frequency[action] = (frequency[action] || 0) + 1;
      } else {
        if (currentGroup.length > 0) {
          giveAllActionFrq.push(Object.assign({}, frequency));
          currentGroup = [];
          frequency = {};
        }
      }
    }

    // Add the last group if it exists
    if (currentGroup.length > 0) {
      giveAllActionFrq.push(Object.assign({}, frequency));
    }

    const giveAllRiskName = [];
    let currentGroup1 = [];

    for (const action of totalScanTypes) {
      if (action !== '-') {
        if (!currentGroup1.includes(action)) {
          currentGroup1.push(action);
        }
      } else {
        if (currentGroup1.length > 0) {
          giveAllRiskName.push(currentGroup1);
          currentGroup1 = [];
        }
      }
    }

    if (currentGroup1.length > 0) {
      giveAllRiskName.push(currentGroup1);
    }

    const allActionNameArr = {};
    for (let i = 0; i < totalActions.length; i++) {
      const action = totalActions[i];
      if (action !== '-') {
        allActionNameArr[action] = (allActionNameArr[action] || 0) + 1;
      }
    }

    updatedPolicyRiskTable = x.map((item, index) => {
      return {
        label: item,
        risk: giveAllRiskName[index % giveAllRiskName.length],
        action: giveAllActionFrq[index % giveAllActionFrq.length],
        allActionNameArr: allActionNameArr
      };
    });
  }


  function handleSubmit() {
    const link = [...showChart];
    document.getElementById('Chartbutton').style.display = "block"
    const link1 = [...PointArr]
    if (columnsNames === vm[0]) {
      link[0] = true
      if (x.length > 1) {

        link1[0][0] = description[0][0];
        link1[0][1] = description[0][1];
      } else {
        link1[0][0] = description[0][0];

      }
      createCharts(0, x, y1, wrapperId[0], canavaId[0], "BM Detection on Endpoints")
      document.getElementById('chartFirstLine7').style.display = "block";
      setChartFirstLine(line);
      myChartData['endpoint'] = JSON.stringify(x)
      myChartData['endpoint_count'] = JSON.stringify(y1)
      console.log(chartType === 'y')

    } else if (columnsNames === vm[1]) {
      link[1] = true
      link[2] = true
      setbmPolicyRiskTable([...updatedPolicyRiskTable])

      if (x.length > 1) {
        link1[1][0] = description[1][0];
        link1[1][1] = description[1][1];
      } else {
        link1[1][0] = description[1][0];
      }

      createCharts(1, x, y1, wrapperId[1], canavaId[1], "BM Detection By Policy");
      myChartData['policy'] = JSON.stringify(x);
      myChartData['policy_count'] = JSON.stringify(y1);
      var existingTable = document.getElementById('BMdocumentV');
      if (existingTable) {
        existingTable.remove();
      }

      document.getElementById("wrapper73").style.display = "block";
      var BMTable = document.createElement("table");
      BMTable.id = "BMdocumentV";
      const totalActionName = Object.keys(updatedPolicyRiskTable[0].allActionNameArr);
      const totalActionCount = Object.values(updatedPolicyRiskTable[0].allActionNameArr);
      var thead = document.createElement("thead");
      BMTable.appendChild(thead);
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
      BMTable.append(thead)

      //TBODY 
      var tbody = document.createElement("tbody");
      BMTable.appendChild(tbody);

      //add rows
      for (let i = 0; i < updatedPolicyRiskTable.length; i++) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        var text = document.createTextNode(updatedPolicyRiskTable[i].label);
        td.appendChild(text);
        td.style.fontWeight = "bold";
        tr.appendChild(td);
        let keys = Object.keys(updatedPolicyRiskTable[i].action);
        totalActionName.map((element, index) => {
          if (keys.includes(element)) {
            var td = document.createElement('td');
            var text = document.createTextNode(updatedPolicyRiskTable[i].action[element]);
            td.appendChild(text);
            tr.appendChild(td);
          } else {
            var td = document.createElement('td');
            tr.appendChild(td);
          }
        });
        tbody.appendChild(tr);

        if (updatedPolicyRiskTable[i].risk.length) {
          for (const iterator of updatedPolicyRiskTable[i].risk) {
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
      document.getElementById('wrapper-child73').appendChild(BMTable)

    }
    setPointArr(link1);
    setShowChart(link)
  }

  function createCharts(no, x, y1, wrapper, canvas, text) {
    document.getElementById(wrapper).style.display = "block";

    Chart.register(ChartDataLabels);
    chartTypes[no] = chartType
    const ctx = document.getElementById(canvas).getContext("2d");

    if (myChart[no]) {
      myChart[no].destroy(); // Destroy existing chart if it exists
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
    myChartData["r_id"] = props.report_id;
    myChartData["chartDescription"] = JSON.stringify(PointArr)
    myChartData["chartSubPoints"] = JSON.stringify(SubPointArr)
    myChartData.total_detection = total_detection;
    myChartData.chartFirstLine = chartFirstLine;
    myChartData.chartTypes = JSON.stringify(chartTypes)
    myChartData["updatedPolicyRiskTable"] = JSON.stringify(bmPolicyRiskTable)
    myChartData["showChart"] = JSON.stringify(showChart);

    const getProductById = async (e) => {
      try {
        console.log("hello inside handlevirus", myChartData)
        await axios.post(bmApi, myChartData);

      } catch (error) {

        console.log(error);
      }
    }
    getProductById()
    alert(`${cTitle} Data Save Successfully`)


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



  return (
    <>
      <div className="bm-section common-chart" id='bm'>
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
              <select name="agColumn" id="agColumn" onChange={(e) => { load(e); }}>
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


        <span id="chartFirstLine7"><input style={inputStyle} value={chartFirstLine} onChange={(e) => { setChartFirstLine(e.target.value) }} name="chartFirstLine" type="text" id="bmChartFirstLine" /></span>

        <div className="main-chart">

          <div className="chart-wrapper" id="wrapper71">
            <div className="close-icon1" onClick={(e) => { closeChart(e, "wrapper71", 0) }}>✖</div>
            <canvas
              id="myChart71"
              width="500"
              height="500"
              aria-label="Hello ARIA World"
              role="img"
            ></canvas>


            <div id="points">
              <textarea cols="10" rows="2" onChange={(e) => setchartDess(e.target.value)} type="text" id="bmchartDescription31" className="chartDes" spellCheck="false" name="first31"></textarea>
              <Button
                variant="contained"
                style={{ backgroundColor: success }}
                onClick={(e) => addValue(e, 0, "bmchartDescription31")}
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
          <div className="chart-wrapper" id="wrapper72">
            <div className="close-icon1" onClick={(e) => { closeChart(e, "wrapper72", 1) }}>✖</div>
            <canvas
              id="myChart72"
              className="myChart"
              width="400"
              height="400"
            ></canvas>
            <div id="points">
              <textarea cols="10" rows="2" onChange={(e) => setchartDess(e.target.value)} type="text" id="bmchartDescription32" className="chartDes" spellCheck="false" name="first31"></textarea>
              <Button
                variant="contained"
                style={{ backgroundColor: success }}
                onClick={(e) => addValue(e, 1, "bmchartDescription32")}
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
          <div className="chart-wrapper" id="wrapper73">
            <div className="close-icon1" onClick={(e) => { closeChart(e, "wrapper73", 2) }}>✖</div>
            <div id="wrapper-child73"></div>

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


