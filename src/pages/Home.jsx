import React from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Collections from '../components/Collections/Collections'
import NewArrivals from '../components/NewArrivals/NewArrivals'
import Intro from '../components/intro/Intro'
import Celebrities from '../celebrities/Celebrities'
import ClientDiaries from '../ClientDiaries/ClientDiaries'
import  Connect  from '../connect/Connect'
import Features from '../components/Features/Features'
import StayConnect from '../components/StayConnect/StayConnect'
import Footer from '../components/Footer/Footer'
import CopyRight from '../components/Footer/CopyRight'
const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Collections/>
        <NewArrivals/>
        <Intro/>
        <Celebrities/>
        <ClientDiaries/>
        <Connect/>
        <Features/>
        <StayConnect/>
        <Footer/>
        <CopyRight/>
    </div>
  )
}

export default Home