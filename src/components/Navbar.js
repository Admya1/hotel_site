import React from 'react'
import { Link } from 'react-router-dom'
export default function navbar() {
  return (
    <>
      <nav className="nav">
        <div className="logo"></div>
        <ul className="options">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
          <li>
            <Link to="/gallery">GALLERY</Link>
          </li>
        </ul>

        <button className="navbtn" type="submit">
          RESERVATION
        </button>
        <div className="burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
      {/* <nav className="responive-nav">
        <ul className="options-responsive">
          <li>
            <Link>HOME</Link>
          </li>
          <li>
            <Link>ABOUT US</Link>
          </li>
          <li>
            <Link>CONTACT US</Link>
          </li>
          <li>
            <Link>GALLERY</Link>
          </li>
        </ul>
      </nav> */}
    </>
  )
}
