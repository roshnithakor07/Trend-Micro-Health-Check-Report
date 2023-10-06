import { useState } from 'react'
import ExcutiveSummery from './ExcutiveSummery'
function PolicyOverviewLogic1() {

    const {
        rsummary10, rsummary11, rsummary13, rsummary14, rsummary161, rsummary162, rsummary17, rsummary18, rsummary19, rsummary20, rsummary21, rsummary22, rsummary23, rsummary29,
        rsummary51, rsummary51BM1, rsummary52, rsummary53, rsummary54, rsummary55, rsummary56,
        rsummaryVP, rsummaryDC, rsummaryAC, rsummaryVP1
    } = ExcutiveSummery()

    const tab1 = "images/tab1.png";
    const tab2 = "images/tab2.png";
    const tab3 = "images/tab3.png";
    const tab4 = "images/tab4.png";

    let policyNameArr = ["Manual", "Real-Time", "Schedule"];


    //policy overview 1 table Logic..
    let [trackValue1, settrackValue1] = useState([[], [], [], []])
    let [summarySenPolicy2Arr, setSummarySenPolicy2Arr] = useState([]);
    let [reqSummarySenPolicy2Arr, setReqSummarySenPolicy2Arr] = useState([]);
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
    let [policyTwoName, setPolicyTwoName] = useState("")

    const handlePolicyOverviewName1 = (e) => { setPolicyTwoName(e.target.value) }



    const [myPo2ImgData, setReportImgData] = useState({
        //po1
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
        tab52ML1: tab1,
        tab52ML2: tab1,
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
        const itemIndex = reqSummarySenPolicy2Arr.findIndex((item) => item.label === label);

        if (itemIndex !== -1) {
            const updatedArray = [...reqSummarySenPolicy2Arr];
            updatedArray[itemIndex] = {
                ...updatedArray[itemIndex],
                description: description,
                linkTitle: linkTitle, // Add the linkTitle property
                link: link,           // Add the link property
            };
            setReqSummarySenPolicy2Arr(updatedArray);
        } else {
            setReqSummarySenPolicy2Arr([
                ...reqSummarySenPolicy2Arr,
                { label, description: description, linkTitle, link },
            ]);
        }
    };

    const closeValue1 = (label) => {
        const existingIndex = reqSummarySenPolicy2Arr.findIndex((item) => item.label === label);
        if (existingIndex !== -1) {
            const link2 = [...reqSummarySenPolicy2Arr];
            const link = link2.filter((item) => item.label !== label);
            setReqSummarySenPolicy2Arr(link);
        }
    };


    const checkPolicyOverview = () => {
        const link = [...summarySenPolicy2Arr];

        if (checkPolicyOverviewES >= 1) {

            const eSummaryPolicyOverview = `${policyTwoName} Policy is not configured as per the Trend Micro best practice.`
            link[0] = eSummaryPolicyOverview;

        } else {

            link.splice(0, 1)
        }

        setSummarySenPolicy2Arr(link)

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
            let a = `In ${nameOfPolicy[0].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan and policy settings, ${rsummary11}`
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
            const link2 = [...reqSummarySenPolicy2Arr];
            const link = link2.filter((item) => item.label !== trackValue1[policyActionArrNo][0]);
            trackValue1[policyActionArrNo].shift();
            setReqSummarySenPolicy2Arr(link);
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
                const link2 = [...reqSummarySenPolicy2Arr];
                const link = link2.filter((item) => item.label !== trackValue1[policyActionArrNo][0]);
                trackValue1[policyActionArrNo].shift();
                setReqSummarySenPolicy2Arr(link);
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
            setReqSummarySenPolicy2Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary152'));
        } else if (policyActionArr[3].length) {
            if (!trackValue1[3].includes('rSummary152')) { trackValue1[3].push('rSummary152') }
            trackValue1[2].shift();
            values = [{ label: 'rSummary152', description: b }];
            setReqSummarySenPolicy2Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary151'));
        }
        setReqSummarySenPolicy2Arr(prevValues => {
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
            const existingIndex = reqSummarySenPolicy2Arr.findIndex(item => item.label === "rSummary161");
            console.log(existingIndex)
            if (existingIndex !== -1) {
                reqSummarySenPolicy2Arr[existingIndex].description = a;
            } else {

                setReqSummarySenPolicy2Arr(prevArr => [...prevArr, { label: "rSummary161", description: a }]);
            }
        } else {
            setReqSummarySenPolicy2Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary161'));
        }

        if (policyActionArr[1].length > 0) {
            const existingIndex = reqSummarySenPolicy2Arr.findIndex(item => item.label === "rSummary162");
            if (existingIndex !== -1) {
                reqSummarySenPolicy2Arr[existingIndex].description = b;
            } else {

                setReqSummarySenPolicy2Arr(prevArr => [...prevArr, { label: "rSummary162", description: b }]);
            }
        } else {
            setReqSummarySenPolicy2Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary162'));
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
    const eightFunction1 = (e) => {
        let a = "Smart Scan";
        if (e.target.value === a) {
            myPo2ImgData.tab8 = tab1;
            document.getElementById("sep8Policy2").src = tab1;

            closeValue1("rSummary10")
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()

        } else {
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            myPo2ImgData.tab8 = tab2;
            document.getElementById("sep8Policy2").src = tab2;
            addValue1("rSummary10", rsummary10)
        }

    };

    //Files to Scan > All Scanable files - 11
    const nineFunction1 = (e, idVal, img, PolicyNameNo) => {

        if (e.target.value === "All Scannable files") {
            document.getElementById(idVal).src = tab1;
            myPo2ImgData[img] = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            setcheckFileToScan(--checkFileToScan)
            FileToScanFunction(undefined, PolicyNameNo)

        } else {

            myPo2ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            setcheckFileToScan(++checkFileToScan)
            FileToScanFunction(policyNameArr[PolicyNameNo], PolicyNameNo)

        }
    };


    //Scan Hidden Folders- 12 - Enable/Disable function
    const tenFunction1 = (e, idVal, img, rS, rsummery) => {
        if (e.target.value === "Enabled") {
            myPo2ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            closeValue1(rS)
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
        } else {

            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            document.getElementById(idVal).src = tab2;
            myPo2ImgData[img] = tab2;
            addValue1(rS, rsummery)

        }

    };

    //Select - Scan compressed files.>Maximium layers NO ES/RED
    const elevenFunction1 = (e, idVal, img, no) => {

        if (e.target.value >= no) {

            myPo2ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;

        } else {

            myPo2ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;

        }
    };

    //Detect exploit code in OLE file - 13
    const thirteenFunction1 = (e, idVal, img, no) => {


        if (e.target.value === "Enabled") {
            myPo2ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setdetectExploitCode(--checkDetectExploitCode)
            detectExploitCodeFunction(undefined, no);
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()

        } else {
            myPo2ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setdetectExploitCode(++checkDetectExploitCode)
            detectExploitCodeFunction(policyNameArr[no], no);
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()

        }
    };

    //Virus/Malware Scan Settings Only > Scan boot area - 14
    const fourteenFunction1 = (e, idVal, img, no) => {
        if (e.target.value === "Enabled") {
            myPo2ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setVirusMalwareScanBootArea(--checkVirusMalwareScanBootArea)
            virusMalwareScanBootAreaFunction(undefined, no);
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()

        } else {
            myPo2ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setVirusMalwareScanBootArea(++checkVirusMalwareScanBootArea)
            virusMalwareScanBootAreaFunction(policyNameArr[no], no);
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()

        }
    };

    //CPU Usage > Medium - 15

    const fifteenFunction1 = (e, idVal, img, no, policyActionArrNo) => {

        if (e.target.value === "Medium") {
            myPo2ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            cpuUsageFunction(undefined, e.target.value, policyActionArrNo);


        } else {
            myPo2ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            cpuUsageFunction(policyNameArr[no], e.target.value, policyActionArrNo);

        }
    };

    // MCA :  16 - 20

    //Use a specific action for each virus/malware type: 16
    const sixteenFunction1 = (e, idVal, img, no, r1, r2) => {
        let radio1 = document.getElementById(r1);
        let radio2 = document.getElementById(r2);



        let action = (radio1.checked) ? "activeAction" : "sameaction";
        if (radio1.checked === true || radio2.checked === true) {
            console.log(radio1.checked)
            document.getElementById(idVal).src = tab2;
            myPo2ImgData[img] = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            actionSummeryFunction(policyNameArr[no], action);

        } else {
            document.getElementById(idVal).src = tab1;
            myPo2ImgData[img] = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            actionSummeryFunction(policyNameArr[no], undefined);
        }
    };

    // Back up files before cleaning 17
    const seventeenFunction1 = (e, idVal, img, no) => {

        if (e.target.value === "Enabled") {
            myPo2ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            setBackUpFiles(--checkBackUpFiles)
            backUpFilesFunction(undefined, no);

        } else {
            myPo2ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            setBackUpFiles(++checkBackUpFiles)
            backUpFilesFunction(policyNameArr[no], no);
        }
    };

    //Damage Cleanup Services with Advanced clean up 18

    const eighteenFunction1 = (e, idVal, img, no, r1, r2) => {


        var select = document.getElementById(r1);
        var select1 = document.getElementById(r2);
        var value = select.options[select.selectedIndex].value;
        var value1 = select1.options[select1.selectedIndex].value;

        console.log(value1)

        if (value === "Enabled" && value1 === "Advanced clean-up") {
            myPo2ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            setDamageCleanup(--checkDamageCleanup)
            damageCleanupFunction(undefined, no);

        } else {

            myPo2ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            setDamageCleanup(++checkDamageCleanup)
            damageCleanupFunction(policyNameArr[no], no);
        }
    };

    // Run cleanup when Probable virus/malware is detectedn 19
    const nineteenFunction1 = (e, idVal, img, no) => {

        if (e.target.value === "Enabled") {
            myPo2ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            setRunCleanup(--checkRunCleanup)
            runCleanupFunction(undefined, no);


        } else {
            myPo2ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            setRunCleanup(++checkRunCleanup)
            runCleanupFunction(policyNameArr[no], no);

        }
    };

    //Apex One terminates Processes 20

    const twentyFunction1 = (e, idVal, img, no) => {

        let a = "Clean";
        if (e.target.value === a) {
            myPo2ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            setSpywareApexOneTerminates(--checkSpywareApexOneTerminates)
            spywareApexOneTerminatesFunction(undefined, no);


        } else {
            myPo2ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            setSpywareApexOneTerminates(++checkSpywareApexOneTerminates)
            spywareApexOneTerminatesFunction(policyNameArr[no], no);

        }
    };


    //Real-Time Scan Policy Settings - 21 -32

    // Virus/Malware Scan - 21
    const twentyoneFunction1 = (e, idVal, img, no) => {

        if (e.target.value === "Enabled") {
            myPo2ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            setVirusScan(--checkVirusScan)
            virusScanFunction(undefined, no);

        } else {
            myPo2ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            setVirusScan(++checkVirusScan)
            virusScanFunction(policyNameArr[no], no);
        }
    };

    //spyware/Grayware scan - 22
    const twentytwoFunction1 = (e, idVal, img, no) => {

        if (e.target.value === "Enabled") {
            myPo2ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            setSpywareScan(--checkSpywareScan)
            spywareScanFunction(undefined, no);

        } else {
            myPo2ImgData[img] = tab2;

            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            setSpywareScan(++checkSpywareScan)
            spywareScanFunction(policyNameArr[no], no);

        }
    };

    //User Activity on Files - 23 
    const twentythreeFunction1 = (e) => {
        if (e.target.value === "created/modified and retrieved") {
            myPo2ImgData.tab23 = tab1;
            document.getElementById("sep23Policy2").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview();
            closeValue1("rSummary23")

        } else {
            myPo2ImgData.tab23 = tab2;
            document.getElementById("sep23Policy2").src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview();
            addValue1("rSummary23", rsummary23)
        }

    };


    //Configure Schedule Scan to run at least once a week. - 29
    const thirtynineFunction1 = (e) => {
        ///let radio10 = document.getElementById("radio10");
        let radio11 = document.getElementById("radio11Policy2");

        if (radio11.checked === true) {
            myPo2ImgData.tab39 = tab1;
            document.getElementById("sep39Policy2").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()

            closeValue1("rSummary29")

        } else {
            myPo2ImgData.tab39 = tab2;
            document.getElementById("sep39Policy2").src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()

            addValue1("rSummary29", rsummary29)
        }

    };


    //BM - 51 - 59

    //Behavior Monitoring
    const [bmCounter, setBmCounter] = useState(0)
    const addBmSummarySen = () => {
        if (bmCounter < 0) {
            closeValue1("rSummary51")
        } else {
            addValue1("rSummary51", rsummary51)
        }
    }
    const fiftyoneFunction1 = (e, idVal, tab) => {
        let a = "Enabled with";
        if (e.target.value === a || e.target.value === "Enabled") {
            setBmCounter(prevCount => prevCount + 1);
            myPo2ImgData[tab] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            //closeValue1("rSummary51")
            addBmSummarySen()


        } else if (e.target.value === "EnabledAntiExploit") {
            myPo2ImgData[tab] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            closeValue1("rsummary51BM1")
        }
        else if (e.target.value === "DisabledAntiExploit") {
            myPo2ImgData[tab] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            addValue1("rsummary51BM1", rsummary51BM1)
        }
        else {
            setBmCounter(prevCount => prevCount - 1);
            myPo2ImgData[tab] = tab3;
            document.getElementById(idVal).src = tab3;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            // addValue1("rSummary51", rsummary51)
            addBmSummarySen()
        }
    };

    const exception51Fun1 = (e, idVal, tab) => {
        let a = "Yes";
        if (e.target.value === a) {
            myPo2ImgData[tab] = tab4;
            document.getElementById(idVal).src = tab4;
        } else {
            myPo2ImgData[tab] = tab1;
            document.getElementById(idVal).src = tab1;
        }
    }

    //Predictive Machine Learning
    const fiftytwoFunction1 = (e) => {
        let a = "Enabled";
        if (e.target.value === a) {
            myPo2ImgData.tab52 = tab1;
            document.getElementById("sep52Policy2").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            closeValue1('rSummary52')

        } else {
            myPo2ImgData.tab52 = tab3;
            document.getElementById("sep52Policy2").src = tab3;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            addValue1('rSummary52', rsummary52)
        }

    };

    //Suspicious Connection	
    const fiftythreeFunction1 = (e) => {
        let a = "Enabled";
        if (e.target.value === a) {
            myPo2ImgData.tab53 = tab1;
            document.getElementById("sep53Policy2").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()

        } else {
            myPo2ImgData.tab53 = tab3;
            document.getElementById("sep53Policy2").src = tab3;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            addValue1('rSummary53', rsummary53)
        }

    };

    //Web Reputation - idd
    const fiftyfourFunction1 = (e) => {

        let a = document.getElementById('56Policy2').value;
        let b = document.getElementById('58Policy2').value

        if (a === "Enabled") {
            setcheckPolicyOverviewES(--checkPolicyOverviewES);
            checkPolicyOverview();
            if (b === "Medium" || b === "High") {
                myPo2ImgData.tab54 = tab1;
                document.getElementById("sep54Policy2").src = tab1;
            } else {
                myPo2ImgData.tab54 = tab2;
                document.getElementById("sep54Policy2").src = tab2;
            }
            closeValue1("rSummary54")
        }
        else if (a === "Disabled") {
            myPo2ImgData.tab54 = tab3;
            document.getElementById("sep54Policy2").src = tab3;
            setcheckPolicyOverviewES(++checkPolicyOverviewES);
            checkPolicyOverview();
            addValue1('rSummary54', rsummary54)

        }
    };

    //Firewall
    const fiftyfiveFunction1 = (e) => {
        let a = "Enabled";
        if (e.target.value === a) {
            myPo2ImgData.tab55 = tab1;
            document.getElementById("sep55Policy2").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            closeValue1("rSummary55")
        } else {
            myPo2ImgData.tab55 = tab4;
            document.getElementById("sep55Policy2").src = tab4;
            addValue1('rSummary55', rsummary55)
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
        }
    };

    //Agent Self-Protection	
    const fiftysixFunction1 = (e) => {
        let a = "Enabled";

        if (e.target.value === a) {
            myPo2ImgData.tab56 = tab1;
            document.getElementById("sep56Policy2").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            closeValue1("rSummary56")
        } else {
            myPo2ImgData.tab56 = tab3;
            document.getElementById("sep56Policy2").src = tab3;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            addValue1('rSummary56', rsummary56)
        }

    };




    const vulnerabilityProtectionFun1 = (e) => {

        if (e.target.value === "Enabled") {
            myPo2ImgData.tabVP = tab1;
            document.getElementById("sepVPPolicy2").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            document.getElementById('showVpModesPolicy2').style.display = "inline"
            closeValue1("rSummaryVP")
        } else {
            myPo2ImgData.tabVP = tab3;
            document.getElementById("sepVPPolicy2").src = tab3;
            document.getElementById('showVpModesPolicy2').style.display = "none"
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            addValue1('rSummaryVP', rsummaryVP)
        }
    }

    const vulnerabilityProtectionModeFun1 = (e) => {

        if (e.target.value === "Inline") {
            myPo2ImgData.tabVP = tab1;
            document.getElementById("sepVPPolicy2").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            closeValue1("rSummaryVP")
        } else {
            myPo2ImgData.tabVP = tab2;
            document.getElementById("sepVPPolicy2").src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            addValue1('rSummaryVP', rsummaryVP1)
        }
    }

    const deviceControlFun1 = (e) => {
        if (e.target.value === "Enabled") {
            myPo2ImgData.tabDC = tab1;
            document.getElementById("sepDCPolicy2").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            closeValue1("rSummaryDC")
        } else {
            myPo2ImgData.tabDC = tab3;
            document.getElementById("sepDCPolicy2").src = tab3;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            addValue1('rSummaryDC', rsummaryDC)
        }
    }

    const applicationControlFun1 = (e) => {
        if (e.target.value === "Enabled") {
            myPo2ImgData.tabAC = tab1;
            document.getElementById("sepACPolicy2").src = tab1;
            setcheckPolicyOverviewES(--checkPolicyOverviewES)
            checkPolicyOverview()
            closeValue1("rSummaryAC")
        } else {
            myPo2ImgData.tabAC = tab2;
            document.getElementById("sepACPolicy2").src = tab2;
            setcheckPolicyOverviewES(++checkPolicyOverviewES)
            checkPolicyOverview()
            addValue1('rSummaryAC', rsummaryAC)
        }
    }



    return {
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
        vulnerabilityProtectionModeFun1,
        exception51Fun1,

    }
}

export default PolicyOverviewLogic1
