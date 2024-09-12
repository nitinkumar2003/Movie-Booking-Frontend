import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './component/Layout/Layout'
// import { NotFound, Home, About, Top100 } from './pages/pages';
import Home from './pages/Home';
import NotFound from './pages/Not-Found';
import Top100 from './pages/Top-100';
import About from './pages/About';
import Details from './pages/DetailsPage';
import MovieStreamingSite from './component/newweb/MovieStreamingSite';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <MovieStreamingSite />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/t100' element={<Top100 />} />
        <Route path='/t100' element={<Top100 />} />
        <Route path='/t100/:id' element={<Details />} />
        <Route path='*' element={<NotFound />} />
      </Routes> */}
    </>
  )
}

export default App
