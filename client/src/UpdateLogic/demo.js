
let { id } = useParams();
const { getOneReportData } = Endpoints();
const {
  esummary60, rsummary60, esummary61, rsummary61, esummary62, rsummary62,
  esummary63, rsummary63, esummary64, rsummary64, esummary65, rsummary65,
  esummary66, rsummary66
} = ExcutiveSummery()

let [summarySenApex43Arr, setSummarySenApex43Arr] = useState([]);
let [reqSummarySenApex43Arr, setReqSummarySenApex43Arr] = useState([]);

let tab1 = "images/tab1.png";
let tab2 = "images/tab2.png";
let tab3 = "images/tab3.png";
let tab4 = "images/tab4.png";

let apex43Imgs = [
  "apex43memory",
  "apex43sos",
  "tab60",
  "tab6060",
  "tab61",
  "tab62",
  "tab63",
  "tab64",
  "tab65",
  "tab66",
  "tab67",
];

useEffect(() => {
  getReportDocument();
}, []);

const getReportDocument = async () => {
  await axios({
    url: `${getOneReportData}/${id}`,
    method: "GET",
  })
    .then((res) => {
      setSummarySenApex43Arr(JSON.parse(res.data.allApex43ES))
      setReqSummarySenApex43Arr(JSON.parse(res.data.allApex43ReqSummary))
      for (const i of apex43Imgs) {
        myApex43ImgData[i] = res.data[i];
      }

    })
    .catch((err) => {
      console.log(err);
    });
};