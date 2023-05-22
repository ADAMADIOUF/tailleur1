import React, { useEffect } from 'react'
import Slider from '../Slider'
import Categories from './Categories'
import ProductsCategories from './ProductsCategories'
import Banner from './Banner'
import Featured from './Featured'
import About from './About'
import LastBanner from './LastBanner'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div>
     <Slider/>
   
     <Categories/>
     <ProductsCategories/>
     <Banner/>
     <Featured/>
     <LastBanner/>
     <About/>
    </div>
  )
}

export default Home