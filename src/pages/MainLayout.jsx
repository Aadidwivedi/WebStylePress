import { Outlet } from 'react-router-dom'

import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'

import React from 'react'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout