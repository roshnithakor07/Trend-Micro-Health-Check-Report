import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Button from "@mui/material/Button";
import axios from "axios";
import Chart from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Endpoints from '../API/Endpoints'
import { green,indigo } from "@mui/material/colors";


const success = indigo[700]; // #f44336
const save = green[900];

export default function Ag(props) {
  const { agApi, getReportData } = Endpoints();
  let ag = ["Platform", "Agent Program"];
  const [dataPoints, setDataPoints] = useState([1, 2, 3])
  const [columnsNames, setCoulmnsName] = useState("Platform");
  //const [filter_column, setFilterColumn] = useState(10)
  const [lable, setLableData] = useState([])
  const [data, setData] = useState([])

  const [x, setX] = useState([]);
  const [y1, setY1] = useState([]);
  const [myChart, setMyChart] = useState("")


  //chart-Points
  const [PointArr, setPointArr] = useState([
    "30 endpoints  are required to restart for the update.",
    "5 endpoints (BMTPC1334CS02, BMTNB1334CUP01, BMTPC1275BS01, BMTPC1523KCP01, BMTNBPSATNDV010) are required restart for cleanup.",
    "468 Agents have outdated Program versions out of 3081 agents. ",
    "318 agents have outdated patterns older than 7 days out of 3081 agents.",
    "4 agents (VRLF-DPS001, VRLFYK001, VRLF-JKT002, VRLF-JKT001) are using the Windows servers platform.",
    "68 agents are installed on Windows 7 (Legacy OS) platform. ",
  ]);

  const [updatechartDes, setUpdatechartDes] = useState("");;
  const [updateLinkId, setUpdateLinkId] = useState("");
  const [chartDes, setchartDess] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  const [myChartData, setMycharts] = useState({
    r_id: "",
    platform: "[]",
    platform_count: "[]",
    platform_count_sum: "[]",
    agent_Program: "[]",
    agent_Program_Count: "[]",
    chartDescription: "[]",
  });


  useEffect(() => {
    getProductById();
  });

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

  const csvColumnNameOptions = ag.map((i) => (
    <option value={i} key={i}>{i}</option>
  ));

  const load = (e) => {
    if (e.target.value === "select") return;
    setCoulmnsName(e.target.value)

    dataPoints.map(function (d) {
      return arr.push(d[e.target.value]);
    });

    for (const element of arr) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }

    let y = Object.values(count);

    if (e.target.value !== "Platform") {
      y = y.slice(0, 10)
    }


    y.sort(function (a, b) {
      return b - a;
    });

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
    <a href="/#" key={e}>
      <input type="checkbox" name="messageCheckbox0" defaultChecked={e} defaultValue={e} onChange={handleCheckboxChange} />
      {e}
    </a>
  ));


  function handleSubmit() {

    const link = [...PointArr];

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
      document.getElementById('wrapper-child00').appendChild(table)
    } else if (columnsNames === "Agent Program") {
      link[0] = `${x[0]} is the latest agent Program version recommended to upgrade all the older agents to the latest version.`
      
      setPointArr(link)
      
      myChartData["agent_Program"] = JSON.stringify(x);
      myChartData["agent_Program_Count"] = JSON.stringify(y1);
      createChart(x, y1)
    }
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

    myChartData["chartDescription"] = JSON.stringify(PointArr);
  
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
    
    const link1 = [...PointArr];
    link1.splice(index, 1);
    setPointArr(link1);

  };

  const updateValue = () => {
    
    const link1 = [...PointArr];

    link1[updateLinkId] = updatechartDes;
    setPointArr(link1);
    setUpdatechartDes("");
    setUpdateLinkId('');
    closePopup()
  }


  const closePopup = () => { setIsPopupOpen(false) }
  const openPopup = (e, index, chartDes, no) => {
    setIsPopupOpen(true);
    setUpdatechartDes(chartDes);
    setUpdateLinkId(index);
    console.log(index, no)
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
                  <ul key={artist} >
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

        <br /><br />

      </div>
      {/* <!-- div 0  5.1 Agent Distribution--> */}
    </>
  );
}
