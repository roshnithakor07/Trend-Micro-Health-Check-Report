import React from 'react'
import ExcutiveSummery from "../Logic/ExcutiveSummery"

export default function PolicyOverview1(
    {
        myData: {
            myReportData,
            handleChange,
            handlePolicyOverviewName,
            showComponent,
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
            {/* usePolicyOverview 1 table start */}
            {myReportData.map((element) => (

                <div className="PolicyOverview" id="PolicyOverview" key={element._id}>
                    <div className="head5" id="head5">
                        {showComponent ? (
                            <h2 style={{ color: "red" }} className="report-heading2">
                                5.2.1 Policy overview
                            </h2>
                        ) : (
                            <h2 style={{ color: "red" }} className="report-heading2">
                                5.2 Policy overview
                            </h2>
                        )}

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
                                            defaultValue={element.OverviewPolicyName1}
                                            onChange={(e) => {
                                                handleChange(e);
                                                handlePolicyOverviewName(e);
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
                                                defaultValue={element.agent_scan_mode1}
                                                onChange={(e) => {
                                                    eightFunction(e);
                                                    handleChange(e);

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
                                        <img src={element.tab8} id="sep8" alt="" />
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
                                            defaultValue={element.files_to_Scan1}
                                            onChange={(e) => {
                                                nineFunction(e, "sep9", "tab9", 0);
                                                handleChange(e);
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
                                        <img src={element.tab9} id="sep9" alt="" />
                                    </td>
                                </tr>

                                <tr className="con6">
                                    <td className="con6">Scan Hidden Folders</td>
                                    <td className="con6">
                                        <div>
                                            <select
                                                id="11"
                                                defaultValue={element.scan_hidden_folders1}
                                                onChange={(e) => {
                                                    tenFunction(
                                                        e,
                                                        "sep10",
                                                        "twelve1",
                                                        "tab10",
                                                        "rSummary12",
                                                        rsummary12
                                                    );
                                                    handleChange(e);
                                                }}
                                                name="scan_hidden_folders1"
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab10} id="sep10" alt="" />
                                    </td>
                                </tr>

                                <tr className="con6">
                                    <td className="con6">
                                        Select - Scan compressed files.{">"}Maximium layers:3
                                    </td>
                                    <td className="con6">
                                        Select - Scan compressed files.{">"}Maximium layers:{" "}
                                        <select
                                            id="12"
                                            defaultValue={element.scan_compressed_files1}
                                            onChange={(e) => {
                                                elevenFunction(e, "sep11", "tab11", 3);
                                                handleChange(e);
                                            }}
                                            name="scan_compressed_files1"
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
                                        <img src={element.tab11} id="sep11" alt="" />
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
                                            defaultValue={element.scan_ole_object1}
                                            onChange={(e) => {
                                                elevenFunction(e, "sep12", "tab12", 3);
                                                handleChange(e);
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
                                        <img src={element.tab12} id="sep12" alt="" />
                                    </td>
                                </tr>

                                <tr className="con6">
                                    <td className="con6">
                                        Enable - Detect exploit code in OLE file
                                    </td>
                                    <td className="con6">
                                        <select
                                            defaultValue={element.detect_exploit_code1}
                                            id="14"
                                            onChange={(e) => {
                                                thirteenFunction(e, "sep13", "tab13", 0);
                                                handleChange(e);
                                            }}
                                            name="detect_exploit_code1"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab13} id="sep13" alt="" />
                                    </td>
                                </tr>

                                <tr className="con6">
                                    <td className="con6">
                                        Virus/Malware Scan Settings Only {">"} Scan boot area
                                    </td>
                                    <td className="con6">
                                        <div>
                                            <select
                                                defaultValue={element.virus_scan_settings_only1}
                                                id="15"
                                                onChange={(e) => {
                                                    fourteenFunction(e, "sep14", "tab14", 0);
                                                    handleChange(e);
                                                }}
                                                name="virus_scan_settings_only1"
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab14} id="sep14" alt="" />
                                    </td>
                                </tr>

                                <tr className="con6">
                                    <td className="con6">CPU Usage {">"} Medium</td>
                                    <td className="con6">
                                        <div>
                                            <select
                                                id="16"
                                                defaultValue={element.cpu_usage1}
                                                onChange={(e) => {
                                                    fifteenFunction(e, "sep15", "tab15", 0, 2);
                                                    handleChange(e);
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
                                        <img src={element.tab15} id="sep15" alt="" />
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
                                            name="use_activeAction1"
                                            id="radio1"
                                            value="yes1"
                                            defaultChecked={element.use_activeAction1 === "yes1"}
                                            onChange={(e) => {
                                                handleChange(e);
                                                sixteenFunction(
                                                    e,
                                                    "sep16",
                                                    "tab16",
                                                    0,
                                                    "radio1",
                                                    "radio2", 0
                                                );
                                            }}
                                        />{" "}
                                        Use <b>ActiveAction</b>
                                        <br />
                                        <input
                                            type="checkbox"
                                            value={true}
                                            defaultChecked={element.customize_action_for_porbable_virus_checkbox1}
                                            name="customize_action_for_porbable_virus_checkbox1"
                                            onChange={handleChange}
                                        />{" "}
                                        Customize action for porbable Virus/Malware
                                        <select
                                            name="customize_action_for_porbable_virus_option1"
                                            onChange={handleChange}
                                            defaultValue={element.customize_action_for_porbable_virus_option1}
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
                                            name="use_activeAction1"
                                            defaultChecked={element.use_activeAction1 === "yes2"}
                                            id="radio2"
                                            value="yes2"
                                            onChange={(e) => {
                                                handleChange(e);
                                                sixteenFunction(
                                                    e,
                                                    "sep16",
                                                    "tab16",
                                                    0,
                                                    "radio1",
                                                    "radio2", 0
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
                                                            defaultValue={element.first_action1}
                                                            name="first_action1"
                                                            onChange={handleChange}
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
                                                            defaultValue={element.second_action1}
                                                            onChange={handleChange}
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
                                            name="use_activeAction1"
                                            id="radio3"
                                            defaultChecked={element.use_activeAction1 === "yes3"}
                                            value={"yes3"}
                                            onChange={(e) => {
                                                handleChange(e);
                                                sixteenFunction(
                                                    e,
                                                    "sep16",
                                                    "tab16",
                                                    0,
                                                    "radio1",
                                                    "radio2", 0
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
                                                            defaultValue={element.joke1}
                                                            onChange={handleChange}
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
                                                            defaultValue={element.trojans1}
                                                            onChange={handleChange}
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
                                                            defaultValue={element.virus11}
                                                            onChange={handleChange}
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
                                                            defaultValue={element.virus21}
                                                            onChange={handleChange}
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
                                                            defaultValue={element.test_virus1}
                                                            onChange={handleChange}
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
                                                            defaultValue={element.packer1}
                                                            onChange={handleChange}
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
                                                            defaultValue={element.probable_malware11}
                                                            name="probable_malware11"
                                                            onChange={handleChange}
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
                                                            defaultValue={element.probable_malware21}
                                                            name="probable_malware21"
                                                            onChange={handleChange}
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
                                                            defaultValue={element.other_malware11}
                                                            name="other_malware11"
                                                            onChange={handleChange}
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
                                                            defaultValue={element.other_malware21}
                                                            onChange={handleChange}
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
                                        <img src={element.tab16} id="sep16" alt="" />
                                    </td>
                                </tr>
                                <tr className="con6">
                                    <td className="con6">
                                        Select - Back up files before cleaning.
                                    </td>
                                    <td className="con6">
                                        <select
                                            id="18"
                                            defaultValue={element.back_up_files1}
                                            onChange={(e) => {
                                                seventeenFunction(e, "sep17", "tab17", 0);
                                                handleChange(e);
                                            }}
                                            name="back_up_files1"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab17} id="sep17" alt="" />
                                    </td>
                                </tr>

                                <tr className="con6">
                                    <td className="con6">
                                        Enable - Damage Cleanup Services with Advanced clean up
                                    </td>
                                    <td className="con6">
                                        <select
                                            id="19"
                                            defaultValue={element.damage_cleanup_services11}
                                            onChange={(e) => {
                                                eighteenFunction(e, "sep18", "tab18", 0, "19", "20");
                                                handleChange(e);
                                            }}
                                            name="damage_cleanup_services11"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>{" "}
                                        Damage Clean-up Services with{" "}
                                        <select
                                            id="20"
                                            defaultValue={element.damage_cleanup_services21}
                                            onChange={(e) => {
                                                eighteenFunction(e, "sep18", "tab18", 0, "19", "20");
                                                handleChange(e);
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
                                        <img src={element.tab18} id="sep18" alt="" />
                                    </td>
                                </tr>

                                <tr className="con6">
                                    <td className="con6">
                                        Enable - Run cleanup when Probable virus/malware is detected
                                    </td>
                                    <td className="con6">
                                        <select
                                            id="21"
                                            defaultValue={element.run_cleanup1}
                                            onChange={(e) => {
                                                nineteenFunction(e, "sep19", "tab19", 0);
                                                handleChange(e);
                                            }}
                                            name="run_cleanup1"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab19} id="sep19" alt="" />
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
                                            defaultValue={element.apex_one_terminates_processes1}
                                            onChange={(e) => {
                                                twentyFunction(e, "sep20", "tab20", 0);
                                                handleChange(e);
                                            }}
                                            name="apex_one_terminates_processes1"
                                        >
                                            <option value="Clean">Clean</option>
                                            <option value="Pass">Pass</option>
                                            <option value="Deny">Deny</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab20} id="sep20" alt="" />
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
                                            defaultValue={element.virus_scan2}
                                            onChange={(e) => {
                                                twentyoneFunction(e, "sep21", "tab21", 1);
                                                handleChange(e);
                                            }}
                                            name="virus_scan2"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab21} id="sep21" alt="" />
                                    </td>
                                </tr>

                                <tr className="con6">
                                    <td className="con6">Enable -spyware/Grayware scan</td>
                                    <td className="con6">
                                        <select
                                            id="24"
                                            defaultValue={element.spyware_scan2}
                                            onChange={(e) => {
                                                twentytwoFunction(e, "sep22", "tab22", 1);
                                                handleChange(e);
                                            }}
                                            name="spyware_scan2"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab22} id="sep22" alt="" />
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
                                                twentythreeFunction(e);
                                                handleChange(e);
                                            }}
                                            defaultValue={element.user_activity_on_files2}
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
                                        <img src={element.tab23} id="sep23" alt="" />
                                    </td>
                                </tr>

                                <tr className="con6">
                                    <td className="con6">
                                        Files to Scan {">"} All Scannable files
                                    </td>
                                    <td className="con6">
                                        <select
                                            id="26"
                                            defaultValue={element.files_to_scan2}
                                            onChange={(e) => {
                                                nineFunction(e, "sep24", "tab24", 1);
                                                handleChange(e);
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
                                        <img src={element.tab24} id="sep24" alt="" />
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
                                            defaultValue={element.enable12}
                                            onChange={(e) => {
                                                tenFunction(
                                                    e,
                                                    "sep26",
                                                    "twentyfive1",
                                                    "tab26",
                                                    "rSummary25",
                                                    rsummary25
                                                );
                                                handleChange(e);
                                            }}
                                            name="enable12"
                                        >
                                            <option id="Enabled">Enabled</option>
                                            <option id="Disabled">Disabled</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab26} id="sep26" alt="" />
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
                                            defaultValue={element.enable22}
                                            onChange={(e) => {
                                                tenFunction(
                                                    e,
                                                    "sep27",
                                                    "twentysix1",
                                                    "tab27",
                                                    "rSummary26",
                                                    rsummary26
                                                );
                                                handleChange(e);
                                            }}
                                            name="enable22"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab27} id="sep27" alt="" />
                                    </td>
                                </tr>

                                <tr className="con6">
                                    <td className="con6">
                                        Enable - Quarantine malware variants detected in memory.
                                    </td>
                                    <td className="con6">
                                        <select
                                            id="30"
                                            defaultValue={element.enable32}
                                            onChange={(e) => {
                                                tenFunction(
                                                    e,
                                                    "sep28",
                                                    "twentyseven1",
                                                    "tab28",
                                                    "rSummary27",
                                                    rsummary27
                                                );
                                                handleChange(e);
                                            }}
                                            name="enable32"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab28} id="sep28" alt="" />
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
                                            defaultValue={element.scan_compressed_files2}
                                            onChange={(e) => {
                                                elevenFunction(e, "sep29", "tab29", 2);
                                                handleChange(e);
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
                                        <img src={element.tab29} id="sep29" alt="" />
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
                                            defaultValue={element.scan_ole_objects2}
                                            onChange={(e) => {
                                                elevenFunction(e, "sep30", "tab30", 3);
                                                handleChange(e);
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
                                        <img src={element.tab30} id="sep30" alt="" />
                                    </td>
                                </tr>

                                <tr className="con6">
                                    <td className="con6">
                                        Enable - Detect exploit code in OLE files.
                                    </td>
                                    <td className="con6">
                                        <select
                                            defaultValue={element.detect_exploit_code_in_ole_files2}
                                            id="33"
                                            onChange={(e) => {
                                                thirteenFunction(e, "sep31", "tab31", 1);
                                                handleChange(e);
                                            }}
                                            name="detect_exploit_code_in_ole_files2"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab31} id="sep31" alt="" />
                                    </td>
                                </tr>
                                <tr className="con6">
                                    <td className="con6">Enable - CVE exploit scanning</td>
                                    <td className="con6">
                                        <select
                                            id="34"
                                            defaultValue={element.cvf_exploit_scanning2}
                                            onChange={(e) => {
                                                tenFunction(
                                                    e,
                                                    "sep32",
                                                    "twentyeight1",
                                                    "tab32",
                                                    "rSummary28",
                                                    rsummary28
                                                );
                                                handleChange(e);
                                            }}
                                            name="cvf_exploit_scanning2"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab32} id="sep32" alt="" />
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
                                            defaultChecked={element.use_activeAction2 === "yes1"}
                                            name="use_activeAction2"
                                            id="radio4"
                                            onChange={(e) => {
                                                sixteenFunction(
                                                    e,
                                                    "sep33",
                                                    "tab33",
                                                    1,
                                                    "radio4",
                                                    "radio5", 1
                                                );
                                                handleChange(e);
                                            }}
                                        />{" "}
                                        Use <b>ActiveAction</b>
                                        <br />
                                        <input
                                            type="checkbox"
                                            defaultChecked={element.customize_action_for_porbable_virus_checkbox2}
                                            name="customize_action_for_porbable_virus_checkbox2"
                                            onChange={handleChange}
                                        />
                                        Customize action for porbable Virus/Malware{" "}
                                        <select
                                            name="customize_action_for_porbable_virus_option2"
                                            onChange={handleChange}
                                            defaultValue={element.customize_action_for_porbable_virus_option2}
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
                                            name="use_activeAction2"
                                            defaultChecked={element.use_activeAction2 === "yes2"}
                                            value={"yes2"}
                                            id="radio5"
                                            onChange={(e) => {
                                                sixteenFunction(
                                                    e,
                                                    "sep33",
                                                    "tab33",
                                                    1,
                                                    "radio4",
                                                    "radio5", 1
                                                );
                                                handleChange(e);
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
                                                            defaultValue={element.first_action2}
                                                            onChange={handleChange}
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
                                                            defaultValue={element.second_action2}
                                                            onChange={handleChange}
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
                                            name="use_activeAction2"
                                            defaultChecked={element.use_activeAction2 === "yes3"}
                                            id="radio6"
                                            onChange={(e) => {
                                                sixteenFunction(
                                                    e,
                                                    "sep33",
                                                    "tab33",
                                                    1,
                                                    "radio4",
                                                    "radio5", 1
                                                );
                                                handleChange(e);
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
                                                            defaultValue={element.joke2}
                                                            onChange={handleChange}
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
                                                            defaultValue={element.trojans2}
                                                            name="trojans2"
                                                            onChange={handleChange}
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
                                                            defaultValue={element.virus12}
                                                            onChange={handleChange}
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
                                                            defaultValue={element.virus22}
                                                            onChange={handleChange}
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
                                                            defaultValue={element.test_virus2}
                                                            onChange={handleChange}
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
                                                            defaultValue={element.packer2}
                                                            onChange={handleChange}
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
                                                            defaultValue={element.probable_malware12}
                                                            name="probable_malware12"
                                                            onChange={handleChange}
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
                                                            defaultValue={element.probable_malware22}
                                                            onChange={handleChange}
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
                                                            defaultValue={element.other_malware12}
                                                            name="other_malware12"
                                                            onChange={handleChange}
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
                                                            defaultValue={element.other_malware22}
                                                            onChange={handleChange}
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
                                        <img src={element.tab33} id="sep33" alt="" />
                                    </td>
                                </tr>

                                <tr className="con6">
                                    <td className="con6">
                                        Enable - Back up files before cleaning.
                                    </td>
                                    <td className="con6">
                                        <select
                                            id="36"
                                            defaultValue={element.back_up_files2}
                                            onChange={(e) => {
                                                seventeenFunction(e, "sep34", "tab34", 1);
                                                handleChange(e);
                                            }}
                                            name="back_up_files2"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab34} id="sep34" alt="" />
                                    </td>
                                </tr>
                                <tr className="con6">
                                    <td className="con6">
                                        Enable - Run cleanup when probable virus/malware is detected
                                    </td>
                                    <td className="con6">
                                        <select
                                            id="37"
                                            defaultValue={element.run_cleanup2}
                                            onChange={(e) => {
                                                nineteenFunction(e, "sep35", "tab35", 1);
                                                handleChange(e);
                                            }}
                                            name="run_cleanup2"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab35} id="sep35" alt="" />
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
                                            defaultValue={element.apex_one_terminates_processes2}
                                            onChange={(e) => {
                                                twentyFunction(e, "sep36", "tab36", 1);
                                                handleChange(e);
                                            }}
                                            name="apex_one_terminates_processes2"
                                        >
                                            <option value="Clean">Clean</option>
                                            <option value="Pass">Pass</option>
                                            {/* <option value="Deny">Deny</option> */}
                                        </select>{" "}
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab36} id="sep36" alt="" />
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
                                            defaultValue={element.virus_scan3}
                                            onChange={(e) => {
                                                twentyoneFunction(e, "sep37", "tab37", 2);
                                                handleChange(e);
                                            }}
                                            name="virus_scan3"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab37} id="sep37" alt="" />
                                    </td>
                                </tr>

                                <tr className="con6">
                                    <td className="con6">Enable -spyware/Grayware scan</td>
                                    <td className="con6">
                                        <select
                                            id="40"
                                            onChange={(e) => {
                                                twentytwoFunction(e, "sep38", "tab38", 2);
                                                handleChange(e);
                                            }}
                                            defaultValue={element.spyware_scan3}
                                            name="spyware_scan3"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab38} id="sep38" alt="" />
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
                                            defaultChecked={element.configure_schedule_scan_checkbox3 === "daily"}
                                            name="configure_schedule_scan_checkbox3"
                                            id="radio10"
                                            onChange={(e) => {
                                                thirtynineFunction(e);
                                                handleChange(e);
                                            }}
                                        /> Daily
                                        &nbsp;Start time:{" "}
                                        <input
                                            type="time"
                                            defaultValue={element.configure_schedule_scan_time3}
                                            name="configure_schedule_scan_time3"
                                            onChange={handleChange}
                                        />
                                        <br />
                                        <input
                                            type="radio"
                                            value={"weeklyEvery"}
                                            defaultChecked={element.configure_schedule_scan_checkbox3 === "weeklyEvery"}
                                            name="configure_schedule_scan_checkbox3"
                                            id="radio11"
                                            onChange={(e) => {
                                                thirtynineFunction(e);
                                                handleChange(e);
                                            }}
                                        />
                                        {" "}
                                        Weekly Every
                                        {" "}
                                        <select
                                            name="configure_schedule_scan_weekevery3"
                                            onChange={handleChange}
                                            defaultValue={element.configure_schedule_scan_weekevery3}>
                                            <option>Monday</option>
                                            <option>Tuesday</option>
                                            <option>Wednesday</option>
                                            <option>Thrusday</option>
                                            <option>Friday</option>
                                            <option>Saturday</option>
                                            <option>Sunday</option>
                                        </select>
                                        &nbsp;Start time:{" "}
                                        <input
                                            type="time"
                                            defaultValue={element.configure_schedule_scan_time3}
                                            name="configure_schedule_scan_time3"
                                            onChange={handleChange}
                                        />
                                        <br />
                                        <input
                                            type="radio"
                                            value={"monthlyDay"}
                                            defaultChecked={element.configure_schedule_scan_checkbox3 === "monthlyDay"}
                                            name="configure_schedule_scan_checkbox3"
                                            id="radio12"
                                            onChange={(e) => {
                                                thirtynineFunction(e);
                                                handleChange(e);
                                            }}
                                        />{" "}
                                        Monthly,on day {" "}
                                        <select
                                            name="configure_schedule_scan_month3"
                                            defaultValue={element.configure_schedule_scan_month3}
                                            onChange={handleChange}
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
                                            defaultValue={element.configure_schedule_scan_time3}
                                            name="configure_schedule_scan_time3"
                                            onChange={handleChange}
                                        />
                                        <br />
                                        <input
                                            type="radio"
                                            value={"monthlyOnDay"}
                                            defaultChecked={element.configure_schedule_scan_checkbox3 === "monthlyOnDay"}
                                            name="configure_schedule_scan_checkbox3"
                                            id="radio13"
                                            onChange={(e) => {
                                                thirtynineFunction(e);
                                                handleChange(e);
                                            }}
                                        />{" "}
                                        Monthly, On the{" "}
                                        <select
                                            name="configure_schedule_scan_date3"
                                            defaultValue={element.configure_schedule_scan_date3}
                                            onChange={handleChange}
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
                                            onChange={handleChange}
                                            defaultValue={element.configure_schedule_scan_day3}
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
                                            defaultValue={element.configure_schedule_scan_time3}
                                            name="configure_schedule_scan_time3"
                                            onChange={handleChange}
                                        />
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab39} id="sep39" alt="" />
                                    </td>
                                </tr>

                                <tr className="con6">
                                    <td className="con6">
                                        Files to Scan {">"} All Scannable files
                                    </td>
                                    <td className="con6">
                                        <select
                                            id="42"
                                            defaultValue={element.filestoscan3}
                                            onChange={(e) => {
                                                nineFunction(e, "sep40", "tab40", 2);
                                                handleChange(e);
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
                                        <img src={element.tab40} id="sep40" alt="" />
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
                                            defaultValue={element.scan_compressed_files3}
                                            onChange={(e) => {
                                                elevenFunction(e, "sep41", "tab41", 2);
                                                handleChange(e);
                                            }}
                                            name="scan_compressed_files3"
                                        >
                                            <option value="2">2</option>
                                            <option value="1">1</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab41} id="sep41" alt="" />
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
                                            defaultValue={element.scanoleobjects3}
                                            onChange={(e) => {
                                                elevenFunction(e, "sep42", "tab42", 3);
                                                handleChange(e);
                                            }}
                                            name="scanoleobjects3"
                                        >
                                            <option value="3">3</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab42} id="sep42" alt="" />
                                    </td>
                                </tr>

                                <tr className="con6">
                                    <td className="con6">
                                        Enable - Detect exploit code in OLE files.
                                    </td>
                                    <td className="con6">
                                        <select
                                            id="45"
                                            defaultValue={element.detect_exploit_code3}
                                            onChange={(e) => {
                                                thirteenFunction(e, "sep43", "tab43", 2);
                                                handleChange(e);
                                            }}
                                            name="detect_exploit_code3"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab43} id="sep43" alt="" />
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
                                            defaultValue={element.scan_boot_area3}
                                            onChange={(e) => {
                                                fourteenFunction(e, "sep44", "tab44", 2);
                                                handleChange(e);
                                            }}
                                            name="scan_boot_area3"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>{" "}
                                        Scan boot area
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab44} id="sep44" alt="" />
                                    </td>
                                </tr>
                                <tr className="con6">
                                    <td className="con6">CPU Usage {">"} Medium</td>
                                    <td className="con6">
                                        <select
                                            id="47"
                                            defaultValue={element.cpu_usage3}
                                            onChange={(e) => {
                                                fifteenFunction(e, "sep45", "tab45", 2, 3);
                                                handleChange(e);
                                            }}
                                            name="cpu_usage3"
                                        >
                                            <option value="Medium">Medium</option>
                                            <option value="High">High</option>
                                            <option value="Low">Low</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab45} id="sep45" alt="" />
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
                                            value="yes1"
                                            name="use_activeAction3"
                                            defaultChecked={element.use_activeAction3 === "yes1"}
                                            id="radio7"
                                            onChange={(e) => {
                                                handleChange(e);
                                                sixteenFunction(
                                                    e,
                                                    "sep46",
                                                    "tab46",
                                                    2,
                                                    "radio7",
                                                    "radio8"
                                                );
                                            }}
                                        />{" "}
                                        Use <b>ActiveAction</b>
                                        <br />
                                        <input
                                            type="checkbox"
                                            name="customize_action_for_porbable_virus_checkbox3"
                                            onChange={handleChange}
                                        />
                                        Customize action for porbable Virus/Malware{" "}
                                        <select
                                            name="customize_action_for_porbable_virus_option3"
                                            onChange={handleChange}
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
                                            value="yes2"
                                            name="use_activeAction3"
                                            defaultChecked={element.use_activeAction3 === "yes2"}
                                            id="radio8"
                                            onChange={(e) => {
                                                handleChange(e);
                                                sixteenFunction(
                                                    e,
                                                    "sep46",
                                                    "tab46",
                                                    2,
                                                    "radio7",
                                                    "radio8"
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
                                                            defaultValue={element.first_action2}
                                                            onChange={handleChange}
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
                                                            defaultValue={element.second_action2}
                                                            name="second_action2"
                                                            onChange={handleChange}
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
                                            value="yes3"
                                            name="use_activeAction3"
                                            defaultChecked={element.use_activeAction3 === "yes3"}
                                            id="radio9"
                                            onChange={(e) => {
                                                handleChange(e);
                                                sixteenFunction(
                                                    e,
                                                    "sep46",
                                                    "tab46",
                                                    2,
                                                    "radio7",
                                                    "radio8"
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
                                                            defaultValue={element.joke3}
                                                            onChange={handleChange}
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
                                                            defaultValue={element.trojans3}
                                                            onChange={handleChange}
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
                                                            defaultValue={element.virus13}
                                                            onChange={handleChange}
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
                                                            defaultValue={element.virus23}
                                                            onChange={handleChange}
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
                                                            defaultValue={element.test_virus3}
                                                            onChange={handleChange}
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
                                                            defaultValue={element.packer3}
                                                            onChange={handleChange}
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
                                                            defaultValue={element.probable_malware13}
                                                            name="probable_malware13"
                                                            onChange={handleChange}
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
                                                            defaultValue={element.probable_malware23}
                                                            name="probable_malware23"
                                                            onChange={handleChange}
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
                                                            defaultValue={element.other_malware13}
                                                            name="other_malware13"
                                                            onChange={handleChange}
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
                                                            defaultValue={element.other_malware23}
                                                            name="other_malware23"
                                                            onChange={handleChange}
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
                                        <img src={element.tab46} id="sep46" alt="" />
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
                                            defaultValue={element.back_up_files3}
                                            name="back_up_files3"
                                            onChange={(e) => {
                                                seventeenFunction(e, "sep47", "tab47", 2);
                                                handleChange(e);
                                            }}
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab47} id="sep47" alt="" />
                                    </td>
                                </tr>
                                <tr className="con6">
                                    <td className="con6">
                                        Enable - Damage Cleanup Services (ADVANCED)
                                    </td>
                                    <td className="con6">
                                        <select
                                            id="damage_cleanup_services13"
                                            name="damage_cleanup_services13"
                                            defaultValue={element.damage_cleanup_services13}
                                            onChange={(e) => {
                                                eighteenFunction(
                                                    e,
                                                    "sep48",
                                                    "tab48",
                                                    2,
                                                    "damage_cleanup_services13",
                                                    "damage_cleanup_services23"
                                                );
                                                handleChange(e);
                                            }}
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                        Damage Clean-up Services with{" "}
                                        <select
                                            id="damage_cleanup_services23"
                                            defaultValue={element.damage_cleanup_services23}
                                            onChange={(e) => {
                                                eighteenFunction(
                                                    e,
                                                    "sep48",
                                                    "tab48",
                                                    2,
                                                    "damage_cleanup_services13",
                                                    "damage_cleanup_services23"
                                                );
                                                handleChange(e);
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
                                        <img src={element.tab48} id="sep48" alt="" />
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
                                            defaultValue={element.run_cleanup3}
                                            onChange={(e) => {
                                                nineteenFunction(e, "sep49", "tab49", 2);
                                                handleChange(e);
                                            }}
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab49} id="sep49" alt="" />
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
                                            defaultValue={element.apex_one_terminates_processes3}
                                            name="apex_one_terminates_processes3"
                                            onChange={(e) => {
                                                twentyFunction(e, "sep50", "tab50", 2);
                                                handleChange(e);
                                            }}
                                        >
                                            <option value="Clean">Clean</option>
                                            <option value="Pass">Pass</option>
                                            {/* <option value="Deny">Deny</option> */}
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab50} id="sep50" alt="" />
                                    </td>
                                </tr>

                                {/* Schedule Scan-Action Settings ends */}

                                {/* Behavior Monitoring starts */}
                                <tr className="con6">
                                    <td className="con6">Behavior Monitoring</td>
                                    <td className="con6">
                                        Enable with Ransomware Protection & Anti-exploit protection
                                    </td>
                                    <td className="con6">
                                        <select
                                            id="53"
                                            defaultValue={element.bm}
                                            onChange={(e) => {
                                                fiftyoneFunction(e);
                                                handleChange(e);
                                            }}
                                            name="bm"
                                        >
                                            <option value="Enabled with">Enabled with</option>
                                            <option value="Enabled without">Enabled without</option>
                                            <option value="Disabled with">Disabled</option>
                                        </select>{" "}
                                        Ransomware Protection & Anti-exploit protection
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab51} id="sep51" alt="" />
                                    </td>
                                </tr>
                                <tr className="con6">
                                    <td className="con6">Predictive Machine Learning</td>
                                    <td className="con6">Enable</td>
                                    <td className="con6">
                                        <div>
                                            <select
                                                id="54"
                                                defaultValue={element.predictiveMl}
                                                onChange={(e) => {
                                                    fiftytwoFunction(e);
                                                    handleChange(e);
                                                }}
                                                name="predictiveMl"
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab52} id="sep52" alt="" />
                                    </td>
                                </tr>
                                <tr className="con6">
                                    <td className="con6">Suspicious Connection</td>
                                    <td className="con6">Enable with Block option</td>
                                    <td className="con6">
                                        <div>
                                            <select
                                                id="55"
                                                defaultValue={element.suspicious_Connection}
                                                onChange={(e) => {
                                                    fiftythreeFunction(e);
                                                    handleChange(e);
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
                                        <img src={element.tab53} id="sep53" alt="" />
                                    </td>
                                </tr>

                                <tr className="con6">
                                    <td className="con6">Vulnerability Protection</td>
                                    <td className="con6">Enable</td>
                                    <td className="con6">
                                        <div>
                                            <select
                                                id="55"
                                                defaultValue={element.vulnerability_protection}
                                                onChange={(e) => {
                                                    vulnerabilityProtectionFun(e);
                                                    handleChange(e);
                                                }}
                                                name="vulnerability_protection"
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>

                                        </div>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tabVP} id="sepVP" alt="" />
                                    </td>
                                </tr>

                                <tr className="con6">
                                    <td className="con6">Device Control</td>
                                    <td className="con6">Enable</td>
                                    <td className="con6">
                                        <div>
                                            <select
                                                id="55"
                                                defaultValue={element.device_control}
                                                onChange={(e) => {
                                                    deviceControlFun(e);
                                                    handleChange(e);
                                                }}
                                                name="device_control"
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>

                                        </div>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tabDC} id="sepDC" alt="" />
                                    </td>
                                </tr>
                                <tr className="con6">
                                    <td className="con6">Web Reputation</td>
                                    <td className="con6">
                                        Enable with Security Level Medium
                                    </td>
                                    <td className="con6">
                                        {" "}
                                        <select
                                            id="56"
                                            defaultValue={element.web_reputation1}
                                            name="web_reputation1"
                                            onChange={(e) => {
                                                handleChange(e);
                                                fiftyfourFunction(e);
                                            }}
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                        {" "}
                                        with Security Level
                                        {" "}
                                        <select
                                            id="58"
                                            defaultValue={element.web_reputation2}
                                            name="web_reputation2"
                                            onChange={(e) => {
                                                handleChange(e);
                                                fiftyfourFunction(e);
                                            }}
                                        >
                                            <option>Medium</option>
                                            <option>High</option>
                                            <option>Low</option>
                                        </select>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab54} id="sep54" alt="" />
                                    </td>
                                </tr>
                                <tr className="con6">
                                    <td className="con6">Application Control</td>
                                    <td className="con6">Enable</td>
                                    <td className="con6">
                                        <div>
                                            <select
                                                id="55"
                                                defaultValue={element.application_control}
                                                onChange={(e) => {
                                                    applicationControlFun(e);
                                                    handleChange(e);
                                                }}
                                                name="application_control"
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>

                                        </div>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tabAC} id="sepAC" alt="" />
                                    </td>
                                </tr>

                                <tr className="con6">
                                    <td className="con6">Firewall</td>
                                    <td className="con6">Enable (Optional)</td>
                                    <td className="con6">
                                        <div>
                                            <select
                                                id="59"
                                                defaultValue={element.firewall}
                                                name="firewall"
                                                onChange={(e) => {
                                                    fiftyfiveFunction(e);
                                                    handleChange(e);
                                                }}
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab55} id="sep55" alt="" />
                                    </td>
                                </tr>

                                <tr className="con6">
                                    <td className="con6">Agent Self-Protection</td>
                                    <td className="con6">
                                        Enable Self-Protection with a password
                                    </td>
                                    <td className="con6">
                                        <select
                                            id="60"
                                            defaultValue={element.agent_self_protection}
                                            name="agent_self_protection"
                                            onChange={(e) => {
                                                fiftysixFunction(e);
                                                handleChange(e);
                                            }}
                                        >
                                            <option>Enabled</option>
                                            <option>Disabled</option>
                                        </select>{" "}
                                        Self-Protection with a password.
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab56} id="sep56" alt="" />
                                    </td>
                                </tr>

                                <tr className="con6">
                                    <td className="con6">Additional Service</td>
                                    <td className="con6">Configure respective services</td>
                                    <td className="con6" onChange={fiftynineFunction}>
                                        <p>
                                            <select
                                                id="63"
                                                defaultValue={element.additional_service1}
                                                name="additional_service1"
                                                onChange={handleChange}
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>{" "}
                                            Unauthorized Change Prevention Service for Windows
                                            desktops &{" "}
                                            <select
                                                id="64"
                                                defaultValue={element.additional_service2}
                                                name="additional_service2"
                                                onChange={handleChange}
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>{" "}
                                            Windows Server platforms with full mode.
                                        </p>
                                        <p>
                                            <select
                                                id="65"
                                                defaultValue={element.additional_service3}
                                                name="additional_service3"
                                                onChange={handleChange}
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>{" "}
                                            Firewall Service for Windows desktops &{" "}
                                            <select
                                                id="66"
                                                defaultValue={element.additional_service4}
                                                name="additional_service4"
                                                onChange={handleChange}
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>{" "}
                                            for Windows Server platforms
                                        </p>
                                        <p>
                                            <select
                                                id="67"
                                                defaultValue={element.additional_service5}
                                                name="additional_service5"
                                                onChange={handleChange}
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>{" "}
                                            Suspicious Connection Service for Windows desktops &{" "}
                                            <select
                                                id="68"
                                                name="additional_service6"
                                                defaultValue={element.additional_service6}
                                                onChange={handleChange}
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>{" "}
                                            Windows Server platforms
                                        </p>
                                        <p>
                                            <select
                                                id="69"
                                                defaultValue={element.additional_service7}
                                                name="additional_service7"
                                                onChange={handleChange}
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>{" "}
                                            Data Protection Service for Windows desktops &{" "}
                                            <select
                                                id="70"
                                                defaultValue={element.additional_service8}
                                                name="additional_service8"

                                                onChange={handleChange}
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>{" "}
                                            Windows Server platforms
                                        </p>
                                        <p>
                                            <select
                                                id="71"
                                                defaultValue={element.additional_service9}
                                                name="additional_service9"
                                                onChange={handleChange}
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>{" "}
                                            Advanced Protection Service for Windows desktops and{" "}
                                            <select
                                                id="72"
                                                defaultValue={element.additional_service10}
                                                name="additional_service10"
                                                onChange={handleChange}
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>{" "}
                                            Windows Server platforms
                                        </p>
                                    </td>
                                    <td className="con6" style={{ textAlign: "center" }}>
                                        <img src={element.tab59} id="sep59" alt="" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            ))}
            {/* usePolicyOverview 1 table end */}
        </>
    )
}
