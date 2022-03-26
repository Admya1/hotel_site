import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function navbar() {
  const [model, setModel] = useState(false)
  const open_nav = () => {
    if (model == false) {
      setModel(true)
    } else {
      setModel(false)
    }
  }
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
        <div className="burger" onClick={open_nav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
      <div className={model ? 'vertical_nav' : 'null'}>
        <ul className="vertical_options">
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
        <button className="ver_navbtn" type="submit">
          RESERVATION
        </button>
      </div>
    </>
  )
}
