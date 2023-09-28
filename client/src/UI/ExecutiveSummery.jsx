import React from 'react'
import { lime, indigo } from "@mui/material/colors";
import Button from "@mui/material/Button";

const success = indigo[700];
const edit = lime[500];


export default function ExecutiveSummery({ myData: {
    showComponent, policyOneName, policyTwoName, popupIndex, setPopupIndex,
    handleChange, openPopup, deletePopup, setchartDess,
    addValue1, summarySenArr,
    summarySenPolicy1Arr, summarySenPolicy2Arr, summarySenApex43Arr

} }) {
    return (
        <>
            {/* start ExecutiveSummery */}
            <div id="ExecutiveSummery">
                <div className="container6" id="head2">
                    <h2 style={{ color: "red" }} className="report-heading2">
                        2 Executive Summary
                    </h2>

                    <div className="container7">
                        <p>
                            Trend Micro performed a Health Check on{" "}
                            <input
                                type="date"
                                name="executivesummarydate"
                                onChange={handleChange}
                            />{" "}
                            for <input
                                type="text"
                                name="companyName"
                                placeholder="enter a Company Name"
                                onChange={handleChange}
                            /> to ensure Trend Micro Product(s)
                            are configured as per best practice and provide gap analysis
                            feedback.
                            <br />
                            <br />
                            This high-level summary provides an overview of the status of
                            your Apex One & Apex Central deployment.Detailed instructions
                            and references can be found within the individual sections
                            further down in the report.
                            <br />
                            <br />
                        </p>
                    </div>

                </div>

                <div className="container8">
                    <div id="points">
                        <textarea cols="10" rows="2" onChange={(e) => { setchartDess(e.target.value) }} type="text" id="chartDescription31" className="chartDes" spellCheck="false" name="first31"></textarea>
                        <br />
                        <select
                            value={popupIndex}
                            onChange={(e) => setPopupIndex(e.target.value)}
                            style={{ width: "200px", height: "30px", textAlign: "center" }}
                        >
                            <option value="select">------select------</option>
                            <option value="apex41Es">In Apex One Configuration overview</option>
                            <option value="policy1Es">In {policyOneName} policy</option>
                            {
                                showComponent && <option value="policy2Es">In {policyTwoName} policy</option>
                            }
                            <option value="apex43Es">In Apex Central Configuration Overview</option>

                        </select>
                        <br />
                        <br />

                        <Button
                            variant="contained"
                            style={{ backgroundColor: success }}
                            onClick={(e) => addValue1("chartDescription31")}
                        >
                            Add
                        </Button>

                    </div>
                   
                    <br />
                    {summarySenArr.map((element, index) => (
                        <ul key={element.label} className={(element.label === "2" || element.label === "0") ? "same-sentence" : ""}>
                            <li>{element.description}</li>
                            <li className="summerImg">
                                <img
                                    src="images/edit.png"
                                    onClick={(e) => {
                                        openPopup(e, element.label, element.description, "apex41Es");
                                    }}
                                    alt=""
                                    srcSet=""
                                />
                                <img
                                    src="images/delete.png"
                                    onClick={(e) => {
                                        deletePopup(e, element.label, "apex41Es");
                                    }}
                                    alt=""
                                    srcSet=""
                                />
                            </li>
                        </ul>
                    ))}

                    {/* policy overview 1 & 2 */}
                    {summarySenPolicy1Arr.map((artist, index) => (
                        <ul key={artist}>
                            <li>
                                {artist}
                            </li>
                            <li className="summerImg">
                                <img src="images/edit.png" style={{ color: edit }} onClick={(e) => {
                                    openPopup(e, index, artist, 'policy1Es');
                                }} alt="" srcSet="" />
                                <img src="images/delete.png" style={{ color: edit }} onClick={(e) => {
                                    deletePopup(e, index, 'policy1Es');
                                }} alt="" srcSet="" />
                            </li>
                        </ul>
                    ))}

                    {summarySenPolicy2Arr.map((artist, index) => (
                        <ul key={index}>
                            <li>
                                {artist}
                            </li>
                            <li className="summerImg">
                                <img src="images/edit.png" style={{ color: edit }} onClick={(e) => {
                                    openPopup(e, index, artist, 'policy2Es');
                                }} alt="" srcSet="" />
                                <img src="images/delete.png" style={{ color: edit }} onClick={(e) => {
                                    deletePopup(e, index, 'policy2Es');
                                }} alt="" srcSet="" />
                            </li>
                        </ul>
                    ))}

                    {/* apex43 */}
                    {summarySenApex43Arr.map((element, index) => (
                        <ul key={element.label} className={(element.label === "2" || element.label === "0") ? "same-sentence" : ""}>
                            <li>{element.description}</li>
                            <li className="summerImg">
                                <img
                                    src="images/edit.png"
                                    onClick={(e) => {
                                        openPopup(e, element.label, element.description, "apex43Es");
                                    }}
                                    alt=""
                                    srcSet=""
                                />
                                <img
                                    src="images/delete.png"
                                    onClick={(e) => {
                                        deletePopup(e, element.label, "apex43Es");
                                    }}
                                    alt=""
                                    srcSet=""
                                />
                            </li>
                        </ul>
                    ))}



                </div>

            </div>
            {/* end ExecutiveSummery */}

        </>
    )
}
