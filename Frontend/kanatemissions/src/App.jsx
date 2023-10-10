import { useState } from 'react'
import Login from './Components/Login/Login';
import Register from './Components/Login/Registration';
import Landing from './Components/Landing Page/Landing';
import UserType from './Components/Login/UserType';
import Feed from './Components/Feed/Feed';
import Ads from './Components/Posts/Ads';
import Leaderboard from './Components/Leaderboard/Leaderboard';
import New from './Components/New Post/New';
import RootLayout from './Layouts/RootLayout';
import { createBrowserRouter, RouterProvider, Navigate, Route, Routes, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(


    <Route path='/' element={<RootLayout />} >
      <Route index element={<Landing />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='type' element={<UserType />} />

      <Route path='app' element={<Feed />} >
        <Route path='ads' element={<Ads />} />
        <Route path='leaderboard' element={<Leaderboard />} />
        <Route path='new' element={<New />} />
      </Route>
    </Route>


  )
)

function App() {

  return (

    <RouterProvider router={router} />

  )
}

export default App
