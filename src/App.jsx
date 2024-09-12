import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { NotFound, Home, About, Top100 } from './pages/pages';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/t100' element={<Top100 />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
