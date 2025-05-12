import React from 'react'
import NavBar from '../components/NavBar'
import LandinPage from '../components/LandinPage'
import PopularCategories from '../components/PopularCategories'
import Footer from '../components/Footer'

export default function MainPage() {
  return (
    <div>
        <NavBar />
        <LandinPage />
        <PopularCategories />
        <Footer />

    </div>
  )
}
