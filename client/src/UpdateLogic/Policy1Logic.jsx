import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import ExcutiveSummery from '../Logic/ExcutiveSummery'
import Endpoints from '../API/Endpoints';

function PolicyOverviewLogic1() {
    const { getReportData,getPolicyData } = Endpoints();
    const {
        rsummary10, rsummary11, rsummary13, rsummary14, rsummary23, rsummary29,
        rsummary51, rsummary52, rsummary53, rsummary54, rsummary55, rsummary56, rsummary591, rsummary592, rsummary593, rsummary594, rsummary595,
        rsummaryVP, rsummaryDC, rsummaryAC
    } = ExcutiveSummery()

    const tab1 = "images/tab1.png";
    const tab2 = "images/tab2.png";

    let [summarySenPolicy1Arr, setSummarySenPolicy1Arr] = useState([]);
    let [reqSummarySenPolicy1Arr, setReqSummarySenPolicy1Arr] = useState([]);

    let policyOneImg = [
        "tab8",
        "tab9",
        "tab10",
        "tab11",
        "tab12",
        "tab13",
        "tab14",
        "tab15",
        "tab16",
        "tab17",
        "tab18",
        "tab19",
        "tab20",
        "tab21",
        "tab22",
        "tab23",
        "tab24",
        "tab25",
        "tab26",
        "tab27",
        "tab28",
        "tab29",
        "tab30",
        "tab31",
        "tab32",
        "tab33",
        "tab34",
        "tab35",
        "tab36",
        "tab37",
        "tab38",
        "tab39",
        "tab40",
        "tab41",
        "tab42",
        "tab43",
        "tab44",
        "tab45",
        "tab46",
        "tab47",
        "tab48",
        "tab49",
        "tab50",
        "tab51",
        "tab51BM1",
        "tab51BM2",
        "tab51BM3",
        "tab51BM4",
        "tab51BM5",
        "tab51BM6",
        "tab51BM7",
        "tab52",
        "tab53",
        "tab54",
        "tab55",
        "tab56",
        "tab59",
        "tabVP",
        "tabDC",
        "tabAC"
      ];

    const [showComponent, setShowComponent] = useState(false);


    useEffect(() => {
        getReportDocument();
       
    }, []);

    const getReportDocument = async () => {
        await axios({
            url: getReportData,
            method: "GET",
        })
            .then((res) => {
                setShowComponent(res.data[0].checkPolicyOverviewTwoAdded)
                setSummarySenPolicy1Arr(JSON.parse(res.data[0].eSummaryPolicyOverview))
                setReqSummarySenPolicy1Arr(JSON.parse(res.data[0].allPolicyOneReq))
                setPolicyOneName(res.data[0].OverviewPolicyName1)
                myPo1ImgData["checkPolicyOverviewTwoAdded"] = res.data[0].checkPolicyOverviewTwoAdded
                for (const i of policyOneImg) {
                    myPo1ImgData[i] = res.data[0][i];
                }
                 if(res.data[0].checkPolicyOverviewTwoAdded){
                    document.getElementById('addPolicyOverviewTable').style.display = "none"
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

   
    let [policyOneName, setPolicyOneName] = useState("")
    const handlePolicyOverviewName = (e) => { setPolicyOneName(e.target.value) }

    let policyNameArr = ["Manual", "Real-Time", "Schedule"];


    //policy overview 1 table Logic..
    let [trackValue1, settrackValue1] = useState([[], [], [], []])

    let [checkPolicyOverviewES, setcheckPolicyOverviewES] = useState(0);
    let [checkFileToScan, setcheckFileToScan] = useState(0);
    let [checkDetectExploitCode, setdetectExploitCode] = useState(0);
    let [checkVirusMalwareScanBootArea, setVirusMalwareScanBootArea] = useState(0);


    let [checkVirusScan, setVirusScan] = useState(0);
    let [checkSpywareScan, setSpywareScan] = useState(0);

    //for Action Settings

    let [checkBackUpFiles, setBackUpFiles] = useState(0);
    let [checkDamageCleanup, setDamageCleanup] = useState(0);
    let [checkRunCleanup, setRunCleanup] = useState(0);
    let [checkSpywareApexOneTerminates, setSpywareApexOneTerminates] = useState(0);

    let [nameOfPolicy, setnameOfPolicy] = useState([[], [], [], [], [], [], [], [], [], [], []])

    let [policyActionArr, setPolicyActionArr] = useState([[], [], [], []])
    

    const [myPo1ImgData, setReportImgData] = useState({
        //po1
        checkPolicyOverviewTwoAdded: false,
        tab8: tab1,
        tab9: tab1,
        tab10: tab1,
        tab11: tab1,
        tab12: tab1,
        tab13: tab1,
        tab14: tab1,
        tab15: tab1,


        // po1 10- 15
        //MCA- imgs
        tab16: tab1,
        tab17: tab1,
        tab18: tab1,
        tab19: tab1,
        tab20: tab1,

        //Real-Time Scan Policy Settings - 21 -32
        tab21: tab1,
        tab22: tab1,
        tab23: tab1,
        tab24: tab1,
        tab25: tab1,
        tab26: tab1,
        tab27: tab1,
        tab28: tab1,
        tab29: tab1,
        tab30: tab1,
        tab31: tab1,
        tab32: tab1,


        //Real-Time Scan-Action Settings 33 - 36

        tab33: tab1,
        tab34: tab1,
        tab35: tab1,
        tab36: tab1,



        //Schedule Scan Policy Settings - 37-45
        tab37: tab1,
        tab38: tab1,
        tab39: tab1,
        tab40: tab1,
        tab41: tab1,
        tab42: tab1,
        tab43: tab1,
        tab44: tab1,
        tab45: tab1,

        //Schedule Scan-Action Settings - 46 - 50
        tab46: tab1,
        tab47: tab1,
        tab48: tab1,
        tab49: tab1,
        tab50: tab1,

        //BM - 51 - 59
        tab51: tab1,
        tab51BM1: tab1,
        tab51BM2: tab1,
        tab51BM3: tab1,
        tab51BM4: tab1,
        tab51BM5: tab1,
        tab51BM6: tab1,
        tab51BM7: tab1,
        tab52: tab1,
        tab53: tab1,
        tab54: tab1,
        tab55: tab1,
        tab56: tab1,
        tab59: tab1,
        tabVP: tab1,
        tabDC: tab1,
        tabAC: tab1,

    });


    //req
    const addValue1 = (label, description, linkTitle = "", link = "") => {
        const itemIndex = reqSummarySenPolicy1Arr.findIndex((item) => item.label === label);

        if (itemIndex !== -1) {
            const updatedArray = [...reqSummarySenPolicy1Arr];
            updatedArray[itemIndex] = {
                ...updatedArray[itemIndex],
                description: description,
                linkTitle: linkTitle, // Add the linkTitle property
                link: link,           // Add the link property
            };
            setReqSummarySenPolicy1Arr(updatedArray);
        } else {
            setReqSummarySenPolicy1Arr([
                ...reqSummarySenPolicy1Arr,
                { label, description: description, linkTitle, link },
            ]);
        }
    };



    const closeValue1 = (label) => {
        const existingIndex = reqSummarySenPolicy1Arr.findIndex((item) => item.label === label);
        if (existingIndex !== -1) {
            const link2 = [...reqSummarySenPolicy1Arr];
            const link = link2.filter((item) => item.label !== label);
            setReqSummarySenPolicy1Arr(link);
        }
    };
    const addPolicyOverviewTable = () => {
        document.getElementById('addPolicyOverviewTable').style.display = "none"
        setShowComponent(true);
        myPo1ImgData.checkPolicyOverviewTwoAdded = true
    }

    const closePolicyOverviewTable = () => {
        document.getElementById('closePolicyOverviewTable').style.display = "none"
        document.getElementById('addPolicyOverviewTable').style.display = "block"
        setShowComponent(false);
        myPo1ImgData.checkPolicyOverviewTwoAdded = false
    }

    const checkPolicyOverview = () => {
        const link = [...summarySenPolicy1Arr];

        if (checkPolicyOverviewES >= 1) {

            const eSummaryPolicyOverview = `Policy is not configured as per the Trend Micro best practice.`
            link[0] = eSummaryPolicyOverview;

        } else {
            myPo1ImgData.eSummaryPolicyOverview = ""
            link.splice(0, 1)
        }

        setSummarySenPolicy1Arr(link)

    }

    const checkServiceAvl = (policyNameNo, val) => {
        let index;
        index = nameOfPolicy[val].indexOf(policyNameArr[policyNameNo])
        nameOfPolicy[val].splice(index, 1)
    }

    //nameOfPolicy 0
    const FileToScanFunction = (x, policyNameNo) => {
        if (x === undefined) { checkServiceAvl(policyNameNo, 0) }
        else {
            if (nameOfPolicy[0].includes(x)) { }
            else if (nameOfPolicy[0].includes("")) { }
            else nameOfPolicy[0].push(x)
        }

        if (checkFileToScan >= 1) {
            let a = `In ${nameOfPolicy[0].join(", ")} Scan and policy settings, ${rsummary11}`
            addValue1("rSummary11", a)
        }
        else {
            closeValue1("rSummary11")
        }

    }

    //nameOfPolicy 1
    const detectExploitCodeFunction = (x, val) => {

        if (x === undefined) { checkServiceAvl(val, 1) }
        else {
            if (nameOfPolicy[1].includes(x)) { }
            else if (nameOfPolicy[1].includes("")) { }
            else nameOfPolicy[1].push(x)
        }

        if (checkDetectExploitCode >= 1) {
            let a = `In ${nameOfPolicy[1].join(", ")} Scan and policy settings, ${rsummary13}`
            addValue1("rSummary13", a)
        }
        else {

            closeValue1("rSummary13")
        }

    }

    //nameOfPolicy 2
    const virusMalwareScanBootAreaFunction = (x, val) => {

        if (x === undefined) { checkServiceAvl(val, 2) }
        else {
            if (nameOfPolicy[2].includes(x)) { }
            else if (nameOfPolicy[2].includes("")) { }
            else nameOfPolicy[2].push(x)
        }

        if (checkVirusMalwareScanBootArea >= 1) {

            let a = `In ${nameOfPolicy[2].join(", ")} Scan and policy settings, ${rsummary14}`;
            addValue1("rSummary14", a)
        }
        else {

            closeValue1("rSummary14")
        }

    }

    //nameOfPolicy 3
    //nameOfPolicy 3
    const cpuUsageFunction = (policyName, cpu, policyActionArrNo) => {
        let link = [...policyActionArr];
        if (cpu === "Medium") {
            const link2 = [...reqSummarySenPolicy1Arr];
            const link = link2.filter((item) => item.label !== trackValue1[policyActionArrNo][0]);
            trackValue1[policyActionArrNo].shift();
            setReqSummarySenPolicy1Arr(link);
            return;
        }
        // 2 - high 3 - low
        let no = cpu === "High" ? 2 : 3;
        let checkAvl = cpu === "High" ? 3 : 2;
        if (policyActionArr[checkAvl].includes(policyName)) {
            let index = link[checkAvl].indexOf(policyName)
            link[checkAvl].splice(index, 1)
        }
        if (policyActionArr[no].includes(policyName)) {
        }
        else {
            if (policyName !== undefined) {
                link[no].push(policyName)
            } else {
                const link2 = [...reqSummarySenPolicy1Arr];
                const link = link2.filter((item) => item.label !== trackValue1[policyActionArrNo][0]);
                trackValue1[policyActionArrNo].shift();
                setReqSummarySenPolicy1Arr(link);
                return;
            }
        }
        setPolicyActionArr(link)

        let a = `In ${policyActionArr[2].join(", ")} Scan and policy settings, CPU usage is set as High recommended to set as Medium for optimal performance.`;
        let b = `In ${policyActionArr[3].join(", ")} Scan and policy settings, CPU usage is set as Low recommended to set as Medium for optimal performance.`;

        let values = []

        if (policyActionArr[2].length === 1 && policyActionArr[3].length === 1) {
            values = [{ label: 'rSummary151', description: a }, { label: 'rSummary152', description: b }];
            if (!trackValue1[2].includes('rSummary151')) {
                trackValue1[2].push('rSummary151');
            }
            if (!trackValue1[3].includes('rSummary152')) {
                trackValue1[3].push('rSummary152');
            }
        } else if (policyActionArr[2].length) {
            if (!trackValue1[2].includes('rSummary151')) { trackValue1[2].push('rSummary151') }
            trackValue1[3].shift()
            values = [{ label: 'rSummary151', description: a }];
            setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary152'));
        } else if (policyActionArr[3].length) {
            if (!trackValue1[3].includes('rSummary152')) { trackValue1[3].push('rSummary152') }
            trackValue1[2].shift();
            values = [{ label: 'rSummary152', description: b }];
            setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary151'));
        }
        setReqSummarySenPolicy1Arr(prevValues => {
            const updatedValues = prevValues.map(prevVal => {
                const matchingValue = values.find(val => val.label === prevVal.label);
                if (matchingValue) {
                    return { ...prevVal, description: matchingValue.description };
                } else {
                    return prevVal;
                }
            });

            const newValues = values.filter(val => !prevValues.some(prevVal => prevVal.label === val.label));
            return [...updatedValues, ...newValues];
        });
    }


    //Action Setting tables
    //nameOfPolicy 4
    const actionSummeryFunction = (policyName, action) => {
        const link = [...policyActionArr];
        let a, b;
        let no = action === "activeAction" ? 0 : 1;
        let checkAvl = action === "activeAction" ? 1 : 0;
        if (action !== undefined) {
            if (policyActionArr[checkAvl].includes(policyName)) {
                let index = link[checkAvl].indexOf(policyName)
                link[checkAvl].splice(index, 1)
            }
            if (!policyActionArr.includes(policyName)) {

                if (!(policyName === undefined))
                    link[no].push(policyName)
            }
            setPolicyActionArr(link)
            a = `In ${policyActionArr[0].join(", ")} Action Settings, active Action is selected, recommended to select Use a specific action for each virus/malware type.`;
            b = `In ${policyActionArr[1].join(", ")} Action Settings, same action for all malware-Virus types is selected, recommended to select Use a specific action for each virus/malware type.`
        } else {

            if (policyActionArr[0].includes(policyName)) {
                link[0].splice(link[0].indexOf(policyName), 1);
            } else {
                link[1].splice(link[1].indexOf(policyName), 1);
            }
            setPolicyActionArr(link)
            a = `In ${policyActionArr[0].join(", ")} Action Settings, Active Action is selected, recommended to select Use a specific action for each virus/malware type.`;
            b = `In ${policyActionArr[1].join(", ")} Action Settings, Same action for all malware-Virus types is selected, recommended to select Use a specific action for each virus/malware type.`
        }

        if (policyActionArr[0].length > 0) {
            const existingIndex = reqSummarySenPolicy1Arr.findIndex(item => item.label === "rSummary161");
            console.log(existingIndex)
            if (existingIndex !== -1) {
                reqSummarySenPolicy1Arr[existingIndex].description = a;
            } else {

                setReqSummarySenPolicy1Arr(prevArr => [...prevArr, { label: "rSummary161", description: a }]);
            }
        } else {
            setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary161'));
        }

        if (policyActionArr[1].length > 0) {
            const existingIndex = reqSummarySenPolicy1Arr.findIndex(item => item.label === "rSummary162");
            if (existingIndex !== -1) {
                reqSummarySenPolicy1Arr[existingIndex].description = b;
            } else {

                setReqSummarySenPolicy1Arr(prevArr => [...prevArr, { label: "rSummary162", description: b }]);
            }
        } else {
            setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary162'));
        }



    }

    // nameOfPolicy 5
    const backUpFilesFunction = (x, val) => {
        if (x === undefined) { checkServiceAvl(val, 5) }
        else {
            if (nameOfPolicy[5].includes(x)) { }
            else if (nameOfPolicy[5].includes("")) { }
            else nameOfPolicy[5].push(x)
        }

        if (checkBackUpFiles >= 1) {
            let a = `In ${nameOfPolicy[5].join(", ")} Action Settings, back up files before cleaning is disabled, recommended to enable it.`;
            addValue1("rSummary17", a)
        }
        else {

            closeValue1("rSummary17")
        }


    }

    // nameOfPolicy 6
    const damageCleanupFunction = (x, val) => {
        if (x === undefined) { checkServiceAvl(val, 6) }
        else {
            if (nameOfPolicy[6].includes(x)) { }
            else if (nameOfPolicy[6].includes("")) { }
            else nameOfPolicy[6].push(x)
        }

        if (checkDamageCleanup >= 1) {
            let a = `In ${nameOfPolicy[6].join(", ")} Action Settings, damage Clean up Services with Standard clean up, recommended to enable it with Advanced clean up as The Security Agent uses advanced cleanup rules to proactively detect and stop applications that exhibit Fake AV and rootkit behavior.`;
            addValue1("rSummary18", a)
        }
        else {

            closeValue1("rSummary18")
        }

    }

    // nameOfPolicy 7
    const runCleanupFunction = (x, val) => {

        if (x === undefined) { checkServiceAvl(val, 7) }
        else {
            if (nameOfPolicy[7].includes(x)) { }
            else if (nameOfPolicy[7].includes("")) { }
            else nameOfPolicy[7].push(x)
        }

        if (checkRunCleanup >= 1) {
            let a = `In ${nameOfPolicy[7].join(", ")} Action Settings, run cleanup when probable virus/malware is detected' is disabled, recommended to enable it as probable viruses/malware are suspicious files that have some of the characteristics of viruses/malware.`;
            addValue1("rSummary19", a)
        }
        else {
            closeValue1("rSummary19")

        }

    }

    // nameOfPolicy 8
    const spywareApexOneTerminatesFunction = (x, val) => {

        if (x === undefined) { checkServiceAvl(val, 8) }
        else {
            if (nameOfPolicy[8].includes(x)) { }
            else if (nameOfPolicy[8].includes("")) { }
            else nameOfPolicy[8].push(x)
        }

        if (checkSpywareApexOneTerminates >= 1) {
            let a = `In ${nameOfPolicy[8].join(", ")} Action Settings, in Spyware/Grayware settings Clean: Apex One terminates processes are not enabled, recommend to enable it.`;
            addValue1("rSummary20", a)
        }
        else {
            closeValue1("rSummary20")
        }

    }

    // nameOfPolicy 9
    const virusScanFunction = (x, val) => {
        if (x === undefined) { checkServiceAvl(val, 9) }
        else {
            if (nameOfPolicy[9].includes(x)) { }
            else if (nameOfPolicy[9].includes("")) { }
            else nameOfPolicy[9].push(x)
        }

        if (checkVirusScan >= 1) {
            let a = `In ${nameOfPolicy[9].join(", ")} Scan and policy settings, Virus/Malware Scan is disabled, recommended to enable it.`;
            addValue1("rSummary21", a)
        }
        else {

            closeValue1("rSummary21")
        }
    }

    // nameOfPolicy 10
    const spywareScanFunction = (x, val) => {
        if (x === undefined) { checkServiceAvl(val, 10) }
        else {
            if (nameOfPolicy[10].includes(x)) { }
            else if (nameOfPolicy[10].includes("")) { }
            else nameOfPolicy[10].push(x)
        }

        if (checkSpywareScan >= 1) {
            let a = `In ${nameOfPolicy[10].join(", ")} Scan and policy settings, Spyware/Grayware Scan is disabled, recommended to enable it.`;
            addValue1("rSummary22", a)
        }
        else {

            closeValue1("rSummary22")
        }

    }

    //Smart scan - 10
    const eightFunction = (e) => {
        let a = "Smart Scan";
        if (e.target.value === a) {
            myPo1ImgData.tab8 = tab1;
            document.getElementById("sep8").src = tab1;

            closeValue1("rSummary10")
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()

        } else {
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            myPo1ImgData.tab8 = tab2;
            document.getElementById("sep8").src = tab2;
            addValue1("rSummary10", rsummary10)
        }

    };

    //Files to Scan > All Scanable files - 11
    const nineFunction = (e, idVal, img, PolicyNameNo) => {

        if (e.target.value === "All Scannable files") {
            document.getElementById(idVal).src = tab1;
            myPo1ImgData[img] = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            setcheckFileToScan(--checkFileToScan)
            FileToScanFunction(undefined, PolicyNameNo)

        } else {

            myPo1ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            setcheckFileToScan(++checkFileToScan)
            FileToScanFunction(policyNameArr[PolicyNameNo], PolicyNameNo)

        }
    };


    //Scan Hidden Folders- 12 - Enable/Disable function
    const tenFunction = (e, idVal, reqId, img, rS, rsummery) => {

        //tenFunction(e,"sep27","twentysix1","tab27","rSummary26",rsummary26)
        //tenFunction(e,"sep28","twentyseven1","tab28","rSummary27",rsummary27)
        //tenFunction(e,"sep32","twentyeight1","tab32","rSummary28",rsummary28)

        if (e.target.value === "Enabled") {
            myPo1ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;

            closeValue1(rS)
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()


        } else {

            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            document.getElementById(idVal).src = tab2;
            myPo1ImgData[img] = tab2;
            addValue1(rS, rsummery)

        }
        
    };

    //Select - Scan compressed files.>Maximium layers NO ES/RED
    const elevenFunction = (e, idVal, img, no) => {

        if (e.target.value >= no) {

            myPo1ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;

        } else {

            myPo1ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;

        }
    };

    //Detect exploit code in OLE file - 13
    const thirteenFunction = (e, idVal, img, no) => {


        if (e.target.value === "Enabled") {
            myPo1ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setdetectExploitCode(--checkDetectExploitCode)
            detectExploitCodeFunction(undefined, no);
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()

        } else {
            myPo1ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setdetectExploitCode(++checkDetectExploitCode)
            detectExploitCodeFunction(policyNameArr[no], no);
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()

        }
    };

    //Virus/Malware Scan Settings Only > Scan boot area - 14
    const fourteenFunction = (e, idVal, img, no) => {
        if (e.target.value === "Enabled") {
            myPo1ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setVirusMalwareScanBootArea(--checkVirusMalwareScanBootArea)
            virusMalwareScanBootAreaFunction(undefined, no);
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()

        } else {
            myPo1ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setVirusMalwareScanBootArea(++checkVirusMalwareScanBootArea)
            virusMalwareScanBootAreaFunction(policyNameArr[no], no);
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()

        }
    };

    //CPU Usage > Medium - 15

    const fifteenFunction = (e, idVal, img, no, policyActionArrNo) => {

        if (e.target.value === "Medium") {
            myPo1ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            cpuUsageFunction(undefined, e.target.value, policyActionArrNo);


        } else {
            myPo1ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            cpuUsageFunction(policyNameArr[no], e.target.value, policyActionArrNo);

        }
    };

    // MCA :  16 - 20

    //Use a specific action for each virus/malware type: 16
    const sixteenFunction = (e, idVal, img, no, r1, r2) => {
        let radio1 = document.getElementById(r1);
        let radio2 = document.getElementById(r2);

        console.log(e.target.value)

        let action = (radio1.checked) ? "activeAction" : "sameaction";
        if (radio1.checked === true || radio2.checked === true) {
            document.getElementById(idVal).src = tab2;
            myPo1ImgData[img] = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            actionSummeryFunction(policyNameArr[no], action);

        } else {
            document.getElementById(idVal).src = tab1;
            myPo1ImgData[img] = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            actionSummeryFunction(policyNameArr[no], undefined);
        }
    };

    // Back up files before cleaning 17
    const seventeenFunction = (e, idVal, img, no) => {

        if (e.target.value === "Enabled") {
            myPo1ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            setBackUpFiles(--checkBackUpFiles)
            backUpFilesFunction(undefined, no);

        } else {
            myPo1ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            setBackUpFiles(++checkBackUpFiles)
            backUpFilesFunction(policyNameArr[no], no);
        }
    };

    //Damage Cleanup Services with Advanced clean up 18

    const eighteenFunction = (e, idVal, img, no, r1, r2) => {


        var select = document.getElementById(r1);
        var select1 = document.getElementById(r2);
        var value = select.options[select.selectedIndex].value;
        var value1 = select1.options[select1.selectedIndex].value;

        console.log(value1)

        if (value === "Enabled" && value1 === "Advanced clean-up") {
            myPo1ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            setDamageCleanup(--checkDamageCleanup)
            damageCleanupFunction(undefined, no);

        } else {

            myPo1ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            setDamageCleanup(++checkDamageCleanup)
            damageCleanupFunction(policyNameArr[no], no);
        }
    };

    // Run cleanup when Probable virus/malware is detectedn 19
    const nineteenFunction = (e, idVal, img, no) => {

        if (e.target.value === "Enabled") {
            myPo1ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            setRunCleanup(--checkRunCleanup)
            runCleanupFunction(undefined, no);


        } else {
            myPo1ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            setRunCleanup(++checkRunCleanup)
            runCleanupFunction(policyNameArr[no], no);

        }
    };

    //Apex One terminates Processes 20

    const twentyFunction = (e, idVal, img, no) => {

        let a = "Clean";
        if (e.target.value === a) {
            myPo1ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            setSpywareApexOneTerminates(--checkSpywareApexOneTerminates)
            spywareApexOneTerminatesFunction(undefined, no);


        } else {
            myPo1ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            setSpywareApexOneTerminates(++checkSpywareApexOneTerminates)
            spywareApexOneTerminatesFunction(policyNameArr[no], no);

        }
    };


    //Real-Time Scan Policy Settings - 21 -32

    // Virus/Malware Scan - 21
    const twentyoneFunction = (e, idVal, img, no) => {

        if (e.target.value === "Enabled") {
            myPo1ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            setVirusScan(--checkVirusScan)
            virusScanFunction(undefined, no);

        } else {
            myPo1ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            setVirusScan(++checkVirusScan)
            virusScanFunction(policyNameArr[no], no);
        }
    };

    //spyware/Grayware scan - 22
    const twentytwoFunction = (e, idVal, img, no) => {

        if (e.target.value === "Enabled") {
            myPo1ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            setSpywareScan(--checkSpywareScan)
            spywareScanFunction(undefined, no);

        } else {
            myPo1ImgData[img] = tab2;

            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            setSpywareScan(++checkSpywareScan)
            spywareScanFunction(policyNameArr[no], no);

        }
    };

    //User Activity on Files - 23 
    const twentythreeFunction = (e) => {
        if (e.target.value === "created/modified and retrieved") {
            myPo1ImgData.tab23 = tab1;
            document.getElementById("sep23").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview();
            closeValue1("rSummary23")

        } else {
            myPo1ImgData.tab23 = tab2;
            document.getElementById("sep23").src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview();
            addValue1("rSummary23", rsummary23)
        }

    };


    //Configure Schedule Scan to run at least once a week. - 29
    const thirtynineFunction = (e) => {
        ///let radio10 = document.getElementById("radio10");
        let radio11 = document.getElementById("radio11");

        if (radio11.checked === true) {
            myPo1ImgData.tab39 = tab1;
            document.getElementById("sep39").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()

            closeValue1("rSummary29")

        } else {
            myPo1ImgData.tab39 = tab2;
            document.getElementById("sep39").src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()

            addValue1("rSummary29", rsummary29)
        }

    };


    //BM - 51 - 59

    //Behavior Monitoring
    const fiftyoneFunction = (e) => {
        let a = "Enabled with";
        if (e.target.value === a) {
            myPo1ImgData.tab51 = tab1;
            document.getElementById("sep51").src = tab1;

            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            closeValue1("rSummary51")

        } else {
            myPo1ImgData.tab51 = "images/tab3.png";
            document.getElementById("sep51").src = "images/tab3.png";
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()

            addValue1("rSummary51", rsummary51)
        }
    };

    //Predictive Machine Learning
    const fiftytwoFunction = (e) => {
        let a = "Enabled";
        if (e.target.value === a) {
            myPo1ImgData.tab52 = tab1;
            document.getElementById("sep52").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            closeValue1('rSummary52')

        } else {
            myPo1ImgData.tab52 = "images/tab3.png";
            document.getElementById("sep52").src = "images/tab3.png";
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            addValue1('rSummary52', rsummary52)
        }

    };

    //Suspicious Connection	
    const fiftythreeFunction = (e) => {
        let a = "Enabled";
        if (e.target.value === a) {
            myPo1ImgData.tab53 = tab1;
            document.getElementById("sep53").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()

        } else {
            myPo1ImgData.tab53 = "images/tab3.png";
            document.getElementById("sep53").src = "images/tab3.png";
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            addValue1('rSummary53', rsummary53)
        }

    };

    //Web Reputation
    const fiftyfourFunction = (e) => {

        let a = document.getElementById('56').value;
        let b = document.getElementById('58').value

        if (a === "Enabled") {
            setcheckPolicyOverviewES(--checkPolicyOverviewES);
            checkPolicyOverview();
            if (b === "Medium" || b === "High") {
                myPo1ImgData.tab54 = tab1;
                document.getElementById("sep54").src = tab1;
            } else {
                myPo1ImgData.tab54 = tab2;
                document.getElementById("sep54").src = tab2;
            }
            closeValue1("rSummary54")
        }
        else if (a === "Disabled") {
            myPo1ImgData.tab54 = "images/tab3.png";
            document.getElementById("sep54").src = "images/tab3.png";
            setcheckPolicyOverviewES(++checkPolicyOverviewES);
            checkPolicyOverview();
            addValue1('rSummary54', rsummary54)

        }
    };

    //Firewall
    const fiftyfiveFunction = (e) => {
        let a = "Enabled";
        if (e.target.value === a) {
            myPo1ImgData.tab55 = tab1;
            document.getElementById("sep55").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            closeValue1("rSummary55")
        } else {
            myPo1ImgData.tab55 = tab2;
            document.getElementById("sep55").src = tab2;
            addValue1('rSummary55', rsummary55)
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
        }
    };

    //Agent Self-Protection	
    const fiftysixFunction = (e) => {
        let a = "Enabled";

        if (e.target.value === a) {
            myPo1ImgData.tab56 = tab1;
            document.getElementById("sep56").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            closeValue1("rSummary56")
        } else {
            myPo1ImgData.tab56 = "images/tab3.png";
            document.getElementById("sep56").src = "images/tab3.png";
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            addValue1('rSummary56', rsummary56)
        }

    };

    //Additional Service
    const fiftynineFunction = (e) => {
        var select = document.getElementById("63");
        var value = select.options[select.selectedIndex].value;
        var select1 = document.getElementById("64");
        var value1 = select1.options[select1.selectedIndex].value;
        var select2 = document.getElementById("65");
        var value2 = select2.options[select2.selectedIndex].value;
        var select3 = document.getElementById("66");
        var value3 = select3.options[select3.selectedIndex].value;
        var select4 = document.getElementById("67");
        var value4 = select4.options[select4.selectedIndex].value;
        var select5 = document.getElementById("68");
        var value5 = select5.options[select5.selectedIndex].value;
        var select6 = document.getElementById("69");
        var value6 = select6.options[select6.selectedIndex].value;
        var select7 = document.getElementById("70");
        var value7 = select7.options[select7.selectedIndex].value;
        var select8 = document.getElementById("71");
        var value8 = select8.options[select8.selectedIndex].value;
        var select9 = document.getElementById("72");
        var value9 = select9.options[select9.selectedIndex].value;

        let con =
            value === "Enabled" &&
            value1 === "Enabled" &&
            value2 === "Enabled" &&
            value3 === "Enabled" &&
            value4 === "Enabled" &&
            value5 === "Enabled" &&
            value6 === "Enabled" &&
            value7 === "Enabled" &&
            value8 === "Enabled" &&
            value9 === "Enabled";

        let con1 =
            value === "Disabled" &&
            value1 === "Disabled" &&
            value2 === "Disabled" &&
            value3 === "Disabled" &&
            value4 === "Disabled" &&
            value5 === "Disabled" &&
            value6 === "Disabled" &&
            value7 === "Disabled" &&
            value8 === "Disabled" &&
            value9 === "Disabled";


        const addValues = (label, des) => {

            const existingIndex = reqSummarySenPolicy1Arr.findIndex(item => item.label === label);
            console.log(existingIndex)
            if (existingIndex !== -1) {
                reqSummarySenPolicy1Arr[existingIndex].description = des;
            } else {

                setReqSummarySenPolicy1Arr(prevArr => [...prevArr, { label: label, description: des }]);
            }

        }

        if (value === "Disabled" || value1 === "Disabled") {
            addValues('rSummary591', rsummary591)
        } else {
            setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary591'));
        }

        if (value2 === "Disabled" || value3 === "Disabled") {
            addValues('rSummary592', rsummary592)
        } else { setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary592')); }

        if (value4 === "Disabled" || value5 === "Disabled") {
            addValues('rSummary593', rsummary593)

        } else { setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary593')); }
        if (value6 === "Disabled" || value7 === "Disabled") {
            addValues('rSummary594', rsummary594)

        } else { setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary594')); }
        if (value8 === "Disabled" || value9 === "Disabled") {
            addValues('rSummary595', rsummary595)
        } else { setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary595')); }

        if (con) {

            myPo1ImgData.tab59 = tab1;
            document.getElementById("sep59").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()

        } else if (con1) {
            myPo1ImgData.tab59 = "images/tab3.png";
            document.getElementById("sep59").src = "images/tab3.png";
            addValues('rSummary596', `Additional Service is not configured, recommended to configure it.`)
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview();
            setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary591'));
            setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary592'));
            setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary593'));
            setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary594'));
            setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary595'));

        } else {
            myPo1ImgData.tab59 = tab2;
            document.getElementById("sep59").src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary596'));

        }

    };


    const vulnerabilityProtectionFun = (e) => {

        if (e.target.value === "Enabled") {
            myPo1ImgData.tabVP = tab1;
            document.getElementById("sepVP").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            closeValue1("rSummaryVP")
        } else {
            myPo1ImgData.tabVP = "images/tab3.png";
            document.getElementById("sepVP").src = "images/tab3.png";

            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            addValue1('rSummaryVP', rsummaryVP)
        }
    }

    const deviceControlFun = (e) => {
        if (e.target.value === "Enabled") {
            myPo1ImgData.tabDC = tab1;
            document.getElementById("sepDC").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            closeValue1("rSummaryDC")
        } else {
            myPo1ImgData.tabDC = "images/tab3.png";
            document.getElementById("sepDC").src = "images/tab3.png";
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            addValue1('rSummaryDC', rsummaryDC)
        }
    }

    const applicationControlFun = (e) => {
        if (e.target.value === "Enabled") {
            myPo1ImgData.tabAC = tab1;
            document.getElementById("sepAC").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            closeValue1("rSummaryAC")
        } else {
            myPo1ImgData.tabAC = "images/tab3.png";
            document.getElementById("sepAC").src = "images/tab3.png";
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            addValue1('rSummaryAC', rsummaryAC)
        }
    }

    

    return {

        summarySenPolicy1Arr, setSummarySenPolicy1Arr,
        reqSummarySenPolicy1Arr, setReqSummarySenPolicy1Arr,
        closePolicyOverviewTable,
        myPo1ImgData,
        policyOneName, handlePolicyOverviewName,
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
        fiftytwoFunction,
        fiftythreeFunction,
        fiftyfourFunction,
        fiftyfiveFunction,
        fiftysixFunction,
        fiftynineFunction,
        vulnerabilityProtectionFun,
        deviceControlFun,
        applicationControlFun,
    }
}

export default PolicyOverviewLogic1
