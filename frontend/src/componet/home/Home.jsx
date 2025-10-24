import React from 'react'
import './Home.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function Home() {
  return (
    <div>
        <div className="home">
            <div className="homecontainer">
                <div className="hometitle">
                    <h1>Welcome to Shala Hotel</h1>
                    <p>Your comfort is our priority</p>
                </div>
                <div className="carosel">
                      
                    <Carousel  autoPlay={true}
                      infiniteLoop={true}
                      interval={5000}        /* time each slide stays (ms) */
                      transitionTime={600}   /* slide transition duration (ms) */
                      stopOnHover={true}     /* pause when mouse is over */
                      swipeable={true}
                      emulateTouch={true}
                      showThumbs={false}
                      showStatus={false}
                      showIndicators={false}
                      showArrows={false} >
                          <h1>Welcome to Shala Hotel</h1>
                    <h1>Your comfort is our priority</h1>
                    </Carousel>
                     
                </div>
                <div className="descption">
                    <p>Experience luxury and comfort at Shala Hotel, where we offer world-class amenities and exceptional service to make your stay unforgettable.</p>

                </div>

                <div className="btton">
                    <button className="btn btn-primary btn-lg">Book Now</button>
                    <button className='btn btn-lg '>Exploree</button>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Home
