import React from 'react'

function Endpoints() {
    const PORT = 5000;
    const API = `http://localhost:${PORT}/charts`;
    const RAPI = `http://localhost:${PORT}/report`;
    const PAPI = `http://localhost:${PORT}/pdf`;

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


    //Policy 2 data
    const savePolicyData = `${RAPI}/savePolicyData`;
    const getPolicyData = `${RAPI}/getPolicy`;
    const updatePolicyData = `${RAPI}/updatePolicyData`

    //pdf endpoints

    const getTrendMicroReportPdf = `${PAPI}/getTrendMicroReportPdf`;



    return {
        chartApi, getChartApi,
        furtherInformation,
        agApi, virusApi, spywareApi, wrApi, bmApi, dcApi, ipsApi, ccApi, smartscanApi,
        getAgApi, getVirusApi, getSpywareApi, getWrApi, getBmApi, getDcApi, getIpsApi, getCcApi, getSmartscanApi,
        getReportData,getOneReportData, saveReportData, getAllReportData, updateReportData,
        deleteReportData, deleteAllReportData,
        getTrendMicroReportPdf,
        savePolicyData,
        getPolicyData, updatePolicyData
    }
}

export default Endpoints
