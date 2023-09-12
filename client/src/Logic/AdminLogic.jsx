import { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from '../API/Endpoints';

function AdminLogic() {
    const { getAllReportData, deleteReportData } = Endpoints();
    const [myReportData, setReportData] = useState([])


    useEffect(() => {
        getReportDocument();
    }, []);

    const getReportDocument = async () => {
        await axios({
            url: getAllReportData,
            method: "GET",
        })
            .then((res) => {
                setReportData(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    };



    const handleToggle = () => {
        const sidebar = document.querySelector("nav");
        sidebar.classList.toggle("close");
    }

    const handleModeToggle = () => {
        const body = document.querySelector(".body")
        const table = body.querySelector(".main-table")
        body.classList.toggle("dark");
        table.classList.toggle("tableDark");
    }

    const handleDeleteReport = async (id) => {
        // Make a DELETE request to delete a report by its ID
        fetch(`${deleteReportData}/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.ok) {
                    getReportDocument();
                } else {
                    console.error('Failed to delete report');
                }
            })
            .catch((error) => {
                console.error('Error deleting report:', error);
            });
    }


    const topTenData = myReportData.slice(-10);














    return { topTenData,myReportData, handleToggle, handleModeToggle, handleDeleteReport }
}

export default AdminLogic
