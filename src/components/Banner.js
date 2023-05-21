import React from 'react'
import banner from "../assets/banner1.png"
const Banner = () => {
  return (
    <div className='banner-one'>
      <h3>
        Nous confectionnons toutes sortes de vêtements pour répondre aux besoins
        et aux goûts de notre clientèle.
      </h3>
      <img src={banner} alt="" />
    </div>
  )
}

export default Banner