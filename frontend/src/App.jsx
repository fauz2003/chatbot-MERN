import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Toaster } from 'react-hot-toast' // ✅ Import this

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster position='top-right' reverseOrder={false} /> {/* ✅ Add this */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
