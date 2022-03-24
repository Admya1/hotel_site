import React from 'react'
import c2_img from '../Images/c2_img.jpg'
export default function Content_2() {
  return (
    <>
      <main className="content_2 content">
        <div className="right"></div>
        <div className="left" data-aos="fade-up">
          <h1>Magical Bungalows with views that stretch for miles</h1>
          <p>
            Organic textures, soothing tropical hues and all – natural materials
            set the stage for guests to effortlessly find their bliss. An
            opulent expression of Key Largo’s relaxed cabana lifestyle, our
            bungalows pair the finest features and furnishings with the resort
            indulgences you love. Luxurious private verandas beckon you to revel
            in the freedom of outdoor living.
          </p>
        </div>
      </main>

      <div className="col rescol ">
        <div className="card shadow-sm">
          <img src={c2_img} className="bimage" />
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
