import React from 'react'
import moment from "moment";
import { lime, indigo } from "@mui/material/colors";
import Button from "@mui/material/Button";

const success = indigo[700];
const edit = lime[500];

export default function UpdateExecutiveSummery({ cName, executiveSummaryDate, myData:
    { handleChange, apex41ES, apex43ES, openPopup, deletePopup, setchartDess,
        addValue1, PointArr, summarySenArr,
        summarySenPolicy1Arr, summarySenPolicy2Arr, summarySenApex43Arr } }) {



    return (
        <>
            {/* start ExecutiveSummery */}
            <div id="ExecutiveSummery">
                <div className="container6" id="head2">
                    <h2 style={{ color: "red" }} className="report-heading2">
                        3 Executive Summary
                    </h2>

                    <div className="container7">
                        <p>
                            Trend Micro performed a Health Check on{" "}
                            <input
                                type="date"
                                name="executivesummarydate"
                                defaultValue={moment(executiveSummaryDate).format("YYYY-MM-DD")}
                                onChange={handleChange}
                            />{" "}
                            for <input
                                type="text"
                                name="companyName"
                                defaultValue={cName}
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
                    <div className="container8">
                        <div id="points">
                            <textarea cols="10" rows="2" onChange={(e) => { setchartDess(e.target.value) }} type="text" id="chartDescription31" className="chartDes" spellCheck="false" name="first31"></textarea>
                            <Button
                                variant="contained"
                                style={{ backgroundColor: success }}
                                onClick={(e) => addValue1("chartDescription31")}
                            >
                                Add
                            </Button>
                            {PointArr.map((artist, index) => (
                                <ul key={artist}>
                                    <li>
                                        {artist}
                                    </li>
                                    <li className="summerImg">
                                        <img src="images/edit.png" style={{ color: edit }} onClick={(e) => {
                                            openPopup(e, index, artist, 'es');
                                        }} alt="" srcSet="" />
                                        <img src="images/delete.png" style={{ color: edit }} onClick={(e) => {
                                            deletePopup(e, index, 'es');
                                        }} alt="" srcSet="" />
                                    </li>
                                </ul>
                            ))}

                        </div>

                        {summarySenArr.map((element, index) => (
                            <ul key={element.label} className={(element.label === "2" || element.label === "0") ? "same-sentence" : ""}>
                                <li>{element.description}</li>
                                <li className="summerImg">
                                    <img
                                        src="images/edit.png"
                                        onClick={(e) => {
                                            openPopup(e, element.label, element.description,"apex41Es");
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
                        {summarySenPolicy1Arr.map((artist, index) => (
                            <ul key={index}>
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

                        {/* policy overview 1 & 2 */}

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
            </div>
            {/* end ExecutiveSummery */}

        </>
    )
}
