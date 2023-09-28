import Header from '../Common/Header'
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { green } from "@mui/material/colors";

const save = green[900];

function Home() {
    return (
        <>

            <div className="home-section">

                <Header />

                <div className='mainSection'>

                    <h1>Trend Micro Health Check Endpoint Security</h1>
                    <div className="additional-section">
                        <Button variant="contained" style={{ backgroundColor: save }}>
                            <Link
                                to="/charts"
                                className="button is-primary mt-2"
                            >
                                Next - Charts
                            </Link>
                        </Button>
                    </div>
                </div>


                {/* <div className="footer-section">

            </div> */}


            </div>





        </>
    );
}

export default Home;