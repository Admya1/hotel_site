import React from 'react'

export default function navbar() {
  return (
    <>
      <nav>
        <div className="logo"></div>
        <ul className="options">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
          <li>
            <a href="#">GALLERY</a>
          </li>
        </ul>

        <button className="navbtn" type="submit">
          RESERVATION
        </button>
      </nav>
    </>
  )
}
