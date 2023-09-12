import Header from '../Common/Header'
function Home() {
    return (
        <>

        <div className="home-section">

           <Header/>

            <div className='mainSection'>
                <div className="main-content">
                    <h1>Trend Micro Health Check Endpoint Security</h1>
                    <p>
                        The Trend Micro Health Report provides customers valuable insights on
                        their security status with Trend Micro products - such as information on
                        recommended improvements and how to implement them, how to derive additional
                        value from their Trend Micro solution, and how to configure their solution for a
                        stronger security posture.
                    </p>

                </div>
                <div className='bg-img'>
                </div>
            </div>

            {/* <div className="service-section">
            <h1>Our featured services</h1>
            <div className="service-box">
              <div className="sbox"></div>
              <div className="sbox"></div>
              <div className="sbox"></div>
            </div>

            </div> */}

            <div className="additional-section"></div>

            <div className="footer-section">

            </div>
            

        </div>





        </>
    );
}

export default Home;