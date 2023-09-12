import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Endpoints from "../API/Endpoints";


export default function DownloadTrendMicroReportPdf() {
    const {getTrendMicroReportPdf } = Endpoints();

    const [pdfData, setPdfData] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(getTrendMicroReportPdf)
            .then(res => res.blob())
            .then(data => {
                setPdfData(window.URL.createObjectURL(data));
                setLoading(false)
                console.log(data)

            });

    }, []);

    const openNewWindow = (e,link) => {
        e.preventDefault();
        window.open(link, '_blank', 'width=1400,height=1400');
      };



    return (
        <div>
            {(loading) && <div className="spinner"></div>}

            {
            pdfData && (
                <div className="styleOFLoader">
                    <Button className="button-pdf" variant="contained" color="primary">
                        <a id="downloadpdf" href={pdfData} download='download-health-check-report.pdf'>Download PDF</a>
                    </Button>
                    <a href={pdfData} onClick={(e) =>{openNewWindow(e,pdfData)}} rel="noopener noreferrer">
                        Open PDF in New Tab
                    </a>
                    <a href="https://www.ilovepdf.com/pdf_to_word" onClick={(e) =>{openNewWindow(e,"https://www.ilovepdf.com/pdf_to_word")}} target="_blank">Convert PDF To WORD</a>
                </div>
            )
            }

        </div>
    )
}
