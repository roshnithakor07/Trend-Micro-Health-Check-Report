import React from 'react'
import ExcutiveSummery from "../Logic/ExcutiveSummery"

export default function PolicyOverview2({ myData: {
    visible,
    handlePolicy2, handlePolicyOverviewName1,
    closePolicyOverviewTable,
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

} }) {
    const {
        rsummary12,
        rsummary25,
        rsummary26,
        rsummary27,
        rsummary28,
    } = ExcutiveSummery();

    return (
        <>
            <div className="PolicyOverview" id="PolicyOverviewTwo">
                <div
                    className="closePolicyOverviewTable"
                    id="closePolicyOverviewTable"
                >
                    <h5>
                        Close Policy Overview table :{" "}
                        <img
                            id="close-details"
                            onClick={closePolicyOverviewTable}
                            src="images/close-details.png"
                            alt=""
                        />
                    </h5>{" "}
                </div>

                <div className="head5" id="head55">
                    <h2 style={{ color: "red" }} className="report-heading2">
                        4.2.2 Policy overview
                    </h2>
                    <table className="con6 table1" id="documentV">
                        <thead className="con5">
                            <tr className="one con5">
                                <th className="con5">Component</th>
                                <th className="con5">Trend Recommended</th>
                                <th className="con5">Deployed</th>
                                <th className="con5">Status</th>
                            </tr>
                        </thead>
                        <tbody className="con6">
                            <tr className="con6">
                                <td id="lk" colSpan="4">
                                    Policy Configuration - Overview -&nbsp;
                                    <input
                                        onChange={(e) => {
                                            handlePolicy2(e);
                                            handlePolicyOverviewName1(e);
                                        }}
                                        name="OverviewPolicyName1"
                                        type="text"
                                        style={{
                                            backgroundColor: "lightblue",
                                            fontWeight: "bold",
                                        }}
                                    />
                                    &nbsp;Policy
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">Agent Scan Mode</td>
                                <td className="con6">Smart scan</td>
                                <td className="con6">
                                    <div>
                                        <select
                                            id="9"
                                            onChange={(e) => {
                                                eightFunction1(e);
                                                handlePolicy2(e)
                                            }}
                                            name="agent_scan_mode1"
                                        >
                                            <option value="Smart Scan">Smart Scan</option>
                                            <option value="Conventional Scan">
                                                Conventional Scan
                                            </option>
                                        </select>
                                    </div>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep8Policy2" alt="" />
                                </td>
                            </tr>

                            {/* Manual Scan - Policy start */}
                            <tr className="con6">
                                <td rowSpan="7" className="con6">
                                    Manual Scan - Policy
                                </td>
                                <td className="con6">
                                    Files to Scan {">"} All Scannable files
                                </td>
                                <td className="con6">
                                    <select
                                        id="10"
                                        onChange={(e) => {
                                            nineFunction1(e, "sep9Policy2", "tab9", 0);
                                            handlePolicy2(e);
                                        }}
                                        name="files_to_Scan1"
                                    >
                                        <option value="All Scannable files">
                                            All Scannable files
                                        </option>
                                        <option value="File types Scanned by IntelliScan">
                                            File types Scan by IntelliScan
                                        </option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep9Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">Scan Hidden Folders</td>
                                <td className="con6">
                                    <div>
                                        <select
                                            id="11"
                                            onChange={(e) => {
                                                tenFunction1(
                                                    e,
                                                    "sep10Policy2",
                                                    "tab10",
                                                    "rSummary12",
                                                    rsummary12
                                                );
                                                handlePolicy2(e);
                                            }}
                                            name="scan_hidden_folders1"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                    </div>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep10Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">
                                    Select - Scan compressed files.{">"}Maximium layers: 2
                                </td>
                                <td className="con6">
                                    Select - Scan compressed files.{">"}Maximium layers:{" "}
                                    <select
                                        id="12"
                                        onChange={(e) => {
                                            elevenFunction1(e, "sep11Policy2", "tab11", 2);
                                            handlePolicy2(e);
                                        }}
                                        name="scan_compressed_files1"
                                    >
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="1">1</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep11Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">
                                    Select - Scan OLE object . {">"} Maximium layers : 3
                                </td>
                                <td className="con6">
                                    Select - Scan OLE object . {">"} Maximium layers :{" "}
                                    <select
                                        id="13"
                                        onChange={(e) => {
                                            elevenFunction1(e, "sep12Policy2", "tab12", 3);
                                            handlePolicy2(e);
                                        }}
                                        name="scan_ole_object1"
                                    >
                                        <option value="3">3</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep12Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">
                                    Enable - Detect exploit code in OLE file
                                </td>
                                <td className="con6">
                                    <select
                                        id="14"
                                        onChange={(e) => {
                                            thirteenFunction1(e, "sep13Policy2", "tab13", 0);
                                            handlePolicy2(e);
                                        }}
                                        name="detect_exploit_code1"
                                    >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep13Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">
                                    Virus/Malware Scan Settings Only {">"} Scan boot area
                                </td>
                                <td className="con6">
                                    <div>
                                        <select
                                            id="15"
                                            onChange={(e) => {
                                                fourteenFunction1(e, "sep14Policy2", "tab14", 0);
                                                handlePolicy2(e);
                                            }}
                                            name="virus_scan_settings_only1"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                    </div>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep14Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">CPU Usage {">"} Medium</td>
                                <td className="con6">
                                    <div>
                                        <select
                                            id="16"
                                            onChange={(e) => {
                                                fifteenFunction1(e, "sep15Policy2", "tab15", 0, 2);
                                                handlePolicy2(e);
                                            }}
                                            name="cpu_usage1"
                                        >
                                            <option value="Medium">Medium</option>
                                            <option value="High">High</option>
                                            <option value="Low">Low</option>
                                        </select>
                                    </div>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep15Policy2" alt="" />
                                </td>
                            </tr>
                            {/* Manual Scan - Policy end */}


                            {/* Manual Scan - Actions starts */}

                            <tr className="con6">
                                <td rowSpan="5" className="con6">
                                    Manual Scan - Actions
                                </td>
                                <td className="con6">
                                    Virus/Malware {">"} Use a specific action for each
                                    virus/malware type:
                                    <table className="con6 table2" id="table2">
                                        <tbody>
                                            <tr className="con6">
                                                <td className="con6">Select - Joke: Quarantine</td>
                                            </tr>
                                            <tr className="con6">
                                                <td className="con6">Select - Trojans:Quarantine</td>
                                            </tr>
                                            <tr className="con6">
                                                <td className="con6">
                                                    Select - Virus: Clean & Quarantine
                                                </td>
                                            </tr>
                                            <tr className="con6">
                                                <td className="con6">
                                                    Select - Test Virus:Quarantine
                                                </td>
                                            </tr>
                                            <tr className="con6">
                                                <td className="con6">Select - Packer: Quarantine</td>
                                            </tr>
                                            <tr className="con6">
                                                <td className="con6">
                                                    Select - Probable Malware:Quarantine
                                                </td>
                                            </tr>
                                            <tr className="con6">
                                                <td className="con6">
                                                    Select - Other Malware: Clean & Quarantine
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>

                                <td className="con6">
                                    <input
                                        type="radio"
                                        name="use_activeAction1Policy2"
                                        id="radio1Policy2"
                                        value="yes1"
                                        onChange={(e) => {
                                            handlePolicy2(e);
                                            sixteenFunction1(
                                                e,
                                                "sep16Policy2",
                                                "tab16",
                                                0,
                                                "radio1Policy2",
                                                "radio2Policy2", 0
                                            );
                                        }}
                                    />{" "}
                                    Use <b>ActiveAction</b>
                                    <br />
                                    <input
                                        type="checkbox"
                                        value={true}
                                        name="customize_action_for_porbable_virus_checkbox1"
                                        onChange={handlePolicy2}
                                    />{" "}
                                    Customize action for porbable Virus/Malware
                                    <select
                                        name="customize_action_for_porbable_virus_option1"
                                        onChange={handlePolicy2}
                                    >
                                        <option>Quarantine</option>
                                        <option>Pass</option>
                                        <option>Clean</option>
                                        <option>Delete</option>
                                        <option>Rename</option>
                                    </select>{" "}
                                    <br /> <br />
                                    <input
                                        type="radio"
                                        name="use_activeAction1Policy2"
                                        id="radio2Policy2"
                                        value="yes2"
                                        onChange={(e) => {
                                            handlePolicy2(e);
                                            sixteenFunction1(
                                                e,
                                                "sep16Policy2",
                                                "tab16",
                                                0,
                                                "radio1Policy2",
                                                "radio2Policy2", 0
                                            );
                                        }}

                                    />{" "}
                                    Use the same action for all Virus/Malware types <br />
                                    (If the first action is unseccessful, Apex One performs the
                                    second action.) <br /> <br />
                                    <table className="table2" id="use_action2table">
                                        <thead>
                                            <tr id="ch">
                                                <th id="ch">Type</th>
                                                <th id="ch">1st Action</th>
                                                <th id="ch">2nd Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr id="ch">
                                                <td id="ch">All types</td>
                                                <td id="ch">
                                                    <select
                                                        name="first_action1"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch">
                                                    <select
                                                        name="second_action1"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br />
                                    <br />
                                    <input
                                        type="radio"
                                        name="use_activeAction1Policy2"
                                        id="radio3Policy2"
                                        value="yes3"
                                        defaultChecked
                                        onChange={(e) => {
                                            handlePolicy2(e);
                                            sixteenFunction1(
                                                e,
                                                "sep16Policy2",
                                                "tab16",
                                                0,
                                                "radio1Policy2",
                                                "radio2Policy2", 0
                                            );
                                        }}
                                    />{" "}
                                    Use specific action for each Virus/Malware types
                                    <table className="table2" id="use_action3table">
                                        <thead>
                                            <tr id="ch">
                                                <th id="ch">Type</th>
                                                <th id="ch">1st Action</th>
                                                <th id="ch">2nd Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr id="ch">
                                                <td id="ch">Joke</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka1"
                                                        name="joke1"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch"></td>
                                            </tr>
                                            <tr id="ch">
                                                <td id="ch">Trojans</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka2"
                                                        name="trojans1"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch"></td>
                                            </tr>
                                            <tr id="ch">
                                                <td id="ch">Virus</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka3"
                                                        name="virus11"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Clean">Clean</option>
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch">
                                                    <select
                                                        id="k1"
                                                        name="virus21"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr id="ch">
                                                <td id="ch">Test Virus</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka4"
                                                        name="test_virus1"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch"></td>
                                            </tr>
                                            <tr id="ch">
                                                <td id="ch">Packer</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka5"
                                                        name="packer1"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch"></td>
                                            </tr>
                                            <tr id="ch">
                                                <td id="ch">Probable Malware</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka6"
                                                        name="probable_malware11"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch">
                                                    <select
                                                        id="k2"
                                                        name="probable_malware21"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr id="ch">
                                                <td id="ch">Other Malware</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka6"
                                                        name="other_malware11"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Clean">Clean</option>
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch">
                                                    <select
                                                        id="k2"
                                                        name="other_malware21"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep16Policy2" alt="" />
                                </td>
                            </tr>
                            <tr className="con6">
                                <td className="con6">
                                    Select - Back up files before cleaning.
                                </td>
                                <td className="con6">
                                    <select
                                        id="18"
                                        onChange={(e) => {
                                            seventeenFunction1(e, "sep17Policy2", "tab17", 0);
                                            handlePolicy2(e);
                                        }}
                                        name="back_up_files1"
                                    >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep17Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">
                                    Enable - Damage Cleanup Services with Advanced clean up
                                </td>
                                <td className="con6">
                                    <select
                                        id="19Policy2"
                                        onChange={(e) => {
                                            eighteenFunction1(e, "sep18Policy2", "tab18", 0, "19Policy2", "20Policy2");
                                            handlePolicy2(e);
                                        }}
                                        name="damage_cleanup_services11"
                                    >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>{" "}
                                    Damage Clean-up Services with{" "}
                                    <select
                                        id="20Policy2"
                                        onChange={(e) => {
                                            eighteenFunction1(e, "sep18Policy2", "tab18", 0, "19Policy2", "20Policy2");
                                            handlePolicy2(e);
                                        }}
                                        name="damage_cleanup_services21"
                                    >
                                        <option value="Advanced clean-up">
                                            Advanced clean-up
                                        </option>
                                        <option value="Standard clean-up">
                                            Standard clean-up
                                        </option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep18Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">
                                    Enable - Run cleanup when Probable virus/malware is detected
                                </td>
                                <td className="con6">
                                    <select
                                        id="21"
                                        onChange={(e) => {
                                            nineteenFunction1(e, "sep19Policy2", "tab19", 0);
                                            handlePolicy2(e);
                                        }}
                                        name="run_cleanup1"
                                    >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep19Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">
                                    Enable - Spyware/Grayware {">"} Clean: Apex One terminates
                                    Processes.
                                </td>
                                <td className="con6">
                                    <select
                                        id="22"
                                        onChange={(e) => {
                                            twentyFunction1(e, "sep20Policy2", "tab20", 0);
                                            handlePolicy2(e);
                                        }}
                                        name="apex_one_terminates_processes1"
                                    >
                                        <option value="Clean">Clean</option>
                                        <option value="Pass">Pass</option>
                                        <option value="Deny">Deny</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep20Policy2" alt="" />
                                </td>
                            </tr>

                            {/* Manual Scan - Actions ends */}


                            {/* Real-Time Scan Policy Settings starts */}
                            <tr className="con6">
                                <td rowSpan="11" className="con6">
                                    Real-Time Scan Policy Settings
                                </td>
                                <td className="con6">Enable - Virus/Malware Scan</td>
                                <td className="con6">
                                    <select
                                        id="23"
                                        onChange={(e) => {
                                            twentyoneFunction1(e, "sep21Policy2", "tab21", 1);
                                            handlePolicy2(e);
                                        }}
                                        name="virus_scan2"
                                    >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep21Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">Enable -spyware/Grayware scan</td>
                                <td className="con6">
                                    <select
                                        id="24"
                                        onChange={(e) => {
                                            twentytwoFunction1(e, "sep22Policy2", "tab22", 1);
                                            handlePolicy2(e);
                                        }}
                                        name="spyware_scan2"
                                    >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep22Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">
                                    User Activity on Files {">"} Scan files being
                                    created/modified and retrieved
                                </td>
                                <td className="con6">
                                    {" "}
                                    Scan files being:{" "}
                                    <select
                                        id="25"
                                        onChange={(e) => {
                                            twentythreeFunction1(e);
                                            handlePolicy2(e);
                                        }}
                                        name="user_activity_on_files2"
                                    >
                                        <option value="created/modified and retrieved">
                                            created/modified and retrieved
                                        </option>
                                        <option value="created/modified">created/modified</option>
                                        <option value="retrieved">retrieved</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep23Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">
                                    Files to Scan {">"} All Scannable files
                                </td>
                                <td className="con6">
                                    <select
                                        id="26"
                                        onChange={(e) => {
                                            nineFunction1(e, "sep24Policy2", "tab24", 1);
                                            handlePolicy2(e);
                                        }}
                                        name="files_to_scan2"
                                    >
                                        <option value="All Scannable files">
                                            All Scannable files
                                        </option>
                                        <option value="File types Scanned by IntelliScan">
                                            File types Scan by IntelliScan
                                        </option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep24Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">
                                    Enable - Scan the boot sector of the USB storage device
                                    after plugging in.
                                </td>
                                <td className="con6">
                                    <select
                                        id="28"
                                        onChange={(e) => {
                                            tenFunction1(
                                                e,
                                                "sep26Policy2",
                                                "tab26",
                                                "rSummary25",
                                                rsummary25
                                            );
                                            handlePolicy2(e);
                                        }}
                                        name="enable12"
                                    >
                                        <option id="Enabled">Enabled</option>
                                        <option id="Disabled">Disabled</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep26Policy2" alt="" />
                                </td>
                            </tr>
                            <tr className="con6">
                                <td className="con6">
                                    Enable - Scan all files in a removable storage device after
                                    plugging in.
                                </td>
                                <td className="con6">
                                    <select
                                        id="29"
                                        onChange={(e) => {
                                            tenFunction1(
                                                e,
                                                "sep27Policy2",
                                                "tab27",
                                                "rSummary26",
                                                rsummary26
                                            );
                                            handlePolicy2(e);
                                        }}
                                        name="enable22"
                                    >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep27Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">
                                    Enable - Quarantine malware variants detected in memory.
                                </td>
                                <td className="con6">
                                    <select
                                        id="30"
                                        onChange={(e) => {
                                            tenFunction1(
                                                e,
                                                "sep28Policy2",
                                                "tab28",
                                                "rSummary27",
                                                rsummary27
                                            );
                                            handlePolicy2(e);
                                        }}
                                        name="enable32"
                                    >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep28Policy2" alt="" />
                                </td>
                            </tr>
                            <tr className="con6">
                                <td className="con6">
                                    Select - Scan compressed files. {">"} Maximum layers: 2
                                </td>
                                <td className="con6">
                                    Selected - Scan compressed files. {">"} Maximum layers:{" "}
                                    <select
                                        id="31"
                                        onChange={(e) => {
                                            elevenFunction1(e, "sep29Policy2", "tab29", 2);
                                            handlePolicy2(e);
                                        }}
                                        name="scan_compressed_files2"
                                    >
                                        <option value="2">2</option>
                                        <option value="1">1</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep29Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">
                                    Select - Scan OLE objects. {">"} Maximum layers: 3
                                </td>
                                <td className="con6">
                                    Selected - Scan OLE objects.{">"} Maximum layers:
                                    <select
                                        id="32"
                                        onChange={(e) => {
                                            elevenFunction1(e, "sep30Policy2", "tab30", 3);
                                            handlePolicy2(e);
                                        }}
                                        name="scan_ole_objects2"
                                    >
                                        <option value="3">3</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep30Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">
                                    Enable - Detect exploit code in OLE files.
                                </td>
                                <td className="con6">
                                    <select
                                        id="33"
                                        onChange={(e) => {
                                            thirteenFunction1(e, "sep31Policy2", "tab31", 1);
                                            handlePolicy2(e);
                                        }}
                                        name="detect_exploit_code_in_ole_files2"
                                    >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep31Policy2" alt="" />
                                </td>
                            </tr>
                            <tr className="con6">
                                <td className="con6">Enable - CVE exploit scanning</td>
                                <td className="con6">
                                    <select
                                        id="34"
                                        onChange={(e) => {
                                            tenFunction1(
                                                e,
                                                "sep32Policy2",
                                                "tab32",
                                                "rSummary28",
                                                rsummary28
                                            );
                                            handlePolicy2(e);
                                        }}
                                        name="cvf_exploit_scanning2"
                                    >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep32Policy2" alt="" />
                                </td>
                            </tr>
                            {/* Real-Time Scan Policy Settings ends */}

                            {/* Real-Time Scan-Action Settings starts */}

                            <tr className="con6">
                                <td rowSpan="4" className="con6">
                                    Real-Time Scan-Action Settings
                                </td>
                                <td className="con6">
                                    Virus/Malware {">"} Use a specific action for each
                                    virus/malware type:
                                    <table className="con6 table2">
                                        <tbody>
                                            <tr className="con6">
                                                <td className="con6">Select - Joke: Quarantine</td>
                                            </tr>
                                            <tr className="con6">
                                                <td className="con6">Select - Trojans:Quarantine</td>
                                            </tr>
                                            <tr className="con6">
                                                <td className="con6">
                                                    Select - Virus: Clean & Quarantine
                                                </td>
                                            </tr>
                                            <tr className="con6">
                                                <td className="con6">
                                                    Select - Test Virus:Quarantine
                                                </td>
                                            </tr>
                                            <tr className="con6">
                                                <td className="con6">Select - Packer: Quarantine</td>
                                            </tr>
                                            <tr className="con6">
                                                <td className="con6">
                                                    Select - Probable Malware:Quarantine
                                                </td>
                                            </tr>
                                            <tr className="con6">
                                                <td className="con6">
                                                    Select - Other Malware: Clean & Quarantine
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td className="con6">
                                    <input
                                        type="radio"
                                        value={"yes1"}
                                        name="use_activeAction2Policy2"
                                        id="radio4Policy2"
                                        onChange={(e) => {
                                            sixteenFunction1(
                                                e,
                                                "sep33Policy2",
                                                "tab33",
                                                1,
                                                "radio4Policy2",
                                                "radio5Policy2", 1
                                            );
                                            handlePolicy2(e);
                                        }}
                                    />{" "}
                                    Use <b>ActiveAction</b>
                                    <br />
                                    <input
                                        type="checkbox"
                                        name="customize_action_for_porbable_virus_checkbox2"
                                        onChange={handlePolicy2}
                                    />
                                    Customize action for porbable Virus/Malware{" "}
                                    <select
                                        name="customize_action_for_porbable_virus_option2"
                                        onChange={handlePolicy2}
                                    >
                                        <option value="Quarantine">Quarantine</option>
                                        <option value="Pass">Pass</option>
                                        <option value="Clean">Clean</option>
                                        <option value="Delete">Delete</option>
                                        <option value="Rename">Rename</option>
                                    </select>{" "}
                                    <br /> <br />
                                    <input
                                        type="radio"
                                        name="use_activeAction2Policy2"
                                        value={"yes2"}
                                        id="radio5Policy2"
                                        onChange={(e) => {
                                            sixteenFunction1(
                                                e,
                                                "sep33Policy2",
                                                "tab33",
                                                1,
                                                "radio4Policy2",
                                                "radio5Policy2", 1
                                            );
                                            handlePolicy2(e);
                                        }}
                                    />{" "}
                                    Use the same action for all Virus/Malware types
                                    <br />
                                    (If the first action is unseccessful, Apex One performs the
                                    second action.) <br /> <br />
                                    <br />
                                    <table className="table2">
                                        <thead>
                                            <tr id="ch">
                                                <th id="ch">Type</th>
                                                <th id="ch">1st Action</th>
                                                <th id="ch">2nd Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr id="ch">
                                                <td id="ch">All types</td>
                                                <td id="ch">
                                                    <select
                                                        name="first_action2"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch">
                                                    <select
                                                        name="second_action2"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br />
                                    <br />
                                    <input
                                        type="radio"
                                        value={"yes3"}
                                        name="use_activeAction2Policy2"
                                        defaultChecked
                                        id="radio6"
                                        onChange={(e) => {
                                            sixteenFunction1(
                                                e,
                                                "sep33Policy2",
                                                "tab33",
                                                1,
                                                "radio4Policy2",
                                                "radio5Policy2", 1
                                            );
                                            handlePolicy2(e);
                                        }}
                                    />{" "}
                                    Use specific action for each Virus/Malware types
                                    <table className="table2">
                                        <thead>
                                            <tr id="ch">
                                                <th id="ch">Type</th>
                                                <th id="ch">1st Action</th>
                                                <th id="ch">2nd Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr id="ch">
                                                <td id="ch">Joke</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka7"
                                                        name="joke2"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch"></td>
                                            </tr>
                                            <tr id="ch">
                                                <td id="ch">Trojans</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka8"
                                                        name="trojans2"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch"></td>
                                            </tr>
                                            <tr id="ch">
                                                <td id="ch">Virus</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka9"
                                                        name="virus12"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Clean">Clean</option>
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch">
                                                    <select
                                                        id="k3"
                                                        name="virus22"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr id="ch">
                                                <td id="ch">Test Virus</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka10"
                                                        name="test_virus2"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch"></td>
                                            </tr>
                                            <tr id="ch">
                                                <td id="ch">Packer</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka11"
                                                        name="packer2"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch"></td>
                                            </tr>
                                            <tr id="ch">
                                                <td id="ch">Probable Malware</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka12"
                                                        name="probable_malware12"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch">
                                                    <select
                                                        id="k4"
                                                        name="probable_malware22"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr id="ch">
                                                <td id="ch">Other Malware</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka6"
                                                        name="other_malware12"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Clean">Clean</option>
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch">
                                                    <select
                                                        id="k2"
                                                        name="other_malware22"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep33Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">
                                    Enable - Back up files before cleaning.
                                </td>
                                <td className="con6">
                                    <select
                                        id="36"
                                        onChange={(e) => {
                                            seventeenFunction1(e, "sep34Policy2", "tab34", 1);
                                            handlePolicy2(e);
                                        }}
                                        name="back_up_files2"
                                    >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep34Policy2" alt="" />
                                </td>
                            </tr>
                            <tr className="con6">
                                <td className="con6">
                                    Enable - Run cleanup when probable virus/malware is detected
                                </td>
                                <td className="con6">
                                    <select
                                        id="37"
                                        onChange={(e) => {
                                            nineteenFunction1(e, "sep35Policy2", "tab35", 1);
                                            handlePolicy2(e);
                                        }}
                                        name="run_cleanup2"
                                    >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep35Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">
                                    Enable - Spyware/Grayware {">"} Clean: Apex One terminates
                                    processes.
                                </td>
                                <td className="con6">
                                    <select
                                        id="38"
                                        onChange={(e) => {
                                            twentyFunction1(e, "sep36Policy2", "tab36", 1);
                                            handlePolicy2(e);
                                        }}
                                        name="apex_one_terminates_processes2"
                                    >
                                        <option value="Clean">Clean</option>
                                        <option value="Pass">Pass</option>
                                        {/* <option value="Deny">Deny</option> */}
                                    </select>{" "}
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep36Policy2" alt="" />
                                </td>
                            </tr>

                            {/* Real-Time Scan-Action Settings ends*/}

                            {/* Schedule Scan Policy Settings starts*/}

                            <tr className="con6">
                                <td rowSpan="9" className="con6">
                                    Schedule Scan Policy Settings
                                </td>
                                <td className="con6">Enable - Virus/Malware Scan</td>
                                <td className="con6">
                                    <select
                                        id="39"
                                        onChange={(e) => {
                                            twentyoneFunction1(e, "sep37Policy2", "tab37", 2);
                                            handlePolicy2(e);
                                        }}
                                        name="virus_scan3"
                                    >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep37Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">Enable -spyware/Grayware scan</td>
                                <td className="con6">
                                    <select
                                        id="40"
                                        onChange={(e) => {
                                            twentytwoFunction1(e, "sep38Policy2", "tab38", 2);
                                            handlePolicy2(e);
                                        }}
                                        name="spyware_scan3"
                                    >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep38Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">
                                    Configure Schedule Scan to run at least once a week.
                                </td>
                                <td className="con6">
                                    <input
                                        type="radio"
                                        value={"daily"}
                                        name="configure_schedule_scan_checkbox3"
                                        id="radio10"
                                        onChange={(e) => {
                                            thirtynineFunction1(e);
                                            handlePolicy2(e);
                                        }}
                                    /> Daily
                                    &nbsp;Start time:{" "}
                                    <input
                                        type="time"
                                        name="configure_schedule_scan_time3"
                                        onChange={handlePolicy2}
                                    />
                                    <br />
                                    <input
                                        type="radio"
                                        value={"weeklyEvery"}
                                        name="configure_schedule_scan_checkbox3"
                                        id="radio11Policy2"
                                        onChange={(e) => {
                                            thirtynineFunction1(e);
                                            handlePolicy2(e);
                                        }}
                                    />
                                    {" "}
                                    Weekly Every
                                    {" "}
                                    <select
                                        name="configure_schedule_scan_weekevery3"
                                        onChange={handlePolicy2}
                                    >
                                        <option>Monday</option>
                                        <option>Tuesday</option>
                                        <option>Wednesday</option>
                                        <option>Thursday</option>
                                        <option>Friday</option>
                                        <option>Saturday</option>
                                        <option>Sunday</option>
                                    </select>
                                    &nbsp;Start time:{" "}
                                    <input
                                        type="time"
                                        name="configure_schedule_scan_time3"
                                        onChange={handlePolicy2}
                                    />
                                    <br />
                                    <input
                                        type="radio"
                                        value={"monthlyDay"}
                                        name="configure_schedule_scan_checkbox3"
                                        id="radio12"
                                        onChange={(e) => {
                                            thirtynineFunction1(e);
                                            handlePolicy2(e);
                                        }}
                                    />{" "}
                                    Monthly,on day {" "}
                                    <select
                                        name="configure_schedule_scan_month3"
                                        onChange={handlePolicy2}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                        <option>22</option>
                                        <option>23</option>
                                        <option>24</option>
                                        <option>25</option>
                                        <option>26</option>
                                        <option>27</option>
                                        <option>28</option>
                                        <option>29</option>
                                        <option>30</option>
                                        <option>31</option>
                                    </select>
                                    &nbsp;Start time:{" "}
                                    <input
                                        type="time"
                                        name="configure_schedule_scan_time3"
                                        onChange={handlePolicy2}
                                    />
                                    <br />
                                    <input
                                        type="radio"
                                        value={"monthlyOnDay"}
                                        name="configure_schedule_scan_checkbox3"
                                        id="radio13"
                                        onChange={(e) => {
                                            thirtynineFunction1(e);
                                            handlePolicy2(e);
                                        }}
                                    />{" "}
                                    Monthly, On the{" "}
                                    <select
                                        name="configure_schedule_scan_date3"
                                        onChange={handlePolicy2}
                                    >
                                        <option>First</option>
                                        <option>Second</option>
                                        <option>Third</option>
                                        <option>Fourth</option>
                                        <option>Fifth</option>
                                    </select>
                                    &nbsp;&nbsp;
                                    <select
                                        name="configure_schedule_scan_day3"
                                        onChange={handlePolicy2}
                                    >
                                        <option>Monday</option>
                                        <option>Tuesday</option>
                                        <option>Wednesday</option>
                                        <option>Thrusday</option>
                                        <option>Friday</option>
                                        <option>Saturday</option>
                                        <option>Sunday</option>
                                    </select>
                                    &nbsp;&nbsp;Start time:{" "}
                                    <input
                                        type="time"
                                        name="configure_schedule_scan_time3"
                                        onChange={handlePolicy2}
                                    />
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep39Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">
                                    Files to Scan {">"} All Scannable files
                                </td>
                                <td className="con6">
                                    <select
                                        id="42"
                                        onChange={(e) => {
                                            nineFunction1(e, "sep40Policy2", "tab40", 2);
                                            handlePolicy2(e);
                                        }}
                                        name="filestoscan3"
                                    >
                                        <option value="All Scannable files">
                                            All Scannable files
                                        </option>
                                        <option value="File types Scanned by IntelliScan">
                                            Files scan by IntelliScan
                                        </option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep40Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">
                                    Select - Scan compressed files. {">"} Maximum layers: 2
                                </td>
                                <td className="con6">
                                    Selected - Scan compressed files. {">"} Maximum layers:{" "}
                                    <select
                                        id="43"
                                        onChange={(e) => {
                                            elevenFunction1(e, "sep41Policy2", "tab41", 2);
                                            handlePolicy2(e);
                                        }}
                                        name="scan_compressed_files3"
                                    >
                                        <option value="2">2</option>
                                        <option value="1">1</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep41Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">
                                    Select - Scan OLE objects. {">"} Maximum layers: 3
                                </td>
                                <td className="con6">
                                    Selected - Scan OLE objects. {">"} Maximum layers:{" "}
                                    <select
                                        id="44"
                                        onChange={(e) => {
                                            elevenFunction1(e, "sep42Policy2", "tab42", 3);
                                            handlePolicy2(e);
                                        }}
                                        name="scanoleobjects3"
                                    >
                                        <option value="3">3</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep42Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">
                                    Enable - Detect exploit code in OLE files.
                                </td>
                                <td className="con6">
                                    <select
                                        id="45"
                                        onChange={(e) => {
                                            thirteenFunction1(e, "sep43Policy2", "tab43", 2);
                                            handlePolicy2(e);
                                        }}
                                        name="detect_exploit_code3"
                                    >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep43Policy2" alt="" />
                                </td>
                            </tr>
                            <tr className="con6">
                                <td className="con6">
                                    Virus/Malware Scan Settings Only {">"} Scan boot area
                                </td>
                                <td className="con6">
                                    {" "}
                                    <select
                                        id="46"
                                        onChange={(e) => {
                                            fourteenFunction1(e, "sep44Policy2", "tab44", 2);
                                            handlePolicy2(e);
                                        }}
                                        name="scan_boot_area3"
                                    >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>{" "}
                                    Scan boot area
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep44Policy2" alt="" />
                                </td>
                            </tr>
                            <tr className="con6">
                                <td className="con6">CPU Usage {">"} Medium</td>
                                <td className="con6">
                                    <select
                                        id="47"
                                        onChange={(e) => {
                                            fifteenFunction1(e, "sep45Policy2", "tab45", 2, 3);
                                            handlePolicy2(e);
                                        }}
                                        name="cpu_usage3"
                                    >
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Low">Low</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep45Policy2" alt="" />
                                </td>
                            </tr>

                            {/* Schedule Scan Policy Settings ends */}



                            {/* Schedule Scan-Action Settings starts */}
                            <tr className="con6">
                                <td rowSpan="5" className="con6">
                                    Schedule Scan-Action Settings
                                </td>
                                <td className="con6">
                                    Virus/Malware {">"} Use a specific action for each
                                    virus/malware type:
                                    <table className="con6 table2">
                                        <tbody>
                                            <tr className="con6">
                                                <td className="con6">Select - Joke: Quarantine</td>
                                            </tr>
                                            <tr className="con6">
                                                <td className="con6">Select - Trojans:Quarantine</td>
                                            </tr>
                                            <tr className="con6">
                                                <td className="con6">
                                                    Select - Virus: Clean & Quarantine
                                                </td>
                                            </tr>
                                            <tr className="con6">
                                                <td className="con6">
                                                    Select - Test Virus:Quarantine
                                                </td>
                                            </tr>
                                            <tr className="con6">
                                                <td className="con6">Select - Packer: Quarantine</td>
                                            </tr>
                                            <tr className="con6">
                                                <td className="con6">
                                                    Select - Probable Malware:Quarantine
                                                </td>
                                            </tr>
                                            <tr className="con6">
                                                <td className="con6">
                                                    Select - Other Malware: Clean & Quarantine
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td className="con6">
                                    <input
                                        type="radio"
                                        value={"yes1"}
                                        name="use_activeAction3Policy2"
                                        id="radio7Policy2"
                                        onChange={(e) => {
                                            handlePolicy2(e);
                                            sixteenFunction1(
                                                e,
                                                "sep46Policy2",
                                                "tab46",
                                                2,
                                                "radio7Policy2",
                                                "radio8Policy2"
                                            );
                                        }}
                                    />{" "}
                                    Use <b>ActiveAction</b>
                                    <br />
                                    <input
                                        type="checkbox"
                                        name="customize_action_for_porbable_virus_checkbox3"
                                        onChange={handlePolicy2}
                                    />
                                    Customize action for porbable Virus/Malware{" "}
                                    <select
                                        name="customize_action_for_porbable_virus_option3"
                                        onChange={handlePolicy2}
                                    >
                                        <option>Quarantine</option>
                                        <option>Pass</option>
                                        <option>Clean</option>
                                        <option>Delete</option>
                                        <option>Rename</option>
                                    </select>{" "}
                                    <br /> <br />
                                    <input
                                        type="radio"
                                        value={"yes2"}
                                        name="use_activeAction3Policy2"
                                        id="radio8Policy2"
                                        onChange={(e) => {
                                            handlePolicy2(e);
                                            sixteenFunction1(
                                                e,
                                                "sep46Policy2",
                                                "tab46",
                                                2,
                                                "radio7Policy2",
                                                "radio8Policy2"
                                            );
                                        }}
                                    />{" "}
                                    Use the same action for all Virus/Malware types
                                    <br />
                                    (If the first action is unseccessful, Apex One performs the
                                    second action.) <br /> <br />
                                    <table className="table2">
                                        <thead>
                                            <tr id="ch">
                                                <th id="ch">Type</th>
                                                <th id="ch">1st Action</th>
                                                <th id="ch">2nd Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr id="ch">
                                                <td id="ch">All types</td>
                                                <td id="ch">
                                                    <select
                                                        name="first_action2"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option>Quarantine</option>
                                                        <option>Pass</option>
                                                        <option>Clean</option>
                                                        <option>Delete</option>
                                                        <option>Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch">
                                                    <select
                                                        name="second_action2"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option>Quarantine</option>
                                                        <option>Pass</option>
                                                        <option>Clean</option>
                                                        <option>Delete</option>
                                                        <option>Rename</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>{" "}
                                    <br />
                                    <br />
                                    <input
                                        type="radio"
                                        value={"yes3"}
                                        name="use_activeAction3"
                                        id="radio9"
                                        defaultChecked
                                        onChange={(e) => {
                                            handlePolicy2(e);
                                            sixteenFunction1(
                                                e,
                                                "sep46Policy2",
                                                "tab46",
                                                2,
                                                "radio7Policy2",
                                                "radio8Policy2"
                                            );
                                        }}
                                    />{" "}
                                    Use specific action for each Virus/Malware types
                                    <table className="table2">
                                        <thead>
                                            <tr id="ch">
                                                <th id="ch">Type</th>
                                                <th id="ch">1st Action</th>
                                                <th id="ch">2nd Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr id="ch">
                                                <td id="ch">Joke</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka13"
                                                        name="joke3"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch"></td>
                                            </tr>
                                            <tr id="ch">
                                                <td id="ch">Trojans</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka14"
                                                        name="trojans3"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch"></td>
                                            </tr>
                                            <tr id="ch">
                                                <td id="ch">Virus</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka15"
                                                        name="virus13"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Clean">Clean</option>
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch">
                                                    <select
                                                        id="k5"
                                                        name="virus23"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr id="ch">
                                                <td id="ch">Test Virus</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka16"
                                                        name="test_virus3"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch"></td>
                                            </tr>
                                            <tr id="ch">
                                                <td id="ch">Packer</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka17"
                                                        name="packer3"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch"></td>
                                            </tr>
                                            <tr id="ch">
                                                <td id="ch">Probable Malware</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka18"
                                                        name="probable_malware13"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch">
                                                    <select
                                                        id="k6"
                                                        name="probable_malware23"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr id="ch">
                                                <td id="ch">Other Malware</td>
                                                <td id="ch">
                                                    <select
                                                        id="ka6"
                                                        name="other_malware13"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Clean">Clean</option>
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                                <td id="ch">
                                                    <select
                                                        id="k2"
                                                        name="other_malware23"
                                                        onChange={handlePolicy2}
                                                    >
                                                        <option value="Quarantine">Quarantine</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Clean">Clean</option>
                                                        <option value="Delete">Delete</option>
                                                        <option value="Rename">Rename</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep46Policy2" alt="" />
                                </td>
                            </tr>
                            <tr className="con6">
                                <td className="con6">
                                    Select - Back up files before cleaning.
                                </td>
                                <td className="con6">
                                    {" "}
                                    <select
                                        id="49"
                                        name="back_up_files3"
                                        onChange={(e) => {
                                            seventeenFunction1(e, "sep47Policy2", "tab47", 2);
                                            handlePolicy2(e);
                                        }}
                                    >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep47Policy2" alt="" />
                                </td>
                            </tr>
                            <tr className="con6">
                                <td className="con6">
                                    Enable - Damage Cleanup Services (ADVANCED)
                                </td>
                                <td className="con6">
                                    <select
                                        id="damage_cleanup_services13Policy2"
                                        name="damage_cleanup_services13"
                                        onChange={(e) => {
                                            eighteenFunction1(
                                                e,
                                                "sep48Policy2",
                                                "tab48",
                                                2,
                                                "damage_cleanup_services13Policy2",
                                                "damage_cleanup_services23Policy2"
                                            );
                                            handlePolicy2(e);
                                        }}
                                    >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                    Damage Clean-up Services with{" "}
                                    <select
                                        id="damage_cleanup_services23Policy2"
                                        onChange={(e) => {
                                            eighteenFunction1(
                                                e,
                                                "sep48Policy2",
                                                "tab48",
                                                2,
                                                "damage_cleanup_services13Policy2",
                                                "damage_cleanup_services23Policy2"
                                            );
                                            handlePolicy2(e);
                                        }}
                                        name="damage_cleanup_services23"
                                    >
                                        <option value="Advanced clean-up">
                                            Advanced clean-up
                                        </option>
                                        <option value="Standard clean-up">
                                            Standard clean-up
                                        </option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep48Policy2" alt="" />
                                </td>
                            </tr>
                            <tr className="con6">
                                <td className="con6">
                                    Enable - Run cleanup when probable virus/malware is detected
                                </td>
                                <td className="con6">
                                    <select
                                        id="51"
                                        name="run_cleanup3"
                                        onChange={(e) => {
                                            nineteenFunction1(e, "sep49Policy2", "tab49", 2);
                                            handlePolicy2(e);
                                        }}
                                    >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep49Policy2" alt="" />
                                </td>
                            </tr>
                            <tr className="con6">
                                <td className="con6">
                                    Enable - Spyware/Grayware {">"} Clean: Apex One terminates
                                    processes.
                                </td>
                                <td className="con6">
                                    <select
                                        id="52"
                                        name="apex_one_terminates_processes3"
                                        onChange={(e) => {
                                            twentyFunction1(e, "sep50Policy2", "tab50", 2);
                                            handlePolicy2(e);
                                        }}
                                    >
                                        <option value="Clean">Clean</option>
                                        <option value="Pass">Pass</option>
                                        {/* <option value="Deny">Deny</option> */}
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep50Policy2" alt="" />
                                </td>
                            </tr>

                            {/* Schedule Scan-Action Settings ends */}

                            {/* Behavior Monitoring starts */}

                            {visible ? (
                                <>
                                    <tr className="con6" >
                                        <td className="con6" rowSpan="7">Behavior Monitoring</td>
                                        <td className="con6">
                                            Enable Malware Behavior Blocking Known and potential threats
                                        </td>
                                        <td className="con6">
                                            <select

                                                onChange={(e) => {
                                                    fiftyoneFunction1(e, "sep51BM1Policy2", "tab51BM1");
                                                    handlePolicy2(e);
                                                }}
                                                name="bm1"
                                            >
                                                <option value="Enabled">Enabled </option>
                                                <option value="Disabled">Disabled</option>
                                            </select>
                                        </td>
                                        <td className="con6" style={{ textAlign: "center" }}>
                                            <img src="images/tab1.png" id="sep51BM1Policy2" alt="" />
                                        </td>
                                    </tr>
                                    <tr className="con6">

                                        <td className="con6">
                                            Ransomware Protection Protect documents against unauthorized encryption or modification
                                        </td>
                                        <td className="con6">
                                            <select

                                                onChange={(e) => {
                                                    fiftyoneFunction1(e, "sep51BM2Policy2", "tab51BM2");
                                                    handlePolicy2(e);
                                                }}
                                                name="bm2"
                                            >
                                                <option value="Enabled">Enabled </option>
                                                <option value="Disabled">Disabled</option>
                                            </select>
                                        </td>
                                        <td className="con6" style={{ textAlign: "center" }}>
                                            <img src="images/tab1.png" id="sep51BM2Policy2" alt="" />
                                        </td>
                                    </tr>
                                    <tr className="con6">
                                        <td className="con6">
                                            Protect documents against unauthorized encryption or modification {"->"} Automatically backup and restore files changed by suspicious programs
                                        </td>
                                        <td className="con6">
                                            <select

                                                onChange={(e) => {
                                                    fiftyoneFunction1(e, "sep51BM3Policy2", "tab51BM3");
                                                    handlePolicy2(e);
                                                }}
                                                name="bm3"
                                            >
                                                <option value="Enabled">Enabled </option>
                                                <option value="Disabled">Disabled</option>
                                            </select>
                                        </td>
                                        <td className="con6" style={{ textAlign: "center" }}>
                                            <img src="images/tab1.png" id="sep51BM3Policy2" alt="" />
                                        </td>
                                    </tr>
                                    <tr className="con6">
                                        <td className="con6">
                                            Enable program inspection to detect and block compromised executable files
                                        </td>
                                        <td className="con6">
                                            <select
                                                onChange={(e) => {
                                                    fiftyoneFunction1(e, "sep51BM4Policy2", "tab51BM4");
                                                    handlePolicy2(e);
                                                }}
                                                name="bm4"
                                            >
                                                <option value="Enabled">Enabled </option>
                                                <option value="Disabled">Disabled</option>
                                            </select>
                                        </td>
                                        <td className="con6" style={{ textAlign: "center" }}>
                                            <img src="images/tab1.png" id="sep51BM4Policy2" alt="" />
                                        </td>
                                    </tr>
                                    <tr className="con6">

                                        <td className="con6">
                                            Anti-exploit Protection Terminate programs that. exhibit abnormal behavior. associated with exploit attacks
                                        </td>
                                        <td className="con6">
                                            <select
                                                onChange={(e) => {
                                                    fiftyoneFunction1(e, "sep51BM5Policy2", "tab51BM5");
                                                    handlePolicy2(e);
                                                }}
                                                name="bm5"
                                            >
                                                <option value="Enabled">Enabled </option>
                                                <option value="Disabled">Disabled</option>
                                            </select>
                                        </td>
                                        <td className="con6" style={{ textAlign: "center" }}>
                                            <img src="images/tab1.png" id="sep51BM5Policy2" alt="" />
                                        </td>
                                    </tr>
                                    <tr className="con6">
                                        <td className="con6">
                                            Newly Encountered Programs Monitor newly encountered programs downloaded through web or email application channels {"->"} Prompt User
                                        </td>
                                        <td className="con6">
                                            <select
                                                onChange={(e) => {
                                                    fiftyoneFunction1(e, "sep51BM6Policy2", "tab51BM6");
                                                    handlePolicy2(e);
                                                }}
                                                name="bm6"
                                            >
                                                <option value="Enabled">Enabled </option>
                                                <option value="Disabled">Disabled</option>
                                            </select>
                                        </td>
                                        <td className="con6" style={{ textAlign: "center" }}>
                                            <img src="images/tab1.png" id="sep51BM6Policy2" alt="" />
                                        </td>
                                    </tr>
                                    <tr className="con6">
                                        <td className="con6">
                                            Exceptions (specify exception if any)
                                        </td>
                                        <td className="con6">
                                            <select
                                                onChange={(e) => {
                                                    exception51Fun1(e, "sep51BM7Policy2", "tab51BM7");
                                                    handlePolicy2(e);
                                                }}
                                                name="bm7"
                                            >
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select> {" "} exceptions added in Approved Program list
                                        </td>
                                        <td className="con6" style={{ textAlign: "center" }}>
                                            <img src="images/tab1.png" id="sep51BM7Policy2" alt="" />
                                        </td>
                                    </tr>

                                    {/* Predictive Machine Learning */}
                                    <tr className="con6">
                                        <td className="con6" rowSpan={"3"}>Predictive Machine Learning</td>
                                        <td className="con6">Enable</td>
                                        <td className="con6">
                                            <div>
                                                <select
                                                    id="54"
                                                    onChange={(e) => {
                                                        fiftytwoFunction1(e, "sep52Policy2", "tab52");
                                                        handlePolicy2(e);
                                                    }}
                                                    name="predictiveMl"
                                                >
                                                    <option value="Enabled">Enabled</option>
                                                    <option value="Disabled">Disabled</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td className="con6" style={{ textAlign: "center" }}>
                                            <img src="images/tab1.png" id="sep52Policy2" alt="" />
                                        </td>
                                    </tr>

                                    <tr className="con6">
                                        <td className="con6">Action <br /> File: quarantine <br /> Process: Terminate</td>
                                        <td className="con6">
                                            <div>
                                                Action Set <br /> File:{" "}
                                                <select
                                                    id="54"
                                                    onChange={(e) => {
                                                        fiftytwoFunction1(e, "sep52ML1Policy2", "tab52ML1");
                                                        handlePolicy2(e);
                                                    }}
                                                    name="predictiveMl1"
                                                >
                                                    <option value="Quarantine">Quarantine</option>
                                                    <option value="Pass">Pass</option>
                                                    <option value="Clean">Clean</option>
                                                    <option value="Delete">Delete</option>
                                                    <option value="Rename">Rename</option>
                                                </select>
                                            </div>
                                            <div>
                                                Process:{" "}
                                                <select
                                                    id="541"
                                                    onChange={(e) => {
                                                        fiftytwoFunction1(e, "sep52ML1Policy2", "tab52ML1");
                                                        handlePolicy2(e);
                                                    }}
                                                    name="predictiveMl2"
                                                >
                                                    <option value="Terminate">Terminate</option>
                                                    <option value="Pass">Pass</option>
                                                    <option value="Clean">Clean</option>
                                                    <option value="Delete">Delete</option>
                                                    <option value="Rename">Rename</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td className="con6" style={{ textAlign: "center" }}>
                                            <img src="images/tab1.png" id="sep52ML1Policy2" alt="" />
                                        </td>
                                    </tr>

                                    <tr className="con6">

                                        <td className="con6">Exception (specify exception if any)</td>
                                        <td className="con6">
                                            <div>
                                                <select
                                                    onChange={(e) => {
                                                        exception51Fun1(e, "sep52ML2Policy2", "tab52ML2");
                                                        handlePolicy2(e);
                                                    }}
                                                    name="predictiveMl3"
                                                >
                                                    <option value="No">No</option>
                                                    <option value="Yes">Yes</option>
                                                </select> {" "} exceptions added
                                            </div>
                                        </td>


                                        <td className="con6" style={{ textAlign: "center" }}>
                                            <img src="images/tab1.png" id="sep52ML2Policy2" alt="" />
                                        </td>

                                    </tr>


                                </>
                            ) : <>
                                <tr className="con6">
                                    <td className="con6">Behavior Monitoring</td>
                                    <td className="con6">
                                        Enable with Ransomware Protection & Anti-exploit
                                        protection
                                    </td>
                                    <td className="con6">
                                        <select
                                            id="53"
                                            onChange={(e) => {
                                                fiftyoneFunction1(e, "sep51Policy2", "tab51");
                                                handlePolicy2(e);
                                            }}
                                            name="bm"
                                        >
                                            <option value="Enabled with">Enabled with</option>
                                            <option value="Enabled without">Enabled without</option>
                                            <option value="Disabled with">Disabled</option>
                                        </select>{" "}
                                        Ransomeware Protection &
                                        Anti-exploit protection
                                        {" "}
                                        <select
                                            id="53"
                                            onChange={(e) => {
                                                fiftyoneFunction1(e, "sep51Policy2", "tab51");
                                                handlePolicy2(e);
                                            }}
                                            name="bm1"
                                        >
                                            <option value="EnabledAntiExploit">Enabled</option>
                                            <option value="DisabledAntiExploit">Disabled</option>
                                        </select>{" "}

                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src="images/tab1.png" id="sep51Policy2" alt="" />
                                    </td>
                                </tr>
                                <tr className="con6">

                                    <td className="con6">Predictive Machine Learning</td>
                                    <td className="con6">Enable</td>
                                    <td className="con6">
                                        <div>
                                            <select
                                                id="54"
                                                onChange={(e) => {
                                                    fiftytwoFunction1(e, "sep52Policy2", "tab52");
                                                    handlePolicy2(e);
                                                }}
                                                name="predictiveMl"
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src="images/tab1.png" id="sep52Policy2" alt="" />
                                    </td>
                                </tr>
                            </>}


                            <tr className="con6">
                                <td className="con6">Suspicious Connection</td>
                                <td className="con6">Enable with Block option</td>
                                <td className="con6">
                                    <div>
                                        <select
                                            id="55"
                                            onChange={(e) => {
                                                fiftythreeFunction1(e);
                                                handlePolicy2(e);
                                            }}
                                            name="suspicious_Connection"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                        {" "}with Block option.
                                    </div>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep53Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">Vulnerability Protection</td>
                                <td className="con6">Enable</td>
                                <td className="con6">
                                    <div>
                                        <select
                                            id="55"
                                            onChange={(e) => {
                                                vulnerabilityProtectionFun1(e);
                                                handlePolicy2(e);
                                            }}
                                            name="vulnerability_protection"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>

                                        <span id='showVpModesPolicy2'>
                                            {" with "}

                                            <select
                                                id="vp_mode"
                                                onChange={(e) => {
                                                    vulnerabilityProtectionModeFun1(e);
                                                    handlePolicy2(e);
                                                }}
                                                name="vp_mode"
                                            >
                                                <option value="Inline">Inline</option>
                                                <option value="Tap">Tap (Detect-Only)</option>
                                            </select>

                                            {" Mode"}
                                        </span>
                                    </div>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sepVPPolicy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">Device Control</td>
                                <td className="con6">Enable</td>
                                <td className="con6">
                                    <div>
                                        <select
                                            id="55"
                                            onChange={(e) => {
                                                deviceControlFun1(e);
                                                handlePolicy2(e);
                                            }}
                                            name="device_control"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>

                                    </div>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sepDCPolicy2" alt="" />
                                </td>
                            </tr>
                            <tr className="con6">
                                <td className="con6">Web Reputation</td>
                                <td className="con6">
                                    Enable for Internal and External agents with Security Level Medium
                                </td>
                                <td className="con6">
                                    {" "}
                                    <select
                                        id="56Policy2"
                                        name="web_reputation1"
                                        onChange={(e) => {
                                            handlePolicy2(e);
                                            fiftyfourFunction1(e);
                                        }}
                                    >
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                    {" "}
                                    with Security Level
                                    {" "}
                                    <select
                                        id="58Policy2"
                                        name="web_reputation2"
                                        onChange={(e) => {
                                            handlePolicy2(e);
                                            fiftyfourFunction1(e);
                                        }}
                                    >
                                        <option>Medium</option>
                                        <option>High</option>
                                        <option>Low</option>
                                    </select>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep54Policy2" alt="" />
                                </td>
                            </tr>
                            <tr className="con6">
                                <td className="con6">Application Control</td>
                                <td className="con6">Enable</td>
                                <td className="con6">
                                    <div>
                                        <select
                                            id="55"
                                            onChange={(e) => {
                                                applicationControlFun1(e);
                                                handlePolicy2(e);
                                            }}
                                            name="application_control"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>

                                    </div>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sepACPolicy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">Firewall</td>
                                <td className="con6">Enable (Optional)</td>
                                <td className="con6">
                                    <div>
                                        <select
                                            id="59"
                                            name="firewall"
                                            onChange={(e) => {
                                                fiftyfiveFunction1(e);
                                                handlePolicy2(e);
                                            }}
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                    </div>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep55Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">Agent Self-Protection</td>
                                <td className="con6">
                                    Enable Self-Protection with a password.
                                </td>
                                <td className="con6">
                                    <select
                                        id="60"
                                        name="agent_self_protection"
                                        onChange={(e) => {
                                            fiftysixFunction1(e);
                                            handlePolicy2(e);
                                        }}
                                    >
                                        <option>Enabled</option>
                                        <option>Disabled</option>
                                    </select>{" "}
                                    Self-Protection with a password.
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" id="sep56Policy2" alt="" />
                                </td>
                            </tr>

                            <tr className="con6">
                                <td className="con6">Additional Service</td>
                                <td className="con6">Configure respective services</td>
                                <td className="con6">
                                    <p>
                                        <select
                                            id="63"
                                            name="additional_service1"
                                            onChange={handlePolicy2}
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>{" "}
                                        Unauthorized Change Prevention Service for Windows
                                        desktops &{" "}
                                        <select
                                            id="64"
                                            name="additional_service2"
                                            onChange={handlePolicy2}
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>{" "}
                                        Windows Server platforms with full mode.
                                    </p>
                                    <p>
                                        <select
                                            id="65"
                                            name="additional_service3"
                                            onChange={handlePolicy2}
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>{" "}
                                        Firewall Service for Windows desktops &{" "}
                                        <select
                                            id="66"
                                            name="additional_service4"
                                            onChange={handlePolicy2}
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>{" "}
                                        for Windows Server platforms
                                    </p>
                                    <p>
                                        <select
                                            id="67"
                                            name="additional_service5"
                                            onChange={handlePolicy2}
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>{" "}
                                        Suspicious Connection Service for Windows desktops &{" "}
                                        <select
                                            id="68"
                                            name="additional_service6"
                                            onChange={handlePolicy2}
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>{" "}
                                        Windows Server platforms
                                    </p>
                                    <p>
                                        <select
                                            id="69"
                                            name="additional_service7"
                                            onChange={handlePolicy2}
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>{" "}
                                        Data Protection Service for Windows desktops &{" "}
                                        <select
                                            id="70"
                                            name="additional_service8"
                                            onChange={handlePolicy2}
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>{" "}
                                        Windows Server platforms
                                    </p>
                                    <p>
                                        <select
                                            id="71"
                                            name="additional_service9"
                                            onChange={handlePolicy2}
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>{" "}
                                        Advanced Protection Service for Windows desktops and{" "}
                                        <select
                                            id="72"
                                            name="additional_service10"
                                            onChange={handlePolicy2}
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>{" "}
                                        Windows Server platforms
                                    </p>
                                </td>
                                <td className="con6" style={{ textAlign: "center" }}>
                                    <img src="images/tab1.png" alt="" />
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}



