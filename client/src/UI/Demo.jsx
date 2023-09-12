import React from 'react'
import AdminLogic from "../Logic/AdminLogic"
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { green } from "@mui/material/colors";
const save = green[900];

export default function Demo() {
    const { topTenData, myReportData, handleToggle, handleModeToggle, handleDeleteReport } = AdminLogic()
    const openCity = (evt, cityName) => {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    return (
        <>

            <div className='body dark'>
                
                <nav>
                    <div className="logo-name">
                        <div className="logo-image">
                            <img src="images/Eventus-Logo-Black.png" alt="" />
                        </div>
                        <span className="logo_name">Eventus</span>
                    </div>
                    <div className="menu-items">
                        <ul className="nav-links">
                            <li className="tablinks" onClick={(e) => { openCity(e, "Dahsboard") }}><a href="#">
                                <i className="uil uil-estate" />
                                <span className="link-name">Dahsboard</span>
                            </a>
                            </li>
                            <li className="tablinks" onClick={(e) => { openCity(e, "Reports") }}><a href="#">
                                <i className="uil uil-files-landscapes" />
                                <span className="link-name">All Report</span>
                            </a></li>
                            <li><a href="#">
                                <i className="uil uil-chart" />
                                <span className="link-name">Analytics</span>
                            </a></li>
                            <li className="tablinks" onClick={(e) => { openCity(e, "Charts") }}><a href="#">
                                <i className="uil uil-thumbs-up" />
                                <span className="link-name">Charts</span>
                            </a></li>
                            <li><a href="#">
                                <i className="uil uil-comments" />
                                <span className="link-name">Users</span>
                            </a></li>
                            <li><a href="#">
                                <i className="uil uil-share" />
                                <span className="link-name">Share</span>
                            </a></li>
                        </ul>
                        <ul className="logout-mode">
                            <li><a href="#">
                                <i className="uil uil-signout" />
                                <span className="link-name">Logout</span>
                            </a></li>
                            <li className="mode">
                                <a href="#">
                                    <i className="uil uil-moon" onClick={handleModeToggle} />
                                    <span className="link-name" >Dark Mode</span>
                                </a>
                                <div className="mode-toggle" onClick={handleModeToggle}>
                                    <span className="switch" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                <section className="dashboard tabcontent" id='Dahsboard'>
                    <div className="top">
                        <i className="uil uil-bars sidebar-toggle" onClick={handleToggle} />
                        <div className="search-box">
                            <i className="uil uil-search" />
                            <input type="text" placeholder="Search here..." />
                        </div>
                        <img src="images/profile.jpg" alt="" />
                    </div>
                    <div className="dash-content">
                        <div className="overview">
                            <div className="title">
                                <i className="uil uil-tachometer-fast-alt" />
                                <span className="text">Dashboard</span>
                            </div>
                            <div className="boxes">
                                <div className="box box1">
                                    <i className="uil uil-thumbs-up" />
                                    <span className="text">Total Likes</span>
                                    <span className="number">50,120</span>
                                </div>
                                <div className="box box2">
                                    <i className="uil uil-comments" />
                                    <span className="text">Comments</span>
                                    <span className="number">20,120</span>
                                </div>
                                <div className="box box3">
                                    <i className="uil uil-share" />
                                    <span className="text">Total Share</span>
                                    <span className="number">10,120</span>
                                </div>
                            </div>
                        </div>
                        <div className="activity">
                            <div className="title">
                                <i className="uil uil-clock-three" />
                                <span className="text">Recent Reports</span>
                            </div>

                            <div className="activity-data">

                                {myReportData.length ? (
                                    <table className="main-table tableDark">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Company Name</th>
                                                <th>Report Type</th>
                                                <th>Created By</th>
                                                <th>Date</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {topTenData.map((element, index) => (
                                                <tr key={element._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{element.companyName}</td>
                                                    <td>{element.report_type}</td>
                                                    <td>{element.pb}</td>
                                                    <td>{element.report_date}</td>
                                                    <td className='table-icons'>
                                                        <a className="download" title="download" data-toggle="tooltip" ><i className="uil uil-file-export"></i></a>
                                                        <Link to={`/update-report/${element._id}`} target="_blank"><i className="uil uil-edit"></i></Link>
                                                        <a className="delete" title="Delete" data-toggle="tooltip" onClick={() => { handleDeleteReport(element._id) }}><i className="uil uil-trash-alt"></i></a>
                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>) : (

                                    <div className='no-feport-found'>

                                        <div className="alert alert-danger" role="alert">
                                            Oops! No report Found
                                        </div>

                                        <div id="nexPreBtn-admin">
                                            <Button variant="contained" color="primary">
                                                <Link
                                                    to="/report"
                                                    className="button is-primary mt-2"
                                                    target="_blank"
                                                >
                                                    click here to create new Report
                                                </Link>
                                            </Button>
                                        </div>

                                    </div>



                                )}

                            </div>
                        </div>
                    </div>
                </section>
                <section className="tabcontent" id='Reports' >
                    <div className="top">
                        <i className="uil uil-bars sidebar-toggle" onClick={handleToggle} />

                    </div>
                    <div className="dash-content">

                        <div className="activity">
                            <div className="title">
                                <i className="uil uil-clock-three" />
                                <span className="text">All Reports</span>
                            </div>

                            <div className="activity-data">

                                {myReportData.length ? (
                                    <table className="main-table tableDark">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Company Name</th>
                                                <th>Report Type</th>
                                                <th>Created By</th>
                                                <th>Date</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {myReportData.map((element, index) => (
                                                <tr key={element._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{element.companyName}</td>
                                                    <td>{element.report_type}</td>
                                                    <td>{element.pb}</td>
                                                    <td>{element.report_date}</td>
                                                    <td className='table-icons'>
                                                        <a className="download" title="download" data-toggle="tooltip" ><i className="uil uil-file-export"></i></a>
                                                        <Link to={`/update-report/${element._id}`} target="_blank"><i className="uil uil-edit"></i></Link>
                                                        <a className="delete" title="Delete" data-toggle="tooltip" onClick={() => { handleDeleteReport(element._id) }}><i className="uil uil-trash-alt"></i></a>
                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>) : (

                                    <div className='no-feport-found'>

                                        <div className="alert alert-danger" role="alert">
                                            Oops! No report Found
                                        </div>

                                        <div id="nexPreBtn-admin">
                                            <Button variant="contained" color="primary">
                                                <Link
                                                    to="/report"
                                                    className="button is-primary mt-2"
                                                    target="_blank"
                                                >
                                                    click here to create new Report
                                                </Link>
                                            </Button>
                                        </div>

                                    </div>



                                )}

                            </div>
                        </div>
                    </div>
                </section>
                <section className="tabcontent" id='Charts'>
                    <div className="top">
                        <i className="uil uil-bars sidebar-toggle" onClick={handleToggle} />
                    </div>
                    <div className="dash-content">
                    </div>

                </section>

            </div>

        </>
    )
}
