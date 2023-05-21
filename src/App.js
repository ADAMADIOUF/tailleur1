import Navbar from './Navbar'


import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import SingleProducts from "./components/SingleProducts"

import Tenu from './components/Tenu'
import Contact from './components/Contact'
import Men from './components/Men'
import Women from './components/Women'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<SingleProducts />} />
        <Route path='/tenue' element={<Tenu />} />
        <Route path='/women' element={<Women />} />
        <Route path='/men' element={<Men />} />
        <Route path='/contact' element={<Contact />} />
       
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App