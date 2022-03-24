import React from 'react'
import c1_img from '../Images/c1_img.jpg'
export default function Content_1() {
  return (
    <>
      <main className="content_1 content">
        <div className="left" data-aos="fade-up">
          <h1>Florida’s Resort</h1>
          <p>
            An island oasis for downtime and disconnecting, Bungalows Key Largo
            rewrites the rule book on inclusive getaways. Our intimate
            adults-only (ages 21+ only) resort sits within a botanical garden
            edged by 1000 feet of ocean shoreline, just a few miles from the
            warm waters of the Gulf Stream. We take care of all the details,
            because the time you’ll spend together is the greatest luxury of
            all.
          </p>
        </div>
        <div className="right"></div>
      </main>

      <div className="col rescol">
        <div className="card shadow-sm">
          <img src={c1_img} className="bimage" />
          <div className="card-body res_text">
            <h1>Florida’s Resort</h1>
            <p>
              An island oasis for downtime and disconnecting, Bungalows Key
              Largo rewrites the rule book on inclusive getaways. Our intimate
              adults-only (ages 21+ only) resort sits within a botanical garden
              edged by 1000 feet of ocean shoreline, just a few miles from the
              warm waters of the Gulf Stream. We take care of all the details,
              because the time you’ll spend together is the greatest luxury of
              all.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
