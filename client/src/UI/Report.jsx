import React from "react";
import Introduction from "./Introduction";
import ExecutiveSummery from "./ExecutiveSummery";
import Apex41 from "./Apex41";
import Apex43 from "./Apex43";
import PolicyOverview1 from "./PolicyOverview1";
import PolicyOverview2 from "./PolicyOverview2";
import Recommendation from "./Recommendation";
import RecommendedProcedure from "./RecommendedProcedure";
import BackendReport from "../Logic/BackendReport";
import useApexOneLogic41 from "../Logic/Apex41Logic";
import useApexOneLogic43 from "../Logic/Apex43Logic";
import Po1Logic from '../Logic/Policy1Logic'
import Po2Logic from '../Logic/Policy2Logic';
import { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { green } from "@mui/material/colors";

const save = green[900];

function Report() {


  const [chartDes, setchartDess] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupIndex, setPopupIndex] = useState("apex41Req");
  const [updateSummarySen, setUpdateSummarySen] = useState("");
  const [updateSummaryLabel, setUpdateSummaryLabel] = useState("");
  const [showRecommendedProcedure, setShowRecommendedProcedure] = useState(false);

  const [updatedLink, setUpdatedLink] = useState("");
  const [updatedLinkTitle, setUpdatedLinkTitle] = useState("");

  const [linkTitle, setLinkTitles] = useState("");
  const [links, setLinks] = useState("");

  const [recommendedProcedure, setRecommendedProcedure] = useState([
    [{ label: "common0", description: "For the outdated software version (14.0.XXXXX) systems follow the below steps." }],
    [
      { label: "common1", description: "Verify the Security Agent status, the icon should show 'Connected' and 'Online'." },
      { label: "common2", description: "Right-click the Security Agent > click Component Versions. Verify the shown Agent Versions are still 14.0. xxxx and not the latest version '14.0. xxxxx." },
      { label: "common3", description: "On the Component Version screen, verify that the Server name/port is xxxxxx.manage.trendmicro.com:443" },
      { label: "common4", description: "Reboot the machines if possible. Then verify if the Security Agent version has been updated to '14.0. xxxxx'." },
      { label: "common5", description: "If the issue persists, verify if the Auto-Upgrade feature is disabled. Check the following registry key: HKLM\\Software\\WOW6432Node\\TrendMicro\\PC-cillinNTCorp\\CurrentVersion\\Misc.\\NoProgramUpgrade=1 (If value is 1=Disabled; 0=Enabled)" },
      { label: "common6", description: "If the NoProgramUpgrade=0, from the Security Agent console, click on Update. Wait for a few minutes and if the upgrade is happening the status of the agent will change to 'Software is Updating'." },
      { label: "common7", description: "If the issue persists, use the Case Diagnostic Tool (CDT) to collect the debug logs and submit a support ticket to Technical Support:", link: "https://success.trendmicro.com/solution/1055229" }
    ],
    [{ label: "common8", description: "Refer to the link below to check agent connectivity:", link: "https://success.trendmicro.com/solution/1037975-checking-the-connection-between-the-server-and-clients-in-officescan-apex-one" },
    { label: "common9", description: "If the issue persists, use the Case Diagnostic Tool (CDT) to collect the debug logs and submit a support ticket to Technical Support:", link: "https://success.trendmicro.com/solution/1055229" }
    ],
    [{ label: "common10", description: "Apex one console> Update> Agent> Automatic Update> schedule update" },
    { label: "common11", description: "Apex one console> Update> Agent> Manual Update>Initiate Update" },
    { label: "common12", description: "Steps to download and manually apply the Smart Scan Agent Pattern." },
    { label: "common13", description: "Download Link:", link: "https://www.trendmicro.com/en_sg/business/products/downloads.html?regs=SG#all-pattern-files" },
    { label: "common14", description: "", link: "https://success.trendmicro.com/dcx/s/solution/1055119-manually-updating-the-pattern-file-and-scan-engine-on-officescan-servers-and-clients?language=en_US&sfdcIFrameOrigin=null" }
    ],
    [
      {
        label: "common15", description: `An agent without a policy list you can get from the apex central >Policy>Policy management.
    Go to the bottom of the tab > Endpoint without Policy list you will get.
    `},

      { label: "common16", description: `Then create a policy for all pending endpoints or assign a current policy to them.`, link: "https://docs.trendmicro.com/en-us/enterprise/apex-central-online-help/policies/policy-management_001/policy-management/creating-a-new-polic.aspx" }
    ]
  ]
  );

  let {
    cName,
    reportTypeName,
    visible,
    myPolicy2,
    handlePolicy2,
    handleChange,
    handleType,
    loadFile,
    loadFilePA,
    handleReport,
    myReportData,
    getCompanyName,
    handlePolicyOverview2,
  } = BackendReport();

  const {
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
    handleDatabaseBackup,
    inActiveAgentCleanup
  } = useApexOneLogic41();

  const {
    summarySenApex43Arr,
    reqSummarySenApex43Arr,
    setSummarySenApex43Arr,
    setReqSummarySenApex43Arr,
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
  } = useApexOneLogic43();

  const {

    summarySenPolicy1Arr, setSummarySenPolicy1Arr,
    reqSummarySenPolicy1Arr, setReqSummarySenPolicy1Arr,
    closePolicyOverviewTable,
    myPo1ImgData,
    policyOneName,
    handlePolicyOverviewName,
    showComponent,
    addPolicyOverviewTable,
    eightFunction,
    nineFunction,
    tenFunction,
    elevenFunction,
    thirteenFunction,
    fourteenFunction,
    fifteenFunction,

    sixteenFunction,
    seventeenFunction,
    eighteenFunction,
    nineteenFunction,
    twentyFunction,

    twentyoneFunction,
    twentytwoFunction,
    twentythreeFunction,

    thirtynineFunction,

    fiftyoneFunction,
    exception51Fun,
    fiftytwoFunction,
    fiftythreeFunction,
    fiftyfourFunction,
    fiftyfiveFunction,
    fiftysixFunction,
    fiftynineFunction,
    vulnerabilityProtectionFun,
    deviceControlFun,
    applicationControlFun,
  } = Po1Logic();

  const {
    summarySenPolicy2Arr, setSummarySenPolicy2Arr,
    reqSummarySenPolicy2Arr, setReqSummarySenPolicy2Arr,
    handlePolicyOverviewName1,
    policyTwoName,
    myPo2ImgData,
    eightFunction1,
    nineFunction1,
    tenFunction1,
    elevenFunction1,
    thirteenFunction1,
    fourteenFunction1,
    fifteenFunction1,

    sixteenFunction1,
    seventeenFunction1,
    eighteenFunction1,
    nineteenFunction1,
    twentyFunction1,

    twentyoneFunction1,
    twentytwoFunction1,
    twentythreeFunction1,

    thirtynineFunction1,

    fiftyoneFunction1,
    fiftytwoFunction1,
    fiftythreeFunction1,
    fiftyfourFunction1,
    fiftyfiveFunction1,
    fiftysixFunction1,
    vulnerabilityProtectionFun1,
    deviceControlFun1,
    applicationControlFun1,
    exception51Fun1,

  } = Po2Logic();


  for (const key in myPo1ImgData) {
    myReportData[key] = myPo1ImgData[key]
  }

  for (const key in myApex41ImgData) {
    myReportData[key] = myApex41ImgData[key]
  }
  for (const key in myApex41ImgData) {
    myReportData[key] = myApex41ImgData[key]
  }
  for (const key in myApex43ImgData) {
    myReportData[key] = myApex43ImgData[key]
  }
  for (const key in myPo2ImgData) {
    myPolicy2[key] = myPo2ImgData[key]
  }


  //popup update logic

  const addValue = (chartDesId) => {
    if (popupIndex === "select") return;
    if (chartDes.trim() === '') {
      alert("Please fill the field");
      return;
    }


    switch (popupIndex) {

      case "apex41Req":
        let values0 = [{ label: chartDes.slice(0, 15), description: chartDes, linkTitle: linkTitle, link: links }]
        setReqSummarySenArr(prevValues => {
          const updatedValues = prevValues.map(prevVal => {
            const matchingValue = values0.find(val => val.label === prevVal.label);
            if (matchingValue) {
              return { ...prevVal, description: matchingValue.description };
            } else {
              return prevVal;
            }
          });

          const newValues = values0.filter(val => !prevValues.some(prevVal => prevVal.label === val.label));
          return [...updatedValues, ...newValues];
        });

        break;

      case "apex43Req":

        const values1 = [{ label: chartDes.slice(0, 15), description: chartDes, linkTitle: linkTitle, link: links }]

        setReqSummarySenApex43Arr(prevValues => {
          const updatedValues = prevValues.map(prevVal => {
            const matchingValue = values1.find(val => val.label === prevVal.label);
            if (matchingValue) {
              return { ...prevVal, description: matchingValue.description };
            } else {
              return prevVal;
            }
          });

          const newValues = values1.filter(val => !prevValues.some(prevVal => prevVal.label === val.label));
          return [...updatedValues, ...newValues];
        });
        break;

      case "policy1Req":
        const values2 = [{ label: chartDes.slice(0, 15), description: chartDes, linkTitle: linkTitle, link: links }]
        setReqSummarySenPolicy1Arr(prevValues => {
          const updatedValues = prevValues.map(prevVal => {
            const matchingValue = values2.find(val => val.label === prevVal.label);
            if (matchingValue) {
              return { ...prevVal, description: matchingValue.description };
            } else {
              return prevVal;
            }
          });

          const newValues = values2.filter(val => !prevValues.some(prevVal => prevVal.label === val.label));
          return [...updatedValues, ...newValues];
        });
        break;

      case "policy2Req":
        const values3 = [{ label: chartDes.slice(0, 15), description: chartDes, linkTitle: linkTitle, link: links }]

        setReqSummarySenPolicy2Arr(prevValues => {
          const updatedValues = prevValues.map(prevVal => {
            const matchingValue = values3.find(val => val.label === prevVal.label);
            if (matchingValue) {
              return { ...prevVal, description: matchingValue.description };
            } else {
              return prevVal;
            }
          });

          const newValues = values3.filter(val => !prevValues.some(prevVal => prevVal.label === val.label));
          return [...updatedValues, ...newValues];
        });
        break;

      default:
        break;
    }

    document.getElementById(chartDesId).value = "";
    document.getElementById("linkTitle1").value = "";
    document.getElementById("links1").value = "";
    setchartDess("")
    setLinkTitles("")
    setLinks("")
  };

  const addValue1 = (chartDesId) => {
    if (popupIndex === "select") return;
    if (chartDes.trim() === '') {
      alert("Please fill the field");
      return;
    }

    switch (popupIndex) {
      case "policy1Es":
        const link1 = [...summarySenPolicy1Arr];
        link1.push(chartDes.trim())
        setSummarySenPolicy1Arr(link1);
        break;

      case "policy2Es":
        const link2 = [...summarySenPolicy2Arr];
        link2.push(chartDes.trim())
        setSummarySenPolicy2Arr(link2);
        break;

      case "apex41Es":
        let values0 = [{ label: chartDes.slice(0, 15), description: chartDes }]
        setSummarySenArr(prevValues => {
          const updatedValues = prevValues.map(prevVal => {
            const matchingValue = values0.find(val => val.label === prevVal.label);
            if (matchingValue) {
              return { ...prevVal, description: matchingValue.description };
            } else {
              return prevVal;
            }
          });

          const newValues = values0.filter(val => !prevValues.some(prevVal => prevVal.label === val.label));
          return [...updatedValues, ...newValues];
        });

        break;

      case "apex43Es":
        const values1 = [{ label: chartDes.slice(0, 15), description: chartDes }]
        setSummarySenApex43Arr(prevValues => {
          const updatedValues = prevValues.map(prevVal => {
            const matchingValue = values1.find(val => val.label === prevVal.label);
            if (matchingValue) {
              return { ...prevVal, description: matchingValue.description };
            } else {
              return prevVal;
            }
          });

          const newValues = values1.filter(val => !prevValues.some(prevVal => prevVal.label === val.label));
          return [...updatedValues, ...newValues];
        });
        break;

      default:
        break;
    }

    document.getElementById(chartDesId).value = "";
    setchartDess("")
  }

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const openPopup = (e, label, summarySen, no, rpLink, linktitle) => {
    setIsPopupOpen(true);
    setUpdateSummarySen(summarySen);
    setUpdateSummaryLabel(label);
    setPopupIndex(no);
    setUpdatedLink(rpLink)
    setUpdatedLinkTitle(linktitle)

  };

  const deletePopup = (e, label, no) => {
    switch (no) {
      case "apex41Es":
        const updatedArray = summarySenArr.filter(
          (item) => item.label !== label
        );
        setSummarySenArr(updatedArray);
        break;

      case "apex41Req":
        const updatedArray1 = reqSummarySenArr.filter(
          (item) => item.label !== label
        );
        setReqSummarySenArr(updatedArray1);
        break;

      case "apex43Es":
        const updatedArray2 = summarySenApex43Arr.filter(
          (item) => item.label !== label
        );
        setSummarySenApex43Arr(updatedArray2);
        break;

      case "apex43Req":
        const updatedArray3 = reqSummarySenApex43Arr.filter(
          (item) => item.label !== label
        );
        setReqSummarySenApex43Arr(updatedArray3);
        break;

      case "policy1Es":
        const updatedArray4 = [...summarySenPolicy1Arr];
        updatedArray4.splice(label, 1);
        setSummarySenPolicy1Arr(updatedArray4);
        break;

      case "policy1Req":
        const updatedArray5 = reqSummarySenPolicy1Arr.filter(
          (item) => item.label !== label
        );
        setReqSummarySenPolicy1Arr(updatedArray5);
        break;

      case "policy2Es":
        const updatedArray6 = [...summarySenPolicy2Arr];
        updatedArray6.splice(label, 1);
        setSummarySenPolicy2Arr(updatedArray6);
        break;

      case "policy2Req":
        const updatedArray7 = reqSummarySenPolicy2Arr.filter(
          (item) => item.label !== label
        );
        setReqSummarySenPolicy2Arr(updatedArray7);
        break;

      case "rp0":
        setRecommendedProcedure(prevState => {
          const updatedArray = prevState[0].filter((item) => item.label !== label);
          return [
            updatedArray,
            ...prevState.slice(1),
          ];
        });
        break;

      case "rp1":
        setRecommendedProcedure(prevState => {
          const updatedArray = prevState[1].filter((item) => item.label !== label);
          return [
            prevState[0],
            updatedArray,
            ...prevState.slice(2),
          ];
        });
        break;

      case "rp2":
        setRecommendedProcedure(prevState => {
          const updatedArray = prevState[2].filter((item) => item.label !== label);
          return [
            prevState[0],
            prevState[1],
            updatedArray,
            ...prevState.slice(3),
          ];
        });
        break;

      case "rp3":
        setRecommendedProcedure(prevState => {
          const updatedArray = prevState[3].filter((item) => item.label !== label);
          return [
            prevState[0],
            prevState[1],
            prevState[2],
            updatedArray,
            prevState[4]
          ];
        });
        break;


      case "rp4":
        setRecommendedProcedure(prevState => {
          const updatedArray = prevState[4].filter((item) => item.label !== label);
          return [
            prevState[0],
            prevState[1],
            prevState[2],
            prevState[3],
            updatedArray,
          ];
        });
        break;

      default:
        break;
    }
  };

  const updateValue = () => {
    switch (popupIndex) {

      case "apex41Es":
        const updatedArray = summarySenArr.map((item) => {
          if (item.label === updateSummaryLabel) {
            return { ...item, description: updateSummarySen.trim() };
          }
          return item;
        });
        setSummarySenArr(updatedArray);
        break;

      case "apex41Req":

        const updatedArray1 = reqSummarySenArr.map(item => {
          if (item.label === updateSummaryLabel) {
            if (item.link) {
              return { ...item, description: updateSummarySen.trim(), linkTitle: updatedLinkTitle, link: updatedLink };
            } else {
              if (updatedLink) {
                return { ...item, description: updateSummarySen.trim(), linkTitle: updatedLinkTitle, link: updatedLink };
              } else {
                return { ...item, description: updateSummarySen.trim() };
              }
            }
          }
          return item;
        });
        setReqSummarySenArr(updatedArray1);
        break;

      case "apex43Es":
        const updatedArray2 = summarySenApex43Arr.map((item) => {
          if (item.label === updateSummaryLabel) {
            return { ...item, description: updateSummarySen.trim() };
          }
          return item;
        });
        setSummarySenApex43Arr(updatedArray2);
        break;

      case "apex43Req":
        const updatedArray3 = reqSummarySenApex43Arr.map((item) => {
          if (item.label === updateSummaryLabel) {
            if (item.link) {
              return { ...item, description: updateSummarySen.trim(), linkTitle: updatedLinkTitle, link: updatedLink };
            } else {
              if (updatedLink) {
                return { ...item, description: updateSummarySen.trim(), linkTitle: updatedLinkTitle, link: updatedLink };
              } else {
                return { ...item, description: updateSummarySen.trim() };
              }
            }
          }
          return item;
        });
        setReqSummarySenApex43Arr(updatedArray3);
        break;

      case "policy1Es":
        const updatedArray4 = [...summarySenPolicy1Arr];
        updatedArray4[updateSummaryLabel] = updateSummarySen.trim();
        setSummarySenPolicy1Arr(updatedArray4);
        break;


      case "policy1Req":
        const updatedArray5 = reqSummarySenPolicy1Arr.map((item) => {
          if (item.label === updateSummaryLabel) {
            if (item.link) {
              return { ...item, description: updateSummarySen.trim(), linkTitle: updatedLinkTitle, link: updatedLink };
            } else {
              if (updatedLink) {
                return { ...item, description: updateSummarySen.trim(), linkTitle: updatedLinkTitle, link: updatedLink };
              } else {
                return { ...item, description: updateSummarySen.trim() };
              }
            }
          }
          return item;
        });
        setReqSummarySenPolicy1Arr(updatedArray5);
        break;

      case "policy2Es":
        const updatedArray6 = [...summarySenPolicy2Arr];
        updatedArray6[updateSummaryLabel] = updateSummarySen.trim();
        setSummarySenPolicy2Arr(updatedArray6);
        break;

      case "policy2Req":
        const updatedArray7 = reqSummarySenPolicy2Arr.map((item) => {
          if (item.label === updateSummaryLabel) {
            if (item.link) {
              return { ...item, description: updateSummarySen.trim(), linkTitle: updatedLinkTitle, link: updatedLink };
            } else {
              if (updatedLink) {
                return { ...item, description: updateSummarySen.trim(), linkTitle: updatedLinkTitle, link: updatedLink };
              } else {
                return { ...item, description: updateSummarySen.trim() };
              }
            }
          }
          return item;
        });
        setReqSummarySenPolicy2Arr(updatedArray7);
        break;

      //a
      case "rp0":
        setRecommendedProcedure(prevState => {
          const updatedArray = prevState[0].map(item => {
            if (item.label === updateSummaryLabel) {
              return { ...item, description: updateSummarySen.trim() };
            }
            return item;
          });

          return [
            updatedArray, // Update the second array
            ...prevState.slice(1), // Keep the remaining arrays unchanged
          ];
        });


        break;
      //a
      case "rp1":
        setRecommendedProcedure(prevState => {
          const updatedArray = prevState[1].map(item => {
            if (item.label === updateSummaryLabel) {
              if (item.link) {
                return { ...item, description: updateSummarySen.trim(), link: updatedLink };
              } else {
                return { ...item, description: updateSummarySen.trim() };
              }
            }
            return item;
          });

          return [
            prevState[0], // Keep the first array unchanged
            updatedArray, // Update the second array
            ...prevState.slice(2), // Keep the remaining arrays unchanged
          ];
        });
        break;

      case "rp2":
        setRecommendedProcedure(prevState => {
          const updatedArray = prevState[2].map(item => {
            if (item.label === updateSummaryLabel) {
              if (item.link) {
                return { ...item, description: updateSummarySen.trim(), link: updatedLink };
              } else {
                return { ...item, description: updateSummarySen.trim() };
              }
            }
            return item;
          });

          return [
            prevState[0],
            prevState[1],
            updatedArray,
            ...prevState.slice(3),
          ];
        });
        break;

      case "rp3":
        setRecommendedProcedure(prevState => {
          const updatedArray = prevState[3].map(item => {
            if (item.label === updateSummaryLabel) {
              if (item.link) {
                return { ...item, description: updateSummarySen.trim(), link: updatedLink };
              } else {
                return { ...item, description: updateSummarySen.trim() };
              }
            }
            return item;
          });

          return [
            prevState[0],
            prevState[1],
            prevState[2],
            updatedArray,
            prevState[4]
          ];
        });
        break;

      case "rp4":
        setRecommendedProcedure(prevState => {
          const updatedArray = prevState[4].map(item => {
            if (item.label === updateSummaryLabel) {
              if (item.link) {
                return { ...item, description: updateSummarySen.trim(), link: updatedLink };
              } else {
                return { ...item, description: updateSummarySen.trim() };
              }
            }
            return item;
          });

          return [
            prevState[0],
            prevState[1],
            prevState[2],
            prevState[3],
            updatedArray
          ];
        });
        break;



      default:
        console.log("default....")
        break;
    }

    setUpdateSummarySen("");
    setUpdateSummaryLabel("");
    closePopup();
  };

  console.log(myReportData)

  myReportData["allApex41ES"] = JSON.stringify(summarySenArr);
  myReportData["allApex43ES"] = JSON.stringify(summarySenApex43Arr);
  myReportData["allApex41ReqSummary"] = JSON.stringify(reqSummarySenArr);
  myReportData["allApex43ReqSummary"] = JSON.stringify(reqSummarySenApex43Arr);
  //myReportData["checkPolicyOverviewTwoAdded"] = myPo1ImgData["checkPolicyOverviewTwoAdded"];



  const commonSummarySen = reqSummarySenPolicy1Arr.filter((item1) => {
    return reqSummarySenPolicy2Arr.some((item2) => {
      return item1.description === item2.description;
    });
  });


  // Remove common elements from reqSummarySenPolicy1Arr
  const updatedReqSummarySenPolicy1Arr = reqSummarySenPolicy1Arr.filter((item1) => {
    return !commonSummarySen.some((item) => item.description === item1.description);
  });

  // Remove common elements from reqSummarySenPolicy2Arr
  const updatedReqSummarySenPolicy2Arr = reqSummarySenPolicy2Arr.filter((item2) => {
    return !commonSummarySen.some((item) => item.description === item2.description);
  });


  myReportData["allPolicyOneReq"] = JSON.stringify(updatedReqSummarySenPolicy1Arr);
  myReportData["allPolicyTwoReq"] = JSON.stringify(updatedReqSummarySenPolicy2Arr);
  myReportData["allCommonPolicySumArr"] = JSON.stringify(commonSummarySen);

  myReportData["showRecommendedProcedure"] = showRecommendedProcedure;
  if (showRecommendedProcedure) {
    myReportData["recommendedProcedureArr"] = JSON.stringify(recommendedProcedure);
  }

  //backend process
  myReportData["allApex41ExecutiveSummary"] = JSON.stringify(summarySenArr.map((item) => item.description));
  myReportData["allApex43ExecutiveSummary"] = JSON.stringify(summarySenApex43Arr.map((item) => item.description));
  // myReportData["extraEsummarySen"] = JSON.stringify(PointArr);


  myReportData["eSummaryPolicyOverview"] = JSON.stringify(summarySenPolicy1Arr);
  myReportData["eSummaryPolicyOverview1"] = JSON.stringify(summarySenPolicy2Arr);

  myReportData["allPolicyOneRSummeryArr"] = JSON.stringify(updatedReqSummarySenPolicy1Arr.map((item) => item.description));
  myReportData["allPolicyTwoRSummeryArr"] = JSON.stringify(updatedReqSummarySenPolicy2Arr.map((item) => item.description));

  myReportData["allCommonPolicySummeryArr"] = JSON.stringify(commonSummarySen.map((item) => item.description));



  const checkPolicyOverviewTwoAdded = myPo1ImgData["checkPolicyOverviewTwoAdded"];

  return (
    <>
      <div className="MainDiv">
        <Introduction
          myData={{
            reportTypeName,
            showComponent,
            cName,
            handleChange,
            handleType,
            loadFile,
            myReportData,
            getCompanyName,
          }}
        />

        <ExecutiveSummery myData={{
          cName,
          showComponent, policyOneName, policyTwoName, popupIndex, setPopupIndex,
          handleChange, openPopup, deletePopup, setchartDess,
          addValue1, summarySenArr,
          summarySenPolicy1Arr, summarySenPolicy2Arr, summarySenApex43Arr
        }} />

        <Apex41
          myData={{
            loadFilePA,
            handleChange,
            visible,
            cName,
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
            handleDatabaseBackup,
            inActiveAgentCleanup

          }}
        />

        <PolicyOverview1 myData={{

          handleChange,
          handlePolicyOverviewName,
          showComponent,
          eightFunction,
          nineFunction,
          tenFunction,
          elevenFunction,
          thirteenFunction,
          fourteenFunction,
          fifteenFunction,
          sixteenFunction,
          seventeenFunction,
          eighteenFunction,
          nineteenFunction,
          twentyFunction,

          twentyoneFunction,
          twentytwoFunction,
          twentythreeFunction,

          thirtynineFunction,

          fiftyoneFunction,
          exception51Fun,
          fiftytwoFunction,
          fiftythreeFunction,
          fiftyfourFunction,
          fiftyfiveFunction,
          fiftysixFunction,
          fiftynineFunction,
          vulnerabilityProtectionFun,
          deviceControlFun,
          applicationControlFun,

        }} />

        <div className="addPolicyOverviewTable" id="addPolicyOverviewTable">
          <h5>
            Add Policy Overview table :{" "}
            <img
              onClick={addPolicyOverviewTable}
              src="images/more-details.png"
              alt=""
            />
          </h5>{" "}
        </div>

        {showComponent && (
          <PolicyOverview2 myData={{
            visible,
            handlePolicy2, handlePolicyOverviewName1,
            closePolicyOverviewTable,
            policyTwoName,
            myPo2ImgData,
            eightFunction1,
            nineFunction1,
            tenFunction1,
            elevenFunction1,
            thirteenFunction1,
            fourteenFunction1,
            fifteenFunction1,

            sixteenFunction1,
            seventeenFunction1,
            eighteenFunction1,
            nineteenFunction1,
            twentyFunction1,

            twentyoneFunction1,
            twentytwoFunction1,
            twentythreeFunction1,

            thirtynineFunction1,

            fiftyoneFunction1,
            fiftytwoFunction1,
            fiftythreeFunction1,
            fiftyfourFunction1,
            fiftyfiveFunction1,
            fiftysixFunction1,
            vulnerabilityProtectionFun1,
            deviceControlFun1,
            applicationControlFun1,
            exception51Fun1,
          }} />
        )}

        <Apex43 myData={{
          visible,
          handleChange,
          SixtyFunction,
          Sixty60Function,
          sixtyoneFunction,
          sixtytwoFunction,
          sixtythreeFunction,
          sixtyfourFunction,
          sixtyfiveFunction,
          sixtysixFunction,
          sixtysevenFunction,
        }} />

        <Recommendation myData={{
          openPopup, deletePopup, setchartDess,
          showComponent, policyOneName, policyTwoName,
          setLinkTitles, setLinks, popupIndex, setPopupIndex, addValue,
          reqSummarySenArr, commonSummarySen, updatedReqSummarySenPolicy1Arr,
          updatedReqSummarySenPolicy2Arr, reqSummarySenApex43Arr
        }} />

        <RecommendedProcedure myData={{
          showRecommendedProcedure,
          setShowRecommendedProcedure,
          recommendedProcedure,
          openPopup, deletePopup
        }} />


        {/* next button  */}


        <div id="nexPreBtn">
          <Button variant="contained" style={{ backgroundColor: save }}>
            {checkPolicyOverviewTwoAdded ?
              (<Link
                onClick={(e) => {
                  handleReport(e);
                  handlePolicyOverview2(e);
                }}
                to="/charts"
                className="button is-primary mt-2"
              >
                Next - Charts
              </Link>) :
              (<Link
                onClick={handleReport}
                to="/charts"
                className="button is-primary mt-2"
              >
                Next - Charts
              </Link>)

            }

          </Button>
        </div>


        {isPopupOpen && (
          <div id="popup" className="popup">
            <span className="close-icon">
              <img src="images/close.png" alt="Close Icon" onClick={closePopup} />
            </span>
            <h3>Update Value</h3>
            <div className="popup-content">
              <textarea
                name=""
                id="popupLinkTitle"
                cols="40"
                value={updateSummarySen}
                rows="7"
                onChange={(e) => setUpdateSummarySen(e.target.value)}
              ></textarea>

              <input
                type="text"
                placeholder="Enter Link Title (if any)"
                value={updatedLinkTitle}
                onChange={(e) => setUpdatedLinkTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Link (If any)"
                value={updatedLink}
                onChange={(e) => setUpdatedLink(e.target.value)}
              />

            </div>
            <Button
              variant="contained"
              style={{ backgroundColor: save }}
              onClick={() => updateValue()}>
              Update
            </Button>
          </div>
        )}

      </div>
    </>
  );
}

export default Report;
