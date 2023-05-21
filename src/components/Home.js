import React from 'react'
import Slider from '../Slider'
import Categories from './Categories'
import ProductsCategories from './ProductsCategories'
import Banner from './Banner'
import Featured from './Featured'
import About from './About'
import LastBanner from './LastBanner'
const Home = () => {
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