import React, { useState, useEffect } from 'react'
import './Slider.css'
import sliderData from './dataSlider'

const Slider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const previousSlide = () => {
    const newIndex =
      currentSlideIndex === 0 ? sliderData.length - 1 : currentSlideIndex - 1
    setCurrentSlideIndex(newIndex)
  }

  const nextSlide = () => {
    const newIndex =
      currentSlideIndex === sliderData.length - 1 ? 0 : currentSlideIndex + 1
    setCurrentSlideIndex(newIndex)
  }

  const currentSlide = sliderData[currentSlideIndex]

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(intervalId)
  }, [currentSlideIndex])

  return (
    <div className='slider__container'>
      <div className='slider'>
        <button
          className='slider__button slider__button--previous'
          onClick={previousSlide}
        >
          <i className='fas fa-chevron-left'></i>
        </button>
        <div className='slider__content'>
          <div className='slider__text'>
            <h2>{currentSlide.title}</h2>
            <p>{currentSlide.desc}</p>
            <p>{currentSlide.price}</p>
          </div>
          <img
            src={currentSlide.img}
            className='slider__image'
            alt={currentSlide.title}
          />
        </div>
        <button
          className='slider__button slider__button--next'
          onClick={nextSlide}
        >
          <i className='fas fa-chevron-right'></i>
        </button>
      </div>
    </div>
  )
}

export default Slider
