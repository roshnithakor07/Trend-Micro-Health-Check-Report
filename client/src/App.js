import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Admin/Home"
import Report from "./UI/Report"
import Charts from "./UI/Charts";
import FurtherInformation from "./UI/FurtherInformation";
import DownloadTrendMicroReportPdf from './UI/DownloadTrendMicroReportPdf'
import UpdateReport from './Update/Report'
import Demo from "./UI/Demo"
import chartDemo from "./UI/ChartDemo"
import CreateCharts from "./UI/CreateCharts";
import Admin from "./Admin/Admin";

// import './css/Home.css'
import './css/Introduction1.css'
import './css/Introduction2.css'
import './css/Introduction3.css'
import './css/Table.css'
import './css/ApexOne41.css';
import './css/ExecutiveSummery.css';
import './css/PolicyOverview.css';
import './css/ApexCentral43.css';
import './css/Chart.css';
import './css/Recommendations.css';
import './css/Button.css';
import './css/Admin.css'
import ChartDemo from "./UI/ChartDemo";


function App() {
  return (
    <>
      <Router>
        <Routes>         
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<Report />} />
          <Route path='/admin' element={<Admin />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/create-charts" element={<CreateCharts />} />
          <Route path="/update-report/:id" element={<UpdateReport />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/demo1" element={<ChartDemo />} />
          <Route path="/further-information" element={<FurtherInformation />} />
          <Route path="/download-health-check-apex-one-report" element={<DownloadTrendMicroReportPdf />} />

        </Routes>
      </Router>

    </>
  );
}

export default App;
