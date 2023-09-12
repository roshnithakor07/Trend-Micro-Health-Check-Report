import React, { useState, useEffect } from "react";

import Papa from "papaparse";

function ChartLogic() {
    let cTitle = "Virus/Malware";
    let vm = ["Virus/Malware", "Endpoint", "Action"];
    const [chartFirstLine, setChartFirstLine] = useState()
    const [total_detection, setTotalDetections] = useState(0)
    //let line = `We generated a ${cTitle} Event of the last ${props.logDays} ${props.logDuration} on ${props.logCollectionDate} from Apex central/Apex One. There was a total of ${total_detection} detections.`

    const [dataPoints, setDataPoints] = useState([])
    const [columnsNames, setCoulmnsName] = useState(vm[0]);
    const [lable, setLableData] = useState([])
    const [data, setData] = useState([])

    const [x, setX] = useState([]);
    const [y1, setY1] = useState([]);
    const [myChart, setMyChart] = useState([])
    const [chartType, setChartType] = useState("bar")
    const description = [[], []];
    const [chartTypes, setChartTypes] = useState(['', '', '',])


    const form = (event) => {
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


    let actionArr = []
    let endpointName = [];
    let scanNameArr = [];

    let totalScanTypes = [];
    let totalActions = [];
    let totalEndpoints = [];

    if (actionArr.length === 0 || endpointName.length === 0 || scanNameArr.length === 0) {
        for (let i = 0; i < dataPoints.length; i++) {
            const { Action, Endpoint, "Scan Type": ScanType } = dataPoints[i];
            actionArr.push(Action);
            endpointName.push(Endpoint);
            scanNameArr.push(ScanType);
        }
    }


    const load = (e) => {
        if (e.target.value === "select") return;
        setCoulmnsName(e.target.value);

        const count = {};
        const top10Data = [];
        let sum = 0;


        for (const d of dataPoints) {
            const value = d[e.target.value];
            if (value !== "N/A" && value != "") {
                count[value] = (count[value] || 0) + 1;
            }

        }

        for (const val of Object.values(count)) {
            sum += val
        }

        setTotalDetections(sum)

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

    const makeDesSentences = () => {
        const arr = dataPoints.map((d) => d[columnsNames]);

        const desObject = {};
        x.slice(0, 2).forEach((xVal, i) => {
            desObject[xVal] = y1[i];
        });


        const desArry = Object.keys(desObject).map((key) => {
            return arr.reduce((acc, el, i) => {
                if (el === key) {
                    acc.push(i);
                }
                return acc;
            }, []);
        });


        for (const indices of desArry) {
            totalEndpoints.push(...indices.map(k => endpointName[k]), "-");
            totalActions.push(...indices.map(k => actionArr[k]), "-");
            totalScanTypes.push(...indices.map(k => scanNameArr[k]), "-");
        }

        totalEndpoints.pop();
        totalActions.pop();
        totalScanTypes.pop();

        const separatorIndex = totalEndpoints.indexOf('-');
        const endPoint0 = totalEndpoints.slice(0, separatorIndex).filter((endpoint, index, self) => self.indexOf(endpoint) === index);
        const endPoint1 = totalEndpoints.slice(separatorIndex + 1).filter((endpoint, index, self) => self.indexOf(endpoint) === index);


        const separatorIndex1 = totalActions.indexOf('-');
        const actionPoint0 = totalActions.slice(0, separatorIndex1).filter((endpoint, index, self) => self.indexOf(endpoint) === index);
        const actionPoint1 = totalActions.slice(separatorIndex1 + 1).filter((endpoint, index, self) => self.indexOf(endpoint) === index);

        const separatorIndex2 = totalScanTypes.indexOf('-');
        const scanTypePoint0 = totalScanTypes.slice(0, separatorIndex2).filter((endpoint, index, self) => self.indexOf(endpoint) === index);
        const scanTypePoint1 = totalScanTypes.slice(separatorIndex2 + 1).filter((endpoint, index, self) => self.indexOf(endpoint) === index);

        const frequencyMap0 = new Map();
        const frequencyMap1 = new Map();

        const frequencyMap2 = new Map();
        const frequencyMap3 = new Map();

        const frequencyMap4 = new Map();
        const frequencyMap5 = new Map();

        for (const element of endPoint0) {
            const count = frequencyMap0.get(element) || 0;
            frequencyMap0.set(element, count + 1);
        }

        for (const element of endPoint1) {
            const count = frequencyMap1.get(element) || 0;
            frequencyMap1.set(element, count + 1);
        }

        for (const element of actionPoint0) {
            const count = frequencyMap2.get(element) || 0;
            frequencyMap2.set(element, count + 1);
        }

        for (const element of actionPoint1) {
            const count = frequencyMap3.get(element) || 0;
            frequencyMap3.set(element, count + 1);
        }

        for (const element of scanTypePoint0) {
            const count = frequencyMap4.get(element) || 0;
            frequencyMap4.set(element, count + 1);
        }

        for (const element of scanTypePoint1) {
            const count = frequencyMap5.get(element) || 0;
            frequencyMap5.set(element, count + 1);
        }


        function getTop5Keys(frequencyMap) {
            const sortedEntries = [...frequencyMap.entries()].sort((a, b) => b[1] - a[1]);
            const top5Keys = sortedEntries.slice(0, 5).map(([key]) => key);
            return top5Keys;
        }


        //Endpoint
        const top5Keys0 = getTop5Keys(frequencyMap0);
        const top5Keys1 = getTop5Keys(frequencyMap1);

        //Action
        const top5Keys2 = getTop5Keys(frequencyMap2);
        const top5Keys3 = getTop5Keys(frequencyMap3);

        //Scan
        const top5Keys4 = getTop5Keys(frequencyMap4);
        const top5Keys5 = getTop5Keys(frequencyMap5);


        let actionVal0, actionVal1, endPointVal0, endPointVal1, scanVal0, scanVal1;


        if (top5Keys0.length > 1) {
            endPointVal0 = top5Keys0.slice(0, -1).join(", ") + " and " + top5Keys0[top5Keys0.length - 1] + " endpoints";
        } else {
            endPointVal0 = top5Keys0[0] + " endpoint";
        }

        if (top5Keys1.length > 1) {
            endPointVal1 = top5Keys1.slice(0, -1).join(", ") + " and " + top5Keys1[top5Keys1.length - 1] + " endpoints";
        } else {
            endPointVal1 = top5Keys1[0] + " endpoint";
        }


        if (top5Keys2.length > 1) {
            actionVal0 = "files were " + top5Keys2.slice(0, -1).join(", ") + " and " + top5Keys2[top5Keys2.length - 1];
        } else {
            actionVal0 = "file was " + top5Keys2[0];
        }

        if (top5Keys3.length > 1) {
            actionVal1 = "files were " + top5Keys3.slice(0, -1).join(", ") + " and " + top5Keys3[top5Keys3.length - 1];
        } else {
            actionVal1 = "file was " + top5Keys3[0];
        }


        if (columnsNames === vm[0]) {
            description[0][0] = `${x[0]} ${cTitle} was detected ${y1[0]} times on ${endPointVal0} during ${top5Keys4.join(', ').replace(/,([^,]*)$/, ' and$1')} and the ${actionVal0} by Apex one.`;
            description[0][1] = `${x[1]} ${cTitle} was detected ${y1[1]} times on ${endPointVal1} during ${top5Keys5.join(', ').replace(/,([^,]*)$/, ' and$1')} and the ${actionVal1} by Apex one.`;
        } else if (columnsNames === vm[1]) {
            description[1][0] = `${y1[0]} times ${cTitle} was detected on ${x[0]} endpoint and ${actionVal0} by Apex one.`;
            description[1][1] = `${y1[1]} times ${cTitle} was detected on ${x[1]} endpoint and ${actionVal1} by Apex one.`;
        }

    }

    switch (columnsNames) {
        case vm[0]:
            makeDesSentences()
            break;


        case vm[1]:
            makeDesSentences()
            break;

        default:
            break;
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
        <a href="#" key={e}>
            <input type="checkbox" name="messageCheckbox0" defaultChecked={e} defaultValue={e} onChange={handleCheckboxChange} />
            {e}
        </a>
    ));

    const handleSubmit = () => { }


    return { form, csvColumnNameOptions, load, dropdownOptions, columnsNames, setChartType, handleSubmit }
}

export default ChartLogic
