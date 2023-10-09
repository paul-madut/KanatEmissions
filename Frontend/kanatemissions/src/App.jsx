import { useState } from 'react'
import Login from './Components/Login/Login';
import Register from './Components/Login/Registration';
import Landing from './Components/Landing Page/Landing';
import UserType from './Components/Login/UserType';
import Feed from './Components/Feed/Feed';
import Ads from './Components/Posts/Ads';
import Leaderboard from './Components/Leaderboard/Leaderboard';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div >
        <Routes>
          <Route path='/' element={<Landing />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/type' element={<UserType />} />

          <Route path='/feed' element={<Feed />} />
          <Route path='/ads' element={<Ads />} />
          <Route path='/leaderboard' element={<Leaderboard />} />





        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
