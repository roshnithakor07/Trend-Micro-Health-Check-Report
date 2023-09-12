import { useState } from 'react'
import ExcutiveSummery from './ExcutiveSummery'

function Po2Logic() {
    const {
        rsummary10, rsummary11, rsummary13, rsummary14, rsummary23, rsummary29,
        rsummary51, rsummary52, rsummary53, rsummary54, rsummary55, rsummary56,rsummary591, rsummary592, rsummary593, rsummary594, rsummary595,
        rsummaryVP, rsummaryDC, rsummaryAC
    } = ExcutiveSummery()
    let tab1 = "images/tab1.png";
    let tab2 = "images/tab2.png";
    
    let policyNameArr = ["Manual", "Real-Time", "Schedule"];

    
    let [trackValue2, setTrackValue2] = useState([[], [], [], []])
    let [summarySenPolicy2Arr, setSummarySenPolicy2Arr] = useState([]);
    let [reqSummarySenPolicy2Arr, setReqSummarySenPolicy2Arr] = useState([]);

    let [policyTwoName, setPolicyTwoName] = useState("")

    let [checkPolicyOverviewES1, setcheckPolicyOverviewES1] = useState(0);
    let [checkFileToScan1, setcheckFileToScan1] = useState(0);
    let [checkDetectExploitCode1, setdetectExploitCode1] = useState(0);
    let [checkVirusMalwareScanBootArea1, setVirusMalwareScanBootArea1] = useState(0);
    let [checkCpuUsage1, setCpuUsage] = useState(0);

    let [checkVirusScan1, setVirusScan1] = useState(0);
    let [checkSpywareScan1, setSpywareScan1] = useState(0);

    //for Action Settings
    let [checkBackUpFiles1, setBackUpFiles1] = useState(0);
    let [checkDamageCleanup1, setDamageCleanup1] = useState(0);
    let [checkRunCleanup1, setRunCleanup1] = useState(0);
    let [checkSpywareApexOneTerminates1, setSpywareApexOneTerminates1] = useState(0);

    let [nameOfPolicy2, setnameOfPolicy2] = useState([
        [], [], [], [],
        [], [], [], [], [],
        [], []
    ])

    let [policyActionArr1, setpolicyActionArr1] = useState([[], [], [], []])

    const handlePolicyOverviewName1 = (e) => { setPolicyTwoName(e.target.value) }

    const [myPo2ImgData, setReportImgData1] = useState({
        //po1
        tab8: tab1,
        tab9: tab1,
        tab10: tab1,
        tab11: tab1,
        tab12: tab1,
        tab13: tab1,
        tab14: tab1,
        tab15: tab1,

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
    const addValuePolicy21 = (label, description, linkTitle = "", link = "") => {
        console.log(label, description);
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
      
    const closeValuePolicy21 = (label) => {

        const existingIndex = reqSummarySenPolicy2Arr.findIndex((item) => item.label === label);
        if (existingIndex !== -1) {
            const link2 = [...reqSummarySenPolicy2Arr];
            const link = link2.filter((item) => item.label !== label);
            setReqSummarySenPolicy2Arr(link);
        }

    };
    
    const checkPolicyOverview1 = () => {
      const link = [...summarySenPolicy2Arr];

        if (checkPolicyOverviewES1 >= 1) {

            const eSummaryPolicyOverview1 = `${policyTwoName} Policy is not configured as per the Trend Micro best practice.`
            link[0] = eSummaryPolicyOverview1;

        } else {
          link.splice(0,1)
        }

        setSummarySenPolicy2Arr(link);
        
    }

    const checkServiceAvl1 = (policyNameNo, val) => {
        let index;
        index = nameOfPolicy2[val].indexOf(policyNameArr[policyNameNo])
        nameOfPolicy2[val].splice(index, 1)
    }

    //nameOfPolicy2 0
    const FileToScanFunction1 = (x, policyNameNo) => {
        if (x === undefined) { checkServiceAvl1(policyNameNo, 0) }
        else {
            if (nameOfPolicy2[0].includes(x)) { }
            else if (nameOfPolicy2[0].includes("")) { }
            else nameOfPolicy2[0].push(x)
        }

        if (checkFileToScan1 >= 1) {
            let a = `In ${nameOfPolicy2[0].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan & policy settings, ${rsummary11}`
            addValuePolicy21("rSummary11",a)
        }
        else {
            closeValuePolicy21("rSummary11")
        }

    }

    //nameOfPolicy2 1
    const detectExploitCodeFunction1 = (x, val) => {

        if (x === undefined) { checkServiceAvl1(val, 1) }
        else {
            if (nameOfPolicy2[1].includes(x)) { }
            else if (nameOfPolicy2[1].includes("")) { }
            else nameOfPolicy2[1].push(x)
        }

        if (checkDetectExploitCode1 >= 1) {
            const a = `In ${nameOfPolicy2[1].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan and policy settings, ${rsummary13}`
            addValuePolicy21("rSummary13", a)
        }
        else {
            closeValuePolicy21("rSummary13")
        }
        
    }

    //nameOfPolicy2 2
    const virusMalwareScanBootAreaFunction1 = (x, val) => {

        if (x === undefined) { checkServiceAvl1(val, 2) }
        else {
            if (nameOfPolicy2[2].includes(x)) { }
            else if (nameOfPolicy2[2].includes("")) { }
            else nameOfPolicy2[2].push(x)
        }

        if (checkVirusMalwareScanBootArea1 >= 1) {

            const a = `In ${nameOfPolicy2[2].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan and policy settings, ${rsummary14}`;
            addValuePolicy21("rSummary14", a)
        }
        else {
            
            closeValuePolicy21("rSummary14")
        }
        
    }

    //nameOfPolicy2 3
    //nameOfPolicy 3
    const cpuUsageFunction1 = (policyName, cpu, policyActionArr1No) => {

        let link = [...policyActionArr1];
        if (cpu === "Medium") {
            const link2 = [...reqSummarySenPolicy2Arr];
            const link = link2.filter((item) => item.label !== trackValue2[policyActionArr1No][0]);
            trackValue2[policyActionArr1No].shift();
            setReqSummarySenPolicy2Arr(link);
            return;

        }
        // 2 - high 3 - low
        let no = cpu === "High" ? 2 : 3;
        let checkAvl = cpu === "High" ? 3 : 2;
        if (policyActionArr1[checkAvl].includes(policyName)) {
            let index = link[checkAvl].indexOf(policyName)
            link[checkAvl].splice(index, 1)
        }
        if (policyActionArr1[no].includes(policyName)) {
        }
        else {
            if (policyName !== undefined) {
                link[no].push(policyName)
            }
        }
        setpolicyActionArr1(link)

        let a = `In ${policyActionArr1[2].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan and policy settings, CPU usage is set as High recommended to set as Medium for optimal performance.`;
        let b = `In ${policyActionArr1[3].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan and policy settings, CPU usage is set as Low recommended to set as Medium for optimal performance.`;

        let values = []

        if (policyActionArr1[2].length === 1 && policyActionArr1[3].length === 1) {
            values = [{ label: 'rSummary151', description: a }, { label: 'rSummary152', description: b }];
            if (!trackValue2[2].includes('rSummary151')) {
                trackValue2[2].push('rSummary151');
            }
            if (!trackValue2[3].includes('rSummary152')) {
                trackValue2[3].push('rSummary152');
            }
        } else if (policyActionArr1[2].length) {
            if (!trackValue2[2].includes('rSummary151')) { trackValue2[2].push('rSummary151') }
            trackValue2[3].shift()
            values = [{ label: 'rSummary151', description: a }];

            setReqSummarySenPolicy2Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary152'));
        } else if (policyActionArr1[3].length) {
            if (!trackValue2[3].includes('rSummary152')) { trackValue2[3].push('rSummary152') }
            trackValue2[2].shift();
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
    //nameOfPolicy2 4

    const actionSummeryFunction1 = (policyName, action) => {
        const link = [...policyActionArr1];
        let a, b;
        let no = action === "activeAction" ? 0 : 1;
        let checkAvl = action === "activeAction" ? 1 : 0;
        if (action !== undefined) {
            if (policyActionArr1[checkAvl].includes(policyName)) {
                let index = link[checkAvl].indexOf(policyName)
                link[checkAvl].splice(index, 1)
            }
            if (!policyActionArr1.includes(policyName)) {

                if (!(policyName === undefined))
                    link[no].push(policyName)
            }
            setpolicyActionArr1(link)
            a = `In ${policyActionArr1[0].join(', ').replace(/,([^,]*)$/, ' and$1')} Action Settings, active Action is selected, recommended to select Use a specific action for each virus/malware type.`;
            b = `In ${policyActionArr1[1].join(', ').replace(/,([^,]*)$/, ' and$1')} Action Settings, same Action for all malware-Virus types is selected, recommended to select Use a specific action for each virus/malware type.`
        } else {

            if (policyActionArr1[0].includes(policyName)) {
                link[0].splice(link[0].indexOf(policyName), 1);
            } else {
                link[1].splice(link[1].indexOf(policyName), 1);
            }
            setpolicyActionArr1(link)
            a = `In ${policyActionArr1[0].join(', ').replace(/,([^,]*)$/, ' and$1')} Action Settings, active Action is selected, recommended to select Use a specific action for each virus/malware type.`;
            b = `In ${policyActionArr1[1].join(', ').replace(/,([^,]*)$/, ' and$1')} Action Settings, same Action for all malware-Virus types is selected, recommended to select Use a specific action for each virus/malware type.`
        }

        if (policyActionArr1[0].length > 0) {
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

        if (policyActionArr1[1].length > 0) {
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

    // nameOfPolicy2 5
    const backUpFilesFunction1 = (x, val) => {
        if (x === undefined) { checkServiceAvl1(val, 5) }
        else {
            if (nameOfPolicy2[5].includes(x)) { }
            else if (nameOfPolicy2[5].includes("")) { }
            else nameOfPolicy2[5].push(x)
        }

        if (checkBackUpFiles1 >= 1) {
            const a = `In ${nameOfPolicy2[5].join(', ').replace(/,([^,]*)$/, ' and$1')} Action Settings, back up files before cleaning is disabled, recommended to enable it.`;
            addValuePolicy21("rSummary17",a)
        }
        else {
            
            closeValuePolicy21("rSummary17")
        }

    }

    // nameOfPolicy2 6
    const damageCleanupFunction1 = (x, val) => {
        if (x === undefined) { checkServiceAvl1(val, 6) }
        else {
            if (nameOfPolicy2[6].includes(x)) { }
            else if (nameOfPolicy2[6].includes("")) { }
            else nameOfPolicy2[6].push(x)
        }

        if (checkDamageCleanup1 >= 1) {
            const a = `In ${nameOfPolicy2[6].join(', ').replace(/,([^,]*)$/, ' and$1')} Action Settings, Damage Cleanup Services enabled with standard clean up, recommended to enable with advance clean up as The Security Agent uses advanced cleanup rules to proactively detect and stop applications that exhibit Fake AV and rootkit behavior.`;
            addValuePolicy21("rSummary18", a)
        }
        else {
         
            closeValuePolicy21("rSummary18")
        }
        
    }

    // nameOfPolicy2 7
    const runCleanupFunction1 = (x, val) => {

        if (x === undefined) { checkServiceAvl1(val, 7) }
        else {
            if (nameOfPolicy2[7].includes(x)) { }
            else if (nameOfPolicy2[7].includes("")) { }
            else nameOfPolicy2[7].push(x)
        }

        if (checkRunCleanup1 >= 1) {
            const a = `In ${nameOfPolicy2[7].join(', ').replace(/,([^,]*)$/, ' and$1')} Action Settings, run cleanup when probable virus/malware is detected' is disabled, recommended to enable it as probable viruses/malware are suspicious files that have some of the characteristics of viruses/malware.`;
            addValuePolicy21("rSummary19", a)
        }
        else {
        
            closeValuePolicy21("rSummary19")
        }
        
    }

    // nameOfPolicy2 8
    const spywareApexOneTerminatesFunction1 = (x, val) => {

        if (x === undefined) { checkServiceAvl1(val, 8) }
        else {
            if (nameOfPolicy2[8].includes(x)) { }
            else if (nameOfPolicy2[8].includes("")) { }
            else nameOfPolicy2[8].push(x)
        }

        if (checkSpywareApexOneTerminates1 >= 1) {
            const a = `In ${nameOfPolicy2[8].join(', ').replace(/,([^,]*)$/, ' and$1')} Action Settings, in Spyware/Grayware settings Clean: Apex One terminates processes are not enabled, recommended to enable it.`;
            addValuePolicy21("rSummary20", a)
        }
        else {
           
            closeValuePolicy21("rSummary20")
        }
       
    }

    // nameOfPolicy2 9
    const virusScanFunction1 = (x, val) => {
        if (x === undefined) { checkServiceAvl1(val, 9) }
        else {
            if (nameOfPolicy2[9].includes(x)) { }
            else if (nameOfPolicy2[9].includes("")) { }
            else nameOfPolicy2[9].push(x)
        }

        if (checkVirusScan1 >= 1) {
            const a = `In ${nameOfPolicy2[9].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan and policy settings, Virus/Malware Scan is disabled, recommended to enable it`;
            addValuePolicy21("rSummary21",a)
        }
        else {
            
            closeValuePolicy21("rSummary21")
        }
       
    }

    // nameOfPolicy2 10
    const spywareScanFunction1 = (x, val) => {
        if (x === undefined) { checkServiceAvl1(val, 10) }
        else {
            if (nameOfPolicy2[10].includes(x)) { }
            else if (nameOfPolicy2[10].includes("")) { }
            else nameOfPolicy2[10].push(x)
        }

        if (checkSpywareScan1 >= 1) {
            const a = `In ${nameOfPolicy2[10].join(', ').replace(/,([^,]*)$/, ' and$1')} Scan and policy settings, Spyware/Grayware Scan is disabled, recommended to enable it.`;
            addValuePolicy21("rSummary22", a)
        }
        else {
            
            closeValuePolicy21("rSummary22")
        }
       
    }

    //Smart scan - 10
    const eightFunction1 = (e) => {
        let a = "Smart Scan";
        if (e.target.value === a) {
            myPo2ImgData.tab8 = tab1;
            document.getElementById("sep8Policy2").src = tab1;
            closeValuePolicy21("rSummary10")
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()

        } else {
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
            myPo2ImgData.tab8 = tab2;
            document.getElementById("sep8Policy2").src = tab2;
            addValuePolicy21("rSummary10", rsummary10)
        }
        
    };

    //Files to Scan > All Scanable files - 11
    const nineFunction1 = (e, idVal, img, PolicyNameNo) => {
        
        if (e.target.value === "All Scannable files") {
            document.getElementById(idVal).src = tab1;
            myPo2ImgData[img] = tab1;
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()
            setcheckFileToScan1(--checkFileToScan1)
            FileToScanFunction1(undefined, PolicyNameNo)

        } else {

            myPo2ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
            setcheckFileToScan1(++checkFileToScan1)
            FileToScanFunction1(policyNameArr[PolicyNameNo], PolicyNameNo)

        }

    };


    //Scan Hidden Folders- 12 - Enable/Disable function
    const tenFunction1 = (e, idVal, reqId, img, rS, rsummery) => {

        if (e.target.value === "Enabled") {
            myPo2ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            closeValuePolicy21(rS)
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()
        } else {
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
            document.getElementById(idVal).src = tab2;
            myPo2ImgData[img] = tab2;
            addValuePolicy21(rS, rsummery)
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
            setdetectExploitCode1(--checkDetectExploitCode1)
            detectExploitCodeFunction1(undefined, no);
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()

        } else {
            myPo2ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setdetectExploitCode1(++checkDetectExploitCode1)
            detectExploitCodeFunction1(policyNameArr[no], no);
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()

        }
    };

    //Virus/Malware Scan Settings Only > Scan boot area - 14
    const fourteenFunction1 = (e, idVal, img, no) => {
        if (e.target.value === "Enabled") {
            myPo2ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setVirusMalwareScanBootArea1(--checkVirusMalwareScanBootArea1)
            virusMalwareScanBootAreaFunction1(undefined, no);
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()

        } else {
            myPo2ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setVirusMalwareScanBootArea1(++checkVirusMalwareScanBootArea1)
            virusMalwareScanBootAreaFunction1(policyNameArr[no], no);
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()

        }
    };

    //CPU Usage > Medium - 15

    const fifteenFunction1 = (e, idVal, img, no, policyActionArrNo) => {

        if (e.target.value === "Medium") {
            myPo2ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()
            setCpuUsage(--checkCpuUsage1)
            cpuUsageFunction1(undefined, e.target.value, policyActionArrNo);

        } else {
            myPo2ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
            setCpuUsage(++checkCpuUsage1)
            cpuUsageFunction1(policyNameArr[no], e.target.value, policyActionArrNo);

        }
    };

    // MCA :  16 - 20


    //Use a specific action for each virus/malware type: 16
    const sixteenFunction1 = (e, idVal, img, no, r1, r2) => {
        let radio1 = document.getElementById(r1);
        let radio2 = document.getElementById(r2);
        let action = (radio1.checked) ? "activeAction" : "sameaction";

        if (radio1.checked === true || radio2.checked === true) {

            document.getElementById(idVal).src = tab2;
            myPo2ImgData[img] = tab2;
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()

            actionSummeryFunction1(policyNameArr[no], action);

        } else {
            document.getElementById(idVal).src = tab1;
            myPo2ImgData[img] = tab1;
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()
            actionSummeryFunction1(policyNameArr[no], undefined);

        }
    };

    // Back up files before cleaning 17
    const seventeenFunction1 = (e, idVal, img, no) => {

        if (e.target.value === "Enabled") {
            myPo2ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()
            setBackUpFiles1(--checkBackUpFiles1)
            backUpFilesFunction1(undefined, no);

        } else {
            myPo2ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
            setBackUpFiles1(++checkBackUpFiles1)
            backUpFilesFunction1(policyNameArr[no], no);
        }
    };

    //Damage Cleanup Services with Advanced clean up 18

    const eighteenFunction1 = (e, idVal, img, no, r1, r2) => {


        var select = document.getElementById(r1);
        var select1 = document.getElementById(r2);
        var value = select.options[select.selectedIndex].value;
        var value1 = select1.options[select1.selectedIndex].value;

    
        if (value === "Enabled" && value1 === "Advanced clean-up") {
            myPo2ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()
            setDamageCleanup1(--checkDamageCleanup1)
            damageCleanupFunction1(undefined, no);

        } else {

            myPo2ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
            setDamageCleanup1(++checkDamageCleanup1)
            damageCleanupFunction1(policyNameArr[no], no);
        }
    };

    // Run cleanup when Probable virus/malware is detectedn 19
    const nineteenFunction1 = (e, idVal, img, no) => {

        if (e.target.value === "Enabled") {
            myPo2ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()
            setRunCleanup1(--checkRunCleanup1)
            runCleanupFunction1(undefined, no);


        } else {
            myPo2ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
            setRunCleanup1(++checkRunCleanup1)
            runCleanupFunction1(policyNameArr[no], no);

        }
    };

    //Apex One terminates Processes 20

    const twentyFunction1 = (e, idVal, img, no) => {

        let a = "Clean";
        if (e.target.value === a) {
            myPo2ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()
            setSpywareApexOneTerminates1(--checkSpywareApexOneTerminates1)
            spywareApexOneTerminatesFunction1(undefined, no);


        } else {
            myPo2ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
            setSpywareApexOneTerminates1(++checkSpywareApexOneTerminates1)
            spywareApexOneTerminatesFunction1(policyNameArr[no], no);

        }
    };


    //Real-Time Scan Policy Settings - 21 -32

    // Virus/Malware Scan - 21
    const twentyoneFunction1 = (e, idVal, img, no) => {

        if (e.target.value === "Enabled") {
            myPo2ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()
            setVirusScan1(--checkVirusScan1)
            virusScanFunction1(undefined, no);

        } else {
            myPo2ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
            setVirusScan1(++checkVirusScan1)
            virusScanFunction1(policyNameArr[no], no);
        }
    };

    //spyware/Grayware scan - 22
    const twentytwoFunction1 = (e, idVal, img, no) => {

        if (e.target.value === "Enabled") {
            myPo2ImgData[img] = tab1;
            document.getElementById(idVal).src = tab1;
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()
            setSpywareScan1(--checkSpywareScan1)
            spywareScanFunction1(undefined, no);

        } else {
            myPo2ImgData[img] = tab2;
            document.getElementById(idVal).src = tab2;
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
            setSpywareScan1(++checkSpywareScan1)
            spywareScanFunction1(policyNameArr[no], no);

        }
    };

    //User Activity on Files - 23 
    const twentythreeFunction1 = (e) => {
        if (e.target.value === "created/modified and retrieved") {
            myPo2ImgData.tab23 = tab1;
            document.getElementById("sep23Policy2").src = tab1;
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1();
            closeValuePolicy21("rSummary23")
        } else {
            myPo2ImgData.tab23 = tab2;
            document.getElementById("sep23Policy2").src = tab2;
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
            addValuePolicy21("rSummary23", rsummary23)
            
        }
     
    };

    //Configure Schedule Scan to run at least once a week. - 29
    const thirtynineFunction1 = (e) => {
        //let radio10 = document.getElementById("radio10Policy2");
        let radio11 = document.getElementById("radio11Policy2");

        if (radio11.checked === true) {
            myPo2ImgData.tab39 = tab1;
            document.getElementById("sep39Policy2").src = tab1;
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()
            closeValuePolicy21("rSummary29")

        } else {
            myPo2ImgData.tab39 = tab2;
            document.getElementById("sep39Policy2").src = tab2;
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
            addValuePolicy21("rSummary29", rsummary29)

        }
    
    };


    //BM - 51 - 59

    //Behavior Monitoring
    const fiftyoneFunction1 = (e) => {
        let a = "Enabled with";
        if (e.target.value === a) {
            myPo2ImgData.tab51 = tab1;
            document.getElementById("sep51Policy2").src = tab1;
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()
            closeValuePolicy21("rSummary51")

        } else {
            myPo2ImgData.tab51 = "images/tab3.png";
            document.getElementById("sep51Policy2").src = "images/tab3.png";
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
            addValuePolicy21("rSummary51", rsummary51)
        }
        
    };

    //Predictive Machine Learning
    const fiftytwoFunction1 = (e) => {
        let a = "Enabled";
        if (e.target.value === a) {
            myPo2ImgData.tab52 = tab1;
            document.getElementById("sep52Policy2").src = tab1;
            myPo2ImgData.rSummary52 = ""
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()
            closeValuePolicy21('rSummary52')

        } else {
            myPo2ImgData.tab52 = "images/tab3.png";
            document.getElementById("sep52Policy2").src = "images/tab3.png";
            myPo2ImgData.rSummary52 = rsummary52;
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
            addValuePolicy21('rSummary52', myPo2ImgData.rSummary52)
        }
     
    };

    //Suspicious Connection	
    const fiftythreeFunction1 = (e) => {
        let a = "Enabled";
        if (e.target.value === a) {
            myPo2ImgData.tab53 = tab1;
            document.getElementById("sep53Policy2").src = tab1;
            myPo2ImgData.rSummary53 = ""
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()

        } else {
            myPo2ImgData.tab53 = "images/tab3.png";
            document.getElementById("sep53Policy2").src = "images/tab3.png";
            myPo2ImgData.rSummary53 = rsummary53;
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
            addValuePolicy21('rSummary53', myPo2ImgData.rSummary53)
        }
      
    };

    //Web Reputation
    const fiftyfourFunction1 = (e) => {

        let a = document.getElementById('56Policy2').value;
        let b = document.getElementById('58Policy2').value

        if (a === "Enabled") {
            if (b === "Medium" || b === "High") {
                myPo2ImgData.tab54 = tab1;
                document.getElementById("sep54Policy2").src = tab1;
                myPo2ImgData.rSummary54 = ""
                setcheckPolicyOverviewES1(--checkPolicyOverviewES1);
                checkPolicyOverview1();
                closeValuePolicy21("rSummary54")
            } else {
                myPo2ImgData.tab54 = tab2;
                document.getElementById("sep54Policy2").src = tab2;
                myPo2ImgData.rSummary54 = ""
                setcheckPolicyOverviewES1(++checkPolicyOverviewES1);
                checkPolicyOverview1();
                closeValuePolicy21("rSummary54")
            }

        }
        else if (a === "Disabled") {
            myPo2ImgData.tab54 = "images/tab3.png";
            document.getElementById("sep54Policy2").src = "images/tab3.png";
            myPo2ImgData.rSummary54 = rsummary54;
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1);
            checkPolicyOverview1();
            addValuePolicy21('rSummary54', myPo2ImgData.rSummary54)

        }
      
    };

    //Firewall
    const fiftyfiveFunction1 = (e) => {
        let a = "Enabled";
        if (e.target.value === a) {
            myPo2ImgData.tab55 = tab1;
            document.getElementById("sep55Policy2").src = tab1;
            myPo2ImgData.rSummary55 = ""
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()
            closeValuePolicy21("rSummary55")
        } else {
            myPo2ImgData.tab55 = tab2;
            document.getElementById("sep55Policy2").src = tab2;
            myPo2ImgData.rSummary55 = rsummary55;
            addValuePolicy21('rSummary55', myPo2ImgData.rSummary55)
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
        }
      
    };

    //Agent Self-Protection	
    const fiftysixFunction1 = (e) => {
        let a = "Enabled";

        if (e.target.value === a) {
            myPo2ImgData.tab56 = tab1;
            document.getElementById("sep56Policy2").src = tab1;
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()
            myPo2ImgData.rSummary56 = ""
            closeValuePolicy21("rSummary56")
        } else {
            myPo2ImgData.tab56 = "images/tab3.png";
            document.getElementById("sep56Policy2").src = "images/tab3.png";
            myPo2ImgData.rSummary56 = rsummary56;
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
            addValuePolicy21('rSummary56', myPo2ImgData.rSummary56)
        }
       
    };


    //Additional Service
    const fiftynineFunction1 = (e) => {
        var select = document.getElementById("63Policy2");
        var value = select.options[select.selectedIndex].value;
        var select1 = document.getElementById("64Policy2");
        var value1 = select1.options[select1.selectedIndex].value;
        var select2 = document.getElementById("65Policy2");
        var value2 = select2.options[select2.selectedIndex].value;
        var select3 = document.getElementById("66Policy2");
        var value3 = select3.options[select3.selectedIndex].value;
        var select4 = document.getElementById("67Policy2");
        var value4 = select4.options[select4.selectedIndex].value;
        var select5 = document.getElementById("68Policy2");
        var value5 = select5.options[select5.selectedIndex].value;
        var select6 = document.getElementById("69Policy2");
        var value6 = select6.options[select6.selectedIndex].value;
        var select7 = document.getElementById("70Policy2");
        var value7 = select7.options[select7.selectedIndex].value;
        var select8 = document.getElementById("71Policy2");
        var value8 = select8.options[select8.selectedIndex].value;
        var select9 = document.getElementById("72Policy2");
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

            const existingIndex = reqSummarySenPolicy2Arr.findIndex(item => item.label === label);
            console.log(existingIndex)
            if (existingIndex !== -1) {
                reqSummarySenPolicy2Arr[existingIndex].description = des;
            } else {

                setReqSummarySenPolicy2Arr(prevArr => [...prevArr, { label: label, description: des }]);
            }

        }

        if (value === "Disabled" || value1 === "Disabled") {
            addValues('rSummary591', rsummary591)
        } else {
            setReqSummarySenPolicy2Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary591'));
        }

        if (value2 === "Disabled" || value3 === "Disabled") {
            addValues('rSummary592', rsummary592)
        } else { setReqSummarySenPolicy2Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary592')); }

        if (value4 === "Disabled" || value5 === "Disabled") {
            addValues('rSummary593', rsummary593)

        } else { setReqSummarySenPolicy2Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary593')); }
        if (value6 === "Disabled" || value7 === "Disabled") {
            addValues('rSummary594', rsummary594)

        } else { setReqSummarySenPolicy2Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary594')); }
        if (value8 === "Disabled" || value9 === "Disabled") {
            addValues('rSummary595', rsummary595)
        } else { setReqSummarySenPolicy2Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary595')); }

        if (con) {

            myPo2ImgData.tab59 = tab1;
            document.getElementById("sep59").src = tab1;
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()

        } else if (con1) {
            myPo2ImgData.tab59 = "images/tab3.png";
            document.getElementById("sep59").src = "images/tab3.png";
            addValues('rSummary596', `Additional Service is not configured, recommended to configure it.`)
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1();
            setReqSummarySenPolicy2Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary591'));
            setReqSummarySenPolicy2Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary592'));
            setReqSummarySenPolicy2Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary593'));
            setReqSummarySenPolicy2Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary594'));
            setReqSummarySenPolicy2Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary595'));

        } else {
            myPo2ImgData.tab59 = tab2;
            document.getElementById("sep59").src = tab2;
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
            setReqSummarySenPolicy2Arr(prevValues => prevValues.filter(value => value.label !== 'rSummary596'));

        }

    }

    const vulnerabilityProtectionFun1 = (e) => {

        if (e.target.value === "Enabled") {
            myPo2ImgData.tabVP = tab1;
            document.getElementById("sepPolicy2VP").src = tab1;
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()
            myPo2ImgData.rSummaryVP = ""
            closeValuePolicy21("rSummaryVP")
        } else {
            myPo2ImgData.tabVP = "images/tab3.png";
            document.getElementById("sepPolicy2VP").src = "images/tab3.png";
            myPo2ImgData.rSummaryVP = rsummaryVP;
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
            addValuePolicy21('rSummaryVP', myPo2ImgData.rSummaryVP)
        }
    }

    const deviceControlFun1 = (e) => {
        if (e.target.value === "Enabled") {
            myPo2ImgData.tabDC = tab1;
            document.getElementById("sepPolicy2DC").src = tab1;
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()
            myPo2ImgData.rSummaryDC = ""
            closeValuePolicy21("rSummaryDC")
        } else {
            myPo2ImgData.tabDC = "images/tab3.png";
            document.getElementById("sepPolicy2DC").src = "images/tab3.png";
            myPo2ImgData.rSummaryDC = rsummaryDC;
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
            addValuePolicy21('rSummaryDC', myPo2ImgData.rSummaryDC)
        }
    }

    const applicationControlFun1 = (e) => {
        if (e.target.value === "Enabled") {
            myPo2ImgData.tabAC = tab1;
            document.getElementById("sepPolicy2AC").src = tab1;
            setcheckPolicyOverviewES1(--checkPolicyOverviewES1)
            checkPolicyOverview1()
            myPo2ImgData.rSummaryAC = ""
            closeValuePolicy21("rSummaryAC")
        } else {
            myPo2ImgData.tabAC = "images/tab3.png";
            document.getElementById("sepPolicy2AC").src = "images/tab3.png";
            myPo2ImgData.rSummaryAC = rsummaryAC;
            setcheckPolicyOverviewES1(++checkPolicyOverviewES1)
            checkPolicyOverview1()
            addValuePolicy21('rSummaryAC', myPo2ImgData.rSummaryAC)
        }
    }

    return {
        summarySenPolicy2Arr, setSummarySenPolicy2Arr,
        reqSummarySenPolicy2Arr, setReqSummarySenPolicy2Arr,
        handlePolicyOverviewName1, policyTwoName,
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
        fiftynineFunction1,
        vulnerabilityProtectionFun1,
        deviceControlFun1,
        applicationControlFun1,
    }
}

export default Po2Logic

