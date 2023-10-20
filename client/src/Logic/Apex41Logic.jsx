import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import ExcutiveSummery from './ExcutiveSummery'
import Endpoints from '../API/Endpoints'

function useApexOneLogic41() {
  const { getReportData } = Endpoints();
  const {
    esummary0, rsummary0, esummary4, rsummary4, esummary5, rsummary5,
    esummary6, rsummary6, rsummary7, esummary9, rsummary9, esummary010, rsummary010
  } = ExcutiveSummery()

  let tab1 = "images/tab1.png";
  let tab2 = "images/tab2.png";
  let tab3 = "images/tab3.png";
  let tab4 = "images/tab4.png";


  let [summarySenArr, setSummarySenArr] = useState([]);

  let [reqSummarySenArr, setReqSummarySenArr] = useState([]);

  let [globalAgentsSettings, setglobalAgentsSettings] = useState(0);

  const [myApex41ImgData, setReportImgData] = useState({
    // apexone 41 img
    apexmemory: tab1,
    apeximgsos: tab1,
    apeximglicense_date: tab1,
    apeximgversions: tab1,
    apeximgDeployed_Agents: tab1,
    apeximgCertified_Safe_Software_Service: tab1,
    apeximgapex_central_integration: tab1,
    apeximgglobal_agents_settings1: tab1,
    apeximgglobal_agents_settings2: tab1,
    apeximgglobal_agents_settings3: tab1,
    apeximgsuperman: tab1,
    apeximgagent_scheduled_updates: tab1,
    apeximgnotification: tab1,
    program_version : tab1,
    tabAg1 : tab1,
    tabAg2 : tab1,
    tabAg3 : tab1,
    tabAg4 : tab1,

  });


  //excutive summary sentences
  const addValue = (label, description) => {

    const itemIndex = summarySenArr.findIndex((item) => item.label === label);

    if (itemIndex !== -1) {
      const updatedArray = [...summarySenArr];
      updatedArray[itemIndex] = {
        ...updatedArray[itemIndex],
        description: description,
      };
      setSummarySenArr(updatedArray);
    } else {
      setSummarySenArr([...summarySenArr, { label, description: description }]);
    }




  };

  const closeValue = (label) => {
    const link1 = [...summarySenArr];
    const link = link1.filter((item) => item.label !== label);
    setSummarySenArr(link);
  };

  //req
  const addValue1 = (label, description, linkTitle = "", link = "") => {
    const itemIndex = reqSummarySenArr.findIndex((item) => item.label === label);

    if (itemIndex !== -1) {
      const updatedArray = [...reqSummarySenArr];
      updatedArray[itemIndex] = {
        ...updatedArray[itemIndex],
        description: description,
        linkTitle: linkTitle, // Add the linkTitle property
        link: link,           // Add the link property
      };
      setReqSummarySenArr(updatedArray);
    } else {
      setReqSummarySenArr([
        ...reqSummarySenArr,
        { label, description: description, linkTitle, link },
      ]);
    }
  };

  const closeValue1 = (label) => {
    const link2 = [...reqSummarySenArr];
    const link = link2.filter((item) => item.label !== label);
    setReqSummarySenArr(link);
  };

  //Global Agents Settings function

  const globalAgentsSettingsFunction = () => {
    if (globalAgentsSettings >= 1) {
      let a = esummary6;
      addValue("6", a);
    } else {
      closeValue("6");
    }
  };

  // COMMON FUNCTION IN APEX 41 & 43 - 0
  const handleMemory = (e) => {
    var x = Number(document.getElementById("memory1").value); // rec
    var y = Number(document.getElementById("memory2").value); // deployed

    if (y < x) {
      myApex41ImgData.apexmemory = tab2;
      document.getElementById("sep8880").src = tab2;
      addValue("0", esummary0);
      addValue1("0", rsummary0);
    } else {
      document.getElementById("sep8880").src = tab1;
      myApex41ImgData.apexmemory = tab1;
      closeValue("0");
      closeValue1("0");
    }
  };

  //Apex One Build Version - 1
  const handleVersions = (event) => {
    var latest_version = Number(document.getElementById("version1").value);
    var deployed = Number(document.getElementById("version2").value);
    if (latest_version <= deployed) {
      myApex41ImgData.apeximgversions = tab1;
      document.getElementById("apex1sep60").src = tab1;
      addValue('1', `The apex One latest build version is installed i.e ${latest_version}.`)
      closeValue1("1");

    } else if (latest_version > deployed) {
      myApex41ImgData.apeximgversions = tab2;
      document.getElementById("apex1sep60").src = tab2;
      let a = `Apex One is running on an older version i.e., ${deployed}(Deployed). (Latest available version is ${latest_version}).`;
      let b = `Apex One is running on an older build version recommended to upgrade it to the Latest version ${latest_version}.`;
      addValue("1", a);
      addValue1("1", b);
    }
  };

  //License -2
  const zeroFunction = (e) => {
    var today = new Date();

    today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    let validDate = new Date(
      today.getFullYear(),
      today.getMonth() + 3,
      today.getDate()
    );

    // var l = new Date(document.getElementById("0").value);
    var l = new Date(e.target.value);
    l = new Date(l.getFullYear(), l.getMonth(), l.getDate());
    let monthName = moment(e.target.value).format("MMM");

    if (l >= today) {
      if (l <= validDate) {
        myApex41ImgData.apeximglicense_date = tab2;
        document.getElementById("sep0").src = tab2;

        let a = `Your Trend Micro Apex One license is valid till ${monthName} ${l.getDate()},${l.getFullYear()}.`;
        let b = `Your Trend Micro Apex One license will expire on ${monthName} ${l.getDate()},${l.getFullYear()}. Please get in touch with the Trend Micro account manager to start the renewal process.`;

        addValue("2", a);
        addValue1("2", b);
      } else if (l > validDate) {
        myApex41ImgData.apeximglicense_date = tab4;
        document.getElementById("sep0").src = tab4;
        let a = `Your Trend Micro Apex One license is up to date and is valid till ${monthName} ${l.getDate()},${l.getFullYear()}`;
        addValue("2", a);
        closeValue1("2");
      }
    } else {
      myApex41ImgData.apeximglicense_date = tab3;
      document.getElementById("sep0").src = tab3;
      let a = `Your Trend Micro Apex One license has expired.`;
      let b = `Please contact your Trend Micro Account Manager to renew the license to protect your endpoints.`;
      addValue("2", a);
      addValue1("2", b);
    }
  };

  //Deployed Agents -3

  const oneFunction = (event) => {
    var x = Number(document.getElementById("1").value);//Purchased Licensed Seat
    var y = Number(document.getElementById("2").value);// Deployed Count 

    if (x >= y) {
      myApex41ImgData.apeximgDeployed_Agents = tab4;
      document.getElementById("sep1").src = tab4;
      closeValue("3");
      closeValue1("3");
    } else if (y > x) {
      myApex41ImgData.apeximgDeployed_Agents = tab2;
      document.getElementById("sep1").src = tab2;

      let a = `Apex One seat count is ${x} and is managing ${y} endpoints.`;
      let b = `Apex One seat count is ${x} and is managing ${y} endpoints recommended to increase the seat count.`;
      addValue("3", a);
      addValue1("3", b);
    }
  };

  //Certified Safe Software Service - 4

  const twoFunction = (event) => {
    if (event.target.value === "Enabled") {
      myApex41ImgData.apeximgCertified_Safe_Software_Service = tab1;
      document.getElementById("sep2").src = tab1;
      closeValue("4");
      closeValue1("4");
    } else {
      myApex41ImgData.apeximgCertified_Safe_Software_Service = tab2;
      document.getElementById("sep2").src = tab2;

      let a = esummary4;
      let b = rsummary4;
      addValue("4", a);
      addValue1("4", b);
    }
  };

  //Apex Central Integration - 5

  const threeFunction = (event) => {
    if (event.target.value === "Yes") {
      myApex41ImgData.apeximgapex_central_integration = tab1;
      document.getElementById("sep3").src = tab1;
      closeValue("5");
      closeValue1("5");

    } else {
      myApex41ImgData.apeximgapex_central_integration = tab2;
      document.getElementById("sep3").src = tab2;
      let a = esummary5;
      let b = rsummary5;
      addValue("5", a);
      addValue1("5", b);

    }
  };

  //Global Agents Settings-1 - 6
  const fourFunction = (event) => {
    if (event.target.value === "Yes") {
      myApex41ImgData.apeximgglobal_agents_settings1 = tab1;

      document.getElementById("sep4").src = tab1;
      closeValue1("6");
      setglobalAgentsSettings(--globalAgentsSettings);
      globalAgentsSettingsFunction();
    } else {
      myApex41ImgData.apeximgglobal_agents_settings1 = tab2;
      document.getElementById("sep4").src = tab2;

      setglobalAgentsSettings(++globalAgentsSettings);
      globalAgentsSettingsFunction();


      addValue1(
        "6",
        rsummary6
      );
    }
  };

  //Global Agents Settings-2 - 7
  const fiveFunction = (event) => {
    var x = document.getElementById("global_agents_settings2").value;
    var y = document.getElementById("global_agents_settings3").value;
    if (x === "Enabled" && y === "Enabled") {
      myApex41ImgData.apeximgglobal_agents_settings2 = tab1;
      document.getElementById("sep5").src = tab1;

      closeValue1("7");
      setglobalAgentsSettings(--globalAgentsSettings);
      globalAgentsSettingsFunction();
    } else {
      myApex41ImgData.apeximgglobal_agents_settings2 = tab2;
      document.getElementById("sep5").src = tab2;
      let b = rsummary7
      addValue1("7", b);
      setglobalAgentsSettings(++globalAgentsSettings);
      globalAgentsSettingsFunction();
    }

  };

  //Global Agents Settings-2 - 7
  const fiveFunction1 = (event) => {
    var x = document.getElementById("global_agents_settings4").value;

    if (x === "Enabled") {
      myApex41ImgData.apeximgglobal_agents_settings3 = tab1;
      document.getElementById("sep5GA").src = tab1;
      closeValue1("7GA");
      setglobalAgentsSettings(--globalAgentsSettings);
      globalAgentsSettingsFunction();
    } else {
      myApex41ImgData.apeximgglobal_agents_settings3 = tab2;
      document.getElementById("sep5GA").src = tab2;
      let b = `Enable the Global Smart Protection Service Proxy Settings in the Apex One Agent management option. The service proxy is used by the Predictive Machine Learning and Behavior Monitoring features.`
      addValue1("7GA", b);
      setglobalAgentsSettings(++globalAgentsSettings);
      globalAgentsSettingsFunction();
    }

  };



  //Patterns Update Status - 8
  const superman = (e, id1, id2, tab, sep, req) => {

    var y = document.getElementById(id1).value;
    var x = document.getElementById(id2).value;
    let a = (id2 === "outdated") ? `${x} agents have outdated patterns older than 7 days out of ${y} agents.` : `${x} Agents have outdated Program versions out of ${y} agents.`;
    let b = (id2 === "outdated") ? `${x} Agents have smart scan pattern version older than 7 days out of ${y}, recommended to keep all patterns up to date.` : `${x} Agents have outdated Program versions out of ${y} agents keep all agent program versions updated. Minimum OS Version requirement for the latest Apex One SaaS agent version:`;

    if (x >= 1) {
      myApex41ImgData[tab] = tab2;
      document.getElementById(sep).src = tab2;
      if (id2 === "outdated") { addValue1(req, b) } else { addValue1(req, b, "https://success.trendmicro.com/dcx/s/solution/000291904?language=en_US", "https://success.trendmicro.com/dcx/s/solution/000291904?language=en_US") }
      addValue(req, a);
      addValue1(req, b);
    } else {
      myApex41ImgData.apeximgsuperman = tab1;
      document.getElementById(sep).src = tab1;
      closeValue(req);
      closeValue1(req);
    }
  };

  //Agent scheduled updates - 9
  const sixFunction = (event) => {

    var e = document.getElementById('agent_scheduled_updates_option');
    var value = e.value;
    var e1 = document.getElementById('7');
    var value1 = e1.value;
    let a = esummary9;
    let b = rsummary9;

    if (value1 === "Enabled") {
      document.getElementById("time").style.display = "inline";
      if (value === "Weekly" || value === "Monthly" || value === "Hourly") {
        myApex41ImgData.apeximgagent_scheduled_updates = tab2;
        document.getElementById("sep6").src = tab2;
        addValue("9", a);
        addValue1("9", b);
      } else {

        myApex41ImgData.apeximgagent_scheduled_updates = tab1;
        document.getElementById("sep6").src = tab1;

        closeValue("9");
        closeValue1("9");
      }

    } else {
      myApex41ImgData.apeximgagent_scheduled_updates = tab2;
      document.getElementById("time").style.display = "none";
      document.getElementById("sep6").src = tab2;
      addValue("9", a);
      addValue1("9", b);
    }
  };

  //Notification - 10
  const sevenFunction = (event) => {
    if (event.target.value === "Enabled") {
      myApex41ImgData.apeximgnotification = tab1;
      document.getElementById("sep7").src = tab1;

      closeValue("10");
      closeValue1("10");
    } else {
      myApex41ImgData.apeximgnotification = tab2;
      document.getElementById("sep7").src = tab2;

      let a = esummary010;
      let b = rsummary010;
      addValue("10", a);
      addValue1("10", b);
    }
  };


  const agentDistributionFun = (e, no) => {
    let count = Number(e.target.value)
    let a = ""
    let b = ""
    let req = ""
    let sep = "sepAg1"
    let link = ""
    let linkTitle = ""
    let tab = ""


    const addSen = (a, b, req,sep, linkTitle, link,tab) => {
      if (count > 0) {
        document.getElementById(sep).src = tab2
        myApex41ImgData[tab] = tab2
        addValue(req, a)
        addValue1(req, b, linkTitle, link)
      } else {
        myApex41ImgData[tab] = tab1
        document.getElementById(sep).src = tab1
        closeValue(req)
        closeValue1(req)
      }
    }

    switch (no) {
      case 1:
        a = `${e.target.value} endpoints are required to restart for cleanup.`;
        b = `${e.target.value} endpoints are required to restart for cleanup. Recommeded to take restart of those endpoints.`
        req = "common1"
        sep = "sepAg1"
        link = ""
        linkTitle = ""
        tab = "tabAg1"

        addSen(a, b, req,sep, linkTitle, link,tab)
        break;

      case 2:
        a = `${e.target.value} endpoints are required to restart for the update.`;
        b = `${e.target.value} endpoints are required to restart for the update. Apex One Agents may need to reboot for engine updates. Recommend restarting those endpoints.`
        req = "common2"
        sep = "sepAg2"
        tab = "tabAg2"
        link = ""
        linkTitle = ""
        addSen(a, b, req,sep, linkTitle, link,tab)

        break;

      case 3:
        a = `${e.target.value} agents are installed on the Windows 7 (Legacy OS) platform.`;
        b = `${e.target.value} agents are installed on the Windows 7 (Legacy OS) platform, recommended to upgrade it to the latest OS. For the Windows 7 & 8.1 machines End-of-Support`
        req = "common3"
        sep = "sepAg3"
        tab = "tabAg3"
        link = "https://success.trendmicro.com/dcx/s/solution/000291687?language=en_US&sfdcIFrameOrigin=null"
        linkTitle = "https://success.trendmicro.com/dcx/s/solution/000291687?language=en_US&sfdcIFrameOrigin=null"
        addSen(a, b, req,sep, linkTitle, link,tab)

        break;

      case 4:
        a = `${e.target.value} agents are installed on the Windows server platform.`;
        b = `${e.target.value} agents installed on Windows server platform recommended to use Deep Security / Cloud One Workload Security for the advanced protection for servers.`
        req = "common4"
        sep = "sepAg4"
        tab = "tabAg4"
        link = ""
        linkTitle = ""
        addSen(a, b, req,sep, linkTitle, link,tab)

        break;

      default:
        break;
    }







  }


  return {
    reqSummarySenArr,
    summarySenArr,
    setSummarySenArr,
    setReqSummarySenArr,
    handleMemory,
    zeroFunction,
    oneFunction,
    twoFunction,
    threeFunction,
    fourFunction,
    fiveFunction,
    fiveFunction1,
    superman,
    handleVersions,
    sixFunction,
    sevenFunction,
    myApex41ImgData,
    agentDistributionFun
  };
}

export default useApexOneLogic41;
