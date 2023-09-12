import { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from '../API/Endpoints';
import { useParams } from 'react-router-dom';

const UpdateReportLogic = () => {
    const { updateReportData, getOneReportData, getPolicyData, updatePolicyData } = Endpoints();
    const [myReportData, setReportData] = useState([]);;
 
    const [updateDocumentData, setUpdateDocumentData] = useState({});
    let { id } = useParams();

    useEffect(() => {
        getReportDocument();
    }, []);

   


    const getReportDocument = async () => {
        await axios({
            url: `${getOneReportData}/${id}`,
            method: "GET",
        })
            .then((res) => {
                setReportData([res.data])
               setUpdateDocumentData(res.data)

                // if (res.data[0].report_type === "SAAS") {
                //     setVisible(false);
                // } else {
                //     setVisible(true);
                // }

            })
            .catch((err) => {
                console.log(err);
            });
    };



    const handleChange = (e) => {
        setUpdateDocumentData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    console.log(updateDocumentData)


    const loadFile = (e) => {

        const element = document.getElementById("file");
        var file = element.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            // console.log('RESULT', imageBase64Stringsep)
            updateDocumentData.cLogo = reader.result
            document.getElementById("output").src = reader.result;
        }
        reader.readAsDataURL(file);

    };


    const handleType = (e) => {
        alert(`You are working on ${e.target.value} Report`);

        // if (e.target.value === "SAAS") {
        //     setVisible(false);
        // } else {
        //     setVisible(true);
        // }
    };

    const handleUpdateReport = async () => {
        try {
            await axios.patch(`${updateReportData}/${id}`, updateDocumentData);
            getReportDocument();
        } catch (error) {
            console.error('Error updating document:', error);
        }
    }


    return {updateDocumentData,myReportData,handleType,loadFile, handleChange,handleUpdateReport }
}

export default UpdateReportLogic
