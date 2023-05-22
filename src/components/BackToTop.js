import React, { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const BackToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <>
      {backToTopButton && (
        <button className='btnTop' onClick={scrollUp}>
          <BsFillArrowUpCircleFill />
        </button>
      )}
    </>
  )
}

export default BackToTop
