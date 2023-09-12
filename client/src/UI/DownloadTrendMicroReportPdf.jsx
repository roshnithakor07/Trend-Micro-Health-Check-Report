import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Endpoints from "../API/Endpoints";
import axios from "axios";

export default function DownloadTrendMicroReportPdf() {
    const {getTrendMicroReportPdf,getReportData } = Endpoints();
    const [fileName, setFileName] = useState("download_health_check_report.pdf");

    const [pdfData, setPdfData] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getReportDocument();
    }, []);

    const getReportDocument = async () => {
        await axios({
            url: getReportData,
            method: "GET",
        })
            .then((res) => {
               const report_type = res.data[0].report_type === "SAAS" ? "OnSaas" : "OnPremises";
               const companyName = (res.data[0].cName === "")? "Eventus" : res.data[0].cName;
                setFileName(`${companyName}_Health_Check_Apex_One_${report_type}.pdf`)
            })
            .catch((err) => {
                console.log(err);
            });
    };

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



    //   TTK Prestige_Health_Check_Apex_One_OnSaas_Aug2023_V1.0


    return (
        <div>
            {(loading) && <div className="spinner"></div>}

            {
            pdfData && (
                <div className="styleOFLoader">
                    <Button className="button-pdf" variant="contained" color="primary">
                        <a id="downloadpdf" href={pdfData} download={fileName}>Download PDF</a>
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
