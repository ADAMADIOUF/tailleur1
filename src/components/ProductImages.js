import React, { useState, useEffect } from 'react'

const ProductImages = ({ images }) => {
  const [main, setMain] = useState('')

  useEffect(() => {
    setMain(images)
  }, [images])

  return (
    <>
      <img src={main} alt='' className='main' />
    </>
  )
}

export default ProductImages
