
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Routes from '../routes/Routers';
import React from 'react'

const Layout = () => {
  return (
    <>
    <Header/>
    <main>
      <Routes/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout