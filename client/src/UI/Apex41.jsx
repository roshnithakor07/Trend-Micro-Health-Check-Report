import React from "react";

export default function Apex41({
  myData: {
    visible,
    loadFilePA,
    handleChange,
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

  }
}) {
  return (
    <>
      {/* apexon41 start */}

      <div id="productArchitecture">
        <h2 style={{ color: "red" }} className="report-heading2">
          3 Product Architecture
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
          <img id="outputPA" alt="" /> <br />
        </div>

      </div>

      <div className="apexOne41" id="apexone41">
        <div className="container9" id="head3">
          <h2 style={{ color: "red" }} className="report-heading2">
            4 Apex One & Apex Central
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
                Apex one SaaS provisioned <strong>{cName}</strong> to manage a
                total of{" "}
                <input
                  type="number"
                  name="total_service"
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
            4.1 Apex One Configuration overview
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
                        type="number"
                        onChange={(e) => {
                          handleChange(e);
                          handleMemory(e);
                        }}
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
                        type="number"
                        name="memory2"
                        id="memory2"
                        onChange={(e) => {
                          handleChange(e);
                          handleMemory(e);
                        }}
                      />
                    </td>
                    <td className="con5" style={{ textAlign: "center" }}>
                      <img src="images/tab1.png" id="sep8880" alt="" />
                    </td>
                  </tr>
                  <tr className="con5" id="hea2">
                    <td className="con5">Operating System</td>
                    <td className="con5">Supported OS</td>
                    <td className="con5">
                      <select
                        id="server1"
                        name="sos1"
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
                      <img src="images/tab1.png" id="img" alt="" />
                    </td>
                  </tr>

                  <tr>
                    <td>CPU</td>
                    <td>
                      <input
                        type="number"
                        id="cpu1"
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
                      <input type="text" name="ip1" onChange={handleChange} />
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
                        onChange={(e) => {
                          handleVersions(e);
                          handleChange(e);
                        }}
                        name="version2"
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <img src="images/tab1.png" id="apex1sep60" alt="" />
                    </td>
                  </tr>

                  <tr className="con5">
                    <td className="con5">Agent Management tree</td>
                    <td className="con5">AD / Custom / NetBIOS grouping</td>
                    <td className="con5">
                      <div>
                        <select
                          name="agent_management_tree"
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
                    onChange={(e) => {
                      zeroFunction(e);
                      handleChange(e);
                    }}
                  />
                </td>
                <td className="con5" style={{ textAlign: "center" }}>
                  <img src="images/tab1.png" alt="" id="sep0" />
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
                    onChange={(e) => {
                      oneFunction(e);
                      handleChange(e);
                    }}
                  />
                </td>
                <td className="con5" style={{ textAlign: "center" }}>
                  <img src="images/tab1.png" id="sep1" alt="" />
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
                  <img src="images/tab1.png" id="sep2" alt="" />
                </td>
              </tr>

              <tr className="con5">
                <td className="con5" rowSpan={2}>Apex Central Integration</td>
                <td className="con5">Register Apex One to Apex Central</td>
                <td className="con5">
                  <div>
                    <select
                      id="4"
                      name="apex_central_integration"
                      onChange={(e) => {
                        threeFunction(e, 1);
                        handleChange(e);
                      }}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </td>
                <td className="con5" style={{ textAlign: "center" }}>
                  <img src="images/tab1.png" id="sep3" alt="" />
                </td>
              </tr>

              <tr className="con5">
                <td className="con5">Yes - Apex Central certificate</td>
                <td className="con5">
                  <div>
                    <select
                      id="4"
                      name="apex_central_integration1"
                      onChange={(e) => {
                        threeFunction(e, 2);
                        handleChange(e);
                      }}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </td>
                <td className="con5" style={{ textAlign: "center" }}>
                  <img src="images/tab1.png" id="sep3ACI" alt="" />
                </td>
              </tr>
              <tr className="con5">
                <td className="con5" rowSpan={visible ? 3 : 2} >
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
                  <img src="images/tab1.png" id="sep4" alt="" />
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
                  <img src="images/tab1.png" id="sep5" alt="" />
                </td>
              </tr>
              {visible && (
                <>
                  <tr className="con5">
                    <td className="con5">
                      Enable Smart Protection Service Proxy
                    </td>
                    <td className="con5">
                      <div>
                        <select
                          id="global_agents_settings4"
                          name="global_agents_settings4"
                          onChange={(e) => {
                            fiveFunction1(e);
                            handleChange(e);
                          }}
                        >
                          <option value="Enabled">Enabled</option>
                          <option value="Disabled">Disabled</option>
                        </select>
                      </div>
                    </td>
                    <td className="con5" style={{ textAlign: "center" }}>
                      <img src="images/tab1.png" id="sep5GA" alt="" />
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
                        onChange={(e) => {
                          handleChange(e);
                          superman(e);

                        }}
                      />
                    </td>
                    <td className="con5" style={{ textAlign: "center" }}>
                      <img src="images/tab1.png" id="super" alt="" />
                    </td>
                  </tr>
                </>
              )}

              <tr className="con5">
                <td className="con5" rowSpan={2}>Agent scheduled updates</td>
                <td className="con5">Enabled</td>
                <td className="con5">
                  <div id="AgentSU">
                    <select
                      id="7"
                      name="agent_scheduled_updates"
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
                        onChange={(e) => {
                          sixFunction(e);
                          handleChange(e);
                        }}
                      >
                        <option value="Daily">Daily</option>
                        <option value="Hourly">Hourly</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                      </select>
                      <input
                        type="time"
                        name="agent_scheduled_updates_daily"
                        onChange={handleChange}
                      />{" "}
                      Time Period-{" "}
                      <input
                        style={{ width: "15%" }}
                        type="text"
                        name="timePeriod"
                        id="pwd"
                        onChange={handleChange}
                      />
                    </span>
                  </div>
                </td>
                <td className="con5" style={{ textAlign: "center" }}>
                  <img src="images/tab1.png" id="sep6" alt="" />
                </td>
              </tr>
              <tr className="con5">
                <td className="con5">Update Source</td>
                <td className="con5">
                  <div>
                    <select
                      id="7"
                      name="agent_scheduled_updates1"
                      onChange={(e) => {
                        sixFunction(e);
                        handleChange(e);
                      }}
                    >
                      <option value="Active Update ">Active Update</option>
                      <option value="Custom Update source">Custom Update source</option>
                    </select>


                  </div>
                </td>
                <td className="con5" style={{ textAlign: "center" }}>
                  <img src="images/tab1.png" alt="" />
                </td>
              </tr>
              <tr className="con5">
                <td className="con5">Smart Protection Server</td>
                <td className="con5">
                  Integrated/Standalone SPS Server/Global SPS
                </td>
                <td className="con5">
                  <div>
                    <select
                      name="smart_portection_server"
                      onChange={handleChange}
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
                  <img src="images/tab1.png" id="sep7" alt="" />
                </td>
              </tr>

              <tr className="con5">
                <td className="con5">Inactive agent cleanup</td>
                <td className="con5">Enabled</td>
                <td className="con5">
                  <div>
                    <select
                      id=""
                      name="inactiveAgentCleanup"
                      onChange={(e) => {
                        inActiveAgentCleanup(e);
                        handleChange(e);
                      }}
                    >
                      <option value="Enabled">Enabled</option>
                      <option value="Disabled">Disabled</option>
                    </select>
                  </div>
                </td>
                <td className="con5" style={{ textAlign: "center" }}>
                  <img src="images/tab1.png" id="sepIAC" alt="" />
                </td>
              </tr>


              {visible && (
                <>
                  <tr className="con5">
                    <td className="con5" colSpan={4}>Data Base Configuration</td>
                  </tr>

                  <tr className="con5">
                    <td className="con5">Database Backup</td>
                    <td className="con5">Yes</td>
                    <td className="con5">
                      <div>
                        <select
                          id="8"
                          name="dataBaseConfiguration1"
                          onChange={(e) => {
                            handleChange(e);
                            handleDatabaseBackup(e);
                          }}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </td>
                    <td className="con5" style={{ textAlign: "center" }}>
                      <img src="images/tab1.png" id="sepDB" alt="" />
                    </td>
                  </tr>

                  <tr className="con5" id="backupScheduled">
                    <td className="con5">Backup Scheduled</td>
                    <td className="con5">Depend on Customer</td>
                    <td className="con5" >

                      <div>
                        <select
                          id="8"
                          name="dataBaseConfiguration2"
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        >
                          <option value="Daily">Daily</option>
                          <option value="Hourly">Hourly</option>
                          <option value="Weekly">Weekly</option>
                          <option value="Monthly">Monthly</option>
                        </select>
                      </div>

                    </td>
                    <td className="con5" style={{ textAlign: "center" }}>
                      <img src="images/tab4.png" id="super1" alt="" />
                    </td>
                  </tr>
                </>
              )}




            </tbody>
          </table>
        </div>
      </div>
      {/* apexon41 end */}
    </>
  );
}
