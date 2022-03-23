import React from 'react'
import c2_img from '../Images/c2_img.jpg'
export default function Content_2() {
  return (
    <>
      <main className="content_2 content">
        <div className="right"></div>
        <div className="left">
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
      <div class="container">
        <div className="col rescol ">
          <div className="card shadow-sm">
            <img src={c2_img} className="bimage" />
            <div className="card-body">
              <p className="card-text">
                Organic textures, soothing tropical hues and all – natural
                materials set the stage for guests to effortlessly find their
                bliss. An opulent expression of Key Largo’s relaxed cabana
                lifestyle, our bungalows pair the finest features and
                furnishings with the resort indulgences you love. Luxurious
                private verandas beckon you to revel in the freedom of outdoor
                living.
              </p>
              <div className="d-flex justify-content-between align-items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
