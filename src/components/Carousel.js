import React from 'react'
import img1 from '../Images/Img1.jpg'
import img2 from '../Images/Img2.jpg'
import img3 from '../Images/Img3.jpg'

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img src={img1} className="d-block w-100" height="720px" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Make Your Vacation Comfortable</h1>
              <button className="carbtn">BOOK NOW</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" height="720px" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Reserve Room for Family Vacation</h1>
              <button className="carbtn">BOOK NOW</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" height="720px" />
            <div className="carousel-caption d-none d-md-block">
              <h1>A Best Place To Enjoy Your Life</h1>
              <button className="carbtn">BOOK NOW</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
