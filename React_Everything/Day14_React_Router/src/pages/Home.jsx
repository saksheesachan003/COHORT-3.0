import React from 'react'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <div>
      This is Home Page
      <Outlet />
    </div>
  )
}

export default Home
