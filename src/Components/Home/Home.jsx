import React from 'react'
import Copyrigth from '../Copyrigth/Copyrigth'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Info from '../Information/Information'
import Roles from '../Roles/Roles'
import Timeline from '../Tiemline/Timeline'

function Home() {
  return (
    <>
     {/*  <Header/> */}
      <Timeline/>
      <Info/>
      <Roles/>
      <Footer/>
      <Copyrigth/>
    </>
  )
}

export default Home