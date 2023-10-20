import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Header from "../Common/Header";
import Endpoints from "../API/Endpoints";
import { Link } from "react-router-dom";
import { lime, blueGrey, green, teal, indigo } from "@mui/material/colors";

const save1 = teal[500];
const success = indigo[700]; // #f44336
const edit = lime[500];
const del = blueGrey[900];
const save = green[900];


export default function FurtherInformation() {
  const [dataFetched, setDataFetched] = useState(true);
  const { convertChartBase64ToImg, furtherInformation, getReportData, getAgApi, getVirusApi, getSpywareApi, getWrApi, getBmApi, getDcApi, getIpsApi, getCcApi, getSmartscanApi } = Endpoints();

  useEffect(() => {
    const getProductById1 = async () => {
      try {
        fetch(convertChartBase64ToImg)
          .then(res => res.blob())
          .then(data => {
          });
      } catch (error) {
        console.log("error while fetching convertChartBase64ToImg")
      }
    }

    getProductById1();

  }, []);


  useEffect(() => {
    async function executeFunctions() {
      await Promise.all([
        getProductById1(getAgApi),
        getProductById1(getVirusApi),
        getProductById1(getSpywareApi),
        getProductById1(getWrApi),
        getProductById1(getBmApi),
        getProductById1(getDcApi),
        getProductById1(getIpsApi),
        getProductById1(getCcApi),
        getProductById1(getSmartscanApi),
      ]);
      console.log('All charts generated completed.');
      setTimeout(() => {
        setDataFetched(false);
      }, 5000);
    }
    executeFunctions();
  }, []);


  const getProductById1 = async (api) => {
    try {
      fetch(api)
        .then(res => res.blob())
        .then(data => {
        });
    } catch (error) {
      console.log(`error while generating charts ${api}- FI FILE`)
    }

  }

  useEffect(() => {
    const getProductById = async () => {
      await axios({
        url: getReportData,
        method: "GET",
      })
        .then((res) => {
          myfurtherInformation.r_id = res.data[0]._id;
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProductById();
  }, []);


  let textAreaStyle = {
    paddingLeft: "10px",
    paddingTop: "10px",
  };

  const [myfurtherInformation, setfurtherInformation] = useState({
    linkTitle1: [],
    furtherInformation1: [],
    linkTitle2: [],
    furtherInformation2: [],
    linkTitle3: [],
    furtherInformation3: [],
  });

  const [updatelinkTitle, setUpdateLinkTitle] = useState("");
  const [updatelink, setUpdateLink] = useState("");
  const [updateLinkId, setUpdateLinkId] = useState("");

  const [linkTitle, setLinkTitles] = useState("");
  const [links, setLinks] = useState("");
  let [linkTitleArr, setlinkTitleArr] = useState([['Apex One Administrator Guide', 'Apex One Installation and Upgrade Guide'], ['https://success.trendmicro.com/solution/1105726'], ['Apex One Best Practice Guide']]);
  let [linkArr, setlinkArr] = useState([['https://docs.trendmicro.com/all/ent/apex-one/patch/en-us/apexOne_p3_ag.pdf', 'https://docs.trendmicro.com/all/ent/apex-one/2019/en-us/apexOne_2019_iug.pdf'], ['https://success.trendmicro.com/solution/1105726'], ['https://powerbox-na-file.trend.org/SFDC/DownloadFile_iv.php?jsonInfo=%7B%22Query%22%3A%22E6%2FaBX7NRLgNhlFV9prpuOiZ%2BfBD3GRI5g3EWcXN2wO0yrcs72AtOr%2Bd7jbTo0Fnj%2F%2F%2F76wXivkV6IVgYXc%2BQzbD%2B%2FKfkbOyItLyPfpSIJoT0HV%2B3GhPZU02OB6BmcIuhU7IZ3Ki%2B2ZNf3oZi%2FxcX%2BaDQ3AXLm1NlrYHrKAmBWl808Gv8mFeN0MeOaCoZ5%2FOZJhpJ4W6NboPVDxDNrHY%2BZWIfRvXkGVzX0vnfp%2B%2Fc34HfH%2B4SyIIL7cbRn1vJCEsxqanrr7sqZePi1K2jesmdb4l7KQ5HiOampFamEGT698%3D%22%2C%22iv%22%3A%224ce282318ea4758451af77c290c71f25%22%7D']]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupIndex, setPopupIndex] = useState(0);

  const addValue = (e, linkArrNo, linkTitleId, linkId) => {

    if (linkTitle.trim() === '' || links.trim() === '') {
      alert("Please fill in both the link title and the link.");
      return;
    };

    const link1 = [...linkTitleArr];
    const link2 = [...linkArr];
    link1[linkArrNo].push(linkTitle);
    link2[linkArrNo].push(links);
    setlinkTitleArr(link1);
    setlinkArr(link2)
    document.getElementById(linkTitleId).value = "";
    document.getElementById(linkId).value = "";

    setLinkTitles("")
    setLinks("")

  };

  const deletePopup = (e, index, linkArrNo) => {
    const link1 = [...linkTitleArr];
    const link2 = [...linkArr];
    link1[linkArrNo].splice(index, 1);
    link2[linkArrNo].splice(index, 1);
    setlinkTitleArr(link1);
    setlinkArr(link2)
  };

  const updateValue = (e, linkArrNo) => {

    let link1, link2;
    switch (popupIndex) {
      case 0:
        link1 = [...linkTitleArr];
        link2 = [...linkArr];
        link1[0][updateLinkId] = updatelinkTitle;
        link2[0][updateLinkId] = updatelink;
        setlinkTitleArr(link1);
        setlinkArr(link2)
        setUpdateLink('');
        setUpdateLinkId('');
        closePopup()
        break;
      case 1:
        link1 = [...linkTitleArr];
        link2 = [...linkArr];
        link1[1][updateLinkId] = updatelinkTitle;
        link2[1][updateLinkId] = updatelink;
        setlinkTitleArr(link1);
        setlinkArr(link2)
        setUpdateLink('');
        setUpdateLinkId('');
        closePopup()
        break;
      case 2:
        link1 = [...linkTitleArr];
        link2 = [...linkArr];
        link1[2][updateLinkId] = updatelinkTitle;
        link2[2][updateLinkId] = updatelink;
        setlinkTitleArr(link1);
        setlinkArr(link2)
        setUpdateLink('');
        setUpdateLinkId('');
        closePopup()
        break;
      default:
      // Handle any other cases if needed


    };

  }

  const closePopup = () => { setIsPopupOpen(false) }
  const openPopup = (e, linkId, linkTitle, links, linkArrNo) => {
    setIsPopupOpen(true);
    setPopupIndex(linkArrNo);
    setUpdateLinkTitle(linkTitle);
    setUpdateLink(links);
    setUpdateLinkId(linkId);
  };

  const handleFI = (e) => {

    myfurtherInformation.linkTitle1 = JSON.stringify(linkTitleArr[0]);
    myfurtherInformation.furtherInformation1 = JSON.stringify(linkArr[0]);
    myfurtherInformation.linkTitle2 = JSON.stringify(linkTitleArr[1]);
    myfurtherInformation.furtherInformation2 = JSON.stringify(linkArr[1]);
    myfurtherInformation.linkTitle3 = JSON.stringify(linkTitleArr[2]);
    myfurtherInformation.furtherInformation3 = JSON.stringify(linkArr[2]);

    const getProductById = async (e) => {
      try {
        // console.log("hello inside handlevirus", myChartData)
        await axios.post(furtherInformation, myfurtherInformation);
      } catch (error) {
        console.log(error);
      }
    };

    getProductById();
  };

  return (
    <>
      <Header />

      <div className="further-information" style={{ marginTop: "50px" }}>
        <div className="common-chart">
          <h3>6 Apex One & Apex Central Further Information</h3>

          <div className="fI1" id="fI1">
            <label htmlFor="">Link Title:</label>
            <input
              type="text"
              name="linkTitle1"
              id="linkTitle1"
              style={{ width: "30%", height: "40px" }}
              onChange={(e) => setLinkTitles(e.target.value)}
            />
            <br />
            <textarea
              style={textAreaStyle}
              name="furtherInformation1"
              id="links1"
              placeholder="Paste link here"
              cols="90"
              rows="2"
              onChange={(e) => setLinks(e.target.value)}
            ></textarea>
            <Button
              variant="contained"
              style={{ backgroundColor: success }}
              onClick={(e) => addValue(e, 0, 'linkTitle1', 'links1')}
            >
              Add
            </Button>
          </div>

          <div className="showLinks">
            {linkArr[0].map((artist, index) => (
              <ul key={artist}>
                <li>
                  <a href={artist} target="_blank" rel="noreferrer">
                    {linkTitleArr[0][index]}
                  </a>
                </li>

                <li>
                  <Button
                    variant="text"
                    onClick={(e) => {
                      openPopup(e, index, linkTitleArr[0][index], artist, 0);
                    }}
                    style={{ color: edit }}
                  >
                    edit
                  </Button>
                  <Button
                    variant="text"
                    style={{ color: del }}
                    onClick={(e) => {
                      deletePopup(e, index, 0);
                    }}
                  >
                    delete
                  </Button>
                </li>
              </ul>
            ))}
          </div>
        </div>



        {/* 7 End of Life for Trend Micro Products information */}
        <div className="common-chart">
          <h3>7 End of Life for Trend Micro Products information</h3>

          <div className="fI1" id="fI1">
            <label htmlFor="">Link Title:</label>
            <input
              type="text"
              name="linkTitle2"
              id="linkTitle2"
              style={{ width: "30%", height: "40px" }}
              onChange={(e) => setLinkTitles(e.target.value)}
            />
            <br />
            <textarea
              style={textAreaStyle}
              name="furtherInformation2"
              id="links2"
              placeholder="Paste link here"
              cols="90"
              rows="2"
              onChange={(e) => setLinks(e.target.value)}
            ></textarea>
            <Button
              variant="contained"
              style={{ backgroundColor: success }}
              onClick={(e) => addValue(e, 1, 'linkTitle2', 'links2')}
            >
              Add
            </Button>
          </div>

          <div className="showLinks">
            {linkArr[1].map((artist, index) => (
              <ul key={artist}>
                <li>
                  <a href={artist} target="_blank" rel="noreferrer">
                    {linkTitleArr[1][index]}
                  </a>
                </li>

                <li>
                  <Button
                    variant="text"
                    onClick={(e) => {
                      openPopup(e, index, linkTitleArr[1][index], artist, 1);
                    }}
                    style={{ color: edit }}
                  >
                    edit
                  </Button>
                  <Button
                    variant="text"
                    style={{ color: del }}
                    onClick={(e) => {
                      deletePopup(e, index, 1);
                    }}
                  >
                    delete
                  </Button>
                </li>
              </ul>
            ))}
          </div>
        </div>

        {/* 8 Other documentation*/}
        <div className="common-chart">
          <h3>8 Other documentation</h3>

          <div className="fI1" id="fI1">
            <label htmlFor="">Link Title:</label>
            <input
              type="text"
              name="linkTitle3"
              id="linkTitle3"
              style={{ width: "30%", height: "40px" }}
              onChange={(e) => setLinkTitles(e.target.value)}
            />
            <br />
            <textarea
              style={textAreaStyle}
              name="furtherInformation3"
              id="links3"
              placeholder="Paste link here"
              cols="90"
              rows="2"
              onChange={(e) => setLinks(e.target.value)}
            ></textarea>
            <Button
              variant="contained"
              style={{ backgroundColor: success }}
              onClick={(e) => addValue(e, 2, 'linkTitle3', 'links3')}
            >
              Add
            </Button>
          </div>

          <div className="showLinks">
            {linkArr[2].map((artist, index) => (
              <ul key={artist}>
                <li>
                  <a href={artist} target="_blank" rel="noreferrer">
                    {linkTitleArr[2][index]}
                  </a>
                </li>

                <li>
                  <Button
                    variant="text"
                    onClick={(e) => {
                      openPopup(e, index, linkTitleArr[2][index], artist, 2);
                    }}
                    style={{ color: edit }}
                  >
                    edit
                  </Button>
                  <Button
                    variant="text"
                    style={{ color: del }}
                    onClick={(e) => {
                      deletePopup(e, index, 2);
                    }}
                  >
                    delete
                  </Button>
                </li>
              </ul>
            ))}
          </div>
        </div>



        {isPopupOpen && (
          <div id="popup" className="popup">
            <span className="close-icon">
              <img src="images/close.png" alt="Close Icon" onClick={closePopup} />
            </span>
            <h3>Update Value</h3>
            <div className="popup-content">

              <input
                type="text"
                id="popupLinkTitle"
                value={updatelinkTitle}
                placeholder="Link Title"
                onChange={(e) => setUpdateLinkTitle(e.target.value)}
              />
              <input
                type="text"
                id="popupLink"
                value={updatelink}
                placeholder="Link"
                onChange={(e) => setUpdateLink(e.target.value)}
              />
            </div>
            <Button
              variant="contained"
              style={{ backgroundColor: save }}
              onClick={(e) => updateValue(e)}
            >
              Update
            </Button>
          </div>

        )}


        {/* next button  */}
        {/* <div id="nexPreBtn">
          <Button variant="contained" style={{ backgroundColor: save }}>
            <Link
              to="/update-report"
              onClick={handleFI}
              className="button is-primary mt-2">
              Next
            </Link>
          </Button>
        </div> */}

        {(dataFetched) && <div className="spinner"></div>}

        {dataFetched === false &&
          <div id="nexPreBtn-fi">

            <Button variant="contained" style={{ backgroundColor: save1 }}>
              <Link
                onClick={handleFI}
                to="/download-health-check-apex-one-report"
                className="button is-primary mt-2"
              >
                Generate PDF
              </Link>
            </Button>

          </div>
        }

      </div>
    </>
  );
}
