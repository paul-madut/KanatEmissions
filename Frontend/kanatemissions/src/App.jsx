import { useState } from 'react'
import Login from './Components/Login/Login';
import Register from './Components/Login/Registration';
import Landing from './Components/Landing Page/Landing';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div >
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
