import React from 'react'
import moment from "moment";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { green, teal } from "@mui/material/colors";
import Endpoints from '../API/Endpoints';
import UpdateReportLogic from '../UpdateLogic/UpdateReportLogic'
import UpdateExecutiveSummery from './ExecutiveSummery';
import Apex41 from './Apex41';
import Apex43 from './Apex43';
import useApexOneLogic41 from "../UpdateLogic/Apex41Logic";
import useApexOneLogic43 from "../UpdateLogic/Apex43Logic";

const save = green[900];
const save1 = teal[500];
export default function UpdateReport() {
    const showComponent = false;
    const { updateDocumentData, myReportData, visible, handleType, loadFile, loadFilePA, handleChange, handleUpdateReport } = UpdateReportLogic()

    const contentStyle = {
        color: "blue",
        textDecoration: "none",
    };

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


    let apex41Imgs = [
        "apexmemory",
        "apeximgsos",
        "apeximglicense_date",
        "apeximgversions",
        "apeximgDeployed_Agents",
        "apeximgCertified_Safe_Software_Service",
        "apeximgapex_central_integration",
        "apeximgglobal_agents_settings1",
        "apeximgglobal_agents_settings2",
        "apeximgglobal_agents_settings3",
        "apeximgsuperman",
        "apeximgagent_scheduled_updates",
        "apeximgnotification",
    ];

    let apex43Imgs = [
        "apex43memory",
        "apex43sos",
        "tab60",
        "tab6060",
        "tab61",
        "tab62",
        "tab63",
        "tab64",
        "tab65",
        "tab66",
        "tab67",
    ];

    for (const i of apex41Imgs) {
        updateDocumentData[i] = myApex41ImgData[i];
    }


    for (const i of apex43Imgs) {
        updateDocumentData[i] = myApex43ImgData[i];
    }




    return (
        <>

            <div className="MainDiv" >
                {/* start intro1 */}
                <div className="intro1">
                    <div className="title">
                        <h1 id="title">Trend Micro Health Check Endpoint Security</h1>

                        <select
                            value={updateDocumentData.report_type || ""}
                            name="report_type"
                            id="Endpoints"
                            onChange={(e) => {
                                handleChange(e);
                                handleType(e)
                            }}
                        >
                            <option>---Choose Report---</option>
                            <option value="SAAS">Saas</option>
                            <option value="On-Premises">Premises</option>
                        </select>
                    </div>
                    <div className="cLogo">
                        <input

                            type="file"
                            accept="image/*"
                            name="image"
                            id="file"
                            onChange={loadFile}
                        />
                        <br />
                        <label htmlFor="file" id="fileName">
                            <b>Company Logo</b>
                        </label>
                        <br /> <br />
                        <img id="output" src={updateDocumentData.cLogo} width="120" alt="" /> <br />
                    </div>

                    <div className="cName">
                        <input
                            type="text"
                            name="cName"
                            id="lname"
                            value={updateDocumentData.cName || ""}
                            placeholder="Enter a Company Name"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </div>

                    <div id="container">
                        <table id="con0" className="con0">
                            <tbody id="con0">
                                <tr id="con0">
                                    <td id="con0">Document Version: </td>
                                    <td id="con0">
                                        <input
                                            type="text"
                                            name="dv"
                                            id="dv"
                                            value={updateDocumentData.dv || ""}
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr id="con0">
                                    <td id="con0">Version Release Date: </td>
                                    <td id="con0">
                                        <input
                                            value={moment(updateDocumentData.vd).format("YYYY-MM-DD")}
                                            type="date"
                                            name="vd"
                                            id="vrd"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr id="con0">
                                    <td id="con0">Prepared By </td>
                                    <td id="con0">
                                        <input
                                            type="text"
                                            name="pb"
                                            value={updateDocumentData.pb || ""}
                                            id="pb"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr id="con0">
                                    <td id="con0">Approved By </td>
                                    <td id="con0">
                                        <input
                                            type="text"
                                            name="ab"
                                            value={updateDocumentData.ab || ""}
                                            id="ab"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr id="con0">
                                    <td id="con0">Trend Micro India Pvt Ltd</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="documentVersion">
                        <h5 className="report-heading2">
                            <b>Document Information</b>
                        </h5>
                        <table id="documentV" className="table">
                            <tbody>
                                <tr>
                                    <td className="dvr" id="dvr">
                                        <b>Document Version</b>
                                    </td>
                                    <td className="dvr">
                                        <input
                                            value={updateDocumentData.documentVersion || ""}
                                            type="text"
                                            name="documentVersion"
                                            id="documentVersion"
                                            onChange={(e) => { handleChange(e) }}
                                        />
                                    </td>
                                    <td className="dvr">
                                        <b>Version Date</b>
                                    </td>
                                    <td className="dvr">
                                        <input
                                            type="date"
                                            name="versionDate"
                                            id="versionDate"
                                            value={moment(updateDocumentData.vd).format("YYYY-MM-DD")}
                                            readOnly
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="dvr">
                                        <b>Title</b>
                                    </td>
                                    <td colSpan="3" className="dvr">
                                        <input
                                            type="text"
                                            id="vivo"
                                            name="title"
                                            value={updateDocumentData.title | ""}
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <br />
                    <br />
                </div>

                {/* end intro1 */}

                {/* start intro2  */}

                <div id="intro2">
                    <div id="versionaHistory">
                        <h5 className="report-heading2">
                            <b>Version History</b>
                        </h5>
                        <table id="documentV" className="table">
                            <tbody>
                                <tr>
                                    <td>
                                        <b>#</b>
                                    </td>
                                    <td>
                                        <b>Version Date</b>
                                    </td>
                                    <td>
                                        <b>Revised by</b>
                                    </td>
                                    <td>
                                        <b>Description</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1.0</td>
                                    <td>
                                        <input type="date" name="vd1" value={moment(updateDocumentData.vd1).format("YYYY-MM-DD") || ""} onChange={handleChange} />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="vivo"
                                            name="initialdraft"
                                            value={updateDocumentData.initialdraft || ""}
                                            onChange={handleChange}
                                        />
                                    </td>
                                    <td>Initial Draft</td>
                                </tr>
                                <tr>
                                    <td>1.1</td>
                                    <td>
                                        <input type="date" name="vd2" value={moment(updateDocumentData.vd2).format("YYYY-MM-DD") || ""} onChange={handleChange} />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="vivo"
                                            name="finalreport"
                                            value={updateDocumentData.finalreport || ""}
                                            onChange={handleChange}
                                        />
                                    </td>
                                    <td>Final Report</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="content" id="content">
                        <h2 id="indexcss">Content</h2>
                        <div className="contentValue" id="contentValue">
                            <dl id="dl">
                                <h3>
                                    <dt>
                                        {" "}
                                        <a href={"#head0"} style={contentStyle}>
                                            2 Introduction
                                        </a>
                                    </dt>
                                </h3>
                                <dd>
                                    <a href={"#head1"} style={contentStyle}>
                                        2.1 Health Check Attendees
                                    </a>
                                </dd>

                                <h3>
                                    <dt>
                                        {" "}
                                        <a href={"#head2"} style={contentStyle}>
                                            3 Executive Summary
                                        </a>
                                    </dt>
                                </h3>
                                <h3>
                                    {" "}
                                    <dt>
                                        <a href="#productArchitecture" style={contentStyle}>
                                            4 Product Architecture
                                        </a>
                                    </dt>
                                </h3>
                                <h3>
                                    {" "}
                                    <dt>
                                        <a href="#head3" style={contentStyle}>
                                            5 Apex One & Apex Central
                                        </a>
                                    </dt>
                                </h3>

                                <dd>
                                    {" "}
                                    <a href={"#head4"} style={contentStyle}>
                                        5.1 Apex One Configuration Overview
                                    </a>
                                </dd>
                                {showComponent ? (
                                    <>
                                        <dd>
                                            {" "}
                                            <a href={"#head5"} style={contentStyle}>
                                                5.2.1 Policy Overview
                                            </a>
                                        </dd>

                                        <dd>
                                            <a href={"#head55"} style={contentStyle}>
                                                5.2.2 Policy Overview{" "}
                                            </a>
                                        </dd>
                                    </>
                                ) : (
                                    <dd>
                                        {" "}
                                        <a href={"#head5"} style={contentStyle}>
                                            5.2 Policy Overview
                                        </a>
                                    </dd>
                                )}

                                <dd>
                                    {" "}
                                    <a href={"#head6"} style={contentStyle}>
                                        5.3 Apex Central Configuration Overview
                                    </a>
                                </dd>
                                <dd>
                                    {" "}
                                    <a href={"#head71"} style={contentStyle}>
                                        5.4 Recommendations
                                    </a>
                                </dd>

                                <h3>
                                    <dt>
                                        <a href={"#head7"} style={contentStyle}>
                                            6 Apex One Product Efficacy{" "}
                                        </a>
                                    </dt>
                                </h3>
                                <dd>
                                    <a href={"#head8"} style={contentStyle}>
                                        6.1 Agent Distribution
                                    </a>
                                </dd>
                                <dd>
                                    <a href={"#head9"} style={contentStyle}>
                                        6.2 Virus/Malware
                                    </a>
                                </dd>
                                <dd>
                                    <a href={"#head10"} style={contentStyle}>
                                        6.3 Spyware/ Grayware{" "}
                                    </a>
                                </dd>
                                <dd>
                                    <a href={"#head11"} style={contentStyle}>
                                        6.4 Behavior Monitoring{" "}
                                    </a>{" "}
                                </dd>
                                <dd>
                                    <a href={"#head12"} style={contentStyle}>
                                        6.5 Device control Detection{" "}
                                    </a>
                                </dd>
                                <dd>
                                    <a href={"#head13"} style={contentStyle}>
                                        6.6 Intrusion Prevention{" "}
                                    </a>
                                </dd>
                                <dd>
                                    <a href={"#head14"} style={contentStyle}>
                                        6.7 Smart Scan Agent Pattern Coverage Details{" "}
                                    </a>
                                </dd>
                            </dl>
                        </div>
                    </div>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>

                {/* end intro2  */}

                {/* start intro3 */}
                <div id="intro3" className="intro3">
                    <div className="Introduction" id="head0">
                        <h2 style={{ color: "red" }} className="report-heading2">
                            2 Introduction
                        </h2>
                        <div className="container2" id="container2">
                            <p>
                                All best practice statements in this document are formed from
                                base principles with the products, and many years of experience
                                within Trend Micro, however all recommendations herein should be
                                validated as being acceptable to meet business, regulation, and
                                security requirements of <strong>{updateDocumentData.cName}</strong> to have a
                                successful outcome. <br />
                                <br />
                                This document provides best practice recommendations in
                                comparison to the published Best Practice product guides from
                                Trend Micro to the configuration at <strong>{updateDocumentData.cName}</strong>
                                .Trend Micro recommends that <strong>{updateDocumentData.cName}</strong> evaluate
                                each recommended setting to verify it is suitable within their
                                environment. <br />
                                <br />
                                This document follows an established “Red, Amber, Green”
                                methodology for highlighting gaps in best practices. <br />
                                <br />
                            </p>
                        </div>

                        <div className="container3">
                            <table id="documentV" className="table">
                                <thead>
                                    <tr className="table" style={{ textAlign: "center" }}>
                                        <th>Status</th>
                                        <th>Description</th>
                                        <th>Key</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Good</td>
                                        <td>
                                            Meets Trend Micro Minimum Requirements / Best Practice
                                            recommendations
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                            <img src="/images/tab1.png" alt="" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Concern</td>
                                        <td>
                                            Concern It May have security and/or operational impact on
                                            the organization
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                            <img src="/images/tab2.png" alt="" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Critical</td>
                                        <td>
                                            Likely to have high security and/or operational impact on
                                            the organization
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                            <img src="/images/tab3.png" alt="" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Info</td>
                                        <td>
                                            Tips and Recommendations
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                            <img src="/images/tab4.png" alt="" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="container4">
                            <p>
                                <b>Note:</b> Status items are in context to the configuration of
                                the Trend Micro product only and do not consider any other
                                external mitigating feature that <strong>{updateDocumentData.cName}</strong> may
                                have in place and context as if <strong>{updateDocumentData.cName}</strong> did not
                                have any mitigation of any description. <br />
                                <br />
                                Configuration is subject to the requirements of each
                                organization. Trend Micro acknowledges that deviations from
                                published Best Practices are within the scope of{" "}
                                <strong>{updateDocumentData.cName}</strong> by their specific environment and are
                                subject to internal security requirements. Also, Trend Micro
                                Best Practice recommendation is subject to change at any time.{" "}
                                <br />
                            </p>
                        </div>

                        <div className="container5" id="head1">
                            <h2 style={{ color: "red" }} className="report-heading2">
                                2.1 Health Check Attendees
                            </h2>
                            <table id="documentV" className="table">
                                <tbody>
                                    <tr>
                                        <td>Location</td>
                                        <td>
                                            <input
                                                type="text"
                                                id="vivo"
                                                name="location"
                                                value={updateDocumentData.location || ''}
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Customer Attendance</td>
                                        <td>
                                            <input
                                                type="text"
                                                id="vivo"
                                                name="customerAttendance"
                                                value={updateDocumentData.customerAttendance || ""}
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Trend Micro Attendance</td>
                                        <td>
                                            <input
                                                type="text"
                                                id="vivo"
                                                name="trendMicroAttendance"
                                                value={updateDocumentData.trendMicroAttendance || ""}
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* ends intro3 */}


                <Apex41
                    productArchitecture={updateDocumentData.productArchitecture}
                    myData={{
                        updateDocumentData,
                        visible,
                        loadFilePA,
                        handleChange,
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
                    }}
                />


                <Apex43 myData={{
                    updateDocumentData,
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




                <div id="nexPreBtn">

                    <Button variant="contained" style={{ backgroundColor: save1 }}>
                        <Link
                            onClick={(e) => { handleUpdateReport(e); }}
                            to=""
                            className="button is-primary mt-2">
                            Generate PDF
                        </Link>
                    </Button>

                </div>

            </div>


        </>
    )
}
