import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Endpoints from "../API/Endpoints";
import axios from "axios";
import { saveAs } from 'file-saver';

export default function DownloadTrendMicroReportPdf() {
    const { getTrendMicroReportDocx, getTrendMicroReportPdf, getReportData } = Endpoints();
    const [fileName, setFileName] = useState("download_health_check_report.pdf");
    const [docxFileName, setDocxFileName] = useState("download_health_check_report.docx");

    const [pdfData, setPdfData] = useState("");
    const [docxData, setDocxData] = useState("");
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
                const companyName = (res.data[0].cName === "") ? "Eventus" : res.data[0].cName;
                setFileName(`${companyName}_Health_Check_Apex_One_${report_type}.pdf`)
                setDocxFileName(`${companyName}_Health_Check_Apex_One_${report_type}.docx`)
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        try {
            fetch(getTrendMicroReportPdf)
                .then(res => res.blob())
                .then(data => {
                    setPdfData(window.URL.createObjectURL(data));
                });
        } catch (error) {
            console.log("error while fetching pdf file")
        }


    }, []);

    useEffect(() => {
        try {
            fetch(getTrendMicroReportDocx)
                .then(res => res.blob())
                .then(data => {

                    setDocxData(window.URL.createObjectURL(data));
                    setLoading(false);
                });
        } catch (error) {
            console.log("error while fetching docx file")
        }


    }, []);


    return (
        <div>
            {(loading) && <div className="spinner"></div>}

            {
                docxData && (
                    <div className="styleOFLoader">
                        <Button className="button-pdf" variant="contained" color="primary">
                            <a id="downloadpdf" href={pdfData} download={fileName}>Download PDF</a>
                        </Button>
                        <Button className="button-pdf" variant="contained" color="primary">
                            <a id="downloadpdf" href={docxData} download={docxFileName}>Download Word Document</a>
                        </Button>



                    </div>
                )
            }

        </div>
    )
}
