import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import ExcutiveSummery from './ExcutiveSummery';
import Endpoints from "../API/Endpoints";

function useApexOneLogic43() {
  const { getReportData } = Endpoints();

  const {
    esummary60, rsummary60, esummary61, rsummary61, esummary62, rsummary62,
    esummary63, rsummary63, esummary64, rsummary64, esummary65, rsummary65,
    esummary66, rsummary66
  } = ExcutiveSummery()

  let tab1 = "images/tab1.png";
  let tab2 = "images/tab2.png";
  let tab4 = "images/tab4.png";


  let [summarySenApex43Arr, setSummarySenApex43Arr] = useState([
    { label: "3", description: "Active Directory Sync is configured in Apex Central." },
    { label: "5", description: "Reports are configured in Apex Central." },
    { label: "7", description: "Syslog is configured in Apex Central." },
  ]);
  let [reqSummarySenApex43Arr, setReqSummarySenApex43Arr] = useState([]);

  const [myApex43ImgData, setReportImgData] = useState({
    //apex43 - 51 - 59
    apex43memory: tab1,
    apex43sos: tab1,
    tab60: tab1,
    tab6060: tab1,
    tab61: tab1,
    tab62: tab1,
    tab63: tab1,
    tab64: tab1,
    tab65: tab1,
    tab66: tab1,
    tab67: tab1,


  });


  //excutive summary sentences
  const addValue = (label, description) => {
    const itemIndex = summarySenApex43Arr.findIndex((item) => item.label === label);

    if (itemIndex !== -1) {
      const updatedArray = [...summarySenApex43Arr];
      updatedArray[itemIndex] = {
        ...updatedArray[itemIndex],
        description: description,
      };
      setSummarySenApex43Arr(updatedArray);
    } else {
      setSummarySenApex43Arr([...summarySenApex43Arr, { label, description: description }]);
    }
  };


  const closeValue = (label) => {
    const link1 = [...summarySenApex43Arr];
    const link = link1.filter((item) => item.label !== label);
    setSummarySenApex43Arr(link);
  };

  //req

  const addValue1 = (label, description, linkTitle, link) => {
    const itemIndex = reqSummarySenApex43Arr.findIndex((item) => item.label === label);

    if (itemIndex !== -1) {
      const updatedArray = [...reqSummarySenApex43Arr];
      updatedArray[itemIndex] = {
        ...updatedArray[itemIndex],
        description: description,
        linkTitle: linkTitle, // Add the linkTitle property
        link: link,         // Add the link property
      };
      setReqSummarySenApex43Arr(updatedArray);
    } else {
      setReqSummarySenApex43Arr([
        ...reqSummarySenApex43Arr,
        { label, description, link, linkTitle }
      ]);
    }
  };

  const closeValue1 = (label) => {
    const link2 = [...reqSummarySenApex43Arr];
    const link = link2.filter((item) => item.label !== label);
    setReqSummarySenApex43Arr(link);
  };

  //Memory - 0

  const handleMemory1 = (event) => {

    var x = Number(document.getElementById("memory3").value);
    var y = Number(document.getElementById("memory4").value);
    if (y >= x) {
      myApex43ImgData.apex43memory = tab1
      document.getElementById(
        "sep6660"
      ).src = "images/tab1.png";

      closeValue("0");
      closeValue1("0");
    }
    else {
      myApex43ImgData.apex43memory = tab2
      document.getElementById(
        "sep6660"
      ).src = "images/tab2.png";


      let a = esummary60;
      let b = rsummary60;

      addValue("0", a)
      addValue1("0", b)
    }

  }


  //Version - 60 - 1

  const SixtyFunction = (event) => {

    var latest_version = Number(document.getElementById("version3").value);
    var deployed = Number(document.getElementById("version4").value);

    if (latest_version <= deployed) {

      myApex43ImgData.tab60 = tab1;
      document.getElementById(
        "sep60"
      ).src = "images/tab1.png";
      addValue('1', `The Apex central latest build version is installed i.e ${latest_version}.`)
      closeValue1("1");

    } else if (latest_version > deployed) {

      myApex43ImgData.tab60 = tab2;
      document.getElementById(
        "sep60"
      ).src = "images/tab2.png";

      let a = `Apex central is running on an older version i.e., ${deployed}. (Latest Version available is ${latest_version}).`
      let b = `Apex central is running on an older build version recommended to upgrade it to the Latest version ${latest_version}. Download link:  https://www.trendmicro.com/en_us/business/products/downloads.html.`

      addValue("1", a)
      addValue1("1", b)
    }

  };

  //License - 67 - 2

  const Sixty60Function = (e) => {

    var today = new Date();
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    let validDate = new Date(today.getFullYear(), today.getMonth() + 2, today.getDate())

    var l = new Date(e.target.value);
    l = new Date(l.getFullYear(), l.getMonth(), l.getDate())
    let monthName = moment(e.target.value).format("MMM")

    if (l >= today) {
      if (l <= validDate) {

        myApex43ImgData.tab6060 = tab2;
        document.getElementById(
          "sep6060"
        ).src = "images/tab2.png";


        let a = `Your Trend Micro Apex central license is valid till ${monthName} ${l.getDate()},${l.getFullYear()}.`
        let b = `Your Trend Micro Apex central license will expire soon. Please get in touch with the Trend Micro account manager to start the renewal process.`
        addValue("2", a)
        addValue1("2", b)
      }
      else if (l > validDate) {
        myApex43ImgData.tab6060 = tab1;
        document.getElementById(
          "sep6060"
        ).src = "images/tab1.png";

        let a = `Your Trend Micro Apex central license is up to date and is valid till ${monthName} ${l.getDate()},${l.getFullYear()}.`
        addValue("2", a)
        closeValue1("2")
      }
    } else {
      myApex43ImgData.tab6060 = "images/tab3.png";
      document.getElementById(
        "sep6060"
      ).src = "images/tab3.png";

      let a = `Your Trend Micro Apex central license has expired.`
      let b = `Please contact your Trend Micro Account Manager to renew the license to protect your endpoints.`
      addValue("2", a)
      addValue1("2", b)
    }

  };


  //Active Directory - 61 - 3

  const sixtyoneFunction = (event) => {

    if (event.target.value === "Configured") {
      myApex43ImgData.tab61 = tab1;
      document.getElementById(
        "sep61"
      ).src = "images/tab1.png";

      addValue("3", "Active Directory Sync is configured in Apex Central.")
      closeValue1("3");
    } else {
      myApex43ImgData.tab61 = tab4;
      document.getElementById(
        "sep61"
      ).src = tab4;

      let a = esummary61;
      let b = rsummary61;
      let link = "https://docs.trendmicro.com/en-us/enterprise/trend-micro-apex-central-2019-online-help/getting-started/active-directory-and_001/active-directory-int/configuring-active-d.aspx."

      addValue("3", a)
      addValue1("3", b, "Active Directory Integration", link)
    }
  };


  //Log Retention - 62 -4
  const sixtytwoFunction = (event) => {
    if (event.target.value === "configured") {
      myApex43ImgData.tab62 = tab1

      document.getElementById(
        "sep62"
      ).src = "images/tab1.png";
      closeValue("4");
      closeValue1("4");
    } else {

      let a = esummary62;
      let b = rsummary62;

      myApex43ImgData.tab62 = tab2
      document.getElementById(
        "sep62"
      ).src = "images/tab2.png";

      addValue("4", a)
      addValue1("4", b)

    }

  };

  //Reports - 63 -5
  const sixtythreeFunction = (event) => {
    if (event.target.value === "Scheduled") {
      myApex43ImgData.tab63 = tab1;
      document.getElementById(
        "sep63"
      ).src = "images/tab1.png";

      addValue("5", "Reports are configured in Apex Central.")
      closeValue1("5");

    } else {
      myApex43ImgData.tab63 = tab2;
      document.getElementById(
        "sep63"
      ).src = "images/tab2.png";

      let a = esummary63;
      let b = rsummary63;

      addValue("5", a)
      addValue1("5", b)
    }
  };


  //Event Notification - 64 -6
  const sixtyfourFunction = (event) => {
    if (event.target.value === "Enabled") {
      myApex43ImgData.tab64 = tab1;
      document.getElementById(
        "sep64"
      ).src = "images/tab1.png";

      closeValue("6");
      closeValue1("6");
    } else {

      myApex43ImgData.tab64 = tab2;
      document.getElementById(
        "sep64"
      ).src = "images/tab2.png";

      let a = esummary64;
      let b = rsummary64;

      addValue("6", a)
      addValue1("6", b)
    }
  };

  //Syslog - 65 - 7
  const sixtyfiveFunction = (event) => {
    if (event.target.value === "Configured") {
      myApex43ImgData.tab65 = tab1;
      document.getElementById(
        "sep65"
      ).src = "images/tab1.png";

      addValue("7", "Syslog is configured in Apex Central.")
      closeValue1("7");


    } else {
      myApex43ImgData.tab65 = tab4;
      document.getElementById(
        "sep65"
      ).src = tab4;

      let a = esummary65;
      let b = rsummary65;

      let link = "https://docs.trendmicro.com/en-us/enterprise/trend-micro-apex-central-2019-online-help/detections/logs_001/syslog-forwarding.aspx"

      addValue("7", a)
      addValue1("7", b, "Configuring Syslog Forwarding", link);

    }
  };

  //Report Maintenance - 66 - 8
  const sixtysixFunction = (event) => {
    if (event.target.value === "Configured") {
      myApex43ImgData.tab66 = tab1;
      document.getElementById(
        "sep66"
      ).src = "images/tab1.png";

      closeValue("8");
      closeValue1("8");
    } else {
      myApex43ImgData.tab66 = tab2;
      document.getElementById(
        "sep66"
      ).src = "images/tab2.png";

      let a = esummary66;
      let b = rsummary66;

      addValue("8", a)
      addValue1("8", b)
    }
  };

  //Product Registration - NO ES/RED

  const sixtysevenFunction = (event) => {
    if (event.target.value === "Enabled") {
      myApex43ImgData.tab67 = tab1;
      document.getElementById(
        "sep67"
      ).src = "images/tab1.png";


    } else {
      myApex43ImgData.tab67 = tab2;
      document.getElementById(
        "sep67"
      ).src = "images/tab2.png";

    }
  };

  return {
    summarySenApex43Arr,
    reqSummarySenApex43Arr,
    setSummarySenApex43Arr,
    setReqSummarySenApex43Arr,
    handleMemory1,
    SixtyFunction,
    Sixty60Function,
    sixtyoneFunction,
    sixtytwoFunction,
    sixtythreeFunction,
    sixtyfourFunction,
    sixtyfiveFunction,
    sixtysixFunction,
    sixtysevenFunction,
    myApex43ImgData,

  };
}

export default useApexOneLogic43;
