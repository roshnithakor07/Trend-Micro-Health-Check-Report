import React, { useState } from "react";

export default function Introduction({
  myData: {
    reportTypeName,
    showComponent,
    cName,
    handleChange,
    handleType,
    loadFile,
    myReportData,
    getCompanyName,
  }
}) {
  const contentStyle = {
    color: "blue",
    textDecoration: "none",
  };

  const titleOFReport = `Review of ${cName} Apex One ${reportTypeName} Implementation`


  return (
    <>
      {/* start intro1 */}
      <div className="intro1">
        <div className="title">
          <h1 id="title">Trend Micro Health Check Endpoint Security</h1>

          <select
          
            name="report_type"
            defaultValue={"On-Premises"}
            id="Endpoints"
            onChange={(e) => {
              handleChange(e);
              handleType(e);
            }}
          >
            <option>---Choose Report---</option>
            <option value="On-Premises">Premises</option>
            <option value="SAAS">Saas</option>
          </select>
        </div>
        <div className="cLogo">
          <input
            type="file"
            accept="image/*"
            name="image"
            id="file"
            onChange={loadFile}
            required
          />
          <br />
          <label htmlFor="file" id="fileName">
            <b>Company Logo</b>
          </label>
          <br /> <br />
          <img id="output" width="120" alt="" /> <br />
        </div>

        <div className="cName">
          <input
            type="text"
            name="cName"
            id="lname"
            placeholder="Enter a Company Name"
            onChange={(e) => {
              handleChange(e);
              getCompanyName(e);
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
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr id="con0">
                <td id="con0">Version Release Date: </td>
                <td id="con0">
                  <input
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
                    type="text"
                    name="documentVersion"
                    id="documentVersion"
                    onChange={handleChange}
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
                    defaultValue={myReportData.vd}
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
                    value={titleOFReport}
                    readOnly
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
                  <input type="date" name="vd1" onChange={handleChange} />
                </td>
                <td>
                  <input
                    type="text"
                    id="vivo"
                    name="initialdraft"
                    onChange={handleChange}
                  />
                </td>
                <td>Initial Draft</td>
              </tr>
              <tr>
                <td>1.1</td>
                <td>
                  <input type="date" name="vd2" onChange={handleChange} />
                </td>
                <td>
                  <input
                    type="text"
                    id="vivo"
                    name="finalreport"
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
                    1 Introduction
                  </a>
                </dt>
              </h3>
              <dd>
                <a href={"#head1"} style={contentStyle}>
                  1.1 Health Check Attendees
                </a>
              </dd>

              <h3>
                <dt>
                  {" "}
                  <a href={"#head2"} style={contentStyle}>
                    2 Executive Summary
                  </a>
                </dt>
              </h3>
              <h3>
                {" "}
                <dt>
                  <a href="#productArchitecture" style={contentStyle}>
                    3 Product Architecture
                  </a>
                </dt>
              </h3>
              <h3>
                {" "}
                <dt>
                  <a href="#head3" style={contentStyle}>
                    4 Apex One & Apex Central
                  </a>
                </dt>
              </h3>

              <dd>
                {" "}
                <a href={"#head4"} style={contentStyle}>
                  4.1 Apex One Configuration Overview
                </a>
              </dd>
              {showComponent ? (
                <>
                  <dd>
                    {" "}
                    <a href={"#head5"} style={contentStyle}>
                      4.2.1 Policy Overview
                    </a>
                  </dd>

                  <dd>
                    <a href={"#head55"} style={contentStyle}>
                      4.2.2 Policy Overview{" "}
                    </a>
                  </dd>
                </>
              ) : (
                <dd>
                  {" "}
                  <a href={"#head5"} style={contentStyle}>
                    4.2 Policy Overview
                  </a>
                </dd>
              )}

              <dd>
                {" "}
                <a href={"#head6"} style={contentStyle}>
                  4.3 Apex Central Configuration Overview
                </a>
              </dd>
              <dd>
                {" "}
                <a href={"#head71"} style={contentStyle}>
                  4.4 Recommendations
                </a>
              </dd>

              <h3>
                <dt>
                  <a href={"#head7"} style={contentStyle}>
                    5 Apex One Product Efficacy{" "}
                  </a>
                </dt>
              </h3>
              <dd>
                <a href={"#head8"} style={contentStyle}>
                  5.1 Agent Distribution
                </a>
              </dd>
              <dd>
                <a href={"#head9"} style={contentStyle}>
                  5.2 Virus/Malware
                </a>
              </dd>
              <dd>
                <a href={"#head10"} style={contentStyle}>
                  5.3 Spyware/ Grayware{" "}
                </a>
              </dd>
              <dd>
                <a href={"#head11"} style={contentStyle}>
                  5.4 Behavior Monitoring{" "}
                </a>{" "}
              </dd>
              <dd>
                <a href={"#head12"} style={contentStyle}>
                  5.5 Device control Detection{" "}
                </a>
              </dd>
              <dd>
                <a href={"#head13"} style={contentStyle}>
                  5.6 Intrusion Prevention{" "}
                </a>
              </dd>
              <dd>
                <a href={"#head14"} style={contentStyle}>
                  5.7 Smart Scan Agent Pattern Coverage Details{" "}
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
            1 Introduction
          </h2>
          <div className="container2" id="container2">
            <p>
              All best practice statements in this document are formed from base
              principles with the products, and many years of experience within
              Trend Micro, however all recommendations herein should be
              validated as being acceptable to meet business, regulation, and
              security requirements of <strong>{cName}</strong> to have a
              successful outcome. <br />
              <br />
              This document provides best practice recommendations in comparison
              to the published Best Practice product guides from Trend Micro to
              the configuration at <strong>{cName}</strong>
              .Trend Micro recommends that <strong>{cName}</strong> evaluate
              each recommended setting to verify it is suitable within their
              environment. <br />
              <br />
              This document follows an established “Red, Amber, Green”
              methodology for highlighting gaps in best practices. <br />
              <br />
            </p>
          </div>

          <div className="container3">
            <table id="documentV" className="table" >
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
                    <img src="images/tab1.png" alt="" />
                  </td>
                </tr>
                <tr>
                  <td>Concern</td>
                  <td>
                    Concern It May have security and/or operational impact on
                    the organization
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <img src="images/tab2.png" alt="" />
                  </td>
                </tr>
                <tr>
                  <td>Critical</td>
                  <td>
                    Likely to have high security and/or operational impact on
                    the organization
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <img src="images/tab3.png" alt="" />
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
              external mitigating feature that <strong>{cName}</strong> may have
              in place and context as if <strong>{cName}</strong> did not have
              any mitigation of any description. <br />
              <br />
              Configuration is subject to the requirements of each organization.
              Trend Micro acknowledges that deviations from published Best
              Practices are within the scope of <strong>{cName}</strong> by
              their specific environment and are subject to internal security
              requirements. Also, Trend Micro Best Practice recommendation is
              subject to change at any time. <br />
            </p>
          </div>

          <div className="container5" id="head1">
            <h2 style={{ color: "red" }} className="report-heading2">
              1.1 Health Check Attendees
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
                      defaultValue={"Remotely"}
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
    </>
  );
}
