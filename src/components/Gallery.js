import React, { useState } from 'react'
import I1 from '../Images/I1.jpg'
import I2 from '../Images/I2.jpg'
import I3 from '../Images/I3.jpg'
import I4 from '../Images/I4.jpg'
import I5 from '../Images/I5.jpg'
import I6 from '../Images/I6.jpg'
import I7 from '../Images/I7.jpg'
import I8 from '../Images/I8.jpg'
import I9 from '../Images/I9.jpg'
import I10 from '../Images/I10.jpg'
import I11 from '../Images/I11.jpg'
import I12 from '../Images/I12.jpg'
import I13 from '../Images/I13.jpg'
import I14 from '../Images/I14.jpg'
import I15 from '../Images/I15.jpg'
import I16 from '../Images/I16.jpg'
export default function Gallery() {
  let data = [
    {
      id: 1,
      imgSrc: I1,
    },
    {
      id: 2,
      imgSrc: I2,
    },
    {
      id: 3,
      imgSrc: I3,
    },
    {
      id: 4,
      imgSrc: I4,
    },
    {
      id: 5,
      imgSrc: I5,
    },
    {
      id: 6,
      imgSrc: I6,
    },
    {
      id: 7,
      imgSrc: I7,
    },
    {
      id: 8,
      imgSrc: I8,
    },
    {
      id: 9,
      imgSrc: I9,
    },
    {
      id: 10,
      imgSrc: I10,
    },
    {
      id: 11,
      imgSrc: I11,
    },
    {
      id: 12,
      imgSrc: I12,
    },
    {
      id: 13,
      imgSrc: I13,
    },
    {
      id: 14,
      imgSrc: I14,
    },
    {
      id: 15,
      imgSrc: I15,
    },
    {
      id: 16,
      imgSrc: I16,
    },
  ]
  const [model, setModel] = useState(false)
  const [tempimgSrc, setTempImgSrc] = useState('')
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc)
    setModel(true)
  }
  const closeImg = () => {
    setModel(false)
  }
  return (
    <>
      <div className="gallerybg">
        <h1>GALLERY</h1>
      </div>
      <div className={model ? 'full-img' : 'null'}>
        <img src={tempimgSrc} />
        <span onClick={closeImg}>X</span>
      </div>

      <div className="img-gallery">
        {data.map((item, index) => {
          return (
            <img
              key={index}
              onClick={() => getImg(item.imgSrc)}
              src={item.imgSrc}
            />
          )
        })}
      </div>
    </>
  )
}
