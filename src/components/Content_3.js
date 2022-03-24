import React from 'react'
import c3_img from '../Images/c3_img.jpg'
export default function Content_3() {
  return (
    <>
      <main className="content_3 content">
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
          <img src={c3_img} className="bimage" />
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
