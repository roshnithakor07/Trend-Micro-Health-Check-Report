import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Button from "@mui/material/Button";
import axios from "axios";
import Chart from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Endpoints from '../API/Endpoints'
import { green, indigo } from "@mui/material/colors";


const success = indigo[700]; // #f44336
const save = green[900];

export default function Ag(props) {
  const { agApi } = Endpoints();
  let ag = ["Platform", "Agent Program"];
  const [dataPoints, setDataPoints] = useState([1, 2, 3])
  const [columnsNames, setCoulmnsName] = useState("Platform");
  //const [filter_column, setFilterColumn] = useState(10)
  const [lable, setLableData] = useState([])
  const [data, setData] = useState([])

  const [x, setX] = useState([]);
  const [y1, setY1] = useState([]);
  const [myChart, setMyChart] = useState("")
  const [agTableData, setagTableData] = useState({
    "patternsUpdateStatus": [0, 0],
    "programVersion": [0, 0, 0],
    "agentForCleanup": 0,
    "agentForUpdate": 0,
    "agentForUpdateAndCleanup": 0,
    "legacySystems": 0,
    "windowsServerPlatform": 0
  })

  let [summarySenArr, setSummarySenArr] = useState([]);
  let [reqSummarySenArr, setReqSummarySenArr] = useState([]);
  //chart-Points
  const [PointArr, setPointArr] = useState([]);

  const [updatechartDes, setUpdatechartDes] = useState("");;
  const [updateLinkId, setUpdateLinkId] = useState("");
  const [chartDes, setchartDess] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupIndex, setPopIndex] = useState(0)

  const [myChartData, setMycharts] = useState({
    r_id: "",
    platform: "[]",
    platform_count: "[]",
    platform_count_sum: "[]",
    agent_Program: "[]",
    agent_Program_Count: "[]",
    chartDescription: "[]",
  });


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

  const csvColumnNameOptions = ag.map((i) => (
    <option value={i} key={i}>{i}</option>
  ));

  const load = (e) => {
    if (e.target.value === "select" || e.target.value === ag[2]) return;
    if (e.target.value === ag[1]) {
      let count = {}
      for (const d of dataPoints) {
        const value = d["Restart Required"];
        if (value !== "N/A" && value !== "") {
          count[value] = (count[value] || 0) + 1;
        }
      }

      setagTableData(prevState => ({
        ...prevState,
        "agentForCleanup": count['Yes (cleanup)'] === undefined ? 0 : count['Yes (cleanup)'],
        "agentForUpdate": count['Yes (update)'] === undefined ? 0 : count['Yes (update)'],
        // "agentForUpdateAndCleanup": windowServerSum
      }))

      let top10Data = [], sum = 0;
      count = {}

      let mainCount = {}


      for (const d of dataPoints) {
        const value = d["Smart Scan Agent Pattern"];
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

      for (const [key, value] of Object.entries(count)) {
        top10Data.push({ key, value });
      }

      top10Data.sort((a, b) => b.value - a.value);

      let totatSevenPattern = Object.keys(count)
      //totatSevenPattern = totatSevenPattern.filter(item => item !== "N/A" && parseFloat(item) >= 10)
      totatSevenPattern = totatSevenPattern.sort()

      let days = 7;
      let last7Pattern = totatSevenPattern.slice(-days);

      let sum1 = 0;

      for (let i = 0; i < days; i++) {
        sum1 += count[last7Pattern[i]]
        console.log(last7Pattern[i], count[last7Pattern[i]])
      }

      setagTableData(prevState => ({
        ...prevState,
        "patternsUpdateStatus": [(sum - sum1), sum1, (sum)],
      }))


    }

    setCoulmnsName(e.target.value)
    let arr = [], count = {}, mainCount = {}, sum = 0;

    dataPoints.map(function (d) {
      return arr.push(d[e.target.value]);
    });

    for (const element of arr) {

      if (element !== "") {
        mainCount[element] = (mainCount[element] || 0) + 1;
      }

      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }

    }

    for (const val of Object.values(mainCount)) {
      sum += val
    }

    const top10Data = [];
    let windowServerSum = 0, windowLegacySum = 0


    let programVersionSum = 0;
    let max = 0;
    let storeMaxVersion = 0, storeMaxValue = 0;
    for (const [key, value] of Object.entries(count)) {
      top10Data.push({ key, value });

      if (key.includes("Windows 8.1") || key.includes("Windows 7") || key.includes("Windows 8")) {
        windowLegacySum += value;
      } else if (key.includes("Windows Server")) {
        windowServerSum += value;
      }

      if (e.target.value === ag[1]) {
        programVersionSum += value
        let store = Number(key.slice(5))
        if (store > max) {
          max = store;
          storeMaxVersion = key;
          storeMaxValue = value;
        }
        setagTableData(prevState => ({
          ...prevState,
          "programVersion": [programVersionSum - storeMaxValue, storeMaxValue, sum, storeMaxVersion]
        }))


      }

    }


    if (e.target.value === ag[0]) {
      setagTableData(prevState => ({
        ...prevState,
        "legacySystems": windowLegacySum,
        "windowsServerPlatform": windowServerSum
      }))

    }
    top10Data.sort((a, b) => b.value - a.value);
    let keys = []
    let values = []

    if (e.target.value === "Platform") {
      keys = top10Data.slice(0).map(item => item.key);
      values = top10Data.slice(0).map(item => item.value);
    } else {
      keys = top10Data.slice(0, 10).map(item => item.key);
      values = top10Data.slice(0, 10).map(item => item.value);
    }

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

  function handleSubmit() {
    let link = [...summarySenArr];
    let link1 = [...PointArr];
    let link2 = [...reqSummarySenArr];

    if (columnsNames === "Platform") {

      myChartData["platform"] = JSON.stringify(x);
      myChartData["platform_count"] = JSON.stringify(y1);


      var existingTable = document.getElementById('documentV');
      if (existingTable) {
        existingTable.remove();
      }

      let sum = 0

      for (let i = 0; i < y1.length; i += 1) {

        sum += y1[i]

      }

      myChartData.platform_count_sum = sum;
      // myChartData.platform_count_sum = sum;
      document.getElementById("wrapper00").style.display = "block";
      var table = document.createElement('table');
      table.id = "documentV"
      var th1 = document.createElement('th');
      var th2 = document.createElement('th');
      var text1 = document.createTextNode('Agent Platform');
      var text2 = document.createTextNode('Count');
      var tr = document.createElement('tr');
      th1.appendChild(text1);
      th2.appendChild(text2);
      th1.style.textAlign = "center"
      th2.style.textAlign = "center"

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
        td1.style.textAlign = "center"
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
      th1.style.textAlign = "center"
      th2.style.textAlign = "center"
      tr.appendChild(th1);
      tr.appendChild(th2);
      table.appendChild(tr);
      document.getElementById('wrapper-child00').appendChild(table)
    } else if (columnsNames === "Agent Program") {
      document.getElementById("wrapper02").style.display = "block";
      document.getElementById("summary_sentences").style.display = "block";

      link = []
      link1 = []
      link2 = []

      link1.push(`${agTableData["programVersion"][3]} is the latest agent Program version recommended to upgrade all the older agents to the latest version.`);
      if (agTableData["agentForCleanup"] !== 0) {
        link.push(`${agTableData["agentForUpdate"]} endpoints are required restart for cleanup.`);
        link2.push(`${agTableData["agentForCleanup"]} endpoints are required to restart for cleanup. Recommeded to take restart of those endpoints.`)
      }

      if (agTableData["agentForUpdate"] !== 0) {
        link.push(`${agTableData["agentForUpdate"]} endpoints are required to restart for the update.`);
        link2.push(`${agTableData["agentForUpdate"]} endpoints are required to restart for the update. Apex One Agents may need to reboot for engine updates. Recommend restarting those endpoints.`)
      }
      if (agTableData["patternsUpdateStatus"][0] !== 0) {
        link.push(`${agTableData["patternsUpdateStatus"][0]} agents have outdated patterns older than 7 days out of ${agTableData["patternsUpdateStatus"][2]} agents.`);
        link2.push(`${agTableData["patternsUpdateStatus"][0]} Agents have smart scan patterns version older than 7 days out of ${agTableData["patternsUpdateStatus"][2]}, recommended to keep all patterns up to date.`)
      }
      if (agTableData["programVersion"][0] !== 0) {
        link.push(`${agTableData["programVersion"][0]} Agents have outdated Program versions out of ${agTableData["programVersion"][2]} agents.`);
        link2.push(`${agTableData["programVersion"][0]} Agents have outdated Program versions out of ${agTableData["programVersion"][2]} agents keep all agent program versions updated. Minimum OS Version requirement for the latest Apex One SaaS agent version: https://success.trendmicro.com/dcx/s/solution/000291904?language=en_US`)
      }
      if (agTableData["windowsServerPlatform"] !== 0) {
        link.push(`${agTableData["windowsServerPlatform"]} agents are using the Windows servers platform.`);
        link2.push(`${agTableData["windowsServerPlatform"]} agent installed on Windows server platform recommended to use Deep Security / Cloud One Workload Security for the advanced protection for servers.`)
      }
      if (agTableData["legacySystems"] !== 0) {
        link.push(`${agTableData["legacySystems"]} agents are installed on the Windows 7 (Legacy OS) platform.`);
        link2.push(`${agTableData["legacySystems"]} Agents are installed on the Windows 8.1 (Legacy OS) platform, recommended to upgrade it to the latest OS. For the Windows 7 & 8.1 machines End-of-Support: https://success.trendmicro.com/dcx/s/solution/000291687? language=en_US&sfdcIFrameOrigin=null`)
      }

      link.push(`(input) endpoints are without policy.`)
      link2.push(`(input) Endpoints are without policy, recommended to apply policy to all endpoints on priority for better protection.`)

      myChartData["agent_Program"] = JSON.stringify(x);
      myChartData["agent_Program_Count"] = JSON.stringify(y1);
      createChart(x, y1)

    }

    setSummarySenArr(link)
    setPointArr(link1)
    setReqSummarySenArr(link2)
    //setSum(sum)
  }

  // Declare a global variable to store the chart instance
  function createChart(x, y1) {

    document.getElementById("wrapper01").style.display = "block";
    Chart.register(ChartDataLabels);
    const ctx = document.getElementById("myChart01").getContext("2d");

    if (myChart) {
      myChart.destroy(); // Destroy existing chart if it exists
    }
    setMyChart(new Chart(ctx, {
      type: 'bar',
      data: {
        labels: x,
        datasets: [{
          data: y1,
          backgroundColor: ["#4372cc"],
          borderColor: ["#4372cc"],
          borderWidth: 1,
        }],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            anchor: 'end',
            align: 'top',
            formatter: Math.round,
            font: {
              size: 14,
            },
          },
          title: {
            display: true,
            text: "Agent Program Version",
            position: 'top',
            align: 'center',
            font: {
              weight: 'light',
            },
            padding: {
              bottom: 20,
            },
            fullSize: true,
          },
        },
        layout: {
          padding: {
            top: 20,    // Adjust the top padding as needed
            right: 20,  // Adjust the right padding as needed
            bottom: 20, // Adjust the bottom padding as needed
            left: 20,   // Adjust the left padding as needed
          },
        },
      },
    }));

  }

  const handleCharts = () => {
    myChartData["r_id"] = props.report_id;
    myChartData["chartDescription"] = JSON.stringify(PointArr);
    myChartData['agExecutiveSummary'] = JSON.stringify(summarySenArr);
    myChartData['agReq'] = JSON.stringify(reqSummarySenArr);

    const getProductById = async (e) => {
      try {
        await axios.post(agApi, myChartData);
      } catch (error) {
        console.log(error);
      }
    }
    getProductById()
    alert(`Agent Distribution Efficacy Data Save Successfully`)
  }

  //chart points 
  const addValue = (e, linkArrNo, chartDesId) => {

    if (chartDes.trim() === '') {
      alert("Please fill in both the link title and the link.");
      return;
    }
    const link1 = [...PointArr];
    link1.push(chartDes);
    setPointArr(link1);
    document.getElementById(chartDesId).value = "";
    setchartDess("")

  };

  const deletePopup = (e, index, linkArrNo) => {

    switch (linkArrNo) {
      case 0:
        const link1 = [...PointArr];
        link1.splice(index, 1);
        setPointArr(link1);
        break;

      case 1:
        const link2 = [...summarySenArr];
        link2.splice(index, 1);
        setSummarySenArr(link2);
        break;

      case 2:
        const link3 = [...reqSummarySenArr];
        link3.splice(index, 1);
        setReqSummarySenArr(link3);
        break;

      default:
        break;
    }


  };

  const updateValue = () => {
    switch (popupIndex) {
      case 0:
        const link1 = [...PointArr];
        link1[updateLinkId] = updatechartDes;
        setPointArr(link1);
        break;

      case 1:
        const link2 = [...summarySenArr];
        link2[updateLinkId] = updatechartDes;
        setSummarySenArr(link2);
        break;

      case 2:
        const link3 = [...reqSummarySenArr];
        link3[updateLinkId] = updatechartDes;
        setReqSummarySenArr(link3);
        break;

      default:
        break;
    }

    setUpdatechartDes("");
    setUpdateLinkId('');
    closePopup()
  }

  const closePopup = () => { setIsPopupOpen(false) };

  const openPopup = (e, index, chartDes, no) => {
    setIsPopupOpen(true);
    setUpdatechartDes(chartDes);
    setUpdateLinkId(index);
    setPopIndex(no)
  };


  return (
    <>

      <div className="ag-section common-chart" id='ag'>
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
              <select name="agColumn" id="agColumn" onChange={(e) => { load(e); setCoulmnsName(e.target.value) }}>
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

        <div className="main-chart">
          <div className="chart-wrapper" id="wrapper00">
            <div id="wrapper-child00"></div>

          </div>

          <div className="chart-wrapper" id="wrapper01">
            <canvas
              id="myChart01"
              className="myChart"
              width="400"
              height="400"
            ></canvas>

            <div id="points">
              <textarea cols="10" rows="2" onChange={(e) => setchartDess(e.target.value)} type="text" id="chartDescription31" className="chartDes" spellCheck="false" name="first31"></textarea>
              <Button
                variant="contained"
                style={{ backgroundColor: success }}
                onClick={(e) => addValue(e, 0, "chartDescription31")}
              >
                Add
              </Button>

              <div className="showLinks">
                {PointArr.map((artist, index) => (
                  <ul key={index} >
                    <li>
                      {artist}
                    </li>

                    <li className="handle-icons">
                      <img src="images/edit.png" onClick={(e) => {
                        openPopup(e, index, artist, 0);
                      }} alt="" srcSet="" />

                      <img src="images/delete.png" onClick={(e) => {
                        deletePopup(e, index, 0);
                      }} alt="" srcSet="" />
                    </li>
                  </ul>
                ))}
              </div>
            </div>

          </div>

          <div className="chart-wrapper" id="wrapper02">
            <table id="documentV1">
              <tbody>
                <tr className="con5">
                  <td className="con5" colSpan={4}>Agent Distribution</td>
                </tr>
                <tr className="con5">
                  <td className="con5">Patterns Update Status </td>
                  <td className="con5">Up to Date </td>
                  <td className="con5" id="uptodate">
                    Up to Date:-{" "}
                    <input
                      type="number"
                      id="patterns_update_status_uptodate"
                      name="patterns_update_status_uptodate"
                      value={agTableData["patternsUpdateStatus"][1]}
                      style={{ width: "25%" }}
                      onChange={(e) => {
                        //handleChange(e);
                        //superman(e, 'patterns_update_status_uptodate', "outdated", "apeximgsuperman", "super", "8");
                      }}
                    />
                    Outdated:-{" "}
                    <input
                      type="number"
                      id="outdated"
                      name="outdated"
                      style={{ width: "25%" }}
                      value={agTableData["patternsUpdateStatus"][0]}
                      onChange={(e) => {
                        //handleChange(e);
                        //superman(e, 'patterns_update_status_uptodate', "outdated", "apeximgsuperman", "super", "8");

                      }}
                    />
                  </td>
                  <td className="con5" style={{ textAlign: "center" }}>
                    <img src="images/tab1.png" id="super" alt="" />
                  </td>
                </tr>

                <tr className="con5">
                  <td className="con5">Program Version</td>
                  <td className="con5">Up to Date </td>
                  <td className="con5" id="uptodate">
                    Up to Date:-{" "}
                    <input
                      type="number"
                      id="program_version_status_uptodate"
                      name="program_version_status_uptodate"
                      style={{ width: "25%" }}
                      value={agTableData['programVersion'][1]}
                      onChange={(e) => {
                        //handleChange(e);
                        //superman(e, 'program_version_status_uptodate', "outdated1", "program_version", "super1", "common0");

                      }}
                    />
                    Outdated:-{" "}
                    <input
                      type="number"
                      id="outdated1"
                      name="outdated1"
                      style={{ width: "25%" }}
                      value={agTableData['programVersion'][0]}
                      onChange={(e) => {
                        //handleChange(e);
                        //superman(e, 'program_version_status_uptodate', "outdated1", "program_version", "super1", "common0");
                      }}
                    />
                  </td>
                  <td className="con5" style={{ textAlign: "center" }}>
                    <img src="images/tab1.png" id="super1" alt="" />
                  </td>
                </tr>

                <tr className="con5">
                  <td className="con5">Agent Required Restart for Clean-up</td>
                  <td className="con5">No</td>
                  <td className="con5" id="uptodate">
                    <input
                      type="number"
                      id="agentDistribution1"
                      name="agentDistribution1"
                      value={agTableData["agentForCleanup"]}
                      style={{ width: "40%" }}
                      onChange={(e) => {
                        //agentDistributionFun(e, 1);
                        //handleChange(e);
                      }}
                    />
                  </td>
                  <td className="con5" style={{ textAlign: "center" }}>
                    <img src="images/tab1.png" id="sepAg1" alt="" />
                  </td>
                </tr>
                <tr className="con5">
                  <td className="con5">Agent Required Restart for Update</td>
                  <td className="con5">No</td>
                  <td className="con5" id="uptodate">
                    <input
                      type="number"
                      id="agentDistribution2"
                      value={agTableData["agentForUpdate"]}
                      name="agentDistribution2"
                      style={{ width: "40%" }}
                      onChange={(e) => {
                        //agentDistributionFun(e, 2);
                        //handleChange(e);
                      }}
                    />
                  </td>
                  <td className="con5" style={{ textAlign: "center" }}>
                    <img src="images/tab1.png" id="sepAg2" alt="" />
                  </td>
                </tr>

                <tr className="con5">
                  <td className="con5">Legacy Systems (7 & 8.1)</td>
                  <td className="con5">No</td>
                  <td className="con5" id="uptodate">
                    <input
                      type="number"
                      id="agentDistribution3"
                      name="agentDistribution3"
                      style={{ width: "40%" }}
                      value={agTableData["legacySystems"]}
                      onChange={(e) => {
                        //agentDistributionFun(e, 3);
                        //handleChange(e);
                      }}
                    />
                  </td>
                  <td className="con5" style={{ textAlign: "center" }}>
                    <img src="images/tab1.png" id="sepAg3" alt="" />
                  </td>
                </tr>

                <tr className="con5">
                  <td className="con5">Windows Server Platform</td>
                  <td className="con5">No</td>
                  <td className="con5" id="uptodate">
                    <input
                      type="number"
                      id="agentDistribution4"
                      name="agentDistribution4"
                      style={{ width: "40%" }}
                      value={agTableData["windowsServerPlatform"]}
                      onChange={(e) => {
                        //agentDistributionFun(e, 4);
                        //handleChange(e);
                      }}
                    />
                  </td>
                  <td className="con5" style={{ textAlign: "center" }}>
                    <img src="images/tab1.png" id="sepAg4" alt="" />
                  </td>
                </tr>

              </tbody>
            </table>

          </div>

        </div>

        <br />
        <br />

        <div className="summary_sentences" id="summary_sentences" style={{ position: "relative" }}>
          <h4 style={{ color: "#49858F" }} className="report-heading2">
            Executive Summary
          </h4>


          <div className="container8">

            {summarySenArr.map((artist, index) => (
              <ul key={index} >
                <li>
                  {artist}
                </li>

                <li className="handle-icons">
                  <img src="images/edit.png" onClick={(e) => {
                    openPopup(e, index, artist, 1);
                  }} alt="" srcSet="" />

                  <img src="images/delete.png" onClick={(e) => {
                    deletePopup(e, index, 1);
                  }} alt="" srcSet="" />
                </li>
              </ul>
            ))}




          </div>

          <h4 style={{ color: "#49858F" }} className="report-heading2">
            Recommendations
          </h4>

          <div className="container8">

            {reqSummarySenArr.map((artist, index) => (
              <ul key={index} >
                <li>
                  {artist}
                </li>

                <li className="handle-icons">
                  <img src="images/edit.png" onClick={(e) => {
                    openPopup(e, index, artist, 2);
                  }} alt="" srcSet="" />

                  <img src="images/delete.png" onClick={(e) => {
                    deletePopup(e, index, 2);
                  }} alt="" srcSet="" />
                </li>
              </ul>
            ))}




          </div>

        </div>

        <Button onClick={handleCharts} variant="contained" color="success" className="Chartbutton" id="Chartbutton" >
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

        <br /><br />

      </div>
      {/* <!-- div 0  5.1 Agent Distribution--> */}
    </>
  );
}
