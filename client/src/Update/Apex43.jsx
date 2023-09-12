import React from 'react'
import moment from "moment";

export default function Apex43({ myData: {
    myReportData,
    handleChange,
    visible,
    SixtyFunction,
    Sixty60Function,
    sixtyoneFunction,
    sixtytwoFunction,
    sixtythreeFunction,
    sixtyfourFunction,
    sixtyfiveFunction,
    sixtysixFunction,
    sixtysevenFunction,
} }) {
    return (
        <>
            {myReportData.map((element) => (
                <div className="ApexCentral" id="ApexCentral" key={element._id}>
                    <div className="container13" id="head6">
                        <h2 style={{ color: "red" }} className="report-heading2">
                            5.3 Apex Central Configuration Overview
                        </h2>
                        <table className="table1" id="documentV">
                            <thead>
                                <tr className="one">
                                    <th>Component</th>
                                    <th>Trend Recommended</th>
                                    <th>Deployed</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {visible && (
                                    <>
                                        <tr>
                                            <td>Version</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    id="version3"
                                                    name="version3"
                                                    defaultValue={element.version3}
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                        SixtyFunction(e);
                                                    }}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    id="version4"
                                                    defaultValue={element.version4}
                                                    onChange={(e) => {
                                                        SixtyFunction(e);
                                                        handleChange(e);
                                                    }}
                                                    name="version4"
                                                />
                                            </td>
                                            <td style={{ textAlign: "center" }}>
                                                <img src={element.tab60} id="sep60" alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>License</td>
                                            <td>Within Term</td>
                                            <td>
                                                <input
                                                    type="date"
                                                    id="9898"
                                                    defaultValue={moment(element.license_date2).format("YYYY-MM-DD")}
                                                    onChange={(e) => {
                                                        Sixty60Function(e);
                                                        handleChange(e);
                                                    }}
                                                    name="license_date2"
                                                />
                                            </td>
                                            <td style={{ textAlign: "center" }}>
                                                <img src={element.tab6060} alt="" id="sep6060" />
                                            </td>
                                        </tr>
                                    </>
                                )}

                                <tr>
                                    <td>Active Directory Sync</td>
                                    <td>Configure</td>
                                    <td>
                                        <div>
                                            <select
                                                id="75"
                                                defaultValue={element.active_directory}
                                                onChange={(e) => {
                                                    sixtyoneFunction(e);
                                                    handleChange(e);
                                                }}
                                                name="active_directory"
                                            >
                                                <option value="Configured">Configured</option>
                                                <option value="Not Configured">Not Configured</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <img src={element.tab61} id="sep61" alt="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Log Retention</td>
                                    <td>Configure</td>
                                    <td>
                                        <div>
                                            <select
                                                id="76"
                                                defaultValue={element.log_retention}
                                                onChange={(e) => {
                                                    sixtytwoFunction(e);
                                                    handleChange(e);
                                                }}
                                                name="log_retention"
                                            >
                                                <option value="configured">Configured</option>
                                                <option value="not configured">Not Configured</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <img src={element.tab62} id="sep62" alt="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Reports</td>
                                    <td>Configure</td>
                                    <td>
                                        <div>
                                            <select
                                                id="77"
                                                onChange={(e) => {
                                                    sixtythreeFunction(e);
                                                    handleChange(e);
                                                }}
                                                defaultValue={element.reports}
                                                name="reports"
                                            >
                                                <option value="Configured">Configured</option>
                                                <option value="Not Configured">Not Configured</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <img src={element.tab63} id="sep63" alt="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Event Notification</td>
                                    <td>Enable</td>
                                    <td>
                                        <div>
                                            <select
                                                id="78"
                                                defaultValue={element.event_notification}
                                                onChange={(e) => {
                                                    sixtyfourFunction(e);
                                                    handleChange(e);
                                                }}
                                                name="event_notification"
                                            >
                                                <option value="Enabled">Enabled</option>
                                                <option value="Disabled">Disabled</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <img src={element.tab64} id="sep64" alt="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Syslog</td>
                                    <td>Configure</td>
                                    <td>
                                        <div>
                                            <select
                                                id="79"
                                                onChange={(e) => {
                                                    sixtyfiveFunction(e);
                                                    handleChange(e);
                                                }}
                                                defaultValue={element.syslog}
                                                name="syslog"
                                            >
                                                <option value="Configured">Configured</option>
                                                <option value="Not Configured">Not Configured</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <img src={element.tab65} id="sep65" alt="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Report Maintenance</td>
                                    <td>Configure</td>
                                    <td>
                                        <div>
                                            <select
                                                id="80"
                                                defaultValue={element.report_maintenance}
                                                onChange={(e) => {
                                                    sixtysixFunction(e);
                                                    handleChange(e);
                                                }}
                                                name="report_maintenance"
                                            >
                                                <option value="Configured">Configured</option>
                                                <option value="Not Configured">Not Configured</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <img src={element.tab56} id="sep66" alt="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Product Registration</td>
                                    <td>Register all Trend Micro products with Apex Central</td>
                                    <td>
                                        Apex One Server
                                        <select
                                            id="81"
                                            defaultValue={element.product_registration}
                                            onChange={(e) => {
                                                sixtysevenFunction(e);
                                                handleChange(e);
                                            }}
                                            name="product_registration"
                                        >
                                            <option value="Enabled">Enabled</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <img src={element.tab67} id="sep67" alt="" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            ))}

        </>
    )
}
