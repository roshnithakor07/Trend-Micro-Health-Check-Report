import { useState } from 'react'
import ExcutiveSummery from './ExcutiveSummery'
function PolicyOverviewLogic1() {

    const {
        rsummary10, rsummary11, rsummary13, rsummary14, rsummary161, rsummary162, rsummary17, rsummary18, rsummary19, rsummary20, rsummary21, rsummary22, rsummary23, rsummary29,
        rsummary53SC1, rsummary53SC2, rsummary53SC3, rsummary54, rsummary56, rsummaryDC, rsummaryAC, rsummaryVP, rsummaryVP1, rsummaryVP2,
        rsummary54WR,
        rsummary56PS1, rsummary56PS2, rsummary56PS3, rsummary56PS4,
        rsummary51BM1, rsummary51BM2, rsummary51BM3, rsummary51BM5, rsummary51BM6, rsummary51BM7, rsummary51BM8, rsummary51BM10,
    } = ExcutiveSummery()



    const tab1 = "images/tab1.png";
    const tab2 = "images/tab2.png";
    const tab3 = "images/tab3.png";
    const tab4 = "images/tab4.png";


    const [showComponent, setShowComponent] = useState(false);

    let policyNameArr = ["Manual", "Real-Time", "Schedule"];


    //policy overview 1 table Logic..
    let [trackValue1, settrackValue1] = useState([[], [], [], []])
    let [summarySenPolicy1Arr, setSummarySenPolicy1Arr] = useState([]);
    let [reqSummarySenPolicy1Arr, setReqSummarySenPolicy1Arr] = useState([]);
    let [checkPolicyOverviewES, setcheckPolicyOverviewES] = useState(0);
    let [checkFileToScan, setcheckFileToScan] = useState([0, 0]);
    let [checkDetectExploitCode, setdetectExploitCode] = useState(0);
    let [checkVirusMalwareScanBootArea, setVirusMalwareScanBootArea] = useState(0);


    let [checkVirusScan, setVirusScan] = useState(0);
    let [checkSpywareScan, setSpywareScan] = useState(0);

    //for Action Settings

    let [checkBackUpFiles, setBackUpFiles] = useState(0);
    let [checkDamageCleanup, setDamageCleanup] = useState(0);
    let [checkRunCleanup, setRunCleanup] = useState(0);
    let [checkSpywareApexOneTerminates, setSpywareApexOneTerminates] = useState(0);
    let [pMLTracker, setPMLTracker] = useState(0)

    let [nameOfPolicy, setnameOfPolicy] = useState([[], [], [], [], [], [], [], [], [], [], [], []])

    let [policyActionArr, setPolicyActionArr] = useState([[], [], [], []])
    let [policyOneName, setPolicyOneName] = useState("")

    const handlePolicyOverviewName = (e) => { setPolicyOneName(e.target.value) }

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
        tab51BM1: tab1,
        tab51BM2: tab1,
        tab51BM3: tab1,
        tab51BM4: tab1,
        tab51BM5: tab1,
        tab51BM6: tab1,
        tab51BM7: tab1,
        tab51BM8: tab1,

        tab52ML1: tab1,
        tab52ML2: tab1,
        tab52ML3: tab1,

        tab53SC1: tab1,
        tab53SC2: tab1,
        tab53SC3: tab1,
        tab53SC4: tab1,

        tab54: tab1,
        tab54WR: tab1,

        tab55: tab1,
        tab56PS1: tab1,
        tab56PS2: tab1,
        tab56PS3: tab1,
        tab56PS4: tab1,
        tab59: tab1,
        tabVP: tab1,
        tabVP1: tab1,
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

            const eSummaryPolicyOverview = `${policyOneName} Policy is not configured as per the Trend Micro best practice.`
            link[0] = eSummaryPolicyOverview;

        } else {

            link.splice(0, 1)
        }

        setSummarySenPolicy1Arr(link)

    }

    const checkServiceAvl = (policyNameNo, val) => {
        let index;
        index = nameOfPolicy[val].indexOf(policyNameArr[policyNameNo])
        nameOfPolicy[val].splice(index, 1)
    }

    //nameOfPolicy 0 & 11
    const FileToScanFunction = (x, policyNameNo, arrNo) => {

        let link = [...nameOfPolicy]
        let revArr = arrNo === 0 ? 11 : 0;

        if (arrNo === undefined) {

            if (link[0].includes(x)) {

                checkServiceAvl(policyNameNo, 0)
            }
            if (link[11].includes(x)) {
                checkServiceAvl(policyNameNo, 11)
            }

        } else {
            link[arrNo].push(x)
            if (link[revArr].includes(x)) {
                checkServiceAvl(policyNameNo, revArr)
            }
        }
        setnameOfPolicy(link)

        let a = `In ${nameOfPolicy[0].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan and policy settings, ${rsummary11[0]}`
        let b = `In ${nameOfPolicy[11].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan and policy settings, ${rsummary11[1]}`
        
        if (nameOfPolicy[0].length > 0) {
            const existingIndex = reqSummarySenPolicy1Arr.findIndex(item => item.label === "rSummary110");

            if (existingIndex !== -1) {
                reqSummarySenPolicy1Arr[existingIndex].description = a;
            } else {
                setReqSummarySenPolicy1Arr(prevArr => [...prevArr, { label: "rSummary110", description: a }]);
            }

        } else {
            setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary110'));
        }

        if (nameOfPolicy[11].length > 0) {
            const existingIndex = reqSummarySenPolicy1Arr.findIndex(item => item.label === "rSummary111");
            if (existingIndex !== -1) {
                reqSummarySenPolicy1Arr[existingIndex].description = b;
            } else {
                setReqSummarySenPolicy1Arr(prevArr => [...prevArr, { label: "rSummary111", description: b}]);
            }

        } else {
            setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary111'));
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
            let a = `In ${nameOfPolicy[1].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan and policy settings, ${rsummary13}`
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

            let a = `In ${nameOfPolicy[2].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan and policy settings, ${rsummary14}`;
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

        let a = `In ${policyActionArr[2].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan and policy settings, CPU usage is set as High recommended to set as Medium for optimal performance.`;
        let b = `In ${policyActionArr[3].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan and policy settings, CPU usage is set as Low recommended to set as Medium for optimal performance.`;

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
            a = `In ${policyActionArr[0].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan Action Settings, ${rsummary161}`;
            b = `In ${policyActionArr[1].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan Action Settings, ${rsummary162}`
        } else {

            if (policyActionArr[0].includes(policyName)) {
                link[0].splice(link[0].indexOf(policyName), 1);
            } else {
                link[1].splice(link[1].indexOf(policyName), 1);
            }
            setPolicyActionArr(link)
            a = `In ${policyActionArr[0].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan Action Settings, ${rsummary161}`;
            b = `In ${policyActionArr[1].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan Action Settings, ${rsummary162}`
        }

        if (policyActionArr[0].length > 0) {
            const existingIndex = reqSummarySenPolicy1Arr.findIndex(item => item.label === "rSummary161");

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
            let a = `In ${nameOfPolicy[5].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan Action Settings, ${rsummary17}`;
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
            let a = `In ${nameOfPolicy[6].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan Action Settings, ${rsummary18}`;
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
            let a = `In ${nameOfPolicy[7].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan Action Settings, ${rsummary19}`;
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
            let a = `In ${nameOfPolicy[8].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan Action Settings, ${rsummary20}`;
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
            let a = `In ${nameOfPolicy[9].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan and policy settings, ${rsummary21}`;
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
            let a = `In ${nameOfPolicy[10].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan and policy settings, ${rsummary22}`;
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
            FileToScanFunction(policyNameArr[PolicyNameNo], PolicyNameNo, undefined)
        } else {
            myPo1ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()

            if (e.target.value === "Files with Specific Extention") {
                FileToScanFunction(policyNameArr[PolicyNameNo], PolicyNameNo, 11)
            } else {
                FileToScanFunction(policyNameArr[PolicyNameNo], PolicyNameNo, 0)
            }
        }
    };


    //Scan Hidden Folders- 12 - Enable/Disable function
    const tenFunction = (e, idVal, img, rS, rsummery) => {
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

        let action = (radio1.checked) ? "activeAction" : "sameaction";
        if (radio1.checked === true || radio2.checked === true) {
            console.log(radio1.checked)
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
    const fiftyoneFunction = (e, no) => {

        const closeAllSentences = () => {
            setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== "rsummary51BM2"));
            setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== "rsummary51BM3"));
            setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== "rsummary51BM5"));
            setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== "rsummary51BM6"));
            setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== "rsummary51BM7"));
        }

        const add = (e, id1, id2, idVal, tab, req1, req2) => {
            let optionBM1 = document.getElementById(id1).value;
            let optionBM2 = document.getElementById(id2).value;
            let bmDisableClass = document.getElementsByClassName("bmDisableClass");


            if (optionBM1 === "Enabled") {
                if (optionBM2 === "Known threats") {
                    addValue1("rsummary51BM2", rsummary51BM2)
                    document.getElementById(idVal).src = tab2;
                    myPo1ImgData[tab] = tab2;
                    setcheckPolicyOverviewES(++checkPolicyOverviewES)
                    checkPolicyOverview()
                } else if (optionBM2 === "Disabled" || optionBM2 === "Log Only") {
                    document.getElementById(idVal).src = tab2;
                    myPo1ImgData[tab] = tab2;
                }
                else {
                    document.getElementById(idVal).src = tab1;
                    myPo1ImgData[tab] = tab1;
                    setcheckPolicyOverviewES(--checkPolicyOverviewES)
                    checkPolicyOverview()
                    if (no === 1) { closeValue1("rsummary51BM2") }
                }

                setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== req1))
                if (no === 1) {
                    for (let i = 0; i < bmDisableClass.length; i++) {
                        bmDisableClass[i].classList.remove("disableSection")
                    }
                }

            } else {
                if (no === 7) {
                    document.getElementById(idVal).src = tab4;
                    myPo1ImgData[tab] = tab4;
                } else {
                    document.getElementById(idVal).src = tab3;
                    myPo1ImgData[tab] = tab3;
                }
                setcheckPolicyOverviewES(--checkPolicyOverviewES)
                checkPolicyOverview()
                addValue1(req1, req2)
                if (no === 1) {
                    for (let i = 0; i < bmDisableClass.length; i++) {
                        bmDisableClass[i].classList.add("disableSection")
                    }
                    closeAllSentences()
                }

            }
        }



        switch (no) {
            case 1:
                add(e, "bm1", "bm2", "sep51BM1", "tab51BM1", "rsummary51BM1", rsummary51BM1)
                break;
            case 2:
                add(e, "bm3", "bm4", "sep51BM2", "tab51BM2", "rsummary51BM3", rsummary51BM3);
                break;
            case 3:
                add(e, "bm5", "bm5", "sep51BM3", "tab51BM3", "rsummary51BM5", rsummary51BM5)
                break;
            case 4: add(e, "bm6", "bm6", "sep51BM4", "tab51BM4", "rsummary51BM6", rsummary51BM6);
                break;
            case 5: add(e, "bm7", "bm7", "sep51BM5", "tab51BM5", "rsummary51BM7", rsummary51BM7);
                break;
            case 6:
                add(e, "bm8", "bm9", "sep51BM6", "tab51BM6", "rsummary51BM8", rsummary51BM8);
                break;
            case 7:
                add(e, "bm10", "bm10", "sep51BM7", "tab51BM7", "rsummary51BM10", rsummary51BM10);
                break;
            case 8:
                if (e.target.value === "Yes") {
                    myPo1ImgData["tab51BM8"] = tab4;
                    document.getElementById("sep51BM8").src = tab4;
                } else {
                    myPo1ImgData["tab51BM8"] = tab1;
                    document.getElementById("sep51BM8").src = tab1;
                }

                break;

            default:
                break;
        }




    }



    const fiftytwoFunction = (e, idVal, tab, req1, req2) => {
        let a = "Enabled";
        if (e.target.value === a) {
            document.getElementById(idVal).src = tab1;
            myPo1ImgData[tab] = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            closeValue1(req1)

        } else if (e.target.value === "Log Only") {
            myPo1ImgData[tab] = tab2;
            document.getElementById(idVal).src = tab2;
            addValue1(req1, req2)
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            setPMLTracker(++pMLTracker)

        } else if (e.target.value === "Quarantine" || e.target.value === "Terminate") {
            myPo1ImgData[tab] = tab1;
            setPMLTracker(--pMLTracker)
            if (pMLTracker <= 0) {
                document.getElementById(idVal).src = tab1;
                closeValue1("rsummary52ML2")
            }
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()


        } else if (e.target.value === "Yes") {
            myPo1ImgData[tab] = tab4;
            document.getElementById(idVal).src = tab4;
        } else if (e.target.value === "No") {
            myPo1ImgData[tab] = tab1;
            document.getElementById(idVal).src = tab1;
        }
        else {
            document.getElementById(idVal).src = tab3;
            myPo1ImgData[tab] = tab3;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            addValue1(req1, req2)
        }

        console.log(pMLTracker)
    };

    //Suspicious Connection	
    const fiftythreeFunction = (e, no, id1, id2, sep, tab, req1, req2) => {
        let suspicious_Connection1 = document.getElementById(id1).value;
        let suspicious_Connection2 = document.getElementById(id2).value;
        let userDefinedBlocked = document.getElementsByClassName('userDefinedBlocked');
        let a = "Enabled";

        if (no === 3) {
            if (e.target.value === a) {
                myPo1ImgData[tab] = tab1;
                document.getElementById(sep).src = tab1;
                setcheckPolicyOverviewES(--checkPolicyOverviewES)
                checkPolicyOverview()
                closeValue1(req1)
            } else {
                myPo1ImgData[tab] = tab3;
                document.getElementById(sep).src = tab3;
                setcheckPolicyOverviewES(++checkPolicyOverviewES)
                checkPolicyOverview()
                addValue1(req1, req2)
            }
        }

        if (no === 0 || no === 2) {
            if (suspicious_Connection1 === a) {
                if (suspicious_Connection2 === "Block") {
                    myPo1ImgData[tab] = tab1;
                    document.getElementById(sep).src = tab1;
                    setcheckPolicyOverviewES(--checkPolicyOverviewES)
                    checkPolicyOverview()
                } else {
                    myPo1ImgData[tab] = tab2;
                    document.getElementById(sep).src = tab2;
                    setcheckPolicyOverviewES(++checkPolicyOverviewES)
                    checkPolicyOverview()
                }
                userDefinedBlocked[no].classList.remove("disableSection")
                userDefinedBlocked[no + 1].classList.remove("disableSection")
                closeValue1(req1)

            } else {
                myPo1ImgData[tab] = tab3;
                document.getElementById(sep).src = tab3;
                setcheckPolicyOverviewES(++checkPolicyOverviewES)
                checkPolicyOverview()
                addValue1(req1, req2)
                userDefinedBlocked[no].classList.add("disableSection")
                userDefinedBlocked[no + 1].classList.add("disableSection")


            }
        }

    };

    //Web Reputation
    const fiftyfourFunction = (e, no) => {

        let a = document.getElementById('56').value;
        let b = document.getElementById('58').value
        //let web_reputation3 = document.getElementById('web_reputation3').value

        if (no === 2) {
            if (e.target.value === "Enabled") {
                myPo1ImgData["tab54WR"] = tab3;
                document.getElementById("sep54WR").src = tab3;
                setcheckPolicyOverviewES(++checkPolicyOverviewES);
                checkPolicyOverview();
                addValue1('rsummary54wr', rsummary54WR)
            } else {
                setcheckPolicyOverviewES(--checkPolicyOverviewES);
                checkPolicyOverview();
                myPo1ImgData["tab54WR"] = tab1;
                document.getElementById("sep54WR").src = tab1;
                closeValue1('rsummary54wr')
            }
        }


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
            myPo1ImgData.tab54 = tab3;
            document.getElementById("sep54").src = tab3;
            setcheckPolicyOverviewES(++checkPolicyOverviewES);
            checkPolicyOverview();
            addValue1('rSummary54', rsummary54)

        }
    };

    //Firewall
    const fiftyfiveFunction = (e) => {
        if (e.target.value === "Enabled") {
            myPo1ImgData.tab55 = tab1;
            document.getElementById("sep55").src = tab1;
        } else {
            myPo1ImgData.tab55 = tab4;
            document.getElementById("sep55").src = tab4;
        }
    };

    //Agent Self-Protection	
    const fiftysixFunction = (e, no) => {
        let value = e.target.value
        let a = "Enabled";
        let req = "rsummary56ps1"
        let sep = "sepAg1"
        let tab = ""

        const addSen = (value, sep, tab, req1, req2) => {
            if (value === a || value === `All components (including hotfixes and the agent program)`) {
                myPo1ImgData[tab] = tab1;
                document.getElementById(sep).src = tab1;
                setcheckPolicyOverviewES(--checkPolicyOverviewES)
                checkPolicyOverview()
                closeValue1(req1)
            }
            else {
                myPo1ImgData[tab] = tab2;
                document.getElementById(sep).src = tab2;
                setcheckPolicyOverviewES(++checkPolicyOverviewES)
                checkPolicyOverview()
                addValue1(req1, req2)
            }

        }

        switch (no) {
            case 1:
                req = "rsummary56ps1"
                sep = "sep56PS1"
                tab = "tab56PS1"
                addSen(value, sep, tab, req, rsummary56PS1[0])
                break;

            case 2:
                req = "rsummary56ps2"
                sep = "sep56PS2"
                tab = "tab56PS2"
                addSen(value, sep, tab, req, rsummary56PS1[1])
                break;

            case 3:
                req = "rsummary56ps3"
                sep = "sep56PS3"
                tab = "tab56PS3"

                if (value === "Disabled") {
                    myPo1ImgData[tab] = tab1;
                    document.getElementById(sep).src = tab1;
                    setcheckPolicyOverviewES(--checkPolicyOverviewES)
                    checkPolicyOverview()
                    closeValue1("rsummary56ps3")
                }
                else {
                    myPo1ImgData[tab] = tab2;
                    document.getElementById(sep).src = tab2;
                    setcheckPolicyOverviewES(++checkPolicyOverviewES)
                    checkPolicyOverview()
                    addValue1("rsummary56ps3", rsummary56PS2)
                }

                break;


            case 4:
                req = "rsummary56ps4"
                sep = "sep56PS4"
                tab = "tab56PS4"
                addSen(value, sep, tab, req, rsummary56PS4)
                break;

            default:
                break;
        }




    };

    //Additional Service
    const fiftynineFunction = (e) => {

        // var select = document.getElementById("63");
        // var value = select.options[select.selectedIndex].value;
        // var select1 = document.getElementById("64");
        // var value1 = select1.options[select1.selectedIndex].value;
        // var select2 = document.getElementById("65");
        // var value2 = select2.options[select2.selectedIndex].value;
        // var select3 = document.getElementById("66");
        // var value3 = select3.options[select3.selectedIndex].value;
        // var select4 = document.getElementById("67");
        // var value4 = select4.options[select4.selectedIndex].value;
        // var select5 = document.getElementById("68");
        // var value5 = select5.options[select5.selectedIndex].value;
        // var select6 = document.getElementById("69");
        // var value6 = select6.options[select6.selectedIndex].value;
        // var select7 = document.getElementById("70");
        // var value7 = select7.options[select7.selectedIndex].value;
        // var select8 = document.getElementById("71");
        // var value8 = select8.options[select8.selectedIndex].value;
        // var select9 = document.getElementById("72");
        // var value9 = select9.options[select9.selectedIndex].value;

        // let con =
        //     value === "Enabled" &&
        //     value1 === "Enabled" &&
        //     value2 === "Enabled" &&
        //     value3 === "Enabled" &&
        //     value4 === "Enabled" &&
        //     value5 === "Enabled" &&
        //     value6 === "Enabled" &&
        //     value7 === "Enabled" &&
        //     value8 === "Enabled" &&
        //     value9 === "Enabled";

        // let con1 =
        //     value === "Disabled" &&
        //     value1 === "Disabled" &&
        //     value2 === "Disabled" &&
        //     value3 === "Disabled" &&
        //     value4 === "Disabled" &&
        //     value5 === "Disabled" &&
        //     value6 === "Disabled" &&
        //     value7 === "Disabled" &&
        //     value8 === "Disabled" &&
        //     value9 === "Disabled";


        // const addValues = (label, des) => {

        //     const existingIndex = reqSummarySenPolicy1Arr.findIndex(item => item.label === label);
        //     console.log(existingIndex)
        //     if (existingIndex !== -1) {
        //         reqSummarySenPolicy1Arr[existingIndex].description = des;
        //     } else {

        //         setReqSummarySenPolicy1Arr(prevArr => [...prevArr, { label: label, description: des }]);
        //     }

        // }

        // if (value === "Disabled" || value1 === "Disabled") {
        //     addValues('rSummary591', rsummary591)
        // } else {
        //     setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary591'));
        // }

        // if (value2 === "Disabled" || value3 === "Disabled") {
        //     addValues('rSummary592', rsummary592)
        // } else { setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary592')); }

        // if (value4 === "Disabled" || value5 === "Disabled") {
        //     addValues('rSummary593', rsummary593)

        // } else { setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary593')); }
        // if (value6 === "Disabled" || value7 === "Disabled") {
        //     addValues('rSummary594', rsummary594)

        // } else { setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary594')); }
        // if (value8 === "Disabled" || value9 === "Disabled") {
        //     addValues('rSummary595', rsummary595)
        // } else { setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary595')); }

        // if (con) {

        //     myPo1ImgData.tab59 = tab1;
        //     document.getElementById("sep59").src = tab1;
        //     setcheckPolicyOverviewES(--checkPolicyOverviewES)
        //     checkPolicyOverview()

        // } else if (con1) {
        //     myPo1ImgData.tab59 = tab1;
        //     document.getElementById("sep59").src = tab1;
        //     addValues('rSummary596', `Additional Service is not configured, recommended to configure it.`)
        //     setcheckPolicyOverviewES(++checkPolicyOverviewES)
        //     checkPolicyOverview();
        //     setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary591'));
        //     setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary592'));
        //     setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary593'));
        //     setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary594'));
        //     setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary595'));

        // } else {
        //     myPo1ImgData.tab59 = tab1;
        //     document.getElementById("sep59").src = tab1;
        //     setcheckPolicyOverviewES(++checkPolicyOverviewES)
        //     checkPolicyOverview()
        //     setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary596'));

        // }



    };


    const vulnerabilityProtectionFun = (e, no) => {
        let vulnerability_protection = document.getElementById("vulnerability_protection").value;
        let vp_mode = document.getElementById("vp_mode").value;
        let classOfVP = document.getElementsByClassName("showVpModes");


        if (no === 2) {

            if (e.target.value === "Recommended") {
                myPo1ImgData.tabVP1 = tab1;
                document.getElementById("sepVP1").src = tab1;
                setcheckPolicyOverviewES(--checkPolicyOverviewES)
                checkPolicyOverview()
                closeValue1("rSummaryVP2")
            } else {

                myPo1ImgData.tabVP1 = tab2;
                document.getElementById("sepVP1").src = tab2;
                setcheckPolicyOverviewES(++checkPolicyOverviewES)
                checkPolicyOverview()
                addValue1('rSummaryVP2', rsummaryVP2)
            }
        };

        if (no === 1) {
            if (vulnerability_protection === "Enabled") {

                if (vp_mode === "Tap") {
                    myPo1ImgData.tabVP = tab2;
                    document.getElementById("sepVP").src = tab2;
                    setcheckPolicyOverviewES(++checkPolicyOverviewES)
                    checkPolicyOverview()
                    addValue1('rSummaryVP1', rsummaryVP1)
                } else {
                    myPo1ImgData.tabVP = tab1;
                    document.getElementById("sepVP").src = tab1;
                    setcheckPolicyOverviewES(--checkPolicyOverviewES)
                    checkPolicyOverview()
                    closeValue1("rSummaryVP1")
                }

                for (let i = 0; i < classOfVP.length; i++) {

                    classOfVP[i].style.opacity = 1;
                    classOfVP[i].style.pointerEvents = "auto"
                }
                closeValue1("rSummaryVP")

            } else {
                console.log("hhhhh")
                myPo1ImgData.tabVP = tab3;
                document.getElementById("sepVP").src = tab3;
                for (let i = 0; i < classOfVP.length; i++) {

                    classOfVP[i].style.opacity = 0.5;
                    classOfVP[i].style.pointerEvents = "none"
                }

                setcheckPolicyOverviewES(++checkPolicyOverviewES)
                checkPolicyOverview()
                addValue1('rSummaryVP', rsummaryVP)
                setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummaryVP1'));
                setReqSummarySenPolicy1Arr(prevValues => prevValues.filter(value => value.label !== 'rSummaryVP2'));
            }
        };

    }



    const deviceControlFun = (e) => {
        if (e.target.value === "Enabled") {
            myPo1ImgData.tabDC = tab1;
            document.getElementById("sepDC").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            closeValue1("rSummaryDC")
        } else {
            myPo1ImgData.tabDC = tab3;
            document.getElementById("sepDC").src = tab3;
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
            myPo1ImgData.tabAC = tab2;
            document.getElementById("sepAC").src = tab2;
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
