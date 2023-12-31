import React from 'react'

function Endpoints() {
   
    const PORT = 5000;
    const WEB_URL = "https://backend-4k1z.onrender.com";
    const API = `${WEB_URL}/charts`;
    const RAPI = `${WEB_URL}/report`;
    const PAPI = `${WEB_URL}/pdf`;
    const DAPI = `${WEB_URL}/docx`;



    //post Req....
    const chartApi = `${API}/saveDataChart`
    const agApi = `${API}/agentdistribution`
    const virusApi = `${API}/virus`
    const spywareApi = `${API}/spyware`
    const wrApi = `${API}/wr`
    const bmApi = `${API}/bm`
    const dcApi = `${API}/dc`
    const ipsApi = `${API}/ips`
    const ccApi = `${API}/cc`
    const smartscanApi = `${API}/smartscan`
    const furtherInformation = `${API}/furtherinformation`;

    //GET Req...

    const convertChartBase64ToImg = `${API}/convertChartBase64ToImg`
    const getChartApi = `${API}/getChartValue`
    const getAgApi = `${API}/getAgValue`
    const getVirusApi = `${API}/getVirusValue`
    const getSpywareApi = `${API}/getSpywareValue`
    const getWrApi = `${API}/getWrValue`
    const getBmApi = `${API}/getBmValue`
    const getDcApi = `${API}/getDcValue`
    const getIpsApi = `${API}/getIpValue`
    const getCcApi = `${API}/getcc`
    const getSmartscanApi = `${API}/getSmartScanValue`


    // report endpoints
    const getReportData = `${RAPI}`;
    const getOneReportData = `${RAPI}/getOneReport`;
    const saveReportData = `${RAPI}`;
    const getAllReportData = `${RAPI}/getAllReport`
    const updateReportData = `${RAPI}/updateOneReport`;
    const deleteReportData = `${RAPI}`;
    const deleteAllReportData = `${RAPI}`;
    const convertBase64ToImg = `${RAPI}/convertBase64ToImg`;


    //Policy 2 data
    const savePolicyData = `${RAPI}/savePolicyData`;
    const getPolicyData = `${RAPI}/getPolicy`;
    const updatePolicyData = `${RAPI}/updatePolicyData`

    //pdf endpoints

    const getTrendMicroReportPdf = `${PAPI}/getTrendMicroReportPdf`;

    //doc Endpoints
    const getTrendMicroReportDocx = `${DAPI}/getTrendMicroReportDocx`;

    return {
        getTrendMicroReportDocx,
        convertBase64ToImg, convertChartBase64ToImg,
        chartApi, getChartApi,
        furtherInformation,
        agApi, virusApi, spywareApi, wrApi, bmApi, dcApi, ipsApi, ccApi, smartscanApi,
        getAgApi, getVirusApi, getSpywareApi, getWrApi, getBmApi, getDcApi, getIpsApi, getCcApi, getSmartscanApi,
        getReportData, getOneReportData, saveReportData, getAllReportData, updateReportData,
        deleteReportData, deleteAllReportData,
        getTrendMicroReportPdf,
        savePolicyData,
        getPolicyData, updatePolicyData
    }
}

export default Endpoints
