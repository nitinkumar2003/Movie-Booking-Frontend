import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './component/Layout/Layout'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  )
}

export default App
