import React from 'react'
import Intro from '../../components/Intro';
import Cards from '../../components/Cards';
import Banner from '../../components/Banner';
import Hero from '../Hero';
import More from '../More';
import FAQ from '../FAQ';

function Home() {
  return (
    <div>    
    <Hero/>
    <Banner/>
    <Intro/>
    <More/>
    <Cards/>
    <FAQ />
    </div>
  )
}

export default Home
