import React from 'react'
import '../home/home.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Servies from '../servies/Servies';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
        <div className="home">
            <div className="homecontainer">
                <div className="hometitle">
                    <h1>Welcome to ሻላ Hotel</h1>
                    <p>Your comfort is our priority</p>
                </div>
                <div className="carosel">
                      
                    <Carousel 
                     autoPlay={true}
                      infiniteLoop={true}
                      interval={8000}        /* time each slide stays (ms) */
                      transitionTime={200}   /* slide transition duration (ms) */
                      stopOnHover={true}     /* pause when mouse is over */
                      swipeable={false}
                      emulateTouch={true}
                      showThumbs={false}
                      showStatus={false}
                      showIndicators={false}
                      showArrows={false}
                        
        
                      centerMode={false}
                       >
                          <h1>Welcome to Shala ሻላ Hotel</h1>
                    <h1>Your comfort is our priority</h1>
                    </Carousel>
                     
                </div>
                <div className="descption">
                    <p>Experience luxury and comfort at Shala Hotel, where we offer world-class amenities and exceptional service to make your stay unforgettable.</p>

                </div>

                <div className="btton">
                 <div><Link to={'/booking'}>   <button className="btnss  btn-lg ">Book Now</button></Link></div>
                 <div>                  <Link  to={'/menu'} ><button className='btnss btn-lg explo '>Exploree our menu</button> </Link></div>
                </div>
                <div className="btton">
                  {/* <button className="btnss  btn-lg ">Book Now</button> */}
                </div>

            </div>
        </div>
          <div className="servieses">
            <Servies/>
          </div>
      
    </div>
  )
}

export default Home
