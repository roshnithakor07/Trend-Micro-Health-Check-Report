import React from 'react'

export default function RecommendedProcedure({myData : {
    showRecommendedProcedure,
    setShowRecommendedProcedure,
    recommendedProcedure,
    openPopup,deletePopup

}}) {
    return (
        <>
            {showRecommendedProcedure ? "" : (<div style={{ position: "relative", top: "250px", left: "20px" }}>
                <h3>
                    Add Recommended Procedure Section:{" "}
                    <img
                        onClick={(e) => { setShowRecommendedProcedure(true) }}
                        src="images/more-details.png"
                        alt=""
                        style={{ cursor: "pointer" }}
                    />
                </h3>{" "}
            </div>)}

            {showRecommendedProcedure && (<div className="Recommended-Procedure">
                <div
                    className="closePolicyOverviewTable"
                    id="closePolicyOverviewTable"
                    style={{ position: "relative", top: "25px", left: "19px" }}
                >
                    <h3>
                        Close Recommended Procedure Section:{" "}
                        <img
                            id="close-details"
                            onClick={(e) => { setShowRecommendedProcedure(false) }}
                            src="images/close-details.png"
                            alt=""
                            style={{ cursor: "pointer" }}
                        />
                    </h3>{" "}

                </div>
                <h2 style={{ color: "red" }} className="report-heading2">
                    4.5 Recommendation Procedure
                </h2>
                <p>Below are the recommendations on how to remediate the gaps identified in this Health Check.</p>

                {/** A section.. */}
                <dl>
                    <dt><h5>A.Outdated Software Updates</h5></dt>
                    <dd>
                        <ol>
                            {recommendedProcedure[0].map((procedure) => (
                                <li key={procedure.label} style={{ cursor: "pointer" }}>
                                    {procedure.description}
                                    {" "}&nbsp;
                                    <img
                                        src="images/edit.png"
                                        onClick={(e) => {
                                            openPopup(e, procedure.label, procedure.description, "rp0", "");
                                        }}
                                        alt=""
                                        srcSet=""
                                    />
                                    <img
                                        src="images/delete.png"
                                        onClick={(e) => {
                                            deletePopup(e, procedure.label, "rp0");
                                        }}
                                        alt=""
                                        srcSet=""
                                    />
                                </li>
                            ))}
                        </ol>
                    </dd>
                </dl>

                <p>Note: Show the # of endpoints with outdated software and a breakdown of Offline/Online endpoints. </p>

                <dl>
                    <dt></dt>
                    <dd>
                        Action:
                    </dd>
                    <dd>
                        <ul >
                            {recommendedProcedure[1].map((procedure) => (
                                <li key={procedure.label} style={{ cursor: "pointer" }}>
                                    {procedure.description}

                                    {procedure.link && (
                                        <a href={procedure.link} target="_blank" rel="noopener noreferrer">
                                            {procedure.link}
                                        </a>
                                    )}
                                    {" "}&nbsp;
                                    <img
                                        src="images/edit.png"
                                        onClick={(e) => {
                                            openPopup(e, procedure.label, procedure.description, "rp1", procedure.link);
                                        }}
                                        alt=""
                                        srcSet=""
                                    />
                                    <img
                                        src="images/delete.png"
                                        onClick={(e) => {
                                            deletePopup(e, procedure.label, "rp1");
                                        }}
                                        alt=""
                                        srcSet=""
                                    />

                                </li>
                            ))}
                        </ul>

                    </dd>
                </dl>

                {/** B section.. */}
                <dl>
                    <dt><h5>B. Offline Agents</h5></dt>
                    <dd>
                        <ul >
                            {recommendedProcedure[2].map((procedure) => (
                                <li key={procedure.label} style={{ cursor: "pointer" }}>
                                    {procedure.description}
                                    <br />
                                    {procedure.link && (
                                        <a href={procedure.link} target="_blank" rel="noopener noreferrer">
                                            {procedure.link}
                                        </a>
                                    )}
                                    {" "}&nbsp;
                                    <img
                                        src="images/edit.png"
                                        onClick={(e) => {
                                            openPopup(e, procedure.label, procedure.description, "rp2", procedure.link);
                                        }}
                                        alt=""
                                        srcSet=""
                                    />
                                    <img
                                        src="images/delete.png"
                                        onClick={(e) => {
                                            deletePopup(e, procedure.label, "rp2");
                                        }}
                                        alt=""
                                        srcSet=""
                                    />
                                </li>
                            ))}
                        </ul>
                    </dd>
                </dl>

                {/** C section.. */}
                <dl>
                    <dt><h5>C. Security patterns update automatically & manually:</h5></dt>
                    <dd>
                        <ul >
                            {recommendedProcedure[3].map((procedure) => (
                                <li key={procedure.label} style={{ cursor: "pointer" }}>
                                    {
                                        (procedure.label === "common10" || procedure.label === "common11") ? (<strong>{procedure.description}</strong>) : (<>{procedure.description}</>)

                                    }
                                    {" "}&nbsp;
                                    {procedure.link && (
                                        <a href={procedure.link} target="_blank" rel="noopener noreferrer">
                                            {procedure.link}
                                        </a>
                                    )}

                                    <img
                                        src="images/edit.png"
                                        onClick={(e) => {
                                            openPopup(e, procedure.label, procedure.description, "rp3", procedure.link);
                                        }}
                                        alt=""
                                        srcSet=""
                                    />
                                    <img
                                        src="images/delete.png"
                                        onClick={(e) => {
                                            deletePopup(e, procedure.label, "rp3");
                                        }}
                                        alt=""
                                        srcSet=""
                                    />
                                </li>
                            ))}
                        </ul>
                    </dd>
                </dl>

                {/** D section.. */}

                <dl>
                    <dt><h5>D. Security patterns update automatically & manually:</h5></dt>
                    <dd>
                        <ul >
                            {recommendedProcedure[4].map((procedure) => (
                                <li key={procedure.label} style={{ cursor: "pointer" }}>
                                    {procedure.description}
                                    {" "}&nbsp;
                                    {procedure.link && (
                                        <a href={procedure.link} target="_blank" rel="noopener noreferrer">
                                            {procedure.link}
                                        </a>
                                    )}

                                    <img
                                        src="images/edit.png"
                                        onClick={(e) => {
                                            openPopup(e, procedure.label, procedure.description, "rp4", procedure.link);
                                        }}
                                        alt=""
                                        srcSet=""
                                    />
                                    <img
                                        src="images/delete.png"
                                        onClick={(e) => {
                                            deletePopup(e, procedure.label, "rp4");
                                        }}
                                        alt=""
                                        srcSet=""
                                    />
                                </li>
                            ))}
                        </ul>
                    </dd>
                </dl>



            </div>)}
            
        </>
    )
}
