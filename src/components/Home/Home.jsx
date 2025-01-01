import React from 'react'
import hero from '../../assets/hero.jpg'
import fullscreenvideo  from '../../assets/mainvideo.mp4'
// import myImage from '../../assets/main.jpg'


function Home() {
  return (
  
    <>
    <div className="video-container">
      <video className="fullscreen-video " autoPlay muted loop>
        <source src={fullscreenvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-overlay">
        <h1>The London School of English</h1>
        <button className='apply-btn'>Apply Now</button>

      </div>
    </div>
        {/* <img className='main-banner' src={myImage} alt="Example" style={{ width: '100%', height: 'auto' }} /> */}
      {/* <div className="school-info">
        <div className="container mx-auto max-w-[90%] wrapper">
          <div className="school-info-item">
            <div className="info-item">
              <div className="text">
                <h2>Welcoming enviornment</h2>
                <hr />
                <p>Professional and multi-national eniviornment</p>
              </div>
            </div>
            <div className="info-item">
              <div className="text">
                <h2>Small Groups</h2>
                <hr />
                <p>Get the help and guidance you need in small groups</p>
              </div>
            </div>
            <div className="info-item">
              <div className="text">
                <h2>Trusted</h2>
                <hr />
                <p>We are rated Excellent by 1500+ alumni.</p>
              </div>
            </div>
            <div className="info-item">
              <div className="text">
                <h2>Experienced</h2>
                <hr />
                <p>We've been teaching English for over 100 years</p>
              </div>
            </div>

          </div>
        </div>
      </div> */}

    </>
  )
}

export default Home
