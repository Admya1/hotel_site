import React from 'react'
import AboutUs_Img_2 from '../Images/AboutUs_Img_2.jpg'
export default function AboutUs() {
  return (
    <>
      <div className="aboutbg">
        <h1>ABOUT US</h1>
      </div>
      <div className="container aboutcontent">
        <div className="row">
          <div className="text-center col-lg" data-aos="zoom-in">
            <h3>ABC Group of Hotels</h3>
            <p>
              With over 100 hotels in 70 destinations across six distinct
              brands, ABC’s hotel group integrates India's renowned tradition of
              hospitality and warmth, with globally benchmarked facilities and
              services.
            </p>
            <h3> Authentic Indigenous Luxury Experiences</h3>
            <p>
              With ‘Namaste’ as the enduring symbol of its brand experience and
              ‘Responsible Luxury’ as the guiding premise, ABC Hotels are an
              archetype of the culture and ethos of each destination offering
              authentic, indigenous luxury experiences which are in harmony with
              the environment and society. With a platinum grade commitment to
              our guests and the planet, each ABC Hotel is certified with a
              LEED® (Leadership in Energy and Environmental Design) Platinum
              rating for globally recognised planet positive endeavours. ABC
              Hotels was named as the 2021 USGBC Regional Leadership Award
              recipient by the U.S. Green Building Council. This is a global
              recognition that celebrates organisations around the world who are
              using green building and sustainable practices to improve the
              quality of life for those around them.
            </p>
          </div>
          <div className="col-lg" data-aos="zoom-in">
            <img src={AboutUs_Img_2} className="aboutimg" />
          </div>
        </div>
      </div>
    </>
  )
}
