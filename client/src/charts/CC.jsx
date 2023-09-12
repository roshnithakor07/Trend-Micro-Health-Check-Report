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

export default function CC(props) {
  const { ccApi, getReportData } = Endpoints();




  //database data : 
  const [myChartData, setMycharts] = useState({
    product_endpoint: "[]",
    product_endpoint_count: "[]",
    callback_address: "[]",
    callback_address_count: "[]",
    chartTypes: "[]",
    chartFirstLine: '',
    total_detection: 0,
    chartDescription: '[]',
    chartSubPoints: "[]"
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

  let canavaId = ["myChart61", "myChart62"];

  let wrapperId = ["wrapper61", "wrapper62"];

  let text = ["Endpoints Having C&C Detection", "C&C Callbacks Address"];
  let cTitle = "C&C Callbacks";

  let vm = ["Product Entity", "Callback Address"]

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
  const [chartType, setChartType] = useState("bar")
  const [description, setDescription] = useState([[], []]);
  const [chartTypes, setChartTypes] = useState(['', ''])

  //chart Points
  const [PointArr, setPointArr] = useState([[], []]);
  const [updatechartDes, setUpdatechartDes] = useState("");;
  const [updateLinkId, setUpdateLinkId] = useState("");

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
        load({ target: { value: columnsNames } });
      },
    });
  };

  const csvColumnNameOptions = vm.map((i) => (
    <option value={i} key={i}>{i}</option>
  ));

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
    <a href="/#" key={e}>
      <input type="checkbox" name="messageCheckbox0" defaultChecked={e} defaultValue={e} onChange={handleCheckboxChange} />
      {e}
    </a>
  ));

  const yValue0 = (y1[0] > 1) ? `${y1[0]} times` : `${y1[0]} time`;
  const yValue1 = (y1[1] > 1) ? `${y1[1]} times` : `${y1[1]} time`;

  if (columnsNames === vm[0]) {
    description[0][0] = `${yValue0} ${cTitle} were detected on the ${x[0]} endpoint.`;
    description[0][1] = `${yValue1} ${cTitle} were detected on the ${x[1]} endpoint.`;
  } else if (columnsNames === vm[1]) {
    description[1][0] = `${x[0]} callback address detected ${yValue0}, check this IP Address to if it's a secure connection then add it to the suspicious approve list otherwise block this IP address. `;
    description[1][1] = `${x[1]} callback address detected ${yValue1}, check this IP Address to if it's a secure connection then add it to the suspicious approve list otherwise block this IP address. `;
  }




  function handleSubmit() {

    document.getElementById('Chartbutton').style.display = "block"
    const link1 = [...PointArr]
    if (columnsNames === vm[0]) {

      if (x.length > 1) {
        link1[0][0] = description[0][0];
        link1[0][1] = description[0][1];
      } else {
        link1[0][0] = description[0][0];

      }

      createCharts(0, x, y1, wrapperId[0], canavaId[0], text[0])
      document.getElementById('chartFirstLine6').style.display = "block";
      setChartFirstLine(line);
      myChartData['product_endpoint'] = JSON.stringify(x)
      myChartData['product_endpoint_count'] = JSON.stringify(y1)

    } else if (columnsNames === vm[1]) {

      if (x.length > 1) {
        link1[1][0] = description[1][0];
        link1[1][1] = description[1][1];
      } else {
        link1[1][0] = description[1][0];
      }

      createCharts(1, x, y1, wrapperId[1], canavaId[1], text[1])
      myChartData['callback_address'] = JSON.stringify(x)
      myChartData['callback_address_count'] = JSON.stringify(y1)
    }
    setPointArr(link1);
    //setSum(sum)
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

    myChartData["chartDescription"] = JSON.stringify(PointArr)
    myChartData["chartSubPoints"] = JSON.stringify(SubPointArr)
    myChartData.total_detection = total_detection;
    myChartData.chartFirstLine = chartFirstLine;
    myChartData.chartTypes = JSON.stringify(chartTypes)

    const getProductById = async (e) => {
      try {
        // console.log("hello inside handlevirus", myChartData)
        await axios.post(ccApi, myChartData);

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


  return (
    <>
      <div className="cc-section common-chart" id='cc'>
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

                <option value="bar">Bar</option>
                <option value="horizontalBar">Horizontal Bar</option>
                <option value="outlabeledPie">Pie</option>
              </select>
            </li>

            <li>
              <Button variant="contained" color="primary" onClick={handleSubmit}>Create</Button>
            </li>
          </ul>
        </div>


        <span id="chartFirstLine6"><input style={inputStyle} value={chartFirstLine} onChange={(e) => { setChartFirstLine(e.target.value) }} name="chartFirstLine" type="text" id="ccChartFirstLine" /></span>

        <div className="main-chart">

          <div className="chart-wrapper" id="wrapper61">
            {/* <!-- <canvas id="myChart" className="myChart" width="400" height="400"></canvas> --> */}
            <canvas
              id="myChart61"
              width="500"
              height="500"
              aria-label="Hello ARIA World"
              role="img"
            ></canvas>

            <div id="points">
              <textarea cols="10" rows="2" onChange={(e) => setchartDess(e.target.value)} type="text" id="ccchartDescription31" className="chartDes" spellCheck="false" name="first31"></textarea>
              <Button
                variant="contained"
                style={{ backgroundColor: success }}
                onClick={(e) => addValue(e, 0, "ccchartDescription31")}
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
          <div className="chart-wrapper" id="wrapper62">
            <canvas
              id="myChart62"
              className="myChart"
              width="400"
              height="400"
            ></canvas>
            <div id="points">
              <textarea cols="10" rows="2" onChange={(e) => setchartDess(e.target.value)} type="text" id="ccchartDescription32" className="chartDes" spellCheck="false" name="first31"></textarea>
              <Button
                variant="contained"
                style={{ backgroundColor: success }}
                onClick={(e) => addValue(e, 1, "ccchartDescription32")}
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


