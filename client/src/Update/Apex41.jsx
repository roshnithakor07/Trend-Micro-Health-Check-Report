import React from "react";
import moment from "moment";

export default function Apex41({
    productArchitecture,
    myData: {
        myReportData,
        loadFilePA,
        handleChange,
        visible,
        handleMemory,
        zeroFunction,
        oneFunction,
        twoFunction,
        threeFunction,
        fourFunction,
        fiveFunction,
        superman,
        handleVersions,
        sixFunction,
        sevenFunction,
    }
    
}) {




    return (
        <>
            {/* apexon41 start */}

            <div id="productArchitecture">
                <h2 style={{ color: "red" }} className="report-heading2">
                    4 Product Architecture
                </h2>

                <div className="cLogoPA">
                    <input
                        type="file"
                        accept="image/*"
                        name="image"
                        id="filePA"
                        onChange={loadFilePA}
                        required
                    />
                    <br />
                    <label htmlFor="filePA" id="fileNamePA">
                        <b>Select Product Architecture</b>
                    </label>
                    <br /> <br />
                    <img src={productArchitecture} id="outputPA" alt="" /> <br />
                </div>

            </div>

            {myReportData.map((element) => (
                <div className="apexOne41" id="apexone41" key={element._id}>
                    <div className="container9" id="head3">
                        <h2 style={{ color: "red" }} className="report-heading2">
                            5 Apex One & Apex Central
                        </h2>

                        {visible ? (
                            <div className="container10">
                                <p>
                                    Trend Micro Apex One protects enterprise networks from malware,
                                    network viruses, web-based threats, spyware, and mixed threat
                                    attacks. Apex One Server consists of Apex One agent program that
                                    resides at the endpoint OS and a server OS. The Apex One
                                    Security agent guards the endpoint and reports its security
                                    status to the server. Through the web-based management console,
                                    the Apex One server makes it easy to set coordinated security
                                    policies and deploy updates to every agent.
                                    <br />
                                    <br />
                                    Apex one On-Premises provisioned <strong>{element.companyName}</strong> to
                                    manage a total of{" "}
                                    <input
                                        type="number"
                                        name="total_service"
                                        defaultValue={element.total_service}
                                        onChange={handleChange}
                                    />{" "}
                                    clients.
                                </p>
                            </div>
                        ) : (
                            <div className="container10">
                                <p>
                                    Trend Micro Apex One protects enterprise networks from malware,
                                    network viruses, web-based threats, spyware, and mixed threat
                                    attacks. Apex One Server consists of Apex One agent program that
                                    resides at the endpoint OS and a server OS. The Apex One
                                    Security agent guards the endpoint and reports its security
                                    status to the server. Through the web-based management console,
                                    the Apex One server makes it easy to set coordinated security
                                    policies and deploy updates to every agent. <br />
                                    <br />
                                    Trend Micro Apex Central™ is a web-based console that provides
                                    centralized management for Trend Micro products and services at
                                    the gateway, mail server, file server, and corporate desktop
                                    levels. Administrators can use the policy management feature to
                                    configure and deploy product settings to managed products and
                                    endpoints. The Apex Central web-based management console
                                    provides a single monitoring point for antivirus and content
                                    security products and services throughout the network. <br />
                                    <br />
                                    Apex one SaaS provisioned <strong>{element.companyName}</strong> to manage a
                                    total of{" "}
                                    <input
                                        type="number"
                                        name="total_service"
                                        defaultValue={element.total_service}
                                        onChange={handleChange}
                                    />{" "}
                                    clients.
                                </p>
                            </div>
                        )}
                    </div>
                    <br />
                    <div className="container11" id="head4">
                        <h2 style={{ color: "red" }} className="report-heading2">
                            5.1 Apex One Configuration overview
                        </h2>
                        <table className="con5 table1" id="documentV">
                            <thead className="con5">
                                <tr className="one con5">
                                    <th className="con5">Component</th>
                                    <th className="con5">Trend Recommended</th>
                                    <th className="con5">Deployed</th>
                                    <th className="con5">Status</th>
                                </tr>
                            </thead>
                            <tbody id="table1">
                                <tr className="con5">
                                    <td id="lk" className="con5" colSpan="2">
                                        Apex one Administration Configuration Health-Overview
                                    </td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                {/* start here */}

                                {visible && (
                                    <>
                                        <tr className="con5" id="hea">
                                            <td className="con5">System Health-Overview</td>
                                            <td className="con5">Minimum Requirements</td>
                                            <td className="con5"></td>
                                            <td className="con5"></td>
                                        </tr>
                                        <tr className="con5" id="hea1">
                                            <td className="con5">Memory</td>
                                            <td className="con5">
                                                <input
                                                    type="text"
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                        handleMemory(e);
                                                    }}
                                                    defaultValue={element.memory1}
                                                    id="memory1"
                                                    name="memory1"
                                                    style={{
                                                        width: "50px",
                                                        height: "20px",
                                                        textAlign: "center",
                                                    }}
                                                />{" "}
                                                GB (This would depend on the number of agents customer
                                                deployed. Please refer sizing guide)
                                            </td>
                                            <td className="con5">
                                                <input
                                                    type="text"
                                                    name="memory2"
                                                    id="memory2"
                                                    defaultValue={element.memory2}
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                        handleMemory(e);
                                                    }}
                                                />
                                            </td>
                                            <td className="con5" style={{ textAlign: "center" }}>
                                                <img src={element.apexmemory} id="sep8880" alt="" />
                                            </td>
                                        </tr>
                                        <tr className="con5" id="hea2">
                                            <td className="con5">Operating System</td>
                                            <td className="con5">Supported OS</td>
                                            <td className="con5">
                                                <select
                                                    id="server1"
                                                    name="sos1"
                                                    defaultValue={element.sos1}
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                    }}
                                                >
                                                    <option value="Windows Server 2019">
                                                        Windows Server 2019
                                                    </option>
                                                    <option value="Windows Server 2016">
                                                        Windows Server 2016
                                                    </option>
                                                    <option value="Windows Server 2012 R2">
                                                        Windows Server 2012 R2
                                                    </option>
                                                    <option value="Windows Server 2012">
                                                        Windows Server 2012
                                                    </option>
                                                    <option value="Windows Server 2008 R2">
                                                        Windows Server 2008 R2
                                                    </option>
                                                    <option value="Windows Server 2008">
                                                        Windows Server 2008
                                                    </option>
                                                </select>
                                            </td>
                                            <td
                                                className="con5"
                                                id="sep888"
                                                style={{ textAlign: "center" }}
                                            >
                                                <img src={element.apeximgsos} id="img" alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>CPU</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    id="cpu1"
                                                    defaultValue={element.cpu1}
                                                    name="cpu1"
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                    }}
                                                />
                                                {" cores"}
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    id="cpu2"
                                                    defaultValue={element.cpu2}
                                                    onChange={(e) => {

                                                        handleChange(e);
                                                    }}
                                                    name="cpu2"
                                                />
                                                {" cores"}
                                            </td>
                                            <td style={{ textAlign: "center" }}>
                                                <img src="images/tab1.png" id="apex1Cpu" alt="" />
                                            </td>
                                        </tr>

                                        <tr className="con5" id="hea3">
                                            <td className="con5">Hostname / IP</td>
                                            <td className="con5"></td>
                                            <td className="con5">
                                                <input type="text" name="ip1" defaultValue={element.ip1} onChange={handleChange} />
                                            </td>
                                            <td className="con5" style={{ textAlign: "center" }}>
                                                <img src="images/tab1.png" id="im" alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Apex One Build Version</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    id="version1"
                                                    name="version1"
                                                    defaultValue={element.version1}
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                        handleVersions(e);
                                                    }}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    id="version2"
                                                    defaultValue={element.version2}
                                                    onChange={(e) => {
                                                        handleVersions(e);
                                                        handleChange(e);
                                                    }}
                                                    name="version2"
                                                />
                                            </td>
                                            <td style={{ textAlign: "center" }}>
                                                <img src={element.apeximgversions} id="apex1sep60" alt="" />
                                            </td>
                                        </tr>

                                        <tr className="con5">
                                            <td className="con5">Patterns Update Status </td>
                                            <td className="con5">Up to Date </td>
                                            <td className="con5" id="uptodate">
                                                Up to Date:-{" "}
                                                <input
                                                    type="number"
                                                    id="patterns_update_status_uptodate"
                                                    name="patterns_update_status_uptodate"
                                                    style={{ width: "25%" }}
                                                    defaultValue={element.patterns_update_status_uptodate}
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                        superman(e);
                                                    }}
                                                />
                                                Outdated:-{" "}
                                                <input
                                                    type="number"
                                                    id="outdated"
                                                    name="outdated"
                                                    style={{ width: "25%" }}
                                                    defaultValue={element.outdated}
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                        superman(e);
                                                    }}
                                                />
                                            </td>
                                            <td className="con5" style={{ textAlign: "center" }}>
                                                <img src={element.apeximgsuperman} id="super" alt="" />
                                            </td>
                                        </tr>

                                        <tr className="con5">
                                            <td className="con5">Agent Management tree</td>
                                            <td className="con5">AD / Custom / NetBIOS grouping</td>
                                            <td className="con5">
                                                <div>
                                                    <select
                                                        name="agent_management_tree"
                                                        defaultValue={element.agent_management_tree}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="AD">AD</option>
                                                        <option value="Custom">Custom</option>
                                                        <option value="NetBIOS grouping">
                                                            NetBIOS grouping
                                                        </option>
                                                    </select>
                                                </div>
                                            </td>
                                            <td className="con5" style={{ textAlign: "center" }}>
                                                <img src="images/tab1.png" id="im" alt="" />
                                            </td>
                                        </tr>
                                    </>
                                )}
                                {/* end here */}

                                <tr className="con5">
                                    <td className="con5">License</td>
                                    <td className="con5">Within Term</td>
                                    <td className="con5">
                                        <input
                                            type="date"
                                            id="0"
                                            name="license_date1"

                                            defaultValue={moment(element.license_date1).format("YYYY-MM-DD")}
                                            onChange={(e) => {
                                                zeroFunction(e);
                                                handleChange(e);
                                            }}
                                        />
                                    </td>
                                    <td className="con5" style={{ textAlign: "center" }}>
                                        <img src={element.apeximglicense_date} alt="" id="sep0" />
                                    </td>
                                </tr>

                                <tr className="con5">
                                    <td className="con5">Deployed Agents</td>
                                    <td className="con5">
                                        Total Purchased Licensed Seat is:{" "}
                                        <input
                                            type="number"
                                            id="1"
                                            name="total_purchased_licensed"
                                            defaultValue={element.total_purchased_licensed}
                                            onChange={(e) => {
                                                oneFunction(e);
                                                handleChange(e);
                                            }}
                                        />
                                    </td>
                                    <td className="con5">
                                        <input
                                            type="number"
                                            id="2"
                                            name="total_deployed_licensed"
                                            defaultValue={element.total_deployed_licensed}
                                            onChange={(e) => {
                                                oneFunction(e);
                                                handleChange(e);
                                            }}
                                        />
                                    </td>
                                    <td className="con5" style={{ textAlign: "center" }}>
                                        <img src={element.apeximgDeployed_Agents} id="sep1" alt="" />
                                    </td>
                                </tr>
                                <tr className="con5">
                                    <td className="con5">Certified Safe Software Service</td>
                                    <td className="con5">Enable Certified Safe Software Service</td>
                                    <td className="con5">
                                        <div>
                                            <select
                                                id="3"
                                                name="certified_safe_software_service"
                                                defaultValue={element.certified_safe_software_service}
                                                onChange={(e) => {
                                                    twoFunction(e);
                                                    handleChange(e);
                                                }}
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td className="con5" style={{ textAlign: "center" }}>
                                        <img src={element.apeximgCertified_Safe_Software_Service} id="sep2" alt="" />
                                    </td>
                                </tr>

                                <tr className="con5">
                                    <td className="con5">Apex Central Integration</td>
                                    <td className="con5">Register Apex One to Apex Central</td>
                                    <td className="con5">
                                        <div>
                                            <select
                                                id="4"
                                                name="apex_central_integration"
                                                defaultValue={element.apex_central_integration}
                                                onChange={(e) => {
                                                    threeFunction(e);
                                                    handleChange(e);
                                                }}
                                            >
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td className="con5" style={{ textAlign: "center" }}>
                                        <img src={element.apeximgapex_central_integration} id="sep3" alt="" />
                                    </td>
                                </tr>
                                <tr className="con5">
                                    <td className="con5" rowSpan="2">
                                        Global Agents Settings
                                    </td>
                                    <td className="con5">
                                        Enable Clean/Delete Infected Files within Compressed Files
                                    </td>
                                    <td className="con5">
                                        <div>
                                            <select
                                                id="5"
                                                name="global_agents_settings1"
                                                defaultValue={element.global_agents_settings1}
                                                onChange={(e) => {
                                                    fourFunction(e);
                                                    handleChange(e);
                                                }}
                                            >
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td className="con5" style={{ textAlign: "center" }}>
                                        <img src={element.apeximgglobal_agents_settings1} id="sep4" alt="" />
                                    </td>
                                </tr>
                                <tr className="con5">
                                    <td className="con5">
                                        Enable resume schedule scan options under Global Agent
                                        settings
                                    </td>
                                    <td className="con5">
                                        <div>
                                            Resume an Interrupted Scheduled Scan-{" "}
                                            <select
                                                id="global_agents_settings2"
                                                name="global_agents_settings2"
                                                defaultValue={element.global_agents_settings2}
                                                onChange={(e) => {
                                                    fiveFunction(e);
                                                    handleChange(e);
                                                }}
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>{" "}
                                            & Resume a missed Scheduled Scan Same time next day-{" "}
                                            <select
                                                id="global_agents_settings3"
                                                name="global_agents_settings3"
                                                defaultValue={element.global_agents_settings3}
                                                onChange={(e) => {
                                                    fiveFunction(e);
                                                    handleChange(e);
                                                }}
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td className="con5" style={{ textAlign: "center" }}>
                                        <img src={element.apeximgglobal_agents_settings2} id="sep5" alt="" />
                                    </td>
                                </tr>

                                <tr className="con5">
                                    <td className="con5">Agent scheduled updates</td>
                                    <td className="con5">Enabled</td>
                                    <td className="con5">
                                        <div id="AgentSU">
                                            <select
                                                id="7"
                                                name="agent_scheduled_updates"
                                                defaultValue={element.agent_scheduled_updates}
                                                onChange={(e) => {
                                                    sixFunction(e);
                                                    handleChange(e);
                                                }}
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>
                                            {"- "}{" "}
                                            <span id="time">
                                                <select
                                                    id="agent_scheduled_updates_option"
                                                    name="agent_scheduled_updates_option"
                                                    defaultValue={element.agent_scheduled_updates_option}
                                                    onChange={(e) => {
                                                        sixFunction(e);
                                                        handleChange(e);
                                                    }}
                                                >
                                                    <option value="Daily">Daily</option>
                                                    <option value="Weekly">Weekly</option>
                                                    <option value="Monthly">Monthly</option>
                                                </select>
                                                <input
                                                    type="time"
                                                    name="agent_scheduled_updates_daily"
                                                    defaultValue={element.agent_scheduled_updates_daily}
                                                    onChange={handleChange}
                                                />{" "}
                                                Time Period-{" "}
                                                <input
                                                    style={{ width: "15%" }}
                                                    type="text"
                                                    name="timePeriod"
                                                    id="pwd"
                                                    defaultValue={element.timePeriod}
                                                    onChange={handleChange}
                                                />
                                            </span>
                                        </div>
                                    </td>
                                    <td className="con5" style={{ textAlign: "center" }}>
                                        <img src={element.apeximgagent_scheduled_updates} id="sep6" alt="" />
                                    </td>
                                </tr>
                                <tr className="con5">
                                    <td className="con5">Smart Portection Server</td>
                                    <td className="con5">
                                        Integrated/Standalone SPS Server/Global SPS
                                    </td>
                                    <td className="con5">
                                        <div>
                                            <select
                                                name="smart_portection_server"
                                                onChange={handleChange}
                                                defaultValue={element.smart_portection_server}
                                            >
                                                <option value="Integrated SPS">Integrated SPS</option>
                                                <option value="Standalone SPS Server">
                                                    Standalone SPS Server
                                                </option>
                                                <option value="Global SPS">Global SPS</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td className="con5" style={{ textAlign: "center" }}>
                                        <img src="images/tab1.png" id="im" alt="" />
                                    </td>
                                </tr>
                                <tr className="con5">
                                    <td className="con5">Notification </td>
                                    <td className="con5">Enabled</td>
                                    <td className="con5">
                                        <div>
                                            <select
                                                id="8"
                                                name="notification"
                                                defaultValue={element.notification}
                                                onChange={(e) => {
                                                    sevenFunction(e);
                                                    handleChange(e);
                                                }}
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td className="con5" style={{ textAlign: "center" }}>
                                        <img src={element.apeximgnotification} id="sep7" alt="" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            ))}
            {/* apexon41 end */}
        </>
    );
}