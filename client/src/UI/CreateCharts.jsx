import { format } from 'date-fns';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Header from "../Common/Header";
import Ag from "../charts/Ag";
import Virus from "../charts/Virus";
import Spyware from "../charts/Spyware";
import CC from "../charts/CC";
import DC from "../charts/DC";
import BM from "../charts/BM";
import WR from "../charts/WR";
import IP from "../charts/IP";
import SmartScan from "../charts/SmartScan";
import { teal } from "@mui/material/colors";
import moment from "moment";
import Endpoints from '../API/Endpoints';
const save = teal[500];

export default function CreateCharts() {
  const { chartApi } = Endpoints();
  const [logDays, setLogDays] = useState(30);
  const [logDuration, setLogDurations] = useState("Days");
  const [logCollectionDate, setLogCollectionDate] = useState("2024-3-4");
  const [showCharts, setShowCharts] = useState([true, true, true, true, true, true, true, true, true])
  const chartTitles = []
  const [Report_id, setReport_id] = useState("0")

  const [myChartData, setMycharts] = useState({
    r_id: "",
    chartTitle: "[]",
    showCharts: "[]",
    logDays: "",
    logDuration: "",
    logCollectionDate: ""
  });


  const [x, setX] = useState([
    "Agent Distribution",
    "Virus/Malware",
    "Spyware/ Grayware",
    "Web Reputation",
    "Intrusion Prevention",
    "Device Control Detection",
    "C&C Callback",
    "Behavior Monitoring",
    "Smart Scan Agent Pattern Coverage Details"
  ])

  const formattedDate = format(new Date(logCollectionDate), "do MMM yyyy");

  const lable = [
    "Agent Distribution",
    "Virus/Malware",
    "Spyware/ Grayware",
    "Web Reputation",
    "Intrusion Prevention",
    "Device Control Detection",
    "C&C Callback",
    "Behavior Monitoring",
    "Smart Scan Agent Pattern Coverage Details"
  ]

  const handleCheckboxChange1 = (e, indexOfElement) => {
    const link = [...x];
    const link1 = [...showCharts]

    if (!e.target.checked) {

      const index = x.indexOf(e.target.value);
      link.splice(index, 1);
      link1[indexOfElement] = false

    } else {

      let i = lable.indexOf(e.target.value);
      link.splice(i, 0, e.target.value);
      link1[indexOfElement] = true;

    }
    setX(link)
    setShowCharts(link1)

  }

  const dropdownOptions1 = lable.map((e, index) => (
    <span key={e} >
      <input type="checkbox" name="messageCheckbox0" defaultChecked={e} defaultValue={e} onChange={(e) => { handleCheckboxChange1(e, index) }} />
      {`5.${index + 1} ${e}`}
    </span>
  ));

  const agTitle = `5.${x.indexOf(lable[0]) + 1} ${lable[0]}`;
  const vTitle = `5.${x.indexOf(lable[1]) + 1} ${lable[1]}`;
  const spTitle = `5.${x.indexOf(lable[2]) + 1} ${lable[2]}`;
  const wrTitle = `5.${x.indexOf(lable[3]) + 1} ${lable[3]}`;
  const ipTitle = `5.${x.indexOf(lable[4]) + 1} ${lable[4]}`;
  const dcTitle = `5.${x.indexOf(lable[5]) + 1} ${lable[5]}`;
  const ccTitle = `5.${x.indexOf(lable[6]) + 1} ${lable[6]}`;
  const bmTitle = `5.${x.indexOf(lable[7]) + 1} ${lable[7]}`;
  const ssTitle = `5.${x.indexOf(lable[8]) + 1} ${lable[8]}`;

  chartTitles.push(agTitle, vTitle, spTitle, wrTitle, ipTitle, dcTitle, ccTitle, bmTitle, ssTitle)



  const handleChart = (e) => {
    myChartData["logDays"] = logDays;
    myChartData["logDuration"] = logDuration;
    myChartData["logCollectionDate"] = formattedDate;
    myChartData["chartTitles"] = JSON.stringify(chartTitles);
    myChartData["showCharts"] = JSON.stringify(showCharts);

    const getProductById = async (e) => {
      try {
        await axios.post(chartApi, myChartData);
      } catch (error) {
        console.log(error);
      }
    }
    getProductById()
    alert(`charts Data Save Successfully`)
  }


  return (
    <>

      <Header />
      <div className="chart-section">
        <div className="topnav">
          <a href="#ag">5.1 Agent Distribution</a>
          <a href="#virus">5.2 Virus/Malware</a>
          <a href="#sp">5.3 Spyware/ Grayware</a>
          <a href="#wr">5.4 Web Reputation</a>
          <a href="#ip">5.5 Intrusion Prevention</a>
          <a href="#dc">5.6 Device Control Detection</a>
          <a href="#cc">5.7 C&C Callback</a>
          <a href="#bm">5.8 Behavior Monitoring</a>
          <a href="#smartscan">5.9 Smart Scan Agent Pattern Coverage Details</a>
        </div>

        <div id="logDetails">
          <h6>
            Event of the last{" "}
            <input
              type="text"
              name="logDays"
              id=""
              onChange={(e) => setLogDays(e.target.value)}
            />{" "}
            <select
              name="configure_schedule_scan_weekevery3"
              onChange={(e) => { setLogDurations(e.target.value) }}
            >
              <option>days</option>
              <option>hours</option>
              <option>Months</option>

            </select>
            {" "}
            On
            {" "}
            <input
              type="date"
              name="logCollectionDate"
              id=""
              onChange={(e) => {
                setLogCollectionDate(e.target.value);
              }}
            />{" "}
            from Apex central/Apex One.
          </h6>
        </div>

        <div className="all-Chart-section">
          <div className="Add-Chart-Section">
            <h3>Select Charts You want to create</h3>
            <div className="dropdown" id="dropdown00">
              <button className="dropbtn">select</button>
              <div className="dropdown-content" id="dropdown-content00">
                {dropdownOptions1}
              </div>
            </div>
          </div>

          {showCharts[0] && (<Ag chartTitle={agTitle} showCharts={showCharts} report_id={Report_id} />)}
          {showCharts[1] && (<Virus chartTitle={vTitle} logDays={logDays} logDuration={logDuration} logCollectionDate={formattedDate} report_id={Report_id} />)}
          {showCharts[2] && (<Spyware chartTitle={spTitle} logDays={logDays} logDuration={logDuration} logCollectionDate={formattedDate} report_id={Report_id} />)}
          {showCharts[3] && (<WR chartTitle={wrTitle} logDays={logDays} logDuration={logDuration} logCollectionDate={formattedDate} report_id={Report_id} />)}
          {showCharts[4] && (<IP chartTitle={ipTitle} logDays={logDays} logDuration={logDuration} logCollectionDate={formattedDate} report_id={Report_id} />)}
          {showCharts[5] && (<DC chartTitle={dcTitle} logDays={logDays} logDuration={logDuration} logCollectionDate={formattedDate} report_id={Report_id} />)}
          {showCharts[6] && (<CC chartTitle={ccTitle} logDays={logDays} logDuration={logDuration} logCollectionDate={formattedDate} report_id={Report_id} />)}
          {showCharts[7] && (<BM chartTitle={bmTitle} logDays={logDays} logDuration={logDuration} logCollectionDate={formattedDate} report_id={Report_id} />)}
          {showCharts[8] && (<SmartScan chartTitle={ssTitle} logDays={logDays} logDuration={logDuration} logCollectionDate={formattedDate} report_id={Report_id} />)}

        </div>

        {/* next button  */}
        <div id="nexPreBtn">
          <Button variant="contained" style={{ backgroundColor: save }}>
            <Link to="/further-information" onClick={handleChart} className="button is-primary mt-2">
              Next
            </Link>
          </Button>
        </div>


      </div>
    </>
  );
}
