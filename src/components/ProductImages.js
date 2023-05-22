import React, { useState, useEffect } from 'react'

const ProductImages = ({ images }) => {
  const [mainImageIndex, setMainImageIndex] = useState(0)

  useEffect(() => {
    setMainImageIndex(0)
  }, [])

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index)
  }

  return (
    <div className='product-images'>
      <img src={images[mainImageIndex]} alt='' className='main-img' />
      <div className='thumbnail-images'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=''
            className={`thumbnail-img ${
              index === mainImageIndex ? 'active' : ''
            }`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductImages
