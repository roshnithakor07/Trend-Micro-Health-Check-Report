import React from 'react'
import moment from "moment";

export default function Apex43({ myData: {
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
} }) {
    return (
        <>

            <div className="ApexCentral" id="ApexCentral" >
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
                                            build {" "}
                                            <input
                                                type="number"
                                                id="version3"
                                                name="version3"
                                                value={updateDocumentData.version3}
                                                onChange={(e) => {
                                                    handleChange(e);
                                                    SixtyFunction(e);
                                                }}
                                            />
                                        </td>
                                        <td>
                                            build {" "}
                                            <input
                                                type="number"
                                                id="version4"
                                                value={updateDocumentData.version4 || ""}
                                                onChange={(e) => {
                                                    SixtyFunction(e);
                                                    handleChange(e);
                                                }}
                                                name="version4"
                                            />
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                            <img src={`/${updateDocumentData.tab60}`} id="sep60" alt="" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>License</td>
                                        <td>Within Term</td>
                                        <td>
                                            <input
                                                type="date"
                                                id="9898"
                                                value={updateDocumentData.license_date2}
                                                onChange={(e) => {
                                                    Sixty60Function(e);
                                                    handleChange(e);
                                                }}
                                                name="license_date2"
                                            />
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                            <img src={`/${updateDocumentData.tab6060}`} alt="" id="sep6060" />
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
                                            value={updateDocumentData.active_directory}
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
                                    <img src={`/${updateDocumentData.tab61}`} id="sep61" alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td>Log Retention</td>
                                <td>Configure</td>
                                <td>
                                    <div>
                                        <select
                                            id="76"
                                            value={updateDocumentData.log_retention}
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
                                    <img src={`/${updateDocumentData.tab62}`} id="sep62" alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td>Reports</td>
                                <td>Configure</td>
                                <td>
                                    <div>
                                        <select
                                            id="77"
                                            value={updateDocumentData.reports}
                                            onChange={(e) => {
                                                sixtythreeFunction(e);
                                                handleChange(e);
                                            }}
                                            name="reports"
                                        >
                                            <option value="Scheduled">Scheduled</option>
                                            <option value="Not Scheduled">Not Scheduled</option>
                                        </select>
                                    </div>
                                </td>
                                <td style={{ textAlign: "center" }}>
                                    <img src={`/${updateDocumentData.tab63}`} id="sep63" alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td>Event Notification</td>
                                <td>Enable</td>
                                <td>
                                    <div>
                                        <select
                                            id="78"
                                            value={updateDocumentData.event_notification}
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
                                    <img src={`/${updateDocumentData.tab64}`} id="sep64" alt="" />
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
                                            value={updateDocumentData.syslog}
                                            name="syslog"
                                        >
                                            <option value="Configured">Configured</option>
                                            <option value="Not Configured">Not Configured</option>
                                        </select>
                                    </div>
                                </td>
                                <td style={{ textAlign: "center" }}>
                                    <img src={`/${updateDocumentData.tab65}`} id="sep65" alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td>Report Maintenance</td>
                                <td>Configure</td>
                                <td>
                                    <div>
                                        <select
                                            id="80"
                                            value={updateDocumentData.report_maintenance}
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
                                    <img src={`/${updateDocumentData.tab56}`} id="sep66" alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td>Product Registration</td>
                                <td>Register all Trend Micro products with Apex Central</td>
                                <td>
                                    Apex One Server
                                    <select
                                        id="81"
                                        value={updateDocumentData.product_registration}
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
                                    <img src={`/${updateDocumentData.tab67}`} id="sep67" alt="" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
