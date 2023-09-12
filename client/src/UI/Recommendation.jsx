import React from 'react'
import Button from "@mui/material/Button";
import {indigo} from "@mui/material/colors";
const success = indigo[700];

export default function Recommendation({myData : {
    openPopup,deletePopup,setchartDess,
    showComponent,policyOneName,policyTwoName,
    setLinkTitles,setLinks,setPopupIndex,addValue,
    reqSummarySenArr,commonSummarySen,updatedReqSummarySenPolicy1Arr,
    updatedReqSummarySenPolicy2Arr,reqSummarySenApex43Arr
}}) 
{
    return (
        <>

            {/* Recommendations start*/}
            <div className="Recommendations" id="Recommendations">
                <div className="container14" id="#head7">
                    <h2 style={{ color: "red" }} className="report-heading2">
                        5.4 Recommendations
                    </h2>

                    <div id="points">
                        <textarea cols="10" rows="2" onChange={(e) => setchartDess(e.target.value)} type="text" id="reqSenDescription" className="chartDes" spellCheck="false" name="first31"></textarea>
                        <div className="fI1" id="fI1">
                            <input
                                type="text"
                                name="linkTitle1"
                                id="linkTitle1"
                                placeholder="link title"
                                style={{ width: "30%", height: "40px" }}
                                onChange={(e) => setLinkTitles(e.target.value)}
                            />
                            <br />
                            <textarea

                                name="furtherInformation1"
                                id="links1"
                                placeholder="link"
                                cols="90"
                                rows="2"
                                onChange={(e) => setLinks(e.target.value)}
                            ></textarea>
                        </div>
                        <select
                           
                            onChange={(e) => setPopupIndex(e.target.value)}
                            style={{ width: "200px", height: "30px",textAlign: "center" }}
                        >
                            <option value="select">----select----</option>
                            <option value="apex41Req">In Apex One Configuration overview</option>
                            <option value="policy1Req">In {policyOneName} policy</option>
                            {
                                showComponent && <option value="policy2Req">In {policyTwoName} policy</option>
                            }
                            <option value="apex43Req">In Apex Central Configuration Overview</option>

                        </select>
                        <br />
                        <br />
                        <Button
                            variant="contained"
                            style={{ backgroundColor: success }}
                            onClick={(e) => addValue("reqSenDescription")}
                        >
                            Add
                        </Button>


                    </div>

                    <div className="container8">
                        <h4 style={{ marginLeft: "20px" }}>Apex One Configuration overview : </h4>
                        {reqSummarySenArr.map((element, index) => (
                            <ul key={index} className={(element.label === "2" || element.label === "0") ? "same-sentence" : ""}>
                                <li>{element.description} {" "}
                                    {element.link && (
                                        <a href={element.link} target="_blank" rel="noopener noreferrer">
                                            {element.linkTitle || element.link}
                                        </a>
                                    )}
                                </li>

                                <li className="summerImg">
                                    <img
                                        src="images/edit.png"
                                        onClick={(e) => {
                                            openPopup(e, element.label, element.description,"apex41Req", element.link, element.linkTitle);
                                        }}
                                        alt=""
                                        srcSet=""
                                    />
                                    <img
                                        src="images/delete.png"
                                        onClick={(e) => {
                                            deletePopup(e, element.label,"apex41Req");
                                        }}
                                        alt=""
                                        srcSet=""
                                    />
                                </li>
                            </ul>
                        ))}

                        {showComponent && <>
                            <h4 style={{ marginLeft: "20px" }}>In Both Policy : </h4>
                            {commonSummarySen.map((element, index) => (
                                <ul key={index}>
                                    <li>{element.description}</li>
                                </ul>
                            ))}
                        </>
                        }

                        <h4 style={{ marginLeft: "20px" }}>In {policyOneName} policy :</h4>
                        {updatedReqSummarySenPolicy1Arr.map((element, index) => (
                            <ul key={index}>
                                <li>{element.description} {" "}
                                    {element.link && (
                                        <a href={element.link} target="_blank" rel="noopener noreferrer">
                                            {element.linkTitle || element.link}
                                        </a>
                                    )}
                                </li>

                                <li className="summerImg">
                                    <img
                                        src="images/edit.png"
                                        onClick={(e) => {
                                            openPopup(e, element.label, element.description, "policy1Req", element.link, element.linkTitle);
                                        }}
                                        alt=""
                                        srcSet=""
                                    />
                                    <img
                                        src="images/delete.png"
                                        onClick={(e) => {
                                            deletePopup(e, element.label, "policy1Req");
                                        }}
                                        alt=""
                                        srcSet=""
                                    />
                                </li>


                            </ul>
                        ))}
                        {showComponent && <>
                            <h4 style={{ marginLeft: "20px" }}>In {policyTwoName} policy :</h4>
                            {updatedReqSummarySenPolicy2Arr.map((element, index) => (
                                <ul key={index}>
                                    <li>{element.description} {" "}
                                        {element.link && (
                                            <a href={element.link} target="_blank" rel="noopener noreferrer">
                                                {element.linkTitle || element.link}
                                            </a>
                                        )}
                                    </li>

                                    <li className="summerImg">
                                        <img
                                            src="images/edit.png"
                                            onClick={(e) => {
                                                openPopup(e, element.label, element.description, "policy2Req", element.link, element.linkTitle);
                                            }}
                                            alt=""
                                            srcSet=""
                                        />
                                        <img
                                            src="images/delete.png"
                                            onClick={(e) => {
                                                deletePopup(e, element.label, "policy2Req");
                                            }}
                                            alt=""
                                            srcSet=""
                                        />
                                    </li>


                                </ul>
                            ))}

                        </>
                        }

                        {/* apex 43 req */}
                        <h4 style={{ marginLeft: "20px" }}>Apex Central Configuration Overview : </h4>
                        {reqSummarySenApex43Arr.map((element, index) => (
                            <ul key={index} className={(element.label === "2" || element.label === "0") ? "same-sentence" : ""}>
                                <li>{element.description} {" "}
                                    {element.link && (
                                        <a href={element.link} target="_blank" rel="noopener noreferrer">
                                            {element.linkTitle || element.link}
                                        </a>
                                    )}
                                </li>

                                <li className="summerImg">
                                    <img
                                        src="images/edit.png"
                                        onClick={(e) => {
                                            openPopup(e, element.label, element.description, "apex43Req", element.link, element.linkTitle);
                                        }}
                                        alt=""
                                        srcSet=""
                                    />
                                    <img
                                        src="images/delete.png"
                                        onClick={(e) => {
                                            deletePopup(e, element.label, "apex43Req");
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
            {/* Recommendations end*/}


        </>
    )
}


